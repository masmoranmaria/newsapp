import mongoose from 'mongoose';

const initDB = () => {
    mongoose.connect('mongodb://database:27017/newsapp').then(db => {
        console.log('DB running');
    }).catch(err => console.log(err))
}

export default initDB;