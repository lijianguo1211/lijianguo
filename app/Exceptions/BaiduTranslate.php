<?php
/**
 * Notes:
 * File name:translate
 * Create by: Jay.Li
 * Created on: 2019\6\26 0026 14:27
 */


namespace App\Exceptions;

class BaiduTranslate
{
    const CURL_TIMEOUT = 10;

    /**
     * Notes:当做静态方法调用
     * Function Name: __callStatic
     * User: Jay.Li
     * Date: 2019\6\26 0026
     * Time: 15:54
     * @param $method
     * @param $parameters
     * @return mixed
     */
    public static function __callStatic($method, $parameters)
    {
        return (new self())->translate(...$parameters);
    }

    /**
     * Notes:对外提供调用方法http:
     * Function Name: translate
     * User: Jay.Li
     * Date: 2019\6\26 0026
     * Time: 14:44
     * @param string $query
     * @param string $to
     * @param string $from
     * @return mixed|void
     */
    public function translate(string $query, string $to, string $from = 'auto')
    {
        $args = array(
            'q' => $query,
            'appid' => config('account.baidu.fanyi_app_id'),
            'salt' => rand(100000,999999),
            'from' => $from,
            'to' => $to,

        );
        $args['sign'] = $this->buildSign(
            $query,
            config('account.baidu.fanyi_app_id'),
            $args['salt'],
            config('account.baidu.fanyi_seckey')
        );
        $uri = config('account.baidu.fanyi_uri');
        $ret = $this->call($uri, $args);
        if ($ret === false) return ['status' => 0, 'info' => 'error'];
        $ret = json_decode($ret, true);
        return ['status' => 1, 'info' => 'success', 'data' => $ret];
    }

    /**
     * Notes: 签名
     * Function Name: buildSign
     * User: Jay.Li
     * Date: 2019\6\26 0026
     * Time: 14:44
     * @param string $query
     * @param string $appId
     * @param string $salt
     * @param string $secKey
     * @return string
     */
    protected function buildSign(string $query, string $appId, string $salt, string $secKey):string
    {
        $str = $appId . $query . $salt . $secKey;
        $ret = md5($str);
        return $ret;
    }

    /**
     * Notes:请求频率限制
     * Function Name: call
     * User: Jay.Li
     * Date: 2019\6\26 0026
     * Time: 15:47
     * @param string $url
     * @param array $args
     * @param string $method
     * @param int $testflag
     * @param int $timeout
     * @param array $headers
     * @return bool|string
     */
    protected function call(
        string $url,
        array $args,
        string $method="post",
        int $testflag = 0,
        int $timeout = self::CURL_TIMEOUT,
        array $headers = []
    )
    {
        $ret = false;
        $i = 0;
        while($ret === false) {
            if($i > 1) break;

            if($i > 0) sleep(1);

            $ret = $this->callOnce($url, $args, $method, false, $timeout, $headers);
            $i++;
        }

        return $ret;
    }

    /**
     * Notes:curl函数请求接口
     * Function Name: callOnce
     * User: Jay.Li
     * Date: 2019\6\26 0026
     * Time: 15:45
     * @param string $url
     * @param null $args
     * @param string $method
     * @param bool $withCookie
     * @param int $timeout
     * @param array $headers
     * @return bool|string
     */
    protected function callOnce(
        string $url,
        $args=null,
        string $method="post",
        bool $withCookie = false,
        int $timeout = self::CURL_TIMEOUT,
        array $headers = []
    )
    {
        $ch = curl_init();
        if($method == "post") {
            $data = $this->convert($args);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            curl_setopt($ch, CURLOPT_POST, 1);
        } else {
            $data = $this->convert($args);
            if($data) {
                if(stripos($url, "?") > 0) {
                    $url .= "&$data";
                } else {
                    $url .= "?$data";
                }
            }
        }
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        if(!empty($headers)) {
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        }
        if($withCookie) {
            curl_setopt($ch, CURLOPT_COOKIEJAR, $_COOKIE);
        }
        $r = curl_exec($ch);
        curl_close($ch);
        return $r;
    }

    /**
     * Notes: 参数编码
     * Function Name: convert
     * User: Jay.Li
     * Date: 2019\6\26 0026
     * Time: 15:46
     * @param array $args
     * @return array|string
     */
    protected function convert(array &$args)
    {
        $data = '';
        if (is_array($args)) {
            foreach ($args as $key=>$val) {
                if (is_array($val)) {
                    foreach ($val as $k=>$v) {
                        $data .= $key.'['.$k.']='.rawurlencode($v).'&';
                    }
                } else {
                    $data .="$key=".rawurlencode($val)."&";
                }
            }
            return trim($data, "&");
        }
        return $args;
    }
}
