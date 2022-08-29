<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterOrLoginController extends Controller
{
    public function register(RegisterRequest $request)
    {

        if ($request->validated()) {
            $insert = User::create([
                'name'     => $request->name,
                'email'    => $request->email,
                'password' => Hash::make($request->password),

            ]);
            if ($insert) {
                return response()->json(['alert' => true, 'id' => $insert->id, 'name' => $request->name, 'email' => $request->email], 200);
            }
        };

    }
    public function login(LoginRequest $request)
    {
        if ($request->validated()) {
            $info = $request->only('email', 'password');
            if (Auth::attempt($info)) {
                $user = User::where('email', '=', $request->email)->first();

                return response()->json(['alert' => true, 'id' => $user->id, 'name' => $user->name, 'email' => $user->email], 200);

            } else {
                return response()->json(['alert' => false, 'erorrs' => 'ايميل أو الرمز السري خطأ'], 200);

            }
        }
    }
}