<?php

    header('Content-Type:text/html;charset=utf8');
    // 这个文件就是路由文件

    // 默认的目录名称
    $dir = 'main';
    // 默认的文件名称
    $fileName = 'index';

    if(array_key_exists('PATH_INFO',$_SERVER)){
        // 路径存在
        $path = $_SERVER['PATH_INFO'];

        $str = substr($path,1);
        $ret = explode('/',$str);

        if(count($ret) == 2){
            // 两层路径  覆盖默认路径
            $dir = $ret[0];
            // 覆盖默认文件名称
            $fileName = $ret[1];
        }
        else {
            // 其他情况统一跳转到登录页
            $fileName = 'login';
        }

    }

    // 嵌入子页面
    include('./view/'.$dir.'/'.$fileName.'.html');


?>
