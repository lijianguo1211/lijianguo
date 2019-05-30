<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\RightTopsModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class RightTopController extends Controller
{
    use HasResourceActions;

    private $right_top;

    private $input;

    public function __construct(RightTopsModel $right_top, Request $request)
    {
        $this->right_top = $right_top;
        $this->input     = $request->all();
    }

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        return $content
            ->header('Index')
            ->description('description')
            ->body($this->grid());
    }

    /**
     * Show interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function show($id, Content $content)
    {
        return $content
            ->header('Detail')
            ->description('description')
            ->body($this->detail($id));
    }

    /**
     * Edit interface.
     *
     * @param mixed $id
     * @param Content $content
     * @return Content
     */
    public function edit($id, Content $content)
    {
        return $content
            ->header('编辑每日一语')
            ->description('编辑我的每日一语')
            ->body($this->form()->edit($id));
    }

    /**
     * Create interface.
     *
     * @param Content $content
     * @return Content
     */
    public function create(Content $content)
    {
        return $content
            ->header('每日一句创建')
            ->description('记录你喜欢的句子')
            ->body($this->form());
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid($this->right_top);

        $grid->id('显示ID');
        $grid->title('领路人');
        $grid->content('每日一句')->display(function($content) {
            $content = strip_tags($content);
            return mb_substr($content, 0, 30) . '...';
        });
        $grid->created_at('创建时间');
        $grid->updated_at('修改时间');

        return $grid;
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show($this->right_top::findOrFail($id));

        $show->id('显示ID');
        $show->title('领路人');
        $show->content('每日一语')->display(function($content) {
            $content = strip_tags($content);
            return mb_substr($content, 0, 30) . '...';
        });
        $show->created_at('创建时间');
        $show->updated_at('修改时间');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form($this->right_top);

        $form->text('title', '领路人')->default(' ');
        $form->editor('content', '内容');
        return $form;
    }

    /**
     * Notes: 创建表单提交
     * Name: store
     * User: LiYi
     * Date: 2019/5/30
     * Time: 22:50
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */
    public function store()
    {
        $rule = [
            'title' => 'required|max:20',
            'content' => 'required|max:255',
        ];

        $message = [
            'title.required' => '引路人名称必须填写',
            'title.max' => '最多15个字符',
            'content.required' => '最喜欢的句子必须填写',
            'content.max' => '喜欢的句子最多255个字符',
        ];
        $validators = Validator::make($this->input, $rule, $message);

        if ($validators) {
            if ($validators->fails()) {
                return redirect('right_top/create')
                    ->withErrors($validators)
                    ->withInput();
            }
        }

        $result = $this->right_top->insertRightTops($this->input);

        if (!$result) {
            return admin_toastr('每日一语添加失败...', 'error');
        }
        return admin_toastr('每日一语添加成功...', 'success');
    }
}
