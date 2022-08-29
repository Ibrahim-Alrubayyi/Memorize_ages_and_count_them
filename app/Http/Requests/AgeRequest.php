<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AgeRequest extends FormRequest
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
            'age'       => 'required|date',
            'type_date' => 'required|alpha',
        ];
    }
    public function messages()
    {
        return [
            'age.required'       => 'العمر مطلوب',
            'age.date'           => 'رجاء ادخال تاريخ  صحيح',
            'type_date.required' => 'نوع تاريخ مطلوب',
            'type_date.alpha'    => 'gr OR hj',
        ];

    }
}