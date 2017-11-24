const path = require('path')
console.log('+++' + path)
console.log('----------' + path.resolve(__dirname, 'dist'))



// 开发环境————devServer
// js不能压缩， 无法调试

// 生产环境
// js建议压缩


// 打包css:    css-loader   
//             style-loader
// 分离css:    extract-text-webpack-plugin
// 打包html    html-webpack-plugin
// 打包图片    url-loader (当图片大小小于设置，就打包为base，否则直接拷贝) 
//             file-loader (当图片过大直接拷贝时，解决路径不一致)
// 直接在html中使用img的src加载图片:      html-withimg-loader


// 使用less:    less
//              less-loader
// 直接打开浏览器 "server": "webpack-dev-server --open",
// 使用sass:    node-sass
//              sass-loader
// 使用css自动补前缀:     postcss-loader
//                        autoprefixer
// 自动删除废弃css(和分离css一起使用):       purifycss-webpack
//                        purify-css   


// babel       babel-core  核心包
//             babel-loader  webpack使用
//             babel-preset-es2015  语法
//             "presets": ["es2015"] 过时
//             "presets": ["env"] 新版
                        

// source-map      独立，打包最慢，包括行和列
// cheap-module-source-map     独立文件，不包括列 
// eval-source-map     不生成独立文件 有安全隐患 开发使用 包括行和列
// cheap-module-eval-source-map   不包括列    

// 安装依赖   加了-dev安装到开发环境中 