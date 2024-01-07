import { Schema, model } from 'mongoose';
const { ObjectId } = Schema;

const productCartSchema = new Schema({
    product:{
        type:ObjectId,
        ref:"Product"
    },
    name:String,
    count:Number,
    price:Number
})

const ProductCart = model('ProductCart',productCartSchema)

const orderSchema = new Schema({
    products : [productCartSchema],
    transaction_id:{},
    amount:Number,
    address:String,
    updated:Date,
    user:{
        type:ObjectId,
        ref:"User"
    }
},{timestamps:true})


const Order = model('Order',orderSchema);

export default {Order,ProductCart};