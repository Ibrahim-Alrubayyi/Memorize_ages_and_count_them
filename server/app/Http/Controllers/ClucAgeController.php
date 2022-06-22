<?php

namespace App\Http\Controllers;

use App\Helpers\DateConverter;
use App\Http\Requests\AgeRequest;
use App\Models\Age;

class ClucAgeController extends Controller
{
    public function clucAndSave(AgeRequest $request)
    {

        if ($request->validated()) {
            Age::create([
                'age' => $request->age,
            ]);
            $date = new DateConverter;

            if ('hj' === $request->type_date) {
                $dateGr = $date->HijriToGregorian($request->age);
                $ageGr  = $date->age($dateGr);
                $ageHj  = $date->age($request->age, 'hj');
                return response()->json(['alert' => true, 'dateGr' => $dateGr, 'ageGr' => $ageGr, 'ageHj' => $ageHj], 200);

            } else if ('gr' === $request->type_date) {

                $dateHj = $date->GregorianToHijri($request->age);
                $ageGr  = $date->age($request->age);
                $ageHj  = $date->age($dateHj, 'hj');
                return response()->json(['alert' => true, 'dateHj' => $dateHj, 'ageGr' => $ageGr, 'ageHj' => $ageHj], 200);

            }

        }

    }
}