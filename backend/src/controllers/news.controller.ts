import { json } from 'express';
import { Body, Controller, Get, Post, UseBefore } from 'routing-controllers';
import Container from 'typedi';
import { INew } from '../models/news.model';
import NewsService from '../services/news.service';

@Controller('/news')
class NewsController{
   
    constructor(private newsService: NewsService){
        this.newsService = Container.get(NewsService);
    };

    @Get()
    findAll(){
        return this.newsService.findAll();
    }

    @Post()
    @UseBefore(json())
    save(@Body() news: INew){
        return this.newsService.save(news);
    }
}

export default NewsController;