//函数封装
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