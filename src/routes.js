import { Router } from 'express';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import auth from './app/middlewares/auth';

const routes = Router();

routes.post('/singup', UserController.create);
routes.post('/session', SessionController.create);

routes.use(auth);

routes.post('/products', ProductController.create);
routes.get('/products', ProductController.index);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

export default routes;
