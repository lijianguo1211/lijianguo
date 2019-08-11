<?php
/**
 * Notes:
 * File name:BlogController
 * Create by: Jay.Li
 * Created on: 2019\8\9 0009 16:47
 */


namespace App\Http\Controllers\Home;


use App\Http\Controllers\BaseController;
use App\Models\DataModels\AskContentModel;
use App\Models\DataModels\BlogModel;
use App\Models\DataModels\CommentModel;
use App\Models\DataModels\HeaderModel;
use App\Models\DataModels\ImageModel;
use App\Models\DataModels\RightTopsModel;
use Illuminate\Http\Request;

class BlogController extends BaseController
{
    protected $askIndex;

    public function __construct(BlogModel $blog, Request $request, AskContentModel $askIndex)
    {
        parent::__construct($blog, $request);
        $this->askIndex = $askIndex->getFirstData();
    }

    /**
     * 详情页面
     */
    public function show($id)
    {
        if (!is_int($id)) {
            $id = (int)$id;
        }
        $data = $this->blog->getDetails($id);
        $comments = (new CommentModel())->getComments($id);
        return view('home.blog.index')->with([
            'details'=>$data,
            'release'=>$this->getRelease,
            'reghtTops'=>$this->reghtTops,
            'header'=>$this->header,
            'right'=>$this->right,
            'value'=>$this->getValue,
            'comments' => $comments,
            'ask' => $this->askIndex
        ]);
    }

    /**
     * @param Request $request
     * @param $id
     * @return false|string
     */
    public function ajaxComment(int $id)
    {
        $info = $this->request->all();
        $data = [
            'content'   => $info['content'],
            'layer_user_id' => $info['l_user_id']
        ];
        $result = (new CommentModel())->addCommments($data, $id);

        if ($result['status'] != MYSQL_INSERT_IS_SUCCESS) {
            return response()->json($result)->setEncodingOptions(JSON_UNESCAPED_UNICODE);
        }

        return response()->json($result)->setEncodingOptions(JSON_UNESCAPED_UNICODE);
    }

    /**
     * @param int $id
     * @return false|string
     */
    public function ajaxGetComment(int $id)
    {
        $luser = $this->request->get('luser_id');
        $cuser = $this->request->get('cuser_id');

        $result = (new CommentModel())->getCommetsMany($id,$luser,$cuser);

        if (empty($result)) {
            $data = ['status'=>MYSQL_SELECT_IS_ERROR,'info'=>'查询数据错误'];
            return response()->json($data)->setEncodingOptions(JSON_UNESCAPED_UNICODE);
        }
        $data = ['status'=>MYSQL_SELECT_IS_SUCCESS,'info'=>'success','data'=>$result];
        return response()->json($data)->setEncodingOptions(JSON_UNESCAPED_UNICODE);
    }
}
