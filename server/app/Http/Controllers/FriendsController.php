<?php

namespace App\Http\Controllers;

use App\Helpers\DateConverter;
use App\Http\Requests\FriendAddRequest;
use App\Http\Requests\FriendDeleteRequest;
use App\Http\Requests\FriendEditRequest;
use App\Models\Friends;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class FriendsController extends Controller
{

    public function getAllFriends()
    {
        try {
            $AllInfo = User::where('id', '=', Auth::id())->select('id', 'name')->with('frindes')->get();

            $funcsCalcDate = new DateConverter;

            // Calc age friend

            foreach ($AllInfo[0]->frindes as $date) {
                if ('hj' == $date->type_date) {
                    $dateHjFriend = $funcsCalcDate->age($date->age, 'hj');
                    $dateGrFriend = $funcsCalcDate->age($funcsCalcDate::HijriToGregorian($date->age), 'gr');

                } else {
                    $dateGrFriend = $funcsCalcDate->age($date->age, 'gr');
                    $dateHjFriend = $funcsCalcDate->age($funcsCalcDate::GregorianToHijri($date->age), 'hj');
                }
                $date->age = ['hj' => $dateHjFriend, 'gr' => $dateGrFriend];

            }

            return response()->json(['alert' => true, 'UserAndFriends' => $AllInfo]);
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);

        }

    }
    public function addFriend(FriendAddRequest $request)
    {
        try {
            if ($request->validated()) {
                $insert = Friends::create([
                    'name'      => $request->name,
                    'age'       => $request->age,
                    'type_date' => $request->type_date,
                    'user_id'   => Auth::id(),

                ]);
                return response()->json(['alert' => true], 200);

            }
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);
        }
    }
    public function editFriend(FriendEditRequest $request)
    {
        try {
            if ($request->validated()) {
                $update = Friends::where('id', '=', $request->id)->update([
                    'name'      => $request->name,
                    'age'       => $request->age,
                    'type_date' => $request->type_date,
                ]);
                return response()->json(['alert' => true], 200);

            }
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);
        }
    }public function deleteFriend(FriendDeleteRequest $request)
    {
        try {
            if ($request->validated()) {
                $delete = Friends::where('id', '=', $request->id)->delete();
                return response()->json(['alert' => true], 200);

            }
        } catch (\Throwable$th) {
            return response()->json(['alert' => false, 'error' => $th->getMessage()], 500);
        }

    }
}