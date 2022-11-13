import { model, Schema, Document } from 'mongoose';

export interface INew extends Document {
    title: string;
    description: string;
    date?: Date;
    content: string;
    author: string;
    archiveDate?: Date
}

const NewSchema: Schema = new Schema ({
    title: String,
    description: String,
    date: Date,
    content: String,
    author: String,
    archiveDate: Date
});

const New = model<INew>('news', NewSchema);

export default New;