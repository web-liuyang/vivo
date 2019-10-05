//页面插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
//页面处理
module.exports = [
    // 首页
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["index"]
    }),
    // 商城页
    new HtmlWebpackPlugin({
        template: "./src/pages/shoppingmall.html",
        filename: "static/pages/shoppingmall.html",
        chunks: ["shoppingmall"]
    }),
    // 产品页
    new HtmlWebpackPlugin({
        template: "./src/pages/product.html",
        filename: "static/pages/product.html",
        chunks: ["product"]
    }),
    // 详情页
    new HtmlWebpackPlugin({
        template: "./src/pages/details.html",
        filename: "static/pages/details.html",
        chunks: ["details"]
    }),
    // 购物车
    new HtmlWebpackPlugin({
        template: "./src/pages/shopcart.html",
        filename: "static/pages/shopcart.html",
        chunks: ["shopcart"]
    }),
    // 登录页
    new HtmlWebpackPlugin({
        template: "./src/pages/login.html",
        filename: "static/pages/login.html",
        chunks: ["login"]
    }),
    // 注册页
    new HtmlWebpackPlugin({
        template: "./src/pages/regist.html",
        filename: "static/pages/regist.html",
        chunks: ["regist"]
    }),
    // 账号中心页
    new HtmlWebpackPlugin({
        template: "./src/pages/user.html",
        filename: "static/pages/user.html",
        inject:true,
        chunks: ["user"]
    }),

]