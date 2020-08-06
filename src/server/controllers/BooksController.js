
const Controller = require('./Controller.js')
class BooksController extends Controller {
  constructor(){
    super()
  }

  async actionIndex(ctx,next){
    ctx.body = await ctx.render('books/pages/list',{title:'列表'})
  }


  async actionCreate(ctx,next){
    ctx.body = await ctx.render('books/pages/create',{title:'创建'})
  }
}

module.exports = BooksController