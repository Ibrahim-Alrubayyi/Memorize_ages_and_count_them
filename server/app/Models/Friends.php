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
    ];

    protected $hidden = [];

    protected $dates = [
        'created_at', 'updated_at',
    ];
    public function frindes()
    {
        return $this->hasMany(User::class, 'user_id');
    }
}