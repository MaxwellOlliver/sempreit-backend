import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import auth from './app/middlewares/auth';

const routes = Router();

routes.post('/singup', UserController.create);
routes.post('/signin', SessionController.create);

routes.use(auth);

export default routes;
