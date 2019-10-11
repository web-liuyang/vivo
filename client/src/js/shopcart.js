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
    data: { username: JSON.parse(sessionStorage.user).username }, //格式{key:value}
    dataType: "json",
<<<<<<< HEAD
    beforeSend: function() {}, //请求发送前回调,常用验证
    success: function(response) { //请求成功回调
        console.log(response)
=======
    beforeSend: function () {}, //请求发送前回调,常用验证
    success: function (response) {  //请求成功回调
>>>>>>> da0a12dbbf3cde1a18b2fd17050694556f51e29b
        let $tbody = $(".shop-car>tbody");
        let htmlStr = "";
        response.forEach(item => {
            htmlStr += `                <tr>
            <td><img src="http://127.0.0.1:8081/images/${(function(){
                if(item.classname_1=="iphone"){
                    return "iphone";
                }else{
                    return "parts";
                }
            })()}/${item.url}.png"></td>
            <td>${item.title}</td>
            <td>${item.price}</td>
            <td>${item.number}</td>
           
            <td>${item.price}</td>
            <td>${item.price * item.number}</td>
            <td>删除</td>
        </tr>`
        })
        $tbody.html(htmlStr);
    },
    error: function(e) { //请求超时回调
        if (e.statusText == "timeout") {
            alert("请求超时");
        }
    },
    complete: function() {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
});