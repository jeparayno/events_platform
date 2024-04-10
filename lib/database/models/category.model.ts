import { Document } from "mongodb";
import { Schema, model, models } from "mongoose";

export interface iCategory extends Document{
    _id: string;
    name: string;
}

const CategorySchema = new Schema ({
name: {type: String, requried: true, unique: true},
})

const Category = models.Category || model('Category', CategorySchema);

export default Category;