const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  output:{
    path: path.join(__dirname,'../dist/assets'),
    publicPath: '/',
    filename:'scripts/[name].bundle.js'
  },
  plugins:[
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/web/views/layouts/*.html',
          to: path.join(__dirname,'../dist'),
          transformPath(targetPath, absolutePath) {
            return targetPath.replace('../src/web/','../');
          },
        },
      ]
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/web/components/**/*.html',
          to: '../components',
          transformPath(targetPath, absolutePath) {
            return targetPath.replace('src/web/components/','');
          },
        },
      ]
    })
  ]
}