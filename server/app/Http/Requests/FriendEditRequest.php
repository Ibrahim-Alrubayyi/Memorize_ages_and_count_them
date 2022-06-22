<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FriendEditRequest extends FormRequest
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
            'name'      => 'required|min:3|max:60|alpha_num',
            'age'       => 'required|date',
            'type_date' => 'required|alpha',
            'id'        => 'required|numeric',
            'user_id'   => 'required|numeric',
        ];
    }
    public function messages()
    {
        return [
            'name.required'      => 'الاسم مطلوب',
            'name.min'           => 'الاسم 3 احرف على الاقل',
            'name.max'           => 'الاسم 60 حرف على الاكثر',
            'name.alpha_num'     => 'احرف وارقام فقط',
            'age.date'           => 'رجاء ادخال تاريخ  صحيح',
            'age.required'       => 'العمر مطلوب',
            'type_date.required' => 'نوع تاريخ مطلوب',
            'type_date.alpha'    => 'gr OR hj',

        ];

    }
}