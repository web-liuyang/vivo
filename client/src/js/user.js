//引用css
import "../sass/public.scss";
import "../sass/user.scss";
//引用JS
import "../js/fn.js";
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';




let $data = sessionStorage.getItem("user");
let data = JSON.parse($data);


function userData(data) {
    let htmlStr = "";
    let $main = $("main");
    htmlStr += `  
    <div class="top">
    <img src="http://127.0.0.1:8081/images/liuyang/logo.png">
    <h4>账号中心</h4>
    <p class="goback"><a href="javascript:history.go(-1)">返回上一页面</a></p>
    <p class="log-out zxzh"><span>${data.nikename},</span>&nbsp;&nbsp退出账号</p>
</div>


<div class="bottom">
    
    <p>安全设置</p>
    <ul>
        <li><img src="http://127.0.0.1:8081/images/liuyang/user.png" alt=""></li>
        <li>帐号密码&nbsp;&nbsp;&nbsp;&nbsp;<input  class="psd-btn  shuju_1" type="password" value=${data.password}>
        <p>用于保护帐号信息和登录安全</p>
        </li>
        <li><span class="modify">修改</span></li>
      
    </ul>
    <ul>
        <li><img src="http://127.0.0.1:8081/images/liuyang/iphone.png" alt=""></li>
        <li>安全手机<span class="shuju_2" contenteditable="true">${data.tel}</span>
            <p>安全手机可用于登录vivo帐号，找回密码或其它安全验证</p>
        </li>
        <li><span class="modify">修改</span></li>
       
    </ul>
    <ul>
        <li><img src="http://127.0.0.1:8081/images/liuyang/e-mail.png" alt=""></li>
        <li>安全邮箱<span class="shuju_3" contenteditable="true">${data.email}</span>
            <p>安全邮箱可用于登录vivo帐号，找回密码或其他安全验证。建议立即绑定</p>
        </li>
        <li><span class="modify">修改</span></li>
   
    </ul> 
    </div>`;
    $main.html(htmlStr);



}
userData(data);
// 账号中心注销
// 注销登录
$(".log-out").click(function () {
    let con = confirm("您确定退出登录吗？");
    if (con == true) {
        sessionStorage.removeItem("user");
        location.href = "http://127.0.0.1:8090/static/pages/login.html";
    }
})

// 修改账号信息
function modify(data) {
    $(".modify").click(function() {
        let sj_1 = $(".shuju_1").val();
        let sj_2 = $(".shuju_2").text();
        let sj_3 = $(".shuju_3").text();
        data.email = sj_3;
        data.tel = sj_2;
        data.password = sj_1;

        fetch('http://127.0.0.1:8081/login', {
                body: JSON.stringify({
                    username: data.username,
                    nikename: data.nikename,
                    password: data.password,
                    tel: data.tel,
                    email: data.email
                }), // must match 'Content-Type' header
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, same-origin, *omit
                headers: {
                    'user-agent': 'Mozilla/4.0 MDN Example',
                    'content-type': 'application/json'
                },
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // *client, no-referrer
            })
            .then(response => response.json())
            .then(data => {
                alert(data.tishi)
            })




    })



}
modify(data);