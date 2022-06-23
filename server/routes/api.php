<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\ClucAgeController;
use App\Http\Controllers\FriendsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

Route::post('/age', [ClucAgeController::class, 'clucAndSave']);

// Route::post('/register', [RegisterOrLoginController::class, 'register']);
// Route::post('/login', [RegisterOrLoginController::class, 'login']);

// if login you can use this rotes
Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/profile', [ProfileController::class, 'infoUser']);
    Route::post('/profile/edit', [ProfileController::class, 'editUser']);

    Route::get('/friends', [FriendsController::class, 'getAllFriends']);
    Route::post('/friend/add', [FriendsController::class, 'addFriend']);
    Route::post('/friend/edit', [FriendsController::class, 'editFriend']);
    Route::post('/friend/delete', [FriendsController::class, 'deleteFriend']);
});

Route::post('/auth/register', [AuthController::class, 'createUser']);
Route::post('/auth/login', [AuthController::class, 'loginUser']);