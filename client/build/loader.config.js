// 配置模块
module.exports = [
    // babel es6 > es5
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
        }
    },
    // sass
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", {
            loader: "postcss-loader",
            options: {
                ident: "postcss",
                plugins: [require("autoprefixer")]
            }
        }, "sass-loader"]
    },
    {
        test: /\.(jpg|jpeg|svg|png|ico)$/,
        exclude: /node_modules/,
        use: {
            loader: "file-loader",
            options: {
                name: "[name]-[hash:5].[ext]",
                outputPath: "static/images/"
            }
        }
    },
    // 处理HTML
    {
        test: /\.html/,
        exclude: /node_modules/,
        loader: 'html-loader'
    },
    //处理bootstrap
    {test:/\.css$/,use:['style-loader','css-loader']},
    {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader']},
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader']},
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader']},
    {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: ['url-loader']
    }
]