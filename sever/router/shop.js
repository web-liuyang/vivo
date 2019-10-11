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
router.get("/shoppingmallerji", (req, res) => {
    // 参数结构
    let { classname_1} = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_1=? limit 0,9 ", [classname_1], (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes)
        })
        // 断开数据库连接
    db.end();
})
router.get("/details", (req, res) => {
    // 参数结构
    let { id} = req.query;
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE id=?", [id], (err, sqlRes) => {
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
    let { classname_3 } = req.query;
    console.log(classname_3);
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query("SELECT * FROM shop WHERE classname_3 = ?", [classname_3], (err, sqlRes) => {
            // 把结果返回前端
            console.log(err)
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


//购物车
router.post("/addshopcart", (req, res) => {
    // 参数结构
    let {username,url,title,number,price,classname_1 } = req.body;
    let mysqlyuju = "INSERT INTO `order` ( `username`,`url`,`title`,`number`,`price`,`classname_1` )VALUES( ?,?,?,?,?,? )";
    let jiegou = [username,url,title,number,price,classname_1];
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query(mysqlyuju, jiegou, (err, sqlRes) => {
            // 把结果返回前端
            res.send({tishi:"加入购物车成功"});
        })
        // 断开数据库连接
    db.end();
})
router.post("/chaxunshopcart", (req, res) => {
    // 参数结构
    let {username,url,title,number,price } = req.body;
    let mysqlyuju = "SELECT * FROM `order` WHERE username=?";
    let jiegou = [username];
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query(mysqlyuju, jiegou, (err, sqlRes) => {
            // 把结果返回前端
            res.send(sqlRes);
        })
        // 断开数据库连接
    db.end();
})
//删除

router.post("/delshopcart", (req, res) => {
    // 参数结构
    let {username,title } = req.body;
    let mysqlyuju = "DELETE FROM `order` WHERE username=? AND title=?";
    let jiegou = [username,title];
    // 获取数据库
    const db = getMysql();
    // 连接数据库
    db.connect();
    // 数据库指令，结构的参数，函数输出结果
    db.query(mysqlyuju, jiegou, (err, sqlRes) => {
            // 把结果返回前端
            res.send({tishi:"删除成功"});
        })
        // 断开数据库连接
    db.end();
})
module.exports = router;