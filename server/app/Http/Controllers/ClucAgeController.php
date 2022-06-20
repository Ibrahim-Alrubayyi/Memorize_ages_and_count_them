<?php

namespace App\Http\Controllers;

use App\Http\Requests\AgeRequest;
use App\Models\Age;

class ClucAgeController extends Controller
{
    public function clucAndSave(AgeRequest $request)
    {
        if ($request->validated(['age' => $request->age])) {
            Age::create([
                'age' => $request->age,
            ]);

            return response()->json(['alert' => true], 200);

        } else {
            return response()->json(['alert' => false], 200);
        }
    }
}