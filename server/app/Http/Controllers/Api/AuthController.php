<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie as FacadesCookie;
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

                $cookie = cookie('jwt', $token, 60 * 24, null, "127.0.0.1", true, true, false, 'none');

                return response()->json([
                    'alert' => true,

                ], 200)->withCookie($cookie);

            }
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);
        }

    }
    public function logoutUser(Request $request)
    {
        try {
            $cookie = FacadesCookie::forget('jwt');
            return response()->json([
                'alert' => true,
            ], 200);
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
                    $user  = User::where('email', '=', $request->email)->first();
                    $token = $user->createToken('API TOKEN')->plainTextToken;

                    $cookie = cookie('jwt', $token, 60 * 24, null, "127.0.0.1", true, true, false, 'none');

                    return response()->json([
                        'alert' => true,

                    ], 200)->withCookie($cookie);
                } else {

                    return response()->json([
                        'alert'  => false,
                        'errors' => ['password' => 'الرمز السري خطأ'],
                    ], 500);
                }
            }
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);

        }

    }
}