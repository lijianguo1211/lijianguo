<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\CommentModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class CommentController extends Controller
{
    use HasResourceActions;

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
            ->header('Create')
            ->description('description')
            ->body($this->form());
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new CommentModel);

        $grid->id('Id');
        $grid->floor_user_id('Floor user id');
        $grid->layer_user_id('Layer user id');
        $grid->blog_id('Blog id');
        $grid->content('Content');
        $grid->type('Type');
        $grid->is_delete('Is delete');
        $grid->delete_at('Delete at');
        $grid->created_at('Created at');
        $grid->updated_at('Updated at');

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
        $show = new Show(CommentModel::findOrFail($id));

        $show->id('Id');
        $show->floor_user_id('Floor user id');
        $show->layer_user_id('Layer user id');
        $show->blog_id('Blog id');
        $show->content('Content');
        $show->type('Type');
        $show->is_delete('Is delete');
        $show->delete_at('Delete at');
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
        $form = new Form(new CommentModel);

        $form->number('floor_user_id', 'Floor user id');
        $form->number('layer_user_id', 'Layer user id');
        $form->number('blog_id', 'Blog id');
        $form->text('content', 'Content');
        $form->switch('type', 'Type');
        $form->switch('is_delete', 'Is delete');
        $form->number('delete_at', 'Delete at');

        return $form;
    }
}
