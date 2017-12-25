const Koa = require('koa')
const send = require('koa-send')
const Router = require('koa-router')

// node server ========================================================
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev.config')

const DEVPORT = 3001

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  await send(ctx, 'demo/index.html')
})

router.get('/authorlist.json', async (ctx) => {
  await send(ctx, 'demo/authorlist.json')
})

// router.get('/app.js', async (ctx) => {
//   await send(ctx, 'build/app.js')
// })

app.use(router.routes())

app.listen(3000, () => {
  /* eslint 'no-console': 'off' */
  console.log('server running on http://localhost:3000')
})

// webpack dev server =====================================================
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  noInfo: true,
  stats: {
    colors: true
  }
}).listen(DEVPORT, 'localhost', (err, result) => {
  if (err) {
    return console.log(err)
  }
  console.log(result)
  console.log(`server running on http://localhost:${DEVPORT}`)
  return false
})

// 所有的node server 3000端口所有json/js文件请求重定向到 webpack dev server 3001端口
// 如果请求出现跨域问题的话，参考master分支下的代码，把这里改成http-proxy转发
router.get('**/*.js(on)?', async (ctx) => {
  ctx.redirect(`http://localhost:${DEVPORT}/${ctx.path}`)
})
