<?php


namespace App\Http\Controllers\Tools;


use App\Http\Controllers\BaseController;
use App\Models\DataModels\HeaderModel;
use Illuminate\Http\Request;

class UrlController extends BaseController
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
        return view('tools.url')->with([
            'header'=>$header,
        ]);
    }
}
