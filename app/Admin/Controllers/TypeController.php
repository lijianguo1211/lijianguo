<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\TypeModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;

class TypeController extends Controller
{
    private $type;

    use HasResourceActions;

    public function __construct(TypeModel $type)
    {
        $this->type = $type;
    }

    /**
     * Index interface.
     *
     * @param Content $content
     * @return Content
     */
    public function index(Content $content)
    {
        $grid = $this->type->grid();
        return $content
            ->header('type')
            ->description('分类列表')
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
        $show = new Show($this->type::findOrFail($id));



        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form($this->type);

        $form->text('name','分类名称')->help('填写分类名称');

        $type = (new TypeModel())->getType();

        $form->select('name','分级显示')->options(function() use ($type){
            $array = [];
            foreach ($type as $k => $item) {
                $array[$item->id] = str_repeat('|__',$item->level).$item->name;
            }

            return $array;
        });

        return $form;
    }
}
