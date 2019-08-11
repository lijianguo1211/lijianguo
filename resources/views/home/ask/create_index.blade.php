@extends('public/base')

@section('content')
    <main role="main" class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-dark" role="alert">
                    等待发布
                </div>
                @if (count($errors) > 0)
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                <form action="{{ route('home.ask.add') }}" method="post">
                    <div class="form-group">
                        <label for="title">主题：</label>
                        <input type="text" name="title" class="form-control" id="title" aria-describedby="titleHelp"  placeholder="主题">
                        <small id="titleHelp" class="form-text text-muted">对于主题的精简归纳</small>
                    </div>
                    <div class="form-group">
                        <label for="label">标签：</label>
                        <input type="text" name="label" class="form-control" id="label" aria-describedby="labelHelp" placeholder="标签，分类，多个之间用逗号隔开">
                        <small id="labelHelp" class="form-text text-muted">对主题的分类归纳，多个之间用逗号隔开</small>
                    </div>

                    <div class="form-group">
                        <label for="myEditor">内容：</label>
                        <div id="test-editormd">
                            <textarea name="test-editormd" class="form-control" style="display:none;"></textarea>
                        </div>
                    </div>
                    {{ csrf_field() }}
                    <button type="submit" class="btn btn-secondary btn-lg btn-block">Submit</button>
                </form>
            </div>
           <div style="padding-bottom: 100px"></div>
        </div>
    </main>
@endsection

@section('js')
    @include('vendor.editor.encode',['editors'=>['test-editormd']])
@endsection
