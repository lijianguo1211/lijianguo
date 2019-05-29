<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\BlogModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class BlogController extends Controller
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
        $grid = new Grid(new BlogModel);

        $grid->id('Id');
        $grid->title('Title');
        $grid->info('Info');
        $grid->label('Label');
        $grid->user_id('User id');
        $grid->reading_volume('Reading volume');
        $grid->delete_status('Delete status');
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
        $form = new Form(new BlogModel);

        $form->text('title', 'Title');
        $form->text('info', 'Info');
        $form->number('label', 'Label');
        $form->number('user_id', 'User id');
        $form->number('reading_volume', 'Reading volume');
        $form->switch('delete_status', 'Delete status');

        return $form;
    }
}
