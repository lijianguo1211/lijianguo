<?php

namespace App\Admin\Controllers;

use App\Admin\Extensions\TableExcelDownload;
use App\Models\DataModels\BlogContentModel;
use App\Models\DataModels\BlogModel;
use App\Http\Controllers\Controller;
use App\Models\DataModels\UserModel;
use Carbon\Carbon;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use App\Admin\Traits\TraitMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Maatwebsite\ExcelLight\Excel;
use Maatwebsite\ExcelLight\Reader;
use Maatwebsite\ExcelLight\Writer;

class BlogController extends Controller
{
    use HasResourceActions, TraitMessage;

    private $blog;

    private $input;

    /**
     * BlogController constructor.
     * @param BlogModel $blog
     * @param Request $request
     */
    public function __construct(BlogModel $blog, Request $request)
    {
        $this->blog  = $blog;
        $this->input = $request->all();
    }

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        $blog = $this->blog->grid();
        return $content
            ->header('文章')
            ->description('文章列表')
            ->body($blog);
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
            ->header('编辑文章')
            ->description('让你的文章更加友好')
            ->body($this->form($id)->edit($id));
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
            ->header('添加文章')
            ->description('一点一滴的耕耘')
            ->body($this->form(0));
    }



    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(BlogModel::findOrFail($id));

        $show->id('主键');
        $show->title('文章标题');
        $show->info('文章简介');
        $show->label('文章分类');
        $show->user_id('作者')->as(function($user_id) {
            return UserModel::where('id', $user_id)->value('username');
        });
        $show->reading_volume('阅读量');
        $show->delete_status('是否删除')->as(function($delete_status) {
            return $delete_status ? '删除' : '未删除';
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
    protected function form(int $id)
    {
        $form = new Form($this->blog);
        try {
            $content = BlogContentModel::where('blog_id', $id)->first();
            $content = $content->content_md ? $content->content_md : '';
        } catch (\Exception $e) {
            $content = '';
        }

        $form->model()->leftjoin('blog_content as bc', 'blogs.id', '=', 'bc.blog_id');

        $form->text('title', '文章标题')->placeholder('添加文章的标题');
        $form->textarea('info', '文章简介')->placeholder('添加文章的简介');
        $form->select('label', '文章类型')->options(self::getSelectType());

        $form->tags('tag.tags_name','标签')->placeholder('添加文章的标签');

        $form->switch('delete_status', '是否删除');

        //$form->editor('content', '内容')->default('');
        $form->editormd('content', '内容')->default($content);
        return $form;
    }

    /**
     * Notes: 表单
     * Name: store
     * User: LiYi
     * Date: 2019/6/3
     * Time: 21:57
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */
    public function store()
    {
        $rule = [
            'title' => 'required|max:20',
            'info'  => 'required|max:255',
            'label'  => 'required',
            'content'  => 'required',
        ];
        $message = [
            'title.required' => '文章标题必须填写',
            'title.max' => '文章标题最多20个字符',
            'info.required' => '文章简介必须填写',
            'info.max' => '文章简介最多255个字符',
            'label.required' => '文章分类必须选择',
            'content.required' => '文章内容必须添加',
        ];
        $validators = Validator::make($this->input, $rule, $message);

        if ($validators->fails()) {
            return redirect('admin/blog/create')
                ->withErrors($validators)
                ->withInput();
        }
        $blog = [
            'title'         => $this->input['title'],
            'info'          => $this->input['info'],
            'label'         => $this->input['label'],
            'user_id'       => 1,
            'delete_status' => $this->input['delete_status'] === 'on' ? 1 : 0,
        ];
        $blog_content = [
            'content'    => $this->input['content'],
            'content_md' => $this->input['content'],
            'type'       => 0
        ];
        $tag = [
            'tags_name'  => json_encode($this->input['tag']['tags_name']),
        ];
        $result = $this->blog->stores($blog, $blog_content, $tag);

        if (!$result['status']) {
            return admin_toastr($result['info'] . '...', 'error');
        }
        return admin_toastr($result['info'] . '...', 'success');
    }
}
