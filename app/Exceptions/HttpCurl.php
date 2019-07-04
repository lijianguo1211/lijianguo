<?php


namespace App\Exceptions;

use GuzzleHttp\Client;

class HttpCurl
{
    protected $uri;

    protected $method;

    protected $client;

    protected $response;

    public function __construct()
    {
        $this->start();
    }

    public function start()
    {
        $this->client = new Client();
        return $this;
    }

    /**
     * Notes: 发起请求
     * Name: setQuery
     * User: LiYi
     * Date: 2019/7/4
     * Time: 22:49
     * @param array $option
     */
    public function setQuery(array $option = [])
    {
        $this->response = empty($option) ? $this->client->request($this->getMethod(), $this->getUri()) : $this->client->request($this->getMethod(), $this->getUri(),$option);
        return $this;
    }

    public function getResponse()
    {
        return $this->response;
    }

    /**
     * Notes:设置uri
     * Name: setUri
     * User: LiYi
     * Date: 2019/7/4
     * Time: 22:01
     * @param string $uri
     * @return $this
     */
    public function setUri(string $uri)
    {
        $this->uri = $uri;
        return $this;
    }

    protected function getUri()
    {
        return $this->uri;
    }

    /**
     * Notes:设置请求方法
     * Name: setMethod
     * User: LiYi
     * Date: 2019/7/4
     * Time: 22:02
     * @param string $method
     * @return $this
     */
    public function setMethod(string $method)
    {
        $this->method = $method;
        return $this;
    }

    protected function getMethod()
    {
        return $this->method;
    }
}
