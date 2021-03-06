<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class UserResource
 * @package App\Http\Resources
 *
 * @property int $id
 *
 * @property string $uuid
 * @property string $name
 * @property string $username
 * @property string $email
 */
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array|Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'uuid' => $this->uuid,
            'name' => $this->name,
            'username' => $this->username,
            'email' => $this->email,

            'status' => StatusResource::make($this->status),
            'roles' => RoleResource::collection($this->roles),

            'edit_url' => route('users.edit', $this->uuid),
            'destroy_url' => route('users.destroy', $this->uuid),
        ];
    }
}
