import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import routes from './routes';

import './database';

class Application {
  constructor() {
    this.express = express();
    this.middlewares();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
    this.express.use(routes);
  }
}

export default new Application().express;
