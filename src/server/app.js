const Koa = require('koa');
const serve = require('koa-static');
const render = require('koa-swig');
const config = require('./config')
const {configure, getLogger} = require('log4js');
const { wrap } = require('co')

const controllers = require('./controllers');
const errorHandle = require('./middleware/errorHandle');
const { staticDir } = require('./config');

const app = new Koa()

const { viewDir, port, memoryFlag } = config

configure({
  appenders: { cheese: { type: 'file', filename: 'logs/yd.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } },
});

const logger = getLogger('cheese');

app.use(serve(staticDir));

app.context.render = wrap(
  render({
    root: viewDir,
    autoescape: true,
    cache: memoryFlag, // disable, set to false
    ext: 'html',
    writeBody:false
  })
);

errorHandle.error(app,logger)
controllers(app)
app.listen(port, function () {
  console.log(`服务启动成功：http://localhost:${port}`)
})