<?php

use App\Http\Controllers\ClucAgeController;
use App\Http\Controllers\RegisterOrLoginController;
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

Route::post('/register', [RegisterOrLoginController::class, 'register']);
// if login you can use this rotes
Route::group(['middleware' => 'checkUser'], function () {

});