<?php


namespace App\Admin\Extensions;


use Encore\Admin\Admin;

class SwitchButton
{
    private $id;

    private $column;

    private $columnValue;

    private $url;

    private $method;

    protected $states = [
        'on'  => ['value' => 1, 'text' => 'ON', 'color' => 'primary'],
        'off' => ['value' => 0, 'text' => 'OFF', 'color' => 'warning'],
    ];

    public function __construct(int $id, string $url, string $column, string $columnValue, string $method = '_PUT')
    {
        $this->id          = $id;
        $this->url         = $url;
        $this->column      = $column;
        $this->columnValue = $columnValue;
        $this->method      = $method;
    }

    private function getClass():string
    {
        return 'grid-switch-'.str_replace('.', '-', $this->column);
    }

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
            type: "POST",
            data: {
                "$this->column": value,
                _token: LA.token,
                _method: "$this->method"
            },
            success: function (data) {
                toastr.success(data.message);
            }
        });
    }
});

EOT;
        return Admin::script($script);
    }

    public function returnHtml()
    {
        $this->scriptJs();
        $class = $this->getClass();
        $checked = $this->states['on']['value'] == $this->columnValue ? 'checked' : '';

        return <<<EOT
        <input type="checkbox" class="$class" $checked data-key="$this->columnValue" />
EOT;
    }
}
