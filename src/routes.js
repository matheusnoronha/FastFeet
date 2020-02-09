import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ menssage: 'alo' });
});

routes.post('/session', SessionController.store);

export default routes;
