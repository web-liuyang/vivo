//引用css
import "../sass/public.scss";
import "../sass/shopub.scss";
import "../sass/product.scss";

//引用JS
import "../js/fn.js";
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';


$(function() {
    $(".mtli").click(function() {
        let topval = $(this).attr("value");
        $(".toptitle").html(topval);
        $(".goods .box").removeClass("sel");
    })
    $(".navli").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        let val = $(this).attr("value");
        $(".goods .box").filter($("[value!='" + val + "']")).addClass("sel");
        $(".goods .box").filter($("[value='" + val + "']")).removeClass("sel");
        console.log($(".goods .box").filter($("[value!='" + val + "']")));
    })
    $(".allli").click(function() {
        $(".goods .box").removeClass("sel");
    })
})

function loaddingProduct(data) {
    let htmlStr = "";
    let parent = $(".productlist");

    data.forEach((obj, index) => {
        htmlStr += `<li class="box ${obj.classname_2} "  value="${obj.classname_2}" id=${obj.id}>
            <img src="http://127.0.0.1:8081/images/iphone/${obj.color_1_url_1}.png">
            <div class="info">
                <p class="title">${obj.title}+ ${obj.vsn_1}&nbsp;${obj.color_2_name}</p>
                <p class="dec">${obj.describe}</p>
                <p class="price">￥${obj.price}</p>
            </div>
        </li>`
    })
    parent.html(htmlStr);
}

fetch("http://127.0.0.1:8081/product?classname_1=iphone")
    .then(response => response.json())
    .then(res => {
        console.log(res)
        loaddingProduct(res);
        $(".box").click(function() {
            let id = this.id;
            location.href = `details.html?id=${id}`
        })
    })

function loaddingParts(data) {
    let htmlStr = "";
    let parent = $(".partslist");

    data.forEach((obj, index) => {
        htmlStr += `<li class="box ${obj.classname_2}" value="${obj.classname_2}" id=${obj.id}>
                <img src="http://127.0.0.1:8081/images/parts/${obj.color_1_url_1}.png">
                <div class="info">
                    <p class="title">${obj.title}+ ${obj.vsn_1}&nbsp;${obj.color_2_name}</p>
                    <p class="dec">${obj.describe}</p>
                    <p class="price">${obj.price}</p>
                </div>
            </li>`
    })
    parent.html(htmlStr);
}

fetch("http://127.0.0.1:8081/parts?classname_1=parts")
    .then(response => response.json())
    .then(res => {
        loaddingParts(res);
        $(".box").click(function() {
            let id = this.id;
            location.href = `details.html?id=${id}`
        })
    })

//goodslist

//切换
// 1. 获取元素
var menu_items = Array.from(document.querySelectorAll(".mtli"));
var ct_items = Array.from(document.querySelectorAll(".product .goods"));
var nav_items = Array.from(document.querySelectorAll(".mconts"));
// 2. 监听点击菜单项
var last_sel_index = 0; // 记录选中下标
menu_items.forEach(function(menu_item, index) {
    menu_item.onclick = function() {
        // 获取下标
        var index = menu_items.indexOf(this);
        // 移除效果
        menu_items[last_sel_index].classList.remove("active");
        ct_items[last_sel_index].classList.remove("show");
        nav_items[last_sel_index].classList.remove("hide");
        // 添加效果
        this.classList.add("active");
        ct_items[index].classList.add("show");
        nav_items[index].classList.add("hide");
        // 更新下标
        console.log(index);
        last_sel_index = index;
    }
});