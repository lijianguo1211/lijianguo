<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\BlogModel;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use App\Admin\Traits\TraitMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $show = new Show(BlogModel::findOrFail($id));

        $show->id('Id');
        $show->title('Title');
        $show->info('Info');
        $show->label('Label');
        $show->user_id('User id');
        $show->reading_volume('Reading volume');
        $show->delete_status('Delete status');
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
        $form = new Form($this->blog);
        $form->model()->leftjoin('blog_content as bc', 'blogs.id', '=', 'bc.blog_id');

        $form->text('title', '文章标题')->placeholder('添加文章的标题');
        $form->textarea('info', '文章简介')->placeholder('添加文章的简介');
        $form->select('label', '文章类型')->options(self::getSelectType());

        $form->tags('tag.tags_name','标签')->placeholder('添加文章的标签');

        $form->switch('delete_status', '是否删除');

        $form->editor('content', '内容');

        return $form;
    }

    public function store()
    {
        $rule = [
            'title' => 'required|max:20',
            'info'  => 'required|max:255',
            'label'  => 'required',
            'content_md'  => 'required',
        ];
        $message = [
            'title.required' => '文章标题必须填写',
            'title.max' => '文章标题最多20个字符',
            'info.required' => '文章简介必须填写',
            'info.max' => '文章简介最多255个字符',
            'label.required' => '文章分类必须选择',
            'content_md.required' => '文章内容必须添加',
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
            'created_at'    => date('Y-m-d H:i:S'),
        ];
        $blog_content = [
            'content'    => $this->input['content_md'],
            'content_md' => $this->input['content_md'],
            'type'       => 0
        ];
        $tag = [
            'tags_name'  => json_encode($this->input['tag']['tags_name']),
            'created_at' => date('Y-m-d H:i:S')
        ];

        $result = $this->blog->stores($blog, $blog_content, $tag);

        if (!$result['status']) {
            return admin_toastr($result['info'] . '...', 'error');
        }
        return admin_toastr($result['info'] . '...', 'success');
    }
}
