import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import NewsController from './src/controllers/news.controller';
import express, { Request, Response } from 'express';
import initDB from './src/config/database';

const app = createExpressServer({
  controllers: [NewsController]
})

initDB();

app.listen(3000); 