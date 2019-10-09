const express = require('express');
const router = express.Router();

// 连接数据库
const getMysql = require("../mysql")
    //登陆
router.post("/login", (req, res) => {
    // 参数结构
    let { username, password } = req.body;
    let mysqlyuju = "SELECT * FROM user WHERE `username`=?";
    let jiegou = [username]
        // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query(mysqlyuju, jiegou, (err, sqlRes) => {
            if (sqlRes.length == 0) {
                res.send({ tishi: "账号不存在" })
            } else if (sqlRes[0].password == password) {
                res.send({ tishi: "登陆成功" })
            } else {
                res.send({ tishi: "密码错误" })
            }
        })
        // 断开数据库连接
    db.end();
})




// 注册
router.post("/regist", (req, res) => {
    // 参数结构
    let { username, password, email, tel, nikename } = req.body;
    let mysqlyuju = "INSERT INTO user (`username`,`password`,`email`,`tel`,`nikename`) VALUES (?,?,?,?,?)";
    let jiegou = [username, password, email, tel, nikename]
        // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query(mysqlyuju, jiegou, (err, sqlRes) => {
            if (err) {
                res.send({ tishi: "账号已存在" })
            } else {
                res.send({ tishi: "注册成功" })
            }
        })
        // 断开数据库连接
    db.end();
})

module.exports = router;