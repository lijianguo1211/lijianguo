<?php

namespace App\Traits;

use GuzzleHttp\Client;

trait ApiHttpRequest
{
    /**
     * Notes:
     * Name: getHttp
     * User: LiYi
     * Date: 2019/9/30
     * Time: 23:52
     * @param string $method get | post
     * @param string $url
     * @param array $header ['headers' => ['' => '']]
     * @return array
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getHttp(string $method, string $url, array $header = [])
    {
        try {
            $client = new Client();
            if (empty($header)) {
                $result = $client->request($method, $url);
            } else {
                $result = $client->request($method, $url, $header);
            }
            if ($result->getStatusCode() !== 200) {
                throw new \Exception('http发送请求失败');
            }

            $body = $result->getBody();
            $body = json_decode($body, true);
            if ($body['result']['stat'] != 1) {
                throw new \Exception('接口返回错误代码：' . $body['result']['stat']. "\n" .
                    '错误消息是：' . $body['error_code']
                );
            }

            $res = $body['result']['data'];
        } catch (\Exception $e) {
            $res = [];
            \Log::error('头条新闻查询失败：' . $e->getMessage());
        }

        return $res;

    }
}

