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
  }
};
