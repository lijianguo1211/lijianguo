<?php


namespace App\Admin\Extensions;


use Encore\Admin\Admin;

class SwitchButton
{
    /**
     * Notes: 主键id
     * class_name: SwitchButton
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:30
     * @var int
     */
    private $id;

    /**
     * Notes:状态字段
     * class_name: SwitchButton
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:30
     * @var string
     */
    private $column;

    /**
     * Notes: 状态值
     * class_name: SwitchButton
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:30
     * @var string
     */
    private $columnValue;

    /**
     * Notes: 提交url
     * class_name: SwitchButton
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:30
     * @var string
     */
    private $url;

    /**
     * Notes: 提交方法
     * class_name: SwitchButton
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:29
     * @var string
     */
    private $method;

    /**
     * Notes: 按钮设置
     * class_name: SwitchButton
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:29
     * @var array
     */
    protected $states = [
        'on'  => ['value' => 1, 'text' => 'ON', 'color' => 'primary'],
        'off' => ['value' => 0, 'text' => 'OFF', 'color' => 'warning'],
    ];

    /**
     * SwitchButton constructor.设置参数
     * @param int $id
     * @param string $url
     * @param string $column
     * @param string $columnValue
     * @param string $method
     */
    public function __construct(int $id, string $url, string $column, string $columnValue, string $method = 'POST')
    {
        $this->id          = $id;
        $this->url         = $url;
        $this->column      = $column;
        $this->columnValue = $columnValue;
        $this->method      = $method;
    }

    /**
     * Notes: 得到class
     * Name: getClass
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:28
     * @return string
     */
    private function getClass():string
    {
        return 'grid-switch-'.str_replace('.', '-', $this->column);
    }

    /**
     * Notes: 编辑js
     * Name: scriptJs
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:28
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    private function scriptJs()
    {
        $class = $this->getClass();
        $script = <<<EOT

$('.$class').bootstrapSwitch({
    size:'mini',
    onText: '{$this->states['on']['text']}',
    offText: '{$this->states['off']['text']}',
    onColor: '{$this->states['on']['color']}',
    offColor: '{$this->states['off']['color']}',
    onSwitchChange: function(event, state){

        $(this).val(state ? 'on' : 'off');

        var pk = $(this).data('key');
        var value = $(this).val();

        $.ajax({
            url: "$this->url/" + pk,
            type: "$this->method",
            data: {
                "$this->column": value,
                _token: LA.token,
                'type': 'switch'
            },
            success: function (data) {
                console.log(data);
                toastr.success(data.info);
            }
        });
    }
});

EOT;
        return Admin::script($script);
    }

    /**
     * Notes: 输出状态按钮
     * Name: returnHtml
     * User: LiYi
     * Date: 2019/6/15
     * Time: 22:27
     * @return string
     */
    public function returnHtml()
    {
        $this->scriptJs();
        $class = $this->getClass();
        $checked = $this->states['on']['value'] == $this->columnValue ? 'checked' : '';

        return <<<EOT
        <input type="checkbox" class="$class" $checked data-key="$this->id" />
EOT;
    }
}
