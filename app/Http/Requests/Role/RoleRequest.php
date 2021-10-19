<?php

namespace App\Http\Requests\Role;

use App\Traits\Request\RequestTraits;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class RoleRequest
 * @package App\Http\Requests\Role
 *
 * @property string $name
 * @property string $description
 */
class RoleRequest extends FormRequest
{
    use RequestTraits;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'permissions' => 'required',
        ];
    }
}
