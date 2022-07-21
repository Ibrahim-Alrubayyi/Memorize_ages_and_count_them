<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
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
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email'    => 'required|max:200|email|exists:users',
            'password' => 'required|required_with:password_confirmation',
        ];
    }
    public function messages()
    {
        return [
            'email.max'         => 'الايميل 200 حرف على الاكثر',
            'email.required'    => 'الايميل مطلوب',
            'email.email'       => 'كتابة ايميل بطريقه صحيحه',
            'email.exists'      => 'ايميل غير موجود',
            'password.required' => 'الرمز السري مطلوب',
        ];

    }
}