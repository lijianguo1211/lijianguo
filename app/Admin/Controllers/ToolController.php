<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\Tool;
use Encore\Admin\Controllers\AdminController;
use Encore\Admin\Form;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class ToolController extends AdminController
{
    /**
     * Title for current resource.
     *
     * @var string
     */
    protected $title = '插件管理';

    private $tool;

    public function __construct(Tool $tool)
    {
        $this->tool = $tool;
    }


    public function index(Content $content)
    {
        return $content
            ->title($this->title())
            ->description($this->description['index'] ?? trans('admin.list'))
            ->body($this->tool->grid());
    }

    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(Tool::findOrFail($id));

        $show->field('id', __('Id'));
        $show->field('name', __('Name'));
        $show->field('desc', __('Desc'));
        $show->field('image', __('Image'));
        $show->field('url', __('Url'));
        $show->field('sort', __('Sort'));
        $show->field('created_at', __('Created at'));
        $show->field('updated_at', __('Updated at'));

        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form($this->tool);

        $form->text('name', __('Name'));
        $form->text('desc', __('Desc'));
        $form->image('image', __('Image'));
        $form->text('url', __('Url'));
        $form->number('sort', __('Sort'))->default(1);

        return $form;
    }
}
