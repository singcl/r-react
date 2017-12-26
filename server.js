const Koa = require('koa')
const send = require('koa-send')
const Router = require('koa-router')
const httpProxy = require('http-proxy')

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

/*
// 跨域解决方案一：CORS
// api路由重定向到json-server 服务器。（这里重定向后应该是跨域的）
router.get('/api/*', async (ctx) => {
  // 3003是mock 服务器地址：(json-server 库已经内置设置好了cors跨域??)
  ctx.redirect(`http://localhost:3003${ctx.path}`)
})
*/

// 跨域解决方案二：反向代理（概念：正向代理代理客户端，反向代理代理服务器 https://www.zhihu.com/question/24723688）
// api请求转发：http-proxy库反向代理
// eslint-disable-next-line
const proxy = new httpProxy.createProxyServer({
  target: 'http://localhost:3003/',
  changeOrigin: true
})

const methods = ['get', 'post', 'put', 'delete']
methods.forEach(m =>
  router[m]('/api/*', (ctx) => {
    proxy.web(ctx.req, ctx.res)
    ctx.body = ctx.res
  }))

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
  ctx.redirect(`http://localhost:${DEVPORT}${ctx.path}`)
})
