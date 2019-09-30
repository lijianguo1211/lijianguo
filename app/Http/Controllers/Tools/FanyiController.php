<?php


namespace App\Http\Controllers\Tools;


use App\Exceptions\BaiduTranslate;
use App\Http\Controllers\BaseController;
use App\Models\DataModels\HeaderModel;
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
     * Date: 2019/9/29
     * Time: 22:36
     * @param HeaderModel $headerModel
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(HeaderModel $headerModel)
    {
        $header = $headerModel->getIndexHeader();
        return view('tools.index')->with([
            'header'=>$header,
        ]);
    }

    /**
     * Notes:
     * Name: postFanyi
     * User: LiYi
     * Date: 2019/9/29
     * Time: 22:37
     * @param BaiduTranslate $baiduTranslate
     * @return \Illuminate\Http\JsonResponse
     */
    public function postFanyi(BaiduTranslate $baiduTranslate)
    {
        $result = $baiduTranslate
            ->translate(
                $this->params['content'],
                $this->params['to'],
                $this->params['form']
            );

        return response()->json($result)
            ->setEncodingOptions(JSON_UNESCAPED_UNICODE);
    }
}
