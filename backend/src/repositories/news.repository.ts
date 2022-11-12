import { Service } from 'typedi';
import New, { INew } from '../models/news.model';

@Service()
class NewsRepository {

    async findAll() {
        return await New.find().lean().exec();
    }

    async findOne(id: string){
        return await New.findById(id).lean().exec();
    }

    async save(news: INew){
        const model = await new New(news).save();
        return model.toObject();
    } 
   
}

export default NewsRepository;