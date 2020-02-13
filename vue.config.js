const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin') //启动GZIP压缩
function resolve (dir) {
  return path.join(__dirname, dir)
}
const merge = require('webpack-merge')

module.exports = {
  // dist/
  // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? 'public/dist/' : './',
  outputDir: 'dist', // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  assetsDir: 'assets', //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  indexPath: 'index.html', //指定生成的 index.html 的输出路径(相对于 outputDir)也可以是一个绝对路径。
  pages: {
    //pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      //除了 entry 之外都是可选的
      entry: 'src/main.js', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'Index Page', // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
      chunks: ['chunk-vendors', 'chunk-common', 'index'] // 在这个页面中包含的块，默认情况下会包含,提取出来的通用 chunk 和 vendor chunk
    }
  },
  lintOnSave: false, // 是否在保存的时候检查
  productionSourceMap: true, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    loaderOptions: {}, // css预设器配置项
    requireModuleExtension: true // 启用 CSS modules for all css / pre-processor files. //这个必须为true,不然引入elementui 样式不显示
    // modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0', // 允许外部ip访问
    port: 9000, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }, // 错误、警告在页面弹出
    // proxy: {
    //   '/api': {
    //     target: 'http://www.baidu.com/api',
    //     changeOrigin: true, // 允许websockets跨域
    //     // ws: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // } // 代理转发配置，用于调试环境
  },
  // 第三方插件配置
  pluginOptions: {},
  //路径别名等
  // webpack 配置进行更细粒度的修改  https://cli.vuejs.org/zh/config/#chainwebpack
  chainWebpack: (config)=>{
      //修改文件引入自定义路径
      config.resolve.alias
        .set('@', resolve('src'))
        .set('assets', resolve('src/assets'))
        .set('components', resolve('src/components'))
      config.resolve.symlinks(true);
      if (process.env.NODE_ENV === 'production') {
        // ============输出js start ================
        config.output
          .filename(path.posix.join('assets', `js/[name].[hash].js`))
          .chunkFilename(path.posix.join('assets', `js/[name].[hash].js`))
          .end()
        // ============输出js end ====================
        // ============输出css start =================
        config.plugin('extract-css').tap(() => [{
          filename: path.posix.join('assets', `css/[name].[hash].css`)
        }])
        // ============输出css end ====================
        // ============删除并制定规则 images start ===========
        // const imagesRule = config.module.rule('images')
        // imagesRule.uses.clear()
        // imagesRule.use('file-loader')
        //   .loader('url-loader')
        //   .options({
        //     limit: 4096,
        //     fallback: {
        //       loader: 'file-loader',
        //       options: {
        //         name: path.posix.join('assets', `img/[name].[hash:8].[ext]`)
        //       }
        //     }
        //   })
        // ============删除并制定规则 images end ==============
        // ============修改规则 images start ==================
        config.module
          .rule('images')
          .use('url-loader')
          .tap(options => {
            return merge(options, {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: path.posix.join('assets', `img/[name].[hash].[ext]`)
                }
              }
            })
          })
          .end()
        // ============修改规则 images end ====================
        // ============修改规则 svg start =====================
        config.module
          .rule('svg')
          .use('file-loader')
          .tap(options => {
            return merge(options, {
              name: path.posix.join('assets', `img/[name].[hash].[ext]`)
            })
          })
          .end()
        // ============修改规则 svg end ======================
        // file-loader，url-loader默认配置已经有了,不需要在配置，
        // 如果自己安装可能版本会不一样，会出现background: url([object Object])
        // 可以发现在dist/img下面的图片少了一部分，
        // 原因是：默认不超过4096字节会被转换成Base64编码,用require引用的也会被转成和base64，
        // 超出这个限制则会被打包在img文件夹下，同时会用到下面这个loader进行压缩
        // ============压缩图片 start==============
        config.module
          .rule('images')
          .test(/\.(png|jpe?g|gif)(\?.*)?$/i)
          .use('image-webpack-loader')
          .loader('image-webpack-loader')
          .options({ bypassOnDebug: true })
          .end()
        // ============压缩图片 end==============
        // ============压缩css js start==========
        config.plugin('CompressionWebpackPlugin')
          .use(new CompressionWebpackPlugin({
            // filename: '[path].gz[query]',
            test: /\.css$|\.ttf$|\.html$|\.svg$|\.json$|\.js$/, // 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
            deleteOriginalAssets: false // 不删除源文件
          }))
        // ============压缩css js end=============
    }
  },
}
