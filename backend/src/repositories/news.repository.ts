import { Service } from 'typedi';
import New, { INew } from '../models/news.model';

@Service()
class NewsRepository {

    async findAll() {
        const allNews = await New.find().lean().exec();
        allNews.map(news => news._id = news._id.toString());
        return allNews;
    }

    async findOne(id: string) {
        return await New.findById(id).lean().exec();
    }

    async save(news: INew) {
        const model = await new New(news).save();
        return model.toObject();
    } 

    async update(id: string) {
        const updated = await New.findByIdAndUpdate(id, {archiveDate: new Date()}).lean().exec();
        return updated;
    } 

    async delete(id: string) {
        return await New.findByIdAndDelete(id).lean();
    } 
    
}

export default NewsRepository;