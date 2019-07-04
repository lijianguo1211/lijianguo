<?php


namespace App\Http\Controllers\Tools;


use App\Http\Controllers\BaseController;
use App\Jobs\ProcessPodcast;
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

    public function sendToEmailJob()
    {
        for ($i = 0; $i < 10; $i++) {
            ProcessPodcast::dispatch('jay.li@feisu.com');
        }
    }

    public function image()
    {
        $header = (new HeaderModel())->getIndexHeader();
        return view('tools.img')->with([
            'header'=>$header,
        ]);
    }

    public function apiUploadFileImage(Request $request)
    {
        \Log::info(json_encode($request->all()));
        \Log::info(json_encode($request->file()));
    }
}
