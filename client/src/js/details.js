//引用css
import "../sass/public.scss";
import "../sass/details.scss";
//引用JS
import "../js/fn.js";
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

$(function() {
    // tab选项卡
    $(".tab-menu-item").mouseover(function() {
        let _index = $(this).index();
        $(".tab-box-item").eq(_index).show().siblings().hide();
        $(this).addClass("show").siblings().removeClass("show");
    })

    // 商品数量加减

    $(".reduce").click(function() {
        var n = $(".number").text();
        var num = parseInt(n) - 1;
        if (num == 0) { return; }
        $(this).next().html(num);
    });

    $(".plus").click(function() {

        let n = $(".number").text();
        let num = parseInt(n) + 1;
        if (num == 0) { return; }
        $(this).prev().html(num);

    })


    function loaddingDetails(data) {
        let htmlStr = "";
        let title = $(".title-iphone");
        data.forEach((obj, index) => {
            htmlStr += `
            <span>${obj.title}</span><span>${(function(){
            let v_des=$(".v-des>.select");
         console.log(v-des)

            })}</span>
                `
        });

    }

    fetch("http://127.0.0.1:8081/details?id=?", {
            method: "GET"
        }).then(request => request.json())
        .then(data => {
            console.log(data)

        })




})