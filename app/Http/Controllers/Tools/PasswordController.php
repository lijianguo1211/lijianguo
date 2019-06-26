<?php


namespace App\Http\Controllers\Tools;


use App\Models\DataModels\HeaderModel;
use Illuminate\Http\Request;

class PasswordController
{
    /**
     * @var Request
     */
    private $params;

    /**
     * FanyiController constructor.
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->params = $request->all();
    }

    public function index()
    {
        $header = (new HeaderModel())->getIndexHeader();
        return view('tools.password')->with([
            'header'=>$header,
        ]);
    }
}
