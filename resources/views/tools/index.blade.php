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
                            <button type="button" class="select_type" class="btn dropdown-toggle" data-toggle="dropdown">
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
                        <span class="fanyi_en">汉语</span>
                        <span class="en-zh" onclick="selectTypes();"></span>
                        <span class="fanyi_zh">英语</span>
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
                        <div class="fanyi_top"></div>
                        <textarea class="form-control" rows="5" id="comments"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="fanyi_clearance"></div>
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
                        if (result.status) {
                            var fanyi = result.data.trans_result[0].dst;
                            $("#comments").val(fanyi);
                            console.log(fanyi);
                        } else {

                        }

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
            var texts = $("#fanyi_type").html();
            console.log(texts);
            $(".select_type").text(texts);
        }

        function selectTypes() {
            console.log(213);
            console.log($(".fanyi_en").text());
            console.log($(".fanyi_zh").text());
        }
    </script>
@endsection
