//引用css
import "../sass/shopub.scss";
import "../sass/public.scss";
import "../sass/shoppingmall.scss";

//引用JS
import "../js/fn.js";
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
//抢购

function loaddingpanic(data) {
    let htmlStr = "";
    let parent = $(".panic .panicgoods");
    data.forEach((obj, index) => {
        htmlStr += `
        <li class="item">
        <img src="http://127.0.0.1:8081/images/fengll/${obj.img}">
        <p>${obj.sellpoint}</p>
        <h3>${obj.name}</h3>
        <h4>${obj.dec}></h4>
        <p><span class="price">￥${obj.price}<span class="oldprice">￥${obj.oldprice}</p>
        </li>
    `
    })
    parent.html(htmlStr);
}
fetch("http://127.0.0.1:8081/panic")
    .then(response => response.json())
    .then(res => {
        loaddingpanic(res);
    })

//热卖专区
function loaddingHotpart(data) {
    let htmlStr = "";
    let parent = $(".hotpart .hotgoods");
    data.forEach((obj, index) => {
        htmlStr += `
        <li class="box item" id="${obj.id}"  value="${obj.classname_1}">
        <img src="http://127.0.0.1:8081/images/iphone/${obj.color_1_url_1}.png">
        <p class="name"><span>${obj.title}</span><span>${obj.vsn_1}</span></p>
        <p class="dec">${obj.describe}</p>
        <p class="price">￥${obj.price}</p>
    </li>     
        `
    })
    parent.html(htmlStr);
}
fetch("http://127.0.0.1:8081/Hotpart?classname_3=hot")
    .then(response => response.json())
    .then(res => {
        loaddingHotpart(res);
    })

//精品手机
function loaddingBoutique(data) {
    let htmlStr = "";
    let parent = $(".boutique .btqgoods");
    data.forEach((obj, index) => {
        htmlStr += `
        <li class="boxs item" id="${obj.id} "value="${obj.classname_1}">
        <img src="http://127.0.0.1:8081/images/iphone/${obj.color_1_url_1}.png">
        <p class="name"><span>${obj.title}</span><span>${obj.vsn_1}</span></p>
        <p class="dec">${obj.describe}</p>
        <p class="price">￥${obj.price}</p>
    </li>       `
    })
    parent.html(htmlStr);
}

fetch("http://127.0.0.1:8081/boutique?classname_3=jingpiniphone")
    .then(response => response.json())
    .then(res => {
        loaddingBoutique(res);
    })

//精品配件
function loaddingMountings(data) {
    let htmlStr = "";
    let parent = $(".mountings .mtgoods");
    data.forEach((obj, index) => {
        htmlStr += `
        <li class="boxs item"  id="${obj.id}" value="${obj.classname_1}">
        <img src="http://127.0.0.1:8081/images/parts/${obj.color_1_url_1}.png">
        <p class="name"><span>${obj.title}</span></p>
        <p class="dec">${obj.describe}</p>
        <p class="price">￥${obj.price}</p>
    </li>  `
    })
    parent.html(htmlStr);
}

fetch("http://127.0.0.1:8081/mountings?classname_3=jingpinparts")
    .then(response => response.json())
    .then(res => {
        loaddingMountings(res);
    })

//菜单
function loaddingCategory(data) {
    let htmlStr = "";
    let parent = $(".category-box .cgproduct");
    let val = $(".cgli").attr("value");
    data.forEach((obj, index) => {
        htmlStr += `
        <li class="item" id="${obj.id} value="${obj.classname_1}">
        <img src="http://127.0.0.1:8081/images/iphone/${obj.color_1_url_1}.png">
          <span>${obj.title}</span>
    </li>`
    })

    htmlStr = `
    <p class="cgall">${val}<span>全部${val}></span></p>
    ${htmlStr}`
    parent.html(htmlStr);
}

fetch("http://127.0.0.1:8081/category?classname_1=iphone")
    .then(response => response.json())
    .then(res => {
        loaddingCategory(res);
    })


//定时器
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
// 定时函数
var daojishi = setInterval(function() {
    var s1 = new Date("2019/12/1 00:00:00");
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

//category
$(function() {
    $(".category .cgli").hover(function() {
        $(this).addClass("show").siblings().removeClass("show");
    });
    $(".category .cgli").mouseout(function() {
        $(this).removeClass("show");
    });

});

//跳转

$(function() {
    $(".cgli").click(function() {
        let val = $(this).attr("value");
    })

});