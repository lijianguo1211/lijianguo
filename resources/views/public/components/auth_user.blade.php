<div class="col-4 d-flex justify-content-end align-items-center">
    <a class="text-muted" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
    </a>

    <ul class="nav navbar-nav navbar-right">
        <!-- Authentication Links -->
        @guest
            <li><a class="btn btn-sm btn-outline-secondary" href="{{ route('login') }}">Sign up</a></li>
        @else
            <li class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown">
                    {{ Auth::user()->username }}
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="{{ route('user.index') }}">个人信息</a>
                    <a class="dropdown-item" href="{{ route('home.img.index') }}">上传图集</a>
                    <a class="dropdown-item" href="{{ route('logout') }}"
                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                        Logout
                    </a>

                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </div>
            </li>
        @endguest
    </ul>
</div>
