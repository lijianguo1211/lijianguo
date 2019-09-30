<?php


namespace App\Http\Controllers\Tools;


use App\Http\Controllers\BaseController;
use App\Models\DataModels\HeaderModel;
use App\Models\DataModels\Tool;


class IndexController extends BaseController
{
    public function index(HeaderModel $headerModel, Tool $tool)
    {

        $header = $headerModel->getIndexHeader();
        $tools = $tool->getTools();
        return view('tools.home')->with([
            'header' => $header,
            'tools'  => $tools,
        ]);
    }
}
