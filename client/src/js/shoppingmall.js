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