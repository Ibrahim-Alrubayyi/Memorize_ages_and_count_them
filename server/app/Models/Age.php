<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Age extends Model
{
    use HasFactory;
    public $table = 'ages';

    protected $fillable = [
        'age',
    ];
    protected $hidden = [];
    protected $dates  = ['created_at', 'updated_at'];

}