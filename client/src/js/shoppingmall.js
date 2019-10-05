//引用css
import "../sass/public.scss";
import "../sass/shoppingmall.scss";

//引用JS
import "../js/fn.js";
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

function loaddingpanic(data) {
    let htmlStr = "";
    let parent = $(".panic .panicgoods");
    console.log(parent)
    data.forEach((obj, index) => {
        htmlStr += `
        <li>
        <img src="http://127.0.0.1:8081/images/fengll/${obj.img}">
        <p>${obj.sellpoint}</p>
        <h3>${obj.name}</h3>
        <h4>${obj.dec}></h4>
        <p><span class="price">￥${obj.price}<span class="oldprice">￥${obj.oldprice}</p>
        </li>
    `
    })

    parent.html(htmlStr);
    // console.log(parent.innerHTML);
    console.log(1)
}

fetch("http://127.0.0.1:8081/shop/panic")
    .then(response => response.json())
    .then(res => {
        console.log(res);
        loaddingpanic(res);
    })

//偏移
$(function(){
    $("")
})

//定时器
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
// 定时函数
var daojishi = setInterval(function() {
    var s1 = new Date("2019/10/1 00:00:00");
    var s2 = new Date();
    var s3 = s1 - s2;
    if (s3 == 0) {
        clearTimeout(daojishi);
    } else {

        var hours = Math.floor(s3 / 1000 / 60 / 60);
        var minutes = Math.floor(s3 / 1000 / 60 % 60);
        var seconds = Math.floor(s3 / 1000 % 60);

        hour.textContent = hours;
        minute.textContent = minutes;
        second.textContent = seconds;
    }
}, 1000)