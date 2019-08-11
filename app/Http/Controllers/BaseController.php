<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/5/5
 * Time: 16:21
 */

namespace App\Http\Controllers;

use App\Models\DataModels\BlogModel;
use App\Models\DataModels\HeaderModel;
use App\Models\DataModels\ImageModel;
use App\Models\DataModels\RightTopsModel;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    protected $blog;
    protected $request;
    protected $getRelease;
    protected $getValue;
    protected $reghtTops;
    protected $header;
    protected $right;

    public function __construct(BlogModel $blog,Request $request)
    {
        $this->blog = $blog;
        $this->request = $request;
        $this->getRelease = $blog->getRelease();
        $this->getValue = $blog->getValue();
        $this->reghtTops = (new RightTopsModel())->getRieghtTops();
        $this->header = (new HeaderModel())->getIndexHeader();
        $this->right = (new HeaderModel())->getIndexHeader(1);
    }
}
