//公共
$(function() {
    /* 首页 */

    $(document).scroll(function() {
        let offset = $(document).scrollTop();
        if (offset > 100) {
            $(".app-bar").addClass("flexd");
            $(".respond-nav").addClass("flexd")
        }
        if (offset < 100) {
            $(".app-bar").removeClass("flexd")
        }

    })


    // 折叠栏
    let $boxItem = $(".box-item");
    $boxItem.hover(function() {
            $(".list-box").slideDown(500);
        }, function() {
            $(".list-box").slideUp(500);
        })
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


})