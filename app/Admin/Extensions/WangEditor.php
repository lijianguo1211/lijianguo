<?php


namespace App\Admin\Extensions;

use Encore\Admin\Form\Field;

class WangEditor extends Field
{
    protected $view = 'admin.wang-editor';

    protected static $css = [
        '/vendor/wangEditor-3.1.1/release/wangEditor.min.css',
    ];

    protected static $js = [
        '/vendor/wangEditor-3.1.1/release/wangEditor.min.js',
    ];

    public function render()
    {
       $name = $this->formatName($this->column);

       $this->script = <<<EOT
var E = window.wangEditor
var editor = new E('#{$this->id}');
editor.customConfig.uploadFileName = 'images[]';
editor.customConfig.uploadImgHeaders = {
    'X-CSRF-TOKEN': $('input[name="_token"]').val()
}
editor.customConfig.zIndex = 0;
// 上传路径
editor.customConfig.uploadImgServer = '/uploadFile';
editor.customConfig.onchange = function (html) {
    $('input[name=$name]').val(html);
}
editor.customConfig.uploadImgHooks = {
    customInsert: function (insertImg, result, editor) {
        if (typeof(result.length) != "undefined" || result['status'] == "success") {
            for (var i = 0; i <= result['data'].length - 1; i++) {
                var j = i;
                var url = result['data'][i];
                insertImg(url);
            }
        }else{
            toastr.error(result['message']);
        }
    }
}
editor.create();
    
EOT;
        return parent::render();
    }
}
