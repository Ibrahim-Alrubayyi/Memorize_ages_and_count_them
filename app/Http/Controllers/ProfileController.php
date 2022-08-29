<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    public function infoUser(Request $request)
    {
        try {
            $info = User::where('id', '=', Auth::id())->first();
            return response()->json(['alert' => true, 'user' => $info], 200);
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);
        };
    }
    public function editUser(EditUserRequest $request)
    {
        try {
            if ($request->validated()) {
                $user = User::where('id', '=', Auth::id())->update([
                    'name'  => $request->name,
                    'email' => $request->email,
                ]);

                if ($request->password) {
                    User::where('id', '=', Auth::id())->update([
                        'password' => Hash::make($request->password),
                    ]);
                }
            }
            return response()->json(['alert' => true], 200);
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);
        };
    }
}