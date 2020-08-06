const Controller = require('./Controller')
class IndexController extends Controller {
  constructor(){
    super()
  }

  async actionIndex(ctx, next) {
    ctx.body = 'index pages'
  }
}

module.exports = IndexController