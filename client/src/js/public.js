import { Z_BLOCK } from "zlib";

//公共
$(function() {


    // 折叠栏

    //二级菜单
    /*     $erji = $(".nav-item.box-item");
        $erjisun = $(".nav-item.box-item ul");
        $erji.mouseenter(function () { 
            index = $(this).index();
            // console.log($(this).index())
            $erjisun[index].classList.add("block")
        });
        $erji.mouseleave(function () { 
            index = $(this).index();
            // console.log($(this).index())
            $erjisun[index].classList.remove("block")
        });
     */





    // 导航栏折叠后的折叠按钮
    $(".unfold-btn").click(function() {
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


    $(".box-item").hover(function() {

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

    }, function() {
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