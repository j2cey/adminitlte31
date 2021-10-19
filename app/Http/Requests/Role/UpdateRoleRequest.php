<?php

namespace App\Http\Requests\Role;


class UpdateRoleRequest extends RoleRequest
{
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
        return array_merge( Parent::rules(), [
            'name' => 'required|unique:roles,name,' . $this->input('name'),
        ]);
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        $this->merge([
            'permissions' => $this->setRelevantIdsList($this->input('permissions'), false),
        ]);
    }
}
