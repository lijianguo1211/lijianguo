
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <link rel="icon" href="{{ url('img/ico/black_32px_1165127_easyicon.net.ico') }}">

    <title>花儿尊上</title>
    <!-- Bootstrap core CSS -->
    <link href="{{mix("css/app.css")}}" rel="stylesheet">
</head>

<body>

<div id="app">
    {{--header--}}
    <div class="container">
        @include('public/header')
    </div>


    @yield('content')

    <div style="padding-bottom: 100px;"></div>

    <footer-component></footer-component>
    {{--foot--}}
</div>

<script src="{{mix("js/app.js")}}"></script>
@yield('js')


<script type="text/javascript">var cnzz_protocol = (("https:" == document.location.protocol) ? "https://" : "http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1277155952'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s23.cnzz.com/z_stat.php%3Fid%3D1277155952%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));</script>
</body>
</html>
