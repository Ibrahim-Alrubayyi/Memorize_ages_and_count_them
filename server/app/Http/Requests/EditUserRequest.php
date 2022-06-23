<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditUserRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name'     => 'required|min:3|max:60|alpha_num',
            'email'    => 'required|max:200|unique:users|email',
            'password' => '',
        ];
    }
    public function messages()
    {
        return [
            'name.required'     => 'الاسم مطلوب',
            'name.min'          => 'الاسم 3 احرف على الاقل',
            'name.max'          => 'الاسم 60 حرف على الاكثر',
            'name.alpha_num'    => 'احرف وارقام فقط',
            'email.max'         => 'الايميل 200 حرف على الاكثر',
            'email.required'    => 'الايميل مطلوب',
            'email.email'       => 'كتابة ايميل بطريقه صحيحه',
            'email.unique'      => 'ايميل مستعمل',
            'password.required' => 'الرمز السري مطلوب',

        ];

    }
}