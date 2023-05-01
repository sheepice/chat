const { defineConfig } = require('@vue/cli-service')

// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/",
  devServer: {
    host: "localhost",//配置本项目运行主机
    port: 8080,//配置本项目运行端口
    //配置代理服务器来解决跨域问题
    proxy: {
      "/api": {
        target: "https://app4515.acapp.acwing.com.cn", //配置要替换的后台接口地址
        changOrigin: true, //配置允许改变Origin
        ws: true, // proxy websockets
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
})


