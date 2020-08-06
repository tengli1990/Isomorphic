const Controller = require('./Controller')
class IndexController extends Controller {
  constructor(){
    super()
  }

  async actionIndex(ctx, next) {
    ctx.body = 'index pages 11 '
  }
}

module.exports = IndexController