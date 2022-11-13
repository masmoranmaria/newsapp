import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import NewsController from './src/controllers/news.controller';
import initDB from './src/config/database';

const app = createExpressServer({
  controllers: [NewsController],
  cors: {
    origin: "*",
  }
})


initDB();

app.listen(3000); 