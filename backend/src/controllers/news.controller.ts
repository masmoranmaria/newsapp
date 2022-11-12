import { json, Request } from 'express';
import { Body, ContentType, Controller, Get, Post, Req, UseBefore, Put, Delete } from 'routing-controllers';
import Container from 'typedi';
import { INew } from '../models/news.model';
import NewsService from '../services/news.service';

@Controller('/news')
class NewsController{
   
    constructor(private newsService: NewsService) {
        this.newsService = Container.get(NewsService);
    };

    @Get()
    @ContentType("application/json")
    findAll() {
        return this.newsService.findAll();
    }

    @Get('/:id')
    findOne(@Req() request: Request) {
        return this.newsService.findOne(request.params.id);
    }

    @Post()
    @UseBefore(json())
    save(@Body() news: INew) {
        return this.newsService.save(news);
    }

    @Put('/:id')
    @UseBefore(json())
    archive(@Req() request: Request) {
        return this.newsService.archive(request.params.id);
    }

    @Delete('/:id')
    @UseBefore(json())
    delete(@Req() request: Request) {
        return this.newsService.delete(request.params.id);
    }

}

export default NewsController;