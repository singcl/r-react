const Koa = require('koa')
const send = require('koa-send')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  await send(ctx, 'demo/index.html')
})

router.get('/app.js', async (ctx) => {
  await send(ctx, 'build/app.js')
})

app.use(router.routes())

app.listen(3000, () => {
  /* eslint 'no-console': 'off' */
  console.log('server running on http://localhost:3000')
})
