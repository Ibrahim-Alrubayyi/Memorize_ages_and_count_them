<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{

    public function authorize()
    {
        return false;
    }

    public function rules()
    {
        return [
            'name'     => 'required|min:3|max:60',
            'email' > 'required|max:100|unique:users',
            'password' => 'required',
        ];
    }
}