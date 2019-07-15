<?php


namespace App\Http\Controllers\Tools;


use App\Exceptions\BaiduTranslate;
use App\Http\Controllers\BaseController;
use App\Models\DataModels\AskContentModel;
use App\Models\DataModels\BlogModel;
use App\Models\DataModels\HeaderModel;
use App\Models\DataModels\ImageModel;
use App\Models\DataModels\RightTopsModel;
use Illuminate\Http\Request;

class FanyiController extends BaseController
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

    /**
     * Notes:
     * Name: index
     * User: LiYi
     * Date: 2019/6/25
     * Time: 23:47
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $header = (new HeaderModel())->getIndexHeader();
        return view('tools.index')->with([
            'header'=>$header,
        ]);
    }

    /**
     * Notes: 翻译
     * Name: postFanyi
     * User: LiYi
     * Date: 2019/7/9
     * Time: 21:55
     * @return \Illuminate\Http\JsonResponse
     */
    public function postFanyi()
    {
        $result =(new BaiduTranslate)
            ->translate(
                $this->params['content'],
                $this->params['to'],
                $this->params['form']
            );

        return response()->json($result)
            ->setEncodingOptions(JSON_UNESCAPED_UNICODE);
    }
}
