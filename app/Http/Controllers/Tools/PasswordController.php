<?php


namespace App\Http\Controllers\Tools;


use App\Models\DataModels\HeaderModel;
use Illuminate\Http\Request;

class PasswordController
{
    /**
     * @var Request
     */
    private $params;

    /**
     * FanyiController constructor.
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->params = $request->all();
    }

    public function index()
    {
        $header = (new HeaderModel())->getIndexHeader();
        return view('tools.password')->with([
            'header'=>$header,
        ]);
    }

    /**
     * Notes:
     * Function Name: md5Encryption
     * User: Jay.Li
     * Date: 2019\6\27 0027
     * Time: 15:02
     * @param string $content
     * @return string
     */
    private function md5Encryption(string $content)
    {
        $content = md5($content);
        return $content;
    }

    /**
     * Notes:
     * Function Name: sha1Encryption
     * User: Jay.Li
     * Date: 2019\6\27 0027
     * Time: 12:30
     * @param string $content
     * @param bool $type true => 默认，将以 20 字符长度的原始格式返回 ，false => 返回值是一个 40 字符长度的十六进制数字
     * @return string
     */
    private function sha1Encryption(string $content, bool $type = true)
    {
        $content = sha1($content, $type);
        return $content;
    }

    /**
     * Notes:
     * Function Name: cryptEncryption
     * User: Jay.Li
     * Date: 2019\6\27 0027
     * Time: 15:02
     * @param string $content
     * @param string $salt
     * @param string $type
     * @return string|null
     */
    private function cryptEncryption(string $content, string $salt , string $type = 'sha256')
    {
        $num = mt_rand(1000, 999999999);
        switch ($type) {
            case 'sha256':
                $salt = '$5$rounds=' . $num . $salt;
                break;
            case 'sha512':
                $salt = '$6$rounds=' . $num . $salt;
                break;
            default:
                break;
        }
        $content = crypt($content, $salt);
        return $content;
    }

    /**
     * Notes:
     * Function Name: passwordHashEncryption
     * User: Jay.Li
     * Date: 2019\6\27 0027
     * Time: 15:02
     * @param string $content
     * @param int $salt
     * @return bool|string
     */
    private function passwordHashEncryption(string $content, int $salt = 10)
    {
        $content = password_hash($content, PASSWORD_BCRYPT, [
            'cost' => $salt,
        ]);
        return $content;
    }
}
