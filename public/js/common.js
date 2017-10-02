define(['jquery', 'template', 'cookie'], function ($, template) {

    // 控制左侧菜单的折叠和展开
    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });

    // 实现退出功能
    $('#logoutBtn').click(function () {
        $.ajax({
            type: 'post',
            url: '/api/logout',
            dataType: 'json',
            success: function(data) {
                if(data.code == 200){
                    location.href = '/login';
                }
            }
        })
    });

    // 如果登录session不存在，且当前页面不是登录页，就跳转到登录页
    var flag = $.cookie('PHPSESSID');
    if(!flag && location.pathname != '/login'){
        location.href = '/login';
    }

    // 填充头像
    var loginInfo = $.cookie('loginfo');
    loginInfo = loginInfo && JSON.parse(loginInfo);
    var tpl = '<div class="avatar img-circle"><img src="{{tc_avatar}}"></div><h4>{{tc_name}}</h4>';
    var html = template.render(tpl,loginInfo);
    $('.aside profile').html(html);    
    
})
