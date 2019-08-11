<header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
                <a class="text-muted" href="{{ route('home') }}">花儿尊上</a>
            </div>
            <div class="col-4 text-center">
                {{--<a class="blog-header-logo text-dark" href="#">Large</a>--}}
            </div>
           @include('public.components.auth_user')
        </div>
    </header>

<div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
            @foreach($header as $item)
                <a class="p-2 text-muted" href="{{ url($item['url']) }}">{{ $item['title'] }}</a>
            @endforeach
        </nav>
</div>
