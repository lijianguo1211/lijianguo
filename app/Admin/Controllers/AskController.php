<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\AskModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Illuminate\Http\Request;

class AskController extends Controller
{
    use HasResourceActions;

    private $ask;

    private $input;

    public function __construct(AskModel $ask, Request $request)
    {
        $this->ask   = $ask;
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
        $grid = $this->ask->grid();
        return $content
            ->header('问答列表')
            ->description('问答列表展示')
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
     * Make a grid builder.
     *
     * @return Grid
     */


    /**
     * Make a show builder.
     *
     * @param mixed $id
     * @return Show
     */
    protected function detail($id)
    {
        $show = new Show(AskModel::findOrFail($id));

        $show->id('Id');
        $show->user_id('User id');
        $show->title('Title');
        $show->label('Label');
        $show->reading_value('Reading value');
        $show->content('Content');
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
        $form = new Form(new AskModel);

        $form->number('user_id', 'User id');
        $form->text('title', 'Title');
        $form->text('label', 'Label');
        $form->number('reading_value', 'Reading value');
        $form->textarea('content', 'Content');

        return $form;
    }
}
