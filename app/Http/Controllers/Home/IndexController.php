<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/4/16
 * Time: 17:06
 */

namespace App\Http\Controllers\Home;

use App\Models\DataModels\AskContentModel;
use App\Models\DataModels\BlogModel;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController;

class IndexController extends BaseController
{
    /**
     * @var array
     */
    private $askIndex;

    /**
     * IndexController constructor.
     * @param BlogModel $blog
     * @param Request $request
     * @param AskContentModel $askIndex
     */
    public function __construct(BlogModel $blog, Request $request, AskContentModel $askIndex)
    {
        parent::__construct($blog, $request);
        $this->askIndex = $askIndex->getFirstData();
    }

    /**
     * Notes: 首页
     * Function Name: index
     * User: Jay.Li
     * Date: 2019\8\9 0009
     * Time: 16:50
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        $result = $this->blog->getBlog();
        return view('home.index.index')->with([
            'blogs'=>$result,
            'release'=>$this->getRelease,
            'reghtTops'=>$this->reghtTops,
            'header'=>$this->header,
            'right'=>$this->right,
            'value'=>$this->getValue,
            'ask'    => $this->askIndex,
        ]);
    }
}

