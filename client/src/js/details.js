//引用css
import "../sass/public.scss";
import "../sass/details.scss";
//引用JS
require("../js/public")
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';



$(function() {


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
                <p class="desc">积分:购买即送${data.price}积分</p>
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
                <p class="c-de select"><span class="${data.color_1}"></span>${data.color_1_name}</p>
                <p class="c-de"><span class="${data.color_2}"></span>${data.color_2_name}</p>
                <p class="c-de"><span class="${data.color_3}"></span>${data.color_3_name}</p>
                <p class="c-de"><span class="${data.color_4}"></span>${data.color_4_name}</p>
                <p class="c-de"><span class="${data.color_5}"></span>${data.color_5_name}</p>
                <p class="c-de"><span class="${data.color_6}"></span>${data.color_6_name}</p>
               
            </div>
        </div>
        <div class="add">
            <div class="num">
                <span class="reduce">-</span><span class="number">1</span><span class="plus">+</span>
            </div>
        </div>
     
        <div class="js">
            <span class="addshopcart">加入购物车</span>
            <span> 立即购买</span>
        </div>`;
        $mesg.html(htmlStr);
        // 商品数量加减
        $(".reduce").click(function() {
            var n = $(".number").text();
            var num = parseInt(n) - 1;
            if (num == 0) {
                return;
            }
            $(this).next().html(num);
        });
        $(".plus").click(function() {
            let n = $(".number").text();
            let num = parseInt(n) + 1;
            if (num == 0) {
                return;
            }
            $(this).prev().html(num);
        })
        $(".addshopcart").click(function() {
            if (!sessionStorage.user) {
                alert("请登录后加入购物车");
                location.href = "http://127.0.0.1:8090/static/pages/login.html";
            }
            let $title = $(".title-iphone").children().text();
            let $price = $(".price").text().split("￥")[1];
            let $number = $(".number").text();
            let $username = JSON.parse(sessionStorage.user).username;
            let $url = data.color_1_url_1;
            fetch('http://127.0.0.1:8081/addshopcart', {
                method: 'post',
                body: JSON.stringify({
                    classname_1: data.classname_1,
                    username: $username,
                    title: $title,
                    price: $price,
                    number: $number,
                    url: $url
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then(function(data) {
                alert(data.tishi)
            });
            // console.log($url);

        })



        // 拼接图片
        let imgStr = "";
        let $images = $(".img");

        if (data.classname_1 == "parts") {
            imgStr += `
            <div class="tab-box">
            <img class="tab-box-item show" src="http://127.0.0.1:8081/images/parts/${data.color_1_url_1}.png" alt="">
            <img class="tab-box-item " src="http://127.0.0.1:8081/images/parts/${data.color_1_url_2}.png" alt="">
            <img class="tab-box-item" src="http://127.0.0.1:8081/images/parts/${data.color_1_url_3}.png" alt="">
            <img class="tab-box-item" src="http://127.0.0.1:8081/images/parts/${data.color_1_url_4}.png" alt="">
            </div>
            <div class="tab-menu">
            <img class="tab-menu-item" src="http://127.0.0.1:8081/images/parts/${data.color_1_url_1}.png" alt="">
            <img class="tab-menu-item" src="http://127.0.0.1:8081/images/parts/${data.color_1_url_2}.png" alt="">
            <img class="tab-menu-item" src="http://127.0.0.1:8081/images/parts/${data.color_1_url_3}.png" alt="">
            <img class="tab-menu-item" src="http://127.0.0.1:8081/images/parts/${data.color_1_url_4}.png" alt="">
            </div>`;
            // console.log($(".v-title"))
            $(".v-title").remove();
            //判断版本为空
            if (data.vsn_1 == "" || "null" || "NULL") {
                $(".vsn").remove()
            }
        } else {
            imgStr += `
            <div class="tab-box">
            <img class="tab-box-item show" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_1}.png" alt="">
            <img class="tab-box-item " src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_2}.png" alt="">
            <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_3}.png" alt="">
            <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_4}.png" alt="">
            </div>
            <div class="tab-menu">
            <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_1}.png" alt="">
            <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_2}.png" alt="">
            <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_3}.png" alt="">
            <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data.color_1_url_4}.png" alt="">
            </div>`;

        }
        $images.html(imgStr);

        $(".tab-box-item.show").dblclick(function(){
            $(this).attr("src");
            // console.log($(this).attr("src"));
            $(".zhezhao #img img").attr("src",$(this).attr("src"));
            $(".zhezhao").addClass("block")
        })
        $(".zhezhao>p").click(function(){
            $(".zhezhao").removeClass("block")
        })
        //鼠标移入事件
        $(".tab-menu-item").mouseenter(function() {
            let $index = $(this).index();
            $($(".tab-box-item")[$index]).addClass("show").siblings().removeClass("show");

            $(".tab-box-item.show").dblclick(function(){
                $(this).attr("src");
                // console.log($(this).attr("src"));
                $(".zhezhao #img img").attr("src",$(this).attr("src"));
                $(".zhezhao").addClass("block")
            })
            $(".zhezhao>p").click(function(){
                $(".zhezhao").removeClass("block")
            })
        })

        // 改变版本框
        $(".v-de").click(function() {
            $(this).addClass("select").siblings().removeClass("select");
            let $vsn = $(".vsn");
            let $select = $(".v-des .select").html();
            $vsn.html($select);
        })

        // 改变颜色框
        $(".c-de").each(function(index, item) {
            $(item).click(function() {
                //切换颜色
                $(this).addClass("select").siblings().removeClass("select");
                // let classname = this.children[0].className;
                let imgStr = "";
                let $images = $(".img");
                let key = `color_${index+1}_url_`;
                if (data.classname_1 == "parts") {
                    imgStr += `
                    <div class="tab-box">
                    <img class="tab-box-item show" src="http://127.0.0.1:8081/images/parts/${data[key+"1"]}.png" alt="">
                    <img class="tab-box-item" src="http://127.0.0.1:8081/images/parts/${data[key+"2"]}.png" alt="">
                    <img class="tab-box-item" src="http://127.0.0.1:8081/images/parts/${data[key+"3"]} .png" alt="">
                    <img class="tab-box-item" src="http://127.0.0.1:8081/images/parts/${data[key+"4"]} .png" alt="">
                    </div>
                    <div class="tab-menu">
                    <img class="tab-menu-item" src="http://127.0.0.1:8081/images/parts/${data[key+"1"]}.png" alt="">
                    <img class="tab-menu-item" src="http://127.0.0.1:8081/images/parts/${data[key+"2"]}.png" alt="">
                    <img class="tab-menu-item" src="http://127.0.0.1:8081/images/parts/${data[key+"3"]}.png" alt="">
                    <img class="tab-menu-item" src="http://127.0.0.1:8081/images/parts/${data[key+"4"]}.png" alt="">
                    </div>`;
                    $(".v-title").remove();
                } else {
                    imgStr += `
                    <div class="tab-box">
                    <img class="tab-box-item show" src="http://127.0.0.1:8081/images/iphone/${data[key+"1"]}.png" alt="">
                    <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data[key+"2"]}.png" alt="">
                    <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data[key+"3"]}.png" alt="">
                    <img class="tab-box-item" src="http://127.0.0.1:8081/images/iphone/${data[key+"4"]}.png" alt="">
                    </div>
                    <div class="tab-menu">
                    <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data[key+"1"]}.png" alt="">
                    <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data[key+"2"]}.png" alt="">
                    <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data[key+"3"]}.png" alt="">
                    <img class="tab-menu-item" src="http://127.0.0.1:8081/images/iphone/${data[key+"4"]}.png" alt="">
                    </div>`;
                }

                $images.html(imgStr);
                $(".tab-box-item.show").dblclick(function(){
                    $(this).attr("src");
                    console.log($(this).attr("src"));
                    $(".zhezhao #img img").attr("src",$(this).attr("src"));
                    $(".zhezhao").addClass("block")
                })
                $(".zhezhao>p").click(function(){
                    $(".zhezhao").removeClass("block")
                })
                //鼠标移入事件
                $(".tab-menu-item").mouseenter(function() {
                        let $index = $(this).index();
                        $($(".tab-box-item")[$index]).addClass("show").siblings().removeClass("show");
                        $(".tab-box-item.show").dblclick(function(){
                            $(this).attr("src");
                            console.log($(this).attr("src"));
                            $(".zhezhao #img img").attr("src",$(this).attr("src"));
                            $(".zhezhao").addClass("block")
                        })
                        $(".zhezhao>p").click(function(){
                            $(".zhezhao").removeClass("block")
                        })
                    })
                    //拼接颜色到title
                let $color = $(".color-s");
                let $select_color = $(".c-des .select").html();
                $color.html($select_color);
            })

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

    let id = location.search.split("?");
    id = id[1].split("=")[1];
    fetch(`http://127.0.0.1:8081/details?id=${id}`, {
            method: "GET"
        }).then(request => request.json())
        .then(data => {
            loaddingDetails(data)
        })


})

