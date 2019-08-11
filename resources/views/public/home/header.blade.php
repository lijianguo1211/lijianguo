<div class="jumbotron p-3 p-md-5 text-white rounded bg-dark">
    @foreach($ask as $item)
        <div class="col-md-6 px-0">
            <h1 class="display-4 font-italic">{{ $item['title'] }}</h1>
            <p class="lead my-3">{{ $item['content'] }}</p>
            <p class="lead mb-0"><a href="{{ $item['url_path'] }}" class="text-white font-weight-bold">{{ $item['url_name'] }}</a></p>
        </div>
    @endforeach()
</div>
