<?php

namespace App\Http\Controllers\Auth;

use App\Events\EmailToUserEvent;
use App\Models\DataModels\HeaderModel;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'email' => 'required|string|email|max:25|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'username' => 'required|string|max:25|unique:users',
            'phone' => 'required|string|max:20|unique:users',
        ]);
    }

    /**
     * Notes: 表单提交sql创建
     * Function Name: create
     * User: Jay.Li
     * Date: 2019\6\19 0019
     * Time: 10:05
     * @param array $data
     * @return mixed
     */
    protected function create(array $data)
    {
        $user = User::create([
            'phone' => $data['phone'],
            'email' => $data['email'],
            'username' => $data['username'],
            'password' => Hash::make($data['password']),
            'validate_token' => str_random(24),
        ]);
        event(new EmailToUserEvent(User::find($user->id)));
        return $user;
    }

    /**
     * Notes:注册表单
     * Function Name: showRegistrationForm
     * User: Jay.Li
     * Date: 2019\6\19 0019
     * Time: 10:05
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function showRegistrationForm()
    {
        $header = (new HeaderModel())->getIndexHeader();
        return view('auth.register')->with(['header'=>$header]);
    }

}
