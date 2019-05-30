<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\TypeModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TypeController extends Controller
{
    private $type;

    private $input;

    use HasResourceActions;

    /**
     * TypeController constructor.
     * @param TypeModel $type
     * @param Request $request
     */
    public function __construct(TypeModel $type, Request $request)
    {
        $this->type  = $type;
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
            ->header('编辑分类')
            ->description('编辑分类')
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
            ->header('添加分类')
            ->description('填写分类')
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

        $form->select('pid','分级显示')->options(function() use ($type) {
            $array = [0 => '顶级分类'];
            foreach ($type as $k => $item) {
                $array[$item->id] = str_repeat('|__',$item->level).$item->name;
            }
            return $array;
        });

        return $form;
    }

    /**
     * Notes: 表单提交
     * Name: store
     * User: LiYi
     * Date: 2019/5/29
     * Time: 21:49
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */
    public function store()
    {
        $rule = [
            'name' => 'required|unique:types|max:15',
            'pid'  => 'required',
        ];
        $message = [
            'name.required' => '分类名字必须填写',
            'name.unique' => '分类名已存在',
            'name.max' => '分类名最多15个字符',
            'pid.required' => '父级分类必须选择',
        ];
        $validators = Validator::make($this->input, $rule, $message);

        if ($validators->fails()) {
            return redirect('type/create')
                ->withErrors($validators)
                ->withInput();
        }

        $result = $this->type->store($this->input);

        if (!$result) {
            return admin_toastr('分类添加失败...', 'error');
        }

        return admin_toastr('分类添加成功...', 'success');
    }

    /**
     * Notes: 数据验证
     * Name: validates
     * User: LiYi
     * Date: 2019/5/29
     * Time: 21:49
     * @param string $methods
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validates(string $methods)
    {
        $rule = [
            'name' => 'required|unique:types|max:15',
            'pid'  => 'required',
        ];
        $message = [
            'name.required' => '分类名字必须填写',
            'name.unique' => '分类名已存在',
            'name.max' => '分类名最多15个字符',
            'pid.required' => '父级分类必须选择',
        ];
        switch ($methods) {
            case 'store':
                $validators = Validator::make($this->input, $rule, $message);
                break;
            case 'save':
                $validators = Validator::make($this->input, $rule, $message);
                break;
        }

        return $validators;
    }

    /**
     * Notes: 编辑提交
     * Name: save
     * User: LiYi
     * Date: 2019/5/29
     * Time: 22:07
     * @param $id
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */
    public function save($id)
    {
        $validator = $this->validates('save');

        if ($validator->fails()) {
            return redirect('type/create')
                ->withErrors($validator)
                ->withInput();
        }

        $result = $this->type->saves($this->input, $id);

        if (!$result) {
            return admin_toastr('分类添加失败...', 'error');
        }
    }
}
