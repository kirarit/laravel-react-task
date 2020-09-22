<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\House;

class ApiController extends Controller
{
    public function create(Request $request)
    {
    	$houses = new House();

    	$houses->user_id = $request->input('user_id');
    	$houses->name = $request->input('name');
    	$houses->location =$request->input('location');
    	$houses->contact_phone = $request->input('contact_phone');
    	$houses->details = $request->input('details');

    	$houses->save();
    	return response()->json($houses);
    }
}
