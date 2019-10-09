//引用css
import "../sass/public.scss";
import "../sass/index.scss";
//引用JS
import "../js/fn.js";
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';






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
    $(".to-top").click(function() {
        $("html,body").animate({ scrollTop: 0 }, 1000)
    });
})





function loaddingIndex(data) {
    let htmlStr = "";
    let lis_box = $(".list-box ul");

    data.forEach((obj, index) => {
        htmlStr += `<li>
                <img src="http://127.0.0.1:8081/images/iphone/${obj.color_1_url_1}.png">
                <p class="name">${obj.title}</p>
                </li>
                `
    });
    lis_box.html(htmlStr);
}

fetch("http://127.0.0.1:8081/in?classname_2=IQOO", {
        method: "GET"
    }).then(request => request.json())
    .then(data => {
        console.log(data)
        loaddingIndex(data);
    })