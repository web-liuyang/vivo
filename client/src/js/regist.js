//引用css
import "../sass/public.scss";
import "../sass/regist.scss";
//引用JS
import "../js/fn.js";
import "../js/loadding.js";
// import "../js/public.js";
//引用bootstrap
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

$("input").on("input", function() {
    let $parent = $(this).parent();
    let reg = new RegExp($parent.attr("data-reg"));
    if (!reg.test($(this).val())) {
        $parent.addClass("error");
    } else {
        $parent.removeClass("error");
    }
});


$(".btn").click(function() {
    let $login = $("input");
    for (let i = 0, len = $login.length; i < len; i++) {
        if ($login[i].value == "") {
            alert("请完善信息")
            break;
        }
    }
    if ($("section").hasClass("error")) {
        alert("输入正确的注册信息");
    } else {
        fetch('http://127.0.0.1:8081/regist', {
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
                body: JSON.stringify({
                    nikename: $login[0].value,
                    username: $login[1].value,
                    password: $login[2].value,
                    email: $login[3].value,
                    tel: $login[4].value,
                })
            }).then(request => request.json())
            .then(data => {
                alert(data.tishi)
            })

    }











})