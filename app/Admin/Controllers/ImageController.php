<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\ImageModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class ImageController extends Controller
{
    use HasResourceActions;

    private $model;

    private $input;

    public function __construct(ImageModel $imageModel)
    {
        $this->model = $imageModel;
        $this->input = request()->all();
    }

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        $grid = $this->model->grid();
        return $content
            ->header('Index')
            ->description('description')
            ->body($grid);
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
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(ImageModel::findOrFail($id));

        $show->id('Id');
        $show->title('Title');
        $show->content('Content');
        $show->label('Label');
        $show->image_path('Image path');
        $show->is_to_examine('Is to examine');
        $show->to_examine_content('To examine content');
        $show->is_delete('Is delete');
        $show->user_id('User id');
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
        $form = new Form(new ImageModel);

        $form->text('title', 'Title');
        $form->text('content', 'Content');
        $form->switch('label', 'Label');
        $form->text('image_path', 'Image path');
        $form->switch('is_to_examine', 'Is to examine');
        $form->text('to_examine_content', 'To examine content')->default('待审核');
        $form->switch('is_delete', 'Is delete');
        $form->number('user_id', 'User id');

        return $form;
    }
}
