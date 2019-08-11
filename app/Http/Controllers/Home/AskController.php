<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/5/5
 * Time: 16:00
 */

namespace App\Http\Controllers\Home;

use App\Models\DataModels\AskContentModel;
use App\Models\DataModels\AskModel;
use App\Models\DataModels\BlogModel;
use App\Models\DataModels\HeaderModel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\BaseController;


class AskController extends BaseController
{
    /**
     * @var AskModel
     */
    private $ask;

    /**
     * @var array
     */
    private $askIndex;

    /**
     * AskController constructor.
     * @param BlogModel $blog
     * @param Request $request
     * @param AskContentModel $askContent
     * @param AskModel $ask
     */
    public function __construct(BlogModel $blog, Request $request, AskContentModel $askContent,AskModel $ask)
    {
        parent::__construct($blog, $request);
        $this->middleware('auth')->except('index');
        $this->ask = $ask;
        $this->askIndex = $askContent->getFirstData();
    }

    /**
     * Notes: 提问列表
     * Name: index
     * User: LiYi
     * Date: 2019/8/11
     * Time: 14:33
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $resultAsk = $this->ask->getIndexs();

        return view('home.ask.index')->with([
            'header'=>$this->header,
            'ask'=>$this->askIndex,
            'askResult' => $resultAsk
        ]);
    }

    /**
     * Notes: 添加提问表单
     * Name: createIndex
     * User: LiYi
     * Date: 2019/8/11
     * Time: 15:20
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function createIndex()
    {
        return view('home.ask.create_index')
            ->with([
                'header'=>$this->header,
                'ask'=>$this->askIndex
            ]);
    }

    /**
     * Notes: 添加数据
     * Name: insert
     * User: LiYi
     * Date: 2019/8/11
     * Time: 18:30
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function insert(Request $request)
    {
        $info = $request->all();
        $validator = Validator::make($info, [
            'title' => 'required|max:50',
            'label' => 'required|max:50',
            'test-editormd' => 'required',
        ],[
           'title.required' => '主题必须填写',
           'title.max' => '50个字符以内',
           'label.required' => '分类必须填写',
           'label.max' => '50个字符以内',
           'test-editormd.required' => '内容必须填写',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
        $data = [
            'title' => $info['title'],
            'label' => $info['label'],
            'content' => $info['test-editormd'],
            'user_id' => Auth::user()->id
        ];

        $result = $this->ask->add($data);

        if (isset($result['status'])) {
            return back()->with($result);
        }
        return redirect()->route('home.ask.index');
    }

    /**
     * Notes: 查看详情页
     * Name: details
     * User: LiYi
     * Date: 2019/8/11
     * Time: 18:31
     * @param int $id
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function details(int $id)
    {
        $result = $this->ask->getindex($id);

        return view('home.ask.details')
            ->with([
                'header'  => $this->header,
                'ask'     => $this->askIndex,
                'details' => $result
                ]
            );
    }
}
