const path = require('path')

const resolve = file => path.resolve(__dirname, file)

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [
                require('ts-import-plugin')({
                  libraryName: 'mand-mobile',
                  libraryDirectory: 'lib-vw',
                })
              ]
            })
          }
        }
      ]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .include
        .add(resolve('./src/assets'))
        .end()
      .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
  }
};
