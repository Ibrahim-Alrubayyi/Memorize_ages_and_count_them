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
            'email' > 'required|max:200|email',
            'password' => 'required',
        ];
    }
    public function messages()
    {
        return [
            'email.max'         => 'الايميل 200 حرف على الاكثر',
            'email.required'    => 'الايميل مطلوب',
            'email.email'       => 'كتابة ايميل بطريقه صحيحه',
            'password.required' => 'الرمز السري مطلوب',

        ];

    }
}