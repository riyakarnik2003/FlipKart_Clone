
import { products } from "./constants/data.js"
import Product from "./models/productSchema.js"




const DefaultData = async ()=>{
    try {
       await Product.insertMany(products)
        console.log("data imported!")
    } catch (error) {
        console.log('error while inserting default data')
    }
}

export default DefaultData;