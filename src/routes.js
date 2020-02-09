import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';

import AuthMiddlewares from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ menssage: 'alo' });
});

routes.post('/session', SessionController.store);

routes.use(AuthMiddlewares);

routes.post('/recipients', RecipientsController.store);
routes.put('/recipients/:id', RecipientsController.update);

export default routes;
