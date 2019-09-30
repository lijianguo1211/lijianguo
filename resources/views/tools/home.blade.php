@extends('public/tools_base')

@section('content')
    <div style="margin-top: 15px"></div>
    <main role="main" class="container">
        <div class="row">
            @empty($tools)
                <div class="col-md-3">

                </div>
            @else
                @foreach($tools as $item)
                    <div class="col-md-3">
                        <div class="card">
                            <img class="card-img-top mg-fluid" src="http://laravel.blog.abc/upload/hotspot/1.jpg" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">{{ $item['name'] }}</h4>
                                <p class="card-text">{{ $item['desc'] }}</p>
                            <a href="{{ route($item['url']) }}">
                                go to
                            </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            @endempty

        </div>
    </main>
    <div class="fanyi_clearance"></div>
@endsection

