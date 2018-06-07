<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->nickname,
            'mobile' => $this->mobile,
            'email' => $this->email,
            'avatar' => $this->avatar,
//            'status' => (string)$this->status(),
//            'unit' => $this->unit,
        ];
    }
}
