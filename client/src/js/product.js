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


    })
    $(".mcli").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    })

})

function loaddingProduct(data) {
    let htmlStr = "";
    let parent = $(".productlist");

    data.forEach((obj, index) => {
        htmlStr += `<li class="box">
            <img src="http://127.0.0.1:8081/images/iphone/${obj.color_2_url_1}.png">
            <div class="info">
                <p class="title">${obj.title}+ ${obj.vsn_1}&nbsp;${obj.color_2_name}</p>
                <p class="dec">${obj.describe}</p>
                <p class="price">${obj.price}</p>
            </div>
        </li>`
    })
    parent.html(htmlStr);
}

fetch("http://127.0.0.1:8081/product?classname_1=iphone")
    .then(response => response.json())
    .then(res => {
        loaddingProduct(res);
    })

function loaddingParts(data) {
    let htmlStr = "";
    let parent = $(".partslist");

    data.forEach((obj, index) => {
        htmlStr += `<li class="box">
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
    })


//切换
// 1. 获取元素
var menu_items = Array.from(document.querySelectorAll(".mtli"));
var ct_items = Array.from(document.querySelectorAll(".product .goods"));
// 2. 监听点击菜单项
var last_sel_index = 0; // 记录选中下标
menu_items.forEach(function(menu_item, index) {
    menu_item.onclick = function() {
        // 获取下标
        var index = menu_items.indexOf(this);
        // 移除效果
        menu_items[last_sel_index].classList.remove("active");
        ct_items[last_sel_index].classList.remove("hide");
        // 添加效果
        this.classList.add("active");
        ct_items[index].classList.add("hide");
        // 更新下标
        console.log(index);
        last_sel_index = index;

    }
});