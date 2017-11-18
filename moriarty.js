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