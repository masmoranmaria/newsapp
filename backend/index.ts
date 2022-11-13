import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import NewsController from './src/controllers/news.controller';
import express, { Request, Response } from 'express';
import initDB from './src/config/database';

import cors from "cors"

const app = createExpressServer({
  controllers: [NewsController],
  cors: {
    origin: "*",
  }
})


initDB();

app.listen(3000); 