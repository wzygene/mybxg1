define(['jquery', 'cookie'], function ($) {
    $('#loginForm').on('submit',function () {
        var formData = $(this).serialize();
        $.ajax({
            type: 'post',
            url: '/api/login',
            dataType: 'json',
            data: formData,
            success: function (info) {
                if(info.code == 200){
                    $.cookie('loginfo', JSON.stringify(info.result), {path: '/'});
                    location.href = '/';
                }
            }
        });
        return false;
    })
})
