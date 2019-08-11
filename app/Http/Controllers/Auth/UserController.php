<?php


namespace App\Http\Controllers\Auth;


use App\Models\DataModels\HeaderModel;

class UserController
{
    public function index()
    {
        $header = (new HeaderModel())->getIndexHeader();
        return view('auth.user_index')->with(['header'=>$header]);
    }
}
