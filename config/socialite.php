<?php
/**
 * Created by PhpStorm.
 * User: liyi
 * Date: 2019/4/26
 * Time: 9:53
 */
return [
    //...
    /*'github' => [
        'client_id'     => 'b0eca095fb6e8c3ed056',
        'client_secret' => 'db6124bbecd7f2865b06c1cac8710b2228c59baf',
        'redirect'      => 'http://www.lglg.xyz/github/callback',
    ],*/
    'github' => [
        'client_id'     => '8926fa7400f0b75dbe59',
        'client_secret' => '0380682246c41063615918092b75923266122c9f',
        'redirect'      => 'http://localhost:8001/github/callback',
    ],
    /**
     * http://developer.baidu.com/wiki/index.php?title=docs/oauth/rest/file_data_apis_list
     *
     * http://openapi.baidu.com/oauth/2.0/authorize?
        response_type=code&
        client_id=YOUR_CLIENT_ID&
        redirect_uri=YOUR_REGISTERED_REDIRECT_URI&
        scope=email&
        display=popup
     *
     *
     * http://www.lglg.xyz/getBaiduCode?code=845c28e660fdd3396f58fcc8de18e9c9&state=9d3b40c0ebac6e5bf48049ca9576d130
     *
     * https://openapi.baidu.com/oauth/2.0/token?
        grant_type=authorization_code&
        code=CODE&
        client_id=YOUR_CLIENT_ID&
        client_secret=YOUR_CLIENT_SECRET&
        redirect_uri=YOUR_REGISTERED_REDIRECT_URI
     *
     */
    'baidu' => [
        'id'=>'16150582',
        'apiKey'=>'CndXzv8eoGtwWGQcj3Q6TuVm',
        'secretKey'=>'QKyou0OMHtp4SHnQpWyoRO5Y2DxyNfen',
        'redirect_uri' => 'http://www.lglg.xyz/getBaiduCode',
    ]
];
