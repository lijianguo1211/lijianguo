<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\DataModels\HeaderModel;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    protected $username;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->username = $this->findUsername();//email or username
    }

    /**
     * Notes:查找登陆验证字段
     * Name: findUsername
     * User: LiYi
     * Date: 2019/8/11
     * Time: 13:54
     * @return string
     */
    public function findUsername()
    {
        $login = request()->get('loginType');

        $fieldType = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        request()->merge([$fieldType => $login]);

        return $fieldType;
    }

    /**
     * Notes:登陆验证字段
     * Name: username
     * User: LiYi
     * Date: 2019/8/11
     * Time: 13:54
     * @return string
     */
    public function username()
    {
        return $this->username;
    }

    /**
     * Notes:Handle a login request to the application.
     * Name: login
     * User: LiYi
     * Date: 2019/8/11
     * Time: 13:53
     * @param Request $request
     * @return \Illuminate\Http\Response|\Symfony\Component\HttpFoundation\Response|void
     * @throws \Illuminate\Validation\ValidationException
     */
    public function login(Request $request)
    {
        $this->validateLogin($request);

        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if ($this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }

    /**
     * Notes:Validate the user login request.
     * Name: validateLogin
     * User: LiYi
     * Date: 2019/8/11
     * Time: 13:53
     * @param $request
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function validateLogin($request)
    {
        $this->validate($request, [
            $this->username() => 'required|string',
            'password' => 'required|string',
        ]);
    }

    /**
     * Notes: 显示登陆页面
     * Name: showLoginForm
     * User: LiYi
     * Date: 2019/8/11
     * Time: 13:53
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showLoginForm()
    {
        $header = (new HeaderModel())->getIndexHeader();
        return view('auth.login_home')->with(['header'=>$header]);
    }
}
