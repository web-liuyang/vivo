const express = require('express');
const router = express.Router();

// 连接数据库
const getMysql = require("../mysql")
// home商品
router.get("/shop", (req, res) => {
    // 参数结构
    let {classname} = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM home_shop where classify = ?", [classify], (err, sqlRes) => {
        // 把结果返回前端
        res.send(sqlRes);
    })
    // 断开数据库连接
    db.end();
})

module.exports = router;