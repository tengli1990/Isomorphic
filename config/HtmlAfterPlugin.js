const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin');
const pluginName = "HtmlAfterPlugin"

const assetsHandle = function({js}){
  jsArr = []
  for(let item of js){
    jsArr.push(`<script src="${item}"></script>`)
  }

  return {
    js: jsArr
  }
}

class HtmlAfterPlugin {
  constructor(){
    this.jsArr = []
  }
  apply(compiler){
    compiler.hooks.compilation.tap(pluginName, compilation => {

      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        pluginName,(data, cb) => {
          const { js } = assetsHandle(data.assets)
          this.jsArr = js
          cb(null, data)
        }
      )

      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        pluginName, // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          let { html } = data

          html = html.replace('<!-- injectjs -->',this.jsArr.join(''))
          html = html.replace('@/components','../../../components')
          html = html.replace('@/layouts','../../layouts')

          data.html = html
          cb(null, data)
        }
      )
    })
  }
}


module.exports = HtmlAfterPlugin