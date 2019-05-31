<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\BlogModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use App\Admin\Traits\TraitMessage;

class BlogController extends Controller
{
    use HasResourceActions, TraitMessage;

    private $blog;

    public function __construct(BlogModel $blog)
    {
        $this->blog = $blog;
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

        $form->text('title', '文章标题');
        $form->textarea('info', '文章简介');
        $form->multipleSelect('label', '文章类型')->options(self::getSelectType());

        $form->switch('delete_status', '是否删除');

        $form->editor('content_md', '内容');

        return $form;
    }
}
