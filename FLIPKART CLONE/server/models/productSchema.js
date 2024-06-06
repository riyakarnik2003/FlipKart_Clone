import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String

});


const product = mongoose.model('product',productSchema)
export default product;