import { Service } from 'typedi';
import { INew } from '../models/news.model';
import NewsRepository from '../repositories/news.repository';

@Service()
class NewsService{
    constructor(private readonly newsRepository: NewsRepository) {};

    findAll() {
        return this.newsRepository.findAll();
    }

    findOne(id: string) {
        return this.newsRepository.findOne(id);
    }

    save(news: INew) {
        news.date = new Date();
        return this.newsRepository.save(news);
    }

}

export default NewsService;