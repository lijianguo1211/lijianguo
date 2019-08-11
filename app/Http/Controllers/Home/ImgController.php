<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019-04-21
 * Time: 21:03
 */

namespace App\Http\Controllers\Home;

use App\Http\Controllers\BaseController;
use MarkdownEditor;

class ImgController extends BaseController
{
    protected $header;

    private static $errorMessage = [];

    private static $url = [];

    public function index()
    {
        return view('img/index')->with(['header'=>$this->header]);
    }

    public function userIndex()
    {
        return view('img/user_index')->with(['header'=>$this->header]);
    }

    protected static function getErrorMessage()
    {
        return static::$errorMessage;
    }

    protected static function getUploadUrl()
    {
        if (!isset(self::$url[config('markdowneditor.default')])) {
            return '默认本地存储位置不存在';
        }

        if (!empty(static::getErrorMessage())) {
            return static::getErrorMessage();
        }

        return static::$url[config('markdowneditor.default')];
    }

    public function upload()
    {
        try {
            if (!$this->request->hasFile('editormd-image-file')) {
                static::$errorMessage[] = '上传文件不存在';
            }

            $pic = $this->request->file('editormd-image-file');

            if (!$pic->isValid()) {
                static::$errorMessage[] = 'The file is invalid';
            }

            $path    = config('markdowneditor.connections.public.prefix', 'uploads');
            $newName = date('Ymd-His') . '-' . rand(100, 999) . '.' . $pic->getClientOriginalExtension();
            //本地保存
            $pic->move($path, $newName);
            static::$url['public'] = asset($path . '/' . $newName);

        } catch (\Exception $e) {
            static::$errorMessage[] = $e->getMessage();
        }

        $data = [
            'success' => empty(static::getErrorMessage()) ? 1 : 0,
            'message' => static::getErrorMessage() ?: 'success',
            'url'     => static::getUploadUrl()
        ];

        return response()->json($data);
    }

    public function delete()
    {
        dd($this->request);
    }
}
