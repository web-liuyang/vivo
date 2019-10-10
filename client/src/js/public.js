import {
    Z_BLOCK
} from "zlib";

//公共
$(function () {

    // 折叠栏
    //二级菜单
    let $sections = $(".nav-item.box-item>section")
    $.ajax({
        type: "GET",  //默认get
        url: "http://127.0.0.1:8081/shop",  //默认当前页
        data: "data",  //格式{key:value}
        dataType: "json",
        beforeSend: function () {}, //请求发送前回调,常用验证
        success: function (response) {  //请求成功回调
            
        },
        error: function (e) {  //请求超时回调
            if(e.statusText == "timeout"){
                alert("请求超时");
            }
        },
        complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    });
    
    // 导航栏折叠后的折叠按钮
    $(".unfold-btn").click(function () {
        $("header").toggleClass("none");
        $("main").toggleClass("none");
        $("footer").toggleClass("none");

        let $logobar = $(".logobar")
        if ($logobar.hasClass("none")) {
            $logobar.removeClass("none");
            $(".search-bar").removeClass("block");
        } else {
            $logobar.addClass("none");
            $(".search-bar").addClass("block");
            $("body,html").css({
                "background": "#ffffff"
            })
        }


    })

    $(".box-item").hover(function () {

        $(".list-box").css({
            "display": "block"
        });
        $(".box-item span").css({
            "color": "#000000"
        });
        $(".list-ll a").css({
            "color": "#000000"
        });
        $(".navbar-brand").css({
            "color": "#000000"
        })

    }, function () {
        $(".list-box").css({
            "display": "none"
        });
        $(".box-item span").css({
            "color": "white"
        });
        $(".list-ll a").css({
            "color": "white"
        });
        $(".navbar-brand").css({
            "color": "white"
        });
    })

    // 判断登录状态
    if (!sessionStorage.user) {
        $(".dl-login").css({
            "display": "block"
        });
        $(".zc-regist").css({
            "display": "block"
        });
        $(".personal-list").css({
            "display": "none"
        })
    } else {
        $(".dl-login").css({
            "display": "none"
        });
        $(".zc-regist").css({
            "display": "none"
        });
        $(".personal-list").css({
            "display": "block"
        })
    }



})