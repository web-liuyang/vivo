import {
    Z_BLOCK
} from "zlib";
import {
    loaddingerji
} from '../js/fn.js';
//公共


//二级菜单
loaddingerji('IQOO', 0)
loaddingerji('NEX', 1)
loaddingerji('X', 2)
loaddingerji('S', 3)
loaddingerji('Z', 4)
loaddingerji('Y', 5)
loaddingerji('U', 6)
loaddingerji('music', 7, 'parts')

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


// 注销登录
$(".log-out").click(function() {
    let con = confirm("您确定退出登录吗？");
    if (con == true) {
        sessionStorage.removeItem("user");
        location.href = "http://127.0.0.1:8090/static/pages/login.html";
    }
})

//跳转购物车
let $shopcart = $(".dropdown-item")[1];
$($shopcart).click(function() {
    if (!sessionStorage.user) {
        alert("请登录后前往购物车");
        location.href = "http://127.0.0.1:8090/static/pages/login.html";
    } else {
        location.href = "http://127.0.0.1:8090/static/pages/shopcart.html";
    }
})



// 回到顶部
$(document).scroll(function() {
    let offset = $(document).scrollTop();
    if (offset > 600) {
        $(".to-top").css({
            "display": "block"
        })
    }
    if (offset < 600) {
        $(".to-top").css({
            "display": "none"
        })
    }

})


$(".to-top").click(function() {
    $("html,body").animate({
        scrollTop: 0
    }, 1000)
});
//搜索
$("#search").click(function(e){
    $(".search").addClass("block");
    e.stopPropagation();
})
$(".off").click(function(e){
    $(".search").removeClass("block");
    e.stopPropagation();
})
$(".sousuo").click(function(e){
    location.href = "http://127.0.0.1:8090/static/pages/product.html"
    e.stopPropagation();
})