const Router = require('@koa/router')
const router = new Router()

const IndexController = require('./IndexController')
const BooksController = require('./BooksController')

const indexController = new IndexController()
const bookController = new BooksController()

router.get('/',(ctx,next) =>indexController.actionIndex(ctx,next))

router.get('/book',(ctx,next) => bookController.actionIndex(ctx,next))

router.get('/book/create',(ctx,next) => bookController.actionCreate(ctx,next))


module.exports = app =>{
  app.use(router.routes(), router.allowedMethods())
}