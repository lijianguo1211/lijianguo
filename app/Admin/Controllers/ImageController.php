<?php

namespace App\Admin\Controllers;

use App\Models\DataModels\ImageModel;
use App\Http\Controllers\Controller;
use Encore\Admin\Controllers\HasResourceActions;
use Encore\Admin\Form;
use Encore\Admin\Grid;
use Encore\Admin\Layout\Content;
use Encore\Admin\Show;
use Illuminate\Support\Facades\Validator;

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
            ->header('列表')
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
            ->header('编辑')
            ->description('description')
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
            ->header('添加')
            ->body($this->form(0));
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
    protected function form(int $id)
    {
        $form = new Form($this->model);
        if (empty($id)) {
            $form->setTitle('添加热点图片');
        }
        $form->text('title', '标题')
            ->placeholder('添加标题');

        $form->textarea('content', '简介')
            ->placeholder('添加简介');

        $form->tags('tag_id', '标签')
            ->placeholder('标记标签')
            ->default('Li')
            ->help('可以添加多个标签');

        $form->select('label', '选择分类')->options($this->getSelectType())
            ->placeholder('选择图片分类');

        $form->image('image_path', '上传图片')
            ->uniqueName()->placeholder('选择图片')
            ->help('单张图片上传');

        /*$form->image('image_path', '上传图片')
            ->removable()
            ->addElementClass('apk_upload')->options([
            'showPreview' => false,
            'allowedFileExtensions'=>[''],
            'showUpload'=>true,
            'uploadAsync' =>true,
            'uploadUrl' => '/admin/img_upload',
            'uploadExtraData' => [
                '_token'    => csrf_token(),
                '_method'   => 'POST',
            ],
        ]);*/

        $form->switch('is_delete', '是否删除')
            ->help('选择是否删除，删除即不显示');

        return $form;
    }

    /**
     * Notes: 添加
     * Name: store
     * User: LiYi
     * Date: 2019/6/14
     * Time: 22:39
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|void
     */
    public function store()
    {
        $rule = [
            'title'      => 'required|max:20',
            'content'    => 'required|max:255',
            'label'      => 'required',
            'is_delete'  => 'required',
            'image_path' => 'image|file'
        ];

        $validators = Validator::make(request()->all(), $rule);

        if ($validators->fails()) {
            return redirect('admin/blog/create')
                ->withErrors($validators)
                ->withInput();
        }

        $image = request()->file('image_path');

        ;
        $res = $image->move(config('filesystems.disks.admin.root'), 'liyi_' . date('Ymdhis') . '_'. uniqid() . $image->getClientOriginalName());
        $image_path = config('filesystems.disks.admin.url') . '/' . $res->getFilename();
        // config('filesystems.disks.admin.url') . '/' .
        $tags = [
            'tags_name' => json_encode(array_filter(request()->get('tag_id')))
        ];
        $delete = request('is_delete');
        switch ($delete) {
            case 'on':
                $delete = 1;
                break;
            case 'off':
                $delete = 0;
                break;
        }
        $image = [
            'title' => request('title'),
            'content' => request('content'),
            'label'  => request('label'),
            'is_delete' => $delete,
            'image_path' => $image_path
        ];

        $result = $this->model->imageStore($tags, $image);

        if (!$result['status']) {
            return admin_toastr($result['info'] . '...', 'error');
        }
        return admin_toastr($result['info'] . '...', 'success');
    }

    public function destroy($id)
    {
        $result = $this->model->destory($id);

        if (!$result['status']) {
            return admin_toastr($result['info'] . '...', 'error');
        }
        return admin_toastr($result['info'] . '...', 'success');
    }
}
