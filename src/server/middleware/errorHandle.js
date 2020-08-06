class errorHandle {
  static error(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next()
      } catch(e){
        logger.error(e)

        ctx.body = '500 请求错误，恢复中'
      }
    })

    app.use(async (ctx, next) => {
      await next();

      if (404 !== ctx.status) {
        return
      }
      ctx.body = "页面未找到"
    })
  }
}

module.exports = errorHandle