<div class="container">
    <header class="blog-header py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
            <div class="col-4 pt-1">
                <a class="text-muted" href="{{ url('/') }}">花儿尊上</a>
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

    {{--<div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
            <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
            <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
        </div>
    </div>--}}
    @include('public/index_img')
</div>
