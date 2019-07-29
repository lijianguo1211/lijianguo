<div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
    @foreach($ask as $item)
        <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">{{ $item['title'] }}</h1>
            <p class="lead my-3">{{ $item['content'] }}</p>
            <p class="lead mb-0"><a href="{{ $item['url_path'] }}" class="text-white font-weight-bold">{{ $item['url_name'] }}</a></p>
        </div>
    @endforeach()
</div>

<div class="row mb-2">
    @foreach($result as $item)
        <div class="col-md-6">
            <div class="card flex-md-row mb-4 box-shadow h-md-250">
                <div class="card-body d-flex flex-column align-items-start">
                    {{--<strong class="d-inline-block mb-2 text-success">Design</strong>--}}
                    <h3 class="mb-0">
                        <a class="text-dark card-title" href="#">{{ $item['title'] }}</a>
                    </h3>
                    <div class="mb-1 text-muted"></div>
                    <p class="card-text mb-auto">{{ $item['content'] }}</p>
                    <a href="#">{{ $item['username'] }}</a>
                </div>
                <img class="img-thumbnail img-responsive card-img-right flex-auto d-none d-md-block" width="70%" src="{{ $item['image_path'] }}" alt="{{ $item['title'] }}">
            </div>
        </div>
    @endforeach
</div>
