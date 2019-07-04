@extends('public/tools_base')
@section('css')
    <link rel="stylesheet" href="{{ url('vendor/laravel-admin/bootstrap-fileinput/css/fileinput.min.css') }}">
@endsection

@section('content')
    <div style="margin-top: 15px"></div>
    <main role="main" class="container">
        <div class="row">

            <div class="col-sm-10 col-md-10 blog-main">
                <h1>上传文件</h1>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">文件上传</h5>
                            <label for="img"></label>
                            <input type="file" name="image" id="img" class="file" accept="image/*" multiple="multipart/form-data">
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">文件上传</h5>
                        <form action="{{ route('tools.apiUploadFileImage') }}" multiple="multipart/form-data" method="post">
                            <div class="form-group">
                                <label for="img"></label>
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <input type="file" name="images" id="img" value="">
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>



@endsection

@section('js')
    <script src="{{ url('vendor/laravel-admin/bootstrap-fileinput/js/fileinput.min.js') }}"></script>
    <script>
        $('document').on('ready', function() {
            $("#img").fileinput({
                uploadUrl: "{{ route('tools.apiUploadFileImage') }}",
                enableResumableUpload: true,
                resumableUploadOptions: {
                    // uncomment below if you wish to test the file for previous partial uploaded chunks
                    // to the server and resume uploads from that point afterwards
                    // testUrl: "http://localhost/test-upload.php"
                },
                uploadExtraData: {
                    'uploadToken': 'SOME-TOKEN', // for access control / security
                    '_token': "{{ csrf_token() }}"
                },
                maxFileCount: 5,
                allowedFileTypes: ['image'],    // allow only images
                showCancel: true,
                uploadAsync: true,
                initialPreviewAsData: true,
                overwriteInitial: false,
                // initialPreview: [],          // if you have previously uploaded preview files
                // initialPreviewConfig: [],    // if you have previously uploaded preview files
                theme: 'fas',
                deleteUrl: "http://localhost/file-delete.php"
            }).on('fileuploaded', function(event, previewId, index, fileId) {
                console.log('File Uploaded', 'ID: ' + fileId + ', Thumb ID: ' + previewId);
            }).on('fileuploaderror', function(event, data, msg) {
                console.log('File Upload Error', 'ID: ' + data.fileId + ', Thumb ID: ' + data.previewId);
            }).on('filebatchuploadcomplete', function(event, preview, config, tags, extraData) {
                console.log('File Batch Uploaded', preview, config, tags, extraData);
            });
        });
    </script>
@endsection
