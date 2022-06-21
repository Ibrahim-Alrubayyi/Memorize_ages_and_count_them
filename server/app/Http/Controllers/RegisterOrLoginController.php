<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterRequest;
use App\Models\User;
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
        }

    }
}