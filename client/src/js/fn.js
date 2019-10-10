//函数封装
function loaddingerji(claaname_2,index,classname_1='iphone',){
    let $uls = $(".nav-item.box-item ul");
    debugger
    $.ajax({
        type: "GET", //默认get
        url: `http://127.0.0.1:8081/homeerji?classname_2=${claaname_2}`, //默认当前页
        data: "data", //格式{key:value}
        dataType: "json",
        beforeSend: function () {}, //请求发送前回调,常用验证
        success: function (response) { //请求成功回调
            let htmlStr = "";
            response.forEach(function (item, index) {
                htmlStr += `<li id=${item.id}>
                    <img src="http://127.0.0.1:8081/images/${classname_1}/${item.color_1_url_1}.png">
                    <p>${item.title}</p>
                </li>`
            })
            $uls[index].innerHTML = htmlStr;
            $uls[index].childNodes.forEach(function(item,index){
                item.onclick = function(){
                    location.href = `http://127.0.0.1:8090/static/pages/details.html?id=${this.id}`
                }
            })
        },
        error: function (e) { //请求超时回调
            if (e.statusText == "timeout") {
                alert("请求超时");
            }
        },
        complete: function () {}, //无论请求是成功还是失败都会执行的回调，常用全局成员的释放，或者页面状态的重置
    });
}

module.exports ={
    loaddingerji
}