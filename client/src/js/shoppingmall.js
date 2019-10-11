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
        <li class="cargo" id="${obj.id}">
        <img src="http://127.0.0.1:8081/images/iphone/${obj.color_1_url_1}.png">
        <p>${obj.sellpoint}</p>
        <h3>${obj.title}</h3>
        <h4>${obj.describe}></h4>
        <p><span class="price">￥${obj.price}<span class="oldprice">￥${obj.oldprice}</p>
        </li>
    `
    })
    parent.html(htmlStr);

    function getStyle(el, attr) {
        if (el.currentStyle) {
            return el.currentStyle[attr];
        } else {
            return getComputedStyle(el, null)[attr];
        }
    }
    let smallImgs = [...document.querySelectorAll(".panicgoods .cargo")];
    var panicgoods = document.querySelector('.panic .panicgoods');
    let box = document.querySelector(".panicgoods .cargo");
    let width = parseFloat(getStyle(box, "width"));
    let index = 1; // 记录当前显示图片的下标
    let cur_offset = 0;
    let rightBtn = document.querySelector(".prev");
    let leftBtn = document.querySelector(".next");
    // let last_sel_index = 0;
    smallImgs.forEach(item => {
        rightBtn.onclick = function() {
            let rl_offset = cur_offset - width;
            if (cur_offset == 5 * (-width)) {
                return
            } else {
                panicgoods.style.transform = `translateX(${rl_offset}px)`;
                cur_offset = rl_offset;
            };
        };
        leftBtn.onclick = function() {
            let rl_offset = cur_offset + width;
            if (cur_offset == 0) {
                return
            } else {
                panicgoods.style.transform = `translateX(${rl_offset}px)`;
                cur_offset = rl_offset;
            };

        }
    })
}
fetch("http://127.0.0.1:8081/panic?classname_3=V")
    .then(response => response.json())
    .then(res => {
        loaddingpanic(res);
        $(".cargo").click(function() {
            let id = this.id;
            location.href = `details.html?id=${id}`
        })

    })

//热卖专区
function loaddingHotpart(data) {
    let htmlStr = "";
    let parent = $(".hotpart .hotgoods");
    data.forEach((obj, index) => {
        htmlStr += `
        <li class="box cargo" id="${obj.id}"  value="${obj.classname_1}">
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
        $(".cargo").click(function() {
            let id = this.id;
            location.href = `details.html?id=${id}`
        })
    })

//精品手机
function loaddingBoutique(data) {
    let htmlStr = "";
    let parent = $(".boutique .btqgoods");
    data.forEach((obj, index) => {
        htmlStr += `
        <li class="boxs cargo" id="${obj.id} "value="${obj.classname_1}">
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
        $(".cargo").click(function() {
            let id = this.id;
            location.href = `details.html?id=${id}`
        })
    })

//精品配件
function loaddingMountings(data) {
    let htmlStr = "";
    let parent = $(".mountings .mtgoods");
    data.forEach((obj, index) => {
        htmlStr += `
        <li class="boxs cargo"  id="${obj.id}" value="${obj.classname_1}">
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
        $(".cargo").click(function() {
            let id = this.id;
            location.href = `details.html?id=${id}`
        })
    })

//菜单
let $uls = $(".category .cgli>ul");

$uls.each(function(index, item) {
    if (item.id == "iphone") {
        $.ajax({
            type: "GET", //默认get
            url: `http://127.0.0.1:8081/shoppingmallerji?classname_1=${item.id}`, //默认当前页
            data: "data", //格式{key:value}
            dataType: "json",
            beforeSend: function() {}, //请求发送前回调,常用验证
            success: function(response) { //请求成功回调
                let htmlStr = "";
                response.forEach(function(item, index) {
                    htmlStr += `<li id=${item.id}><img src="http://127.0.0.1:8081/images/iphone/${item.color_1_url_1}.png"><span>${item.title}</span></li>`;
                })
                $($uls[index]).html(`<li>${(function(){
                    return ($($uls[index]).parent().attr("value"));
                })()}</li>` + htmlStr);
                let $lis = $(".category .cgli>ul li");
                $lis.each(function(index, item) {
                    item.onclick = function() {
                        location.href = `http://localhost:8090/static/pages/details.html?id=${item.id}`
                    }
                })
            },
            error: function(e) { //请求超时回调
                if (e.statusText == "timeout") {
                    alert("请求超时");
                }
            },
            complete: function() {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
        });
    } else {
        $.ajax({
            type: "GET", //默认get
            url: `http://127.0.0.1:8081/homeerji?classname_2=${item.id}`, //默认当前页
            data: "data", //格式{key:value}
            dataType: "json",
            beforeSend: function() {}, //请求发送前回调,常用验证
            success: function(response) { //请求成功回调
                let htmlStr = "";
                response.forEach(function(item, index) {
                    htmlStr += `<li id=${item.id}><img src="http://127.0.0.1:8081/images/parts/${item.color_1_url_1}.png"><span>${item.title}</span></li>`
                })
                $($uls[index]).html(`<li>${(function(){
                    return ($($uls[index]).parent().attr("value"));
                })()}</li>` + htmlStr);
                let $lis = $(".category .cgli>ul li");
                $lis.each(function(index, item) {
                    item.onclick = function() {
                        location.href = `http://localhost:8090/static/pages/details.html?id=${item.id}`
                    }
                })
            },
            error: function(e) { //请求超时回调
                if (e.statusText == "timeout") {
                    alert("请求超时");
                }
            },
            complete: function() {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
        })
    };
});


//定时器
var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");
// 定时函数
var daojishi = setInterval(function() {
    var s1 = new Date("2019/10/20 00:00:00");
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