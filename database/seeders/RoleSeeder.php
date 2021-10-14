<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $simplerole = Role::create(['name' => 'Simple', 'description' => "System Guess Role"]);
        $adminrole = Role::create(['name' => 'Admin', 'description' => "Administrateur du Système"]);
    }
}
