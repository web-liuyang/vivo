//这里编写数据库信息
const mysql = require("mysql");
const defaultOptions = {
    // 数据库链接
    host: '127.0.0.1',
    // 数据库端口
    port: '3306',
    // 数据库账号
    user: 'root',
    // 数据库密码
    password: 'root',
    // 数据库名称
    database: 'b_clegdchcwrsjob'
}

function getConnection(options = defaultOptions) {
    return mysql.createConnection(options);
}
module.exports = getConnection;