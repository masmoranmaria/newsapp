import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import NewsController from './src/controllers/news.controller';
import initDB from './src/config/database';
import SeedController from './src/controllers/seed.controller';
import * as dotenv from 'dotenv';

dotenv.config();

const app = createExpressServer({
  controllers: [
    NewsController,
    SeedController
  ],
  cors: {
    origin: "*",
  }
})

initDB();

app.listen(3000); 