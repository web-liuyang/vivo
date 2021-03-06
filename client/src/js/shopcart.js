//引用css
import "../sass/public.scss";
import "../sass/shopcart.scss";
//引用JS
import "../js/fn.js";
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

$.ajax({
    type: "POST", //默认get
    url: "http://127.0.0.1:8081/chaxunshopcart", //默认当前页
    data: {
        username: JSON.parse(sessionStorage.user).username
    }, //格式{key:value}
    dataType: "json",
    beforeSend: function() {}, //请求发送前回调,常用验证
    success: function(response) { //请求成功回调
        let $tbody = $(".shop-car>tbody");
        let $total = $(".total");
        let htmlStr = "";
        let totalStr = "";

        response.forEach(item => {
            htmlStr += `                <tr>
            <td><img src="http://127.0.0.1:8081/images/${(function(){
                if(item.classname_1=="iphone"){
                    return "iphone";
                }else{
                    return "parts";
                }
            })()}/${item.url}.png"></td>
            <td class="title">${item.title}</td>
            <td>${item.price}</td>
            <td>${item.number}</td>
            <td>${item.price}</td>
            <td class="xj">${item.price * item.number}</td>
            <td class="del">删除</td>
            <td class="js">结算</td>
        </tr>`
        })
        $tbody.html(htmlStr);
        let jiage = 0;
        $(".xj").each((index, item) => {
            let $jg = parseInt($(".xj")[index].innerHTML);
            console.log(typeof($jg))
            jiage += $jg;
        })
        totalStr += `
        <section class="fir-sec">
       
        <p>商品总价:￥${jiage}</p>
        </section>
        <section  class="sec-sec"><p>去结算</p></section>
        `
        $total.html(totalStr);
        //删除
        $(".del").each((index, item) => {
            $(item).click(function() {
                let username = JSON.parse(sessionStorage.user).username;
                let title = $(".title")[index].textContent;
                $.ajax({
                    type: "POST", //默认get
                    url: "http://127.0.0.1:8081/delshopcart", //默认当前页
                    data: {
                        'title': title,
                        'username': username
                    }, //格式{key:value}
                    dataType: "json",
                    beforeSend: function() {}, //请求发送前回调,常用验证
                    success: function(response) { //请求成功回调

                    },
                    error: function(e) { //请求超时回调
                        if (e.statusText == "timeout") {
                            alert("请求超时");
                        }
                    },
                    complete: function() {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
                });
                $($(this).parents()[0]).remove();
            })
        })

    },
    error: function(e) { //请求超时回调
        if (e.statusText == "timeout") {
            alert("请求超时");
        }
    },
    complete: function() {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
});