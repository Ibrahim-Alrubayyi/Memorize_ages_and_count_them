<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Cookie;

class AuthController extends Controller
{
    public function createUser(RegisterRequest $request)
    {
        try {
            if ($request->validated()) {
                $insert = User::create([
                    'name'     => $request->name,
                    'email'    => $request->email,
                    'password' => Hash::make($request->password),

                ]);

                $token = $insert->createToken('API TOKEN')->plainTextToken;

                $cookie = cookie('jwt', $token, 60 * 24);

                return response()->json([
                    'alert' => true,

                ], 200)->withCookie($cookie);

            }
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);
        }

    }
    public function loginUser(LoginRequest $request)
    {
        try {
            if ($request->validated()) {
                $info = $request->only('email', 'password');
                if (Auth::attempt($info)) {
                    $user = User::where('email', '=', $request->email)->first();
                    return response()->json([
                        'alert' => true,
                        'token' => $user->createToken('API TOKEN')->plainTextToken,
                    ], 200);
                }
            }
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);

        }

    }
}