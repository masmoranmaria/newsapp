import { Service } from 'typedi';
import { INew } from '../models/news.model';
import NewsRepository from '../repositories/news.repository';

@Service()
class NewsService{
    constructor(private readonly newsRepository: NewsRepository){};

    findAll(){
        return this.newsRepository.findAll();
    }

    save(news: INew){
        return this.newsRepository.save(news);
    }
}

export default NewsService;