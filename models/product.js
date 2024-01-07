import { Schema, model } from 'mongoose';
const { ObjectId } = Schema;


const productSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
      },
      description: {
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
      },
      price: {
        type: Number,
        required: true,
        maxlength: 32,
        trim: true
      },
      category: {
        type: ObjectId,
        ref: "Category",
        required: true
      },
      stock: {
        type: Number
      },
      sold: {
        type: Number,
        default: 0
      },
      photo: {
        data: Buffer,
        contentType: String
      }
},{timestamps:true})


export default model("Product", productSchema);
