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
        let $mesg = $(".mesg");
        data = data[0];
        htmlStr += `<p class="title-iphone">
        <span>${data.title}</span>
        <span class="vsn">${data.vsn_1}</span>
        <span class="color-s">${data.color_1_name}</span></p>
        <p class="des">${data.describe}</p>
        <div class="pri">
            <section>
                <p class="price">￥${data.price}</p>
            </section>
            <section>
                <p class="desc">积分:购买即送1898积分</p>
                <p class="desc">下单赠券:购机订单完成后即赠配件券</p>
            </section>
        </div>
        <div class="zc">
            <span class="wz">商品支持：</span><span class="wz"><span class="iconfont">&#xe623;</span>花呗分期</span><span class="wz"><span class="iconfont">&#xe623;</span>以旧换新</span><span class="wz"><span class="iconfont">&#xe623;</span>积分抵现</span>
        </div>
        <div class="version">
            <p class="v-title">
                版本
            </p>
                <div class="v-des">
                <p class="v-de select">${data.vsn_1}</p>
                <p class="v-de">${data.vsn_2}</p>
                <p class="v-de">${data.vsn_3}</p>
                <p class="v-de">${data.vsn_4}</p>
                <p class="v-de">${data.vsn_5}</p>
                <p class="v-de">${data.vsn_6}</p>
            </div>
           
           
        </div>
        <div class="color">
            <p class="c-title">
            颜色
            </p>
            <div class="c-des">
                <p class="c-de select"><span class="black"></span>${data.color_1_name}</p>
                <p class="c-de"><span class="purple"></span>${data.color_2_name}</p>
                <p class="c-de"><span class="purple"></span>${data.color_3_name}</p>
                <p class="c-de"><span class="purple"></span>${data.color_4_name}</p>
                <p class="c-de"><span class="purple"></span>${data.color_5_name}</p>
                <p class="c-de"><span class="purple"></span>${data.color_6_name}</p>
               
            </div>
        </div>
        <div class="add">
            <p>加入购物车</p>
            <div class="num">
                <span class="reduce">-</span><span class="number">0</span><span class="plus">+</span>
            </div>
        </div>
        <div class="total">
            <p>￥${data.price}</p>
        </div>
        <div class="js">
            <span>加入购物车</span>
            <span> 立即购买</span>
        </div>`;
        $mesg.html(htmlStr);




        // 拼接图片
        let imgStr = "";
        let $images = $(".img");
        console.log(data)
        imgStr += `
           <div class="tab-box">
           <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_1}.png" alt="">
           <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_2}.png" alt="">
           <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_3}.png" alt="">
           <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_4}.png" alt="">
           </div>
           <div class="tab-menu">
           <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_1}.png" alt="">
           <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_2}.png" alt="">
           <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_3}.png" alt="">
           <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_4}.png" alt="">
           </div>`;
        $images.html(imgStr);


        // 改变版本框
        $(".v-de").click(function() {
            $(this).addClass("select").siblings().removeClass("select");
            let $vsn = $(".vsn");
            let $select = $(".v-des .select").html();
            console.log($select)
            $vsn.html($select)


        })

        // 改变颜色框
        $(".c-de").click(function() {
            $(this).addClass("select").siblings().removeClass("select");
            let $color = $(".color-s");
            let $select_color = $(".c-des .select").html();
            console.log($select_color)
            $color.html($select_color);
        })


        // 清除版本为空
        let $vsn_null = $(".v-de");
        $vsn_null.each(function(index, item) {
            if (/null/.test(item.innerHTML)) {
                $vsn_null[index].remove();
            }
        })

        // 清除颜色为空
        let $color_null = $(".c-de");
        $color_null.each(function(index, item) {
            if (/null/.test(item.innerHTML)) {
                $color_null[index].remove();
            }
        })

    }






    fetch("http://127.0.0.1:8081/details?id=2", {
            method: "GET"
        }).then(request => request.json())
        .then(data => {
            loaddingDetails(data)
        })



    // tab选项卡
    $(".tab-menu-item").mouseover(function() {
        let _index = $(this).index();
        $(".tab-box-item").eq(_index).show().siblings().hide();
        $(this).addClass("show").siblings().removeClass("show");
    })



})