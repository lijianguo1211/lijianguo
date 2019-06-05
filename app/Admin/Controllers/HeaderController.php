<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\HeaderModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HeaderController extends Controller
{
    use HasResourceActions;

    private $header;

    private $input;

    public function __construct(HeaderModel $header, Request $request)
    {
        $this->input  = $request->all();
        $this->header = $header;
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
            ->body($this->header->grid());
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
            ->header('Edit')
            ->description('description')
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
            ->header('添加导航')
            ->description('一心一意')
            ->body($this->form());
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(HeaderModel::findOrFail($id));

        $show->id('Id');
        $show->title('Title');
        $show->url('Url');
        $show->priority('Priority');
        $show->type('Type');
        $show->created_at('Created at');
        $show->updated_at('Updated at');

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form($this->header);

        $form->text('title', '标题')->default('');
        $form->url('url', 'url')
            ->default(env('APP_URL'))
            ->help('url必须是输入网址类型的参数');
        $form->select('priority', '排序')
            ->options(array_reverse(config('config.header')))->default('');
        $form->select('type', '链接类型')
            ->options(config('config.linkType'))->default('');

        return $form;
    }

    public function store()
    {
        $rule = [
            'title' => 'required|unique|max:10',
            'url' => 'required|unique|max:20',
        ];
        $message = [
            'title.required' => '标题必须选择',
            'title.unique' => '标题已存在在',
            'title.max' => '标题最多10个字符',
            'url.required' => 'URL必须填写',
            'url.unique' => 'URL已存在',
            'url.max' => 'url最多20个字符',
        ];

        $validators = Validator::make($this->input, $rule, $message);

        if ($validators->fails()) {
            return redirect('admin/blog/header')
                ->withErrors($validators)
                ->withInput();
        }

        $result = $this->header->store($this->input);

        if ($result['status'] === 0) {
            return admin_toastr($result['info'] . '...', 'error');
        }
        return admin_toastr($result['info'] . '...', 'success');
    }
}
