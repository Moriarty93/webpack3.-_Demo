const webpack = require('webpack') 
// 引入路径
const path = require('path')
const glob = require('glob')
// 引入js压缩插件  自带不需要安装
const uglify = require('uglifyjs-webpack-plugin')
//html打包 把src中html打包到dist中  需要安装
const htmlPlugin = require('html-webpack-plugin')
// 分离css
const extractTextPlugin = require('extract-text-webpack-plugin')
//删除废弃css
const purifyCssPlugin = require('purifycss-webpack')
//静态资源路径
const webSite = {
    publicPath: '/'
}
module.exports = {
    //入口
    entry: {
        entry: './src/entry.js',
        // entry2: './src/entry2.js'
    },
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: webSite.publicPath
    },
    // 配置
    module: {
        //规则
        rules: [
            // {
            //     //正则找到文件扩展名
            //     test: /\.css$/,
            //     //使用
            //     // use: ['style-loader', 'css-loader']
            //     loader: ['style-loader', 'css-loader']
            //     // use: [
            //     //     {
            //     //         loader: 'style-loader'
            //     //     },
            //     //     {
            //     //         loader: 'css-loader'
            //     //     }
            //     // ]
            // },
            {
                test: /\.(png|jpg|gif)/,
                loader: 'url-loader',
                options: {
                    //最大值base
                    limit: 10000,
                    outputPath: 'images/'
                }
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            // {
            //     test: /\.less$/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader'
            //         },
            //         {
            //             loader: 'less-loader'
            //         }
            //     ]
            // },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'less-loader'
                        },
                    ]
                })
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            // {
            //     test: /\.scss/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader'
            //         },
            //         {
            //             loader: 'sass-loader'
            //         }
            //     ]
            // }
            {
                test: /\.scss/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader'
                        },
                    ]
                })
            },
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
        ]
    },
    //插件
    plugins: [
        // 压缩js
        // new uglify(),
        
        // 打包html
        new htmlPlugin({
            //压缩
            minify: {
                //去掉html中属性引号
                removeAttributeQuotes: true
            },
            hash: true,
            // 模板
            template: './src/index.html'
        }),

        // 分离css
        new extractTextPlugin("css/index.css"),

        //删除css
        new purifyCssPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*'))
        })
    ],
    //开发服务
    devServer: {
        //监听路径
        contentBase: path.resolve(__dirname, 'dist'),
        //ip地址
        host: '192.168.1.43',
        //服务器压缩
        compress: true,
        //端口
        port: 8777
    }
}