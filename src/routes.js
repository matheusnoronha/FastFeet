import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ menssage: 'alo' });
});

export default routes;
