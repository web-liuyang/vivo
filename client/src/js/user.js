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
console.log(data)

function userData(data) {
    let htmlStr = "";
    let $main = $("main");
    htmlStr += `  
    <div class="top">
    <img src="http://127.0.0.1:8081/images/liuyang/logo.png">
    <h4>账号中心</h4>
    <p class="zxzh"><span>${data.nikename},</span>&nbsp;&nbsp退出账号</p>
</div>


<div class="bottom">
    
    <p>安全设置</p>
    <ul>
        <li><img src="http://127.0.0.1:8081/images/liuyang/user.png" alt=""></li>
        <li>帐号密码&nbsp;&nbsp;&nbsp;&nbsp;<input class="psd-btn" type="password" value=${data.password}>
        <p>用于保护帐号信息和登录安全</p>
        </li>
        <li><span>修改</span></li>
      
    </ul>
    <ul>
        <li><img src="http://127.0.0.1:8081/images/liuyang/iphone.png" alt=""></li>
        <li>安全手机<span contenteditable="true">${data.tel}</span>
            <p>安全手机可用于登录vivo帐号，找回密码或其它安全验证</p>
        </li>
        <li><span>修改</span></li>
       
    </ul>
    <ul>
        <li><img src="http://127.0.0.1:8081/images/liuyang/e-mail.png" alt=""></li>
        <li>安全邮箱<span contenteditable="true">${data.email}</span>
            <p>安全邮箱可用于登录vivo帐号，找回密码或其他安全验证。建议立即绑定</p>
        </li>
        <li><span>修改</span></li>
   
    </ul> 
    </div>`;
    $main.html(htmlStr);



}
userData(data);

$(".zxzh").click(function() {
    console.log($(".zxzh"))
    sessionStorage.removeItem("user");
    confirm("您确定退出登录吗？")
    location.href = "login.html";
})