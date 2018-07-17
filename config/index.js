'use strict'
// Template version: 1.2.8
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
    dev: {

        // Paths
        // 编译输出的二级目录
        assetsSubDirectory: 'static',
        // 编译发布的根目录，可配置为资源服务器域名或者cdn域名
        assetsPublicPath: '/',
        // 需要使用proxyTable代理的接口(可以跨域)
        proxyTable: {
            '/api': { //使用"/api"来代替"http://f.apiplus.c" 
                target: 'http://jsonplaceholder.typicode.com', //源地址 
                changeOrigin: true, //改变源 
                pathRewrite: {
                    '^/api': '' //路径重写 
                }
            }
        },

        // Various Dev Server settings
        host: 'localhost', // can be overwritten by process.env.HOST
        port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        // 是否自动打开浏览器
        autoOpenBrowser: true,
        // 下面两个都是浏览器展示错误的方式
        //  在浏览器是否展示错误蒙层
        errorOverlay: true,
        // 是否展示错误的通知
        notifyOnErrors: true,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        devtool: 'cheap-module-eval-source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        cssSourceMap: true,
    },

    build: {
        // Template for index.html
        // html文件的生成的地方
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        // 编译生成的文件的目录
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 编译生成的静态文件的目录
        assetsSubDirectory: 'static',
        // 编译发布的根目录，可配置为资源服务器域名或者cdn域名
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        // 是否开启生产环境的gzip压缩
        productionGzip: false,
        // 开启gzip压缩的文件的后缀名称
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        // 如果这个选项是true的话，那么则会在build后，会在浏览器中生成一份bundler报告
        bundleAnalyzerReport: process.env.npm_config_report
    }
}