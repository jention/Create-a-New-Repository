// vue.config.js
module.exports = {
    // 选项...
    publicPath:"./",
    outputDir:"dist",
    assetsDir:"assets",
    indexPath:"index.html",
    filenameHashing:true,
    pages:undefined,
    lintOnSave:true,
    runtimeCompiler:false,
    transpileDependencies:[],
    productionSourceMap:false,
    crossorigin:undefined,
    integrity:false,
    devServer:{//代理
        // port:666,
        // proxy:'http://192.168.255.201:8082'
        open: process.platform === 'darwin',
        // host: '192.168.16.119',
      host: '0.0.0.0',
      port: 666,
      https: false,
      hotOnly: false,
      // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
      proxy: null, // string | Object
      before: app => {}
    }
}