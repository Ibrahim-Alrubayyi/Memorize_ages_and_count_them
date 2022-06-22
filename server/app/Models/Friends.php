<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Friends extends Model
{
    use HasFactory;
    public $table = 'friends';

    protected $fillable = [
        'user_id',
        'name',
        'age',
        'type_date',
    ];

    protected $hidden = [];

    protected $dates = [
        'created_at', 'updated_at',
    ];

}