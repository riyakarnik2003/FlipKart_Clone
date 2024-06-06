import mongoose from "mongoose";

export const Connection = async ()=>{
    const URL = 'mongodb://localhost:27017/Ecommerce'
    try {
       await mongoose.connect(URL) 
       console.log("DB Connected")
    } catch (error) {
        console.log("error while connecting",error)
    }
}

export default Connection;