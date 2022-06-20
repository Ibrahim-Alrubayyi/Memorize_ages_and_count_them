<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    public $table       = 'users';
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [];

    protected $dates = [
        'created_at', 'updated_at',
    ];
}