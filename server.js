const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');

const server = new Koa();
const router = new Router();

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handler = nextApp.getRequestHandler();

(async () => {
  try {
    await nextApp.prepare();
    server.use(async (ctx, nextData) => {
      ctx.set('sample', 'set Header data');
      await nextData();
    });
    router.get('*', async ctx => {
      await handler(ctx.req, ctx.res);
      ctx.respond = false;
    });

    server.use(router.routes());
    server.listen(3000, () => console.log('App running on port 3000'));
  } catch (e) {
    console.error(e);
    process.exit();
  }
})();
