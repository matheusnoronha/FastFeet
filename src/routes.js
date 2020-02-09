import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientsController from './app/controllers/RecipientsController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ menssage: 'alo' });
});

routes.post('/session', SessionController.store);
routes.post('/recipients', RecipientsController.store);

export default routes;
