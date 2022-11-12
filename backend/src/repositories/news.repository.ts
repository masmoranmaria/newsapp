import New, { INew } from '../models/news.model';
import { Service } from 'typedi';
import { Types } from 'mongoose';

@Service()
class NewsRepository {

    async findAll() {
        return await New.find().lean().exec();
    }

    async save(news: INew){
        const model = await new New(news).save();
        return model.toObject();
    } 
}

export default NewsRepository;