//引用css
import "../sass/public.scss";
import "../sass/login.scss";
//引用JS
import "../js/fn.js";
import "../js/loadding.js";
import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import {
    allResolved
} from "q";



$(".tologin").click(function () {
    if ($(".phonebox>input").val() == "" || $(".codebox>input").val() == "") {
        alert("请输入账号或密码")
    } else {
        fetch('http://127.0.0.1:8081/login', {
                body: JSON.stringify({
                    username: $(".phonebox>input").val(),
                    password: $(".codebox>input").val()
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
                alert(data.tishi);
                if (data.tishi == "登陆成功") {
                    sessionStorage.user = JSON.stringify({
                        username: data.data[0].username,
                        nikename:data.data[0].nikename,
                        tel:data.data[0].tel,
                        email:data.data[0].email
                    });
                    location.href = "http://127.0.0.1:8090";
                }
            })
    }

})