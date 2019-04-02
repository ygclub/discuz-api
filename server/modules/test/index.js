// import Router from 'koa-router';
import * as controllers from './controllers';

// const router = new Router({
//   prefix: '/auth',
// });
// const prefix = '/auth';

export default (router) => {
  router.get('/test', controllers.test);
};
