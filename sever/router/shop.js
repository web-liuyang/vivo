const express = require('express');
const router = express.Router();

// 连接数据库
const getMysql = require("../mysql")
    // home商品
router.get("/", (req, res) => {
    // 参数结构
    let { classname_1, classname_2, classname_3 } = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_3=?", [classname_3], (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes)
        })
        // 断开数据库连接
    db.end();
})
router.get("/homeerji", (req, res) => {
    // 参数结构
    let { classname_2} = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_2=?", [classname_2], (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes)
        })
        // 断开数据库连接
    db.end();
})


router.get("/Hotpart", (req, res) => {
    // 参数结构
    let { classname_3 } = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_3 = ?", [classname_3], (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes);
        })
        // 断开数据库连接
    db.end();
})
router.get("/boutique", (req, res) => {
    // 参数结构
    let { classname_3 } = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_3 = ?", [classname_3], (err, sqlRes) => {
            // 把结果返回前端

            res.send(sqlRes);
        })
        // 断开数据库连接
    db.end();
})
router.get("/mountings", (req, res) => {
    // 参数结构
    let { classname_3 } = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_3 = ?", [classname_3], (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes);
        })
        // 断开数据库连接
    db.end();
})
router.get("/panic", (req, res) => {
    // 参数结构

    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM panic", (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes)
        })
        // 断开数据库连接
    db.end();
})

router.get("/product", (req, res) => {
    // 参数结构
    let { classname_1 } = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_1 = ?", [classname_1], (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes);
        })
        // 断开数据库连接
    db.end();
})
router.get("/parts", (req, res) => {
    // 参数结构
    let { classname_1 } = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_1 = ?", [classname_1], (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes);
        })
        // 断开数据库连接
    db.end();
})
module.exports = router;