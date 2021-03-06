<?php

namespace App\Traits\File;

use SplFileInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

trait HasFile
{
    public function verifyAndStoreFile( Request $request, $fieldname_rqst, $fieldname_db, $directory = 'unknown', $oldfile = ' ' ) {

        if( $request->hasFile( $fieldname_rqst ) ) {

            if (!$request->file($fieldname_rqst)->isValid()) {

                flash('Fichier Invalide!')->error()->important();

                return null;//redirect()->back()->withInput();
            }

            $file_dir = config('app.' . $directory);

            // Check if the old file exists inside folder
            if (file_exists( $file_dir . '/' . $oldfile)) {
                unlink($file_dir . '/' . $oldfile);
            }

            // Set file name
            $file = $request->file($fieldname_rqst);//$request->file;
            $file_name = md5($directory . '_' . time()) . '.' . $file->getClientOriginalExtension();

            // Move file to folder
            $file->move($file_dir, $file_name);

            $this->update([
                $fieldname_db => $file_name,
                $fieldname_db . '_size' => $file->getSize(),
                $fieldname_db . '_type' => $file->getClientOriginalExtension(),
            ]);

            return $file_name;
        }

        return -1;
    }

    public function uploadAndSplitFile( Request $request, $fieldname_rqst, $fieldname_db, $directory, $directory_tmp, $model, $oldfile = ' ' ) {
        $tmp_filename = $this->verifyAndStoreFile($request, $fieldname_rqst, $fieldname_db, $directory_tmp);

        $subfiles = $this->splitFileIntoSubfiles($directory_tmp,$tmp_filename,$directory,100, true);
    }

    public function splitFileIntoSubfiles($from_dir, $from_file, $to_dir, $subfile_max_line,$entete_premiere_ligne = false) {
        $raw_dir = config('app.RAW_FOLDER');
        $path = $raw_dir . '/' . config('app.' . $from_dir) . '/' . $from_file;
        //dd($path);
        //$file = File::get($path);
        $file_info = new SplFileInfo($path);
        $subfiles = [];

        $file_arr = file($file_info->getPathname());//file($path);

        if ($entete_premiere_ligne) {
            //remove first line
            $data = array_slice($file_arr, 1);
        } else {
            $data = $file_arr;
        }

        $parts = (array_chunk($data, $subfile_max_line));
        $parts_count = count($parts);

        if ($parts_count > 0) {
            $i = 1;
            $nb_rows_all = 0;
            $dest_dir = config('app.' . $to_dir);
            foreach ($parts as $line) {
                $filename = str_replace(['-', ' ', ':'], "", gmdate('Y-m-d h:i:s')) . '_' . $i . '.xlsx';
                $filename_full = $raw_dir.'/'.$dest_dir . '/' . $filename;

                file_put_contents($filename_full, $line);
                $i++;

                $nb_rows_curr = intval(exec("wc -l '" . $filename_full . "'"));
                //$subfiles[] = ['name' => $filename,'nb_rows' => $nb_rows_curr];
                array_push($subfiles, ['name' => $filename,'nb_rows' => $nb_rows_curr]);
            }
        }

        return $subfiles;
    }
}
