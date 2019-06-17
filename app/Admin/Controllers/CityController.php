<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\CityModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Encore\Admin\Facades\Admin;
use Encore\Admin\Controllers\ModelForm;
use Encore\Admin\Tree;

class CityController extends Controller
{
    use ModelForm;

    private $model;

    public function __construct(CityModel $cityModel)
    {
        $this->model = $cityModel;
    }

    public function index(Content $content)
    {
        return $content->header('list')->body(CityModel::tree());
    }

    /**
     * Make a grid builder.
     *
     * @return Grid
     */
    protected function grid()
    {
        $grid = new Grid(new CityModel);



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
        $show = new Show(CityModel::findOrFail($id));



        return $show;
    }

    /**
     * Make a form builder.
     *
     * @return Form
     */
    protected function form()
    {
        $form = new Form(new CityModel);



        return $form;
    }
}
