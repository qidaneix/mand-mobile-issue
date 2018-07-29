const path = require('path')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  chainWebpack: config => {
    // mand-mobile 配置 typescript
    config.module
      .rule('ts')
      .use('ts-loader')
        .loader('ts-loader')
          .tap(options => {
            options.appendTsSuffixTo = [/\.vue$/]
            options.transpileOnly = true
            options.getCustomTransformers = () => ({
              before: [
                require('ts-import-plugin')({
                  "libraryName": "mand-mobile",
                  "libraryDirectory": 'lib-vw'
                })
              ]
            })
            return options
          })
  },
  css: {
    sourceMap: true
  },
  devServer: {
    open: true
  }
};
