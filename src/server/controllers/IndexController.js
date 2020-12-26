const Controller = require('./Controller')
class IndexController extends Controller {
  constructor(){
    super()
  }

  async actionIndex(ctx, next) {
    ctx.body = await ctx.render('index/pages/index.html')
  }
}

module.exports = IndexController