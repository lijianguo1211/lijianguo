@extends('public/tools_base')

@section('content')
    <div style="margin-top: 15px"></div>
    <main role="main" class="container">
        <div class="row">
            <div class="col-sm-6 col-md-6 blog-main">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title tools_fanyi_title">
                            <span>翻译：</span>
                        </div>
                        <div class="dropdown tools_fanyi_select">
                            <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                                选择渠道
                            </button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="javascript:void(0);" onclick="selectTranslate(1);">百度</a>
                                <a class="dropdown-item" href="javascript:void(0);" onclick="selectTranslate(2);">网易</a>
                                <a class="dropdown-item" href="javascript:void(0);" onclick="selectTranslate(3);">谷歌</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <span>英语</span><span class="en-zh" onclick="selectTypes();"></span><span>汉语</span>
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                        <input type="hidden" id="fanyi_type" value="" name="translate">
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn-primary btn-block" id="fanyi_onSubmit">翻译</button>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-md-6 blog-main">
                <div class="card">
                    <div class="card-header">
                        <div class="card-title">
                            <span>显示</span>
                        </div>
                    </div>
                    <div class="card-body">
                        <textarea class="form-control" rows="5" id="comment"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div style="margin-bottom: 20px;"></div>
@endsection

@section('js')
    <script>
        $(document).ready(function(){
            $("#fanyi_onSubmit").click(function(){
                var content = $("#comment").val();
                var tag_token = "{{ csrf_token() }}";
                $.ajax({
                    type:'post',
                    url:"{{ route('baidu.fanyi') }}",
                    data:{content: content,'_token':tag_token},
                    dataType: 'json',
                    success:function(result){
                        console.log(result.data);
                    },
                    error:function(e) {
                        console.log(e);
                    }
                });
            });
        });

        function selectTranslate(num) {
            console.log(num);
            $("#fanyi_type").val(num);
        }
    </script>
@endsection
