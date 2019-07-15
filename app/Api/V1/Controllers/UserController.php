<?php
/**
 * Notes: 用户资源标识
 * File name:UserController
 * Create by: Jay.Li
 * Created on: 2019\7\15 0015 14:24
 * @Resource("Users",  uri="/users")
 */


namespace App\Api\V1\Controllers;

use App\User;
use Dingo\Blueprint\Annotation\Method\Get;
use Dingo\Blueprint\Annotation\Method\Post;
use Dingo\Blueprint\Annotation\Versions;
use Illuminate\Http\Request;
use Dingo\Api\Exception\StoreResourceFailedException;

class UserController extends BaseController
{
    /**
     * Notes:
     * Name: store
     * User: LiYi
     * Date: 2019/7/15
     * Time: 22:11
     * @param Request $request
     * @Post("/")
     * @Versions({"v1"})
     * @Request("username=foo&password=bar", contentType="application/x-www-form-urlencoded")
     * @Response(200, body={"id": 10, "username": "foo"})
     */
    public function store(Request $request)
    {
        $data = $request->only('username', 'passowrd');
        $rule = [
            'username' => [
                'required', 'alpha'
            ],
            'passowrd' => [
                'required', 'min:7'
            ]
        ];

        $validator = \Validator::make($data, $rule);

        if ($validator->fails()) {
            throw new StoreResourceFailedException('Could not create new user.', $validator->errors());
        }
    }

    /**
     * Notes:
     * Name: index
     * User: LiYi
     * Date: 2019/7/15
     * Time: 22:08
     * @return User[]|\Illuminate\Database\Eloquent\Collection
     * @Get("/")
     * @Versions({"v1"})
     * @Transaction({
     *      @Request({"username": "foo", "password": "bar"}),
     *      @Response(200, body={"id": 10, "username": "foo"}),
     *      @Response(422, body={"error": {"username": {"Username is already taken."}}})
     * })
     *
     */
    public function index()
    {
        return User::all();
    }

    /**
     * Notes:
     * Name: show
     * User: LiYi
     * Date: 2019/7/15
     * Time: 22:09
     * @param $id
     * @Get("/{id}")
     * @Parameters({
     *      @Parameter("example", type="integer", required=true, description="This is an example.", default=1)
     */
    public function show($id)
    {
        $user = User::findOrFail($id);

        /**
         * 响应数组
         */
        $this->response->array($user->toArray());

        /**
         *
         * 响应一个元素
         */
        $this->response->item($user, new UserTransformer);

        /**
         * 响应一个元素集合
         */
        $this->response->collection(User::all(), new UserTransformer);

        /**
         * 分页响应
         */
        $this->response->paginator(User::paginate(20), new UserTransformer);

        /**
         * 无内容响应
         */
        $this->response->noContent();

        /**
         * 创建资源响应
         */
        $this->response->created();

        /**
         * 错误响应
         */
        $this->response->error('error', 404);
        //没有找到资源
        $this->response->errorNotFound('not found');
        //bad request 错误
        $this->response->errorBadRequest('bad reauest');
        //服务器拒绝错误
        $this->response->errorForbidden('error for bidden');
        //内部错误
        $this->response->errorInternal('服务器内部错误');
        //未认证错误
        $this->response->errorUnauthorized('未认证错误');


        /**
         * 添加额外的头信息
         */
        $this->response->item($user, new UserTransformer)->withHeader('X-for', 'bar');

        /**
         * 添加meta信息
         */
        $this->response->item($user, new UserTransformer)->addMeta('_token', 'value');

        /**
         * 设置响应状态码
         */
        $this->response->item($user, new UserTransformer)->setStatusCode(200);

        /**
         * 自定义响应格式
         * config 配置文件
         * 'formats' => [
        'json' => 'Dingo\Api\Http\Response\Format\Jsonp'
        ]
         *
         * Dingo\Api\Http\Response::addFormatter('json', new Dingo\Api\Http\Response\Format\Jsonp);
         */

        /**
         * 事件
         */

    }
}
