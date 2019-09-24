// 导入页面
const HtmlConfig = require("./html.plugin.config");
//导入清除多余文件插件
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
// 导入webpack
const webpack = require("webpack");
// 抽离css
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
//压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
//JQuery
const $ = require("jquery")
// 插件
module.exports = [
    //因为是数组所以要序列话，否则就成为二维数组
    ...HtmlConfig,
    //清除多余文件
    new CleanWebpackPlugin(),
    // 在打包里面加入
    new webpack.BannerPlugin({
        banner: "LiuYang"
    }),
    // 热更新
    new webpack.HotModuleReplacementPlugin(),
    // 抽离css
    // new ExtractTextPlugin("static/css/[name]-[hash:5].css"),
    //压缩css
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
            preset: ['default', {
                discardComments: {
                    removeAll: true
                }
            }],
        },
        canPrint: true
    }),
    
    new webpack.ProvidePlugin({
        $:"jquery",
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper:['popper.js', 'default']
    })

]