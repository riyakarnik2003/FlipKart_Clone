
import axios from "axios"
import * as actionType from "../constants/productConstant";

const URL = 'http://localhost:8000'
export const getProducts = ()=> async (dispatch)=>{
    try {
        const {data}=await axios.get(`${URL}/products`);
       
        dispatch({type:actionType.GET_PRODUCT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_FAILURE, payload:error.message})
    }
}


export const getProductDetails = (id)=> async (dispatch)=>{
    try {
       dispatch({type:actionType.GET_PRODUCT_DETAILS_REQUEST}) 
       const {data}=await axios.get(`${URL}/product/${id}`);
       dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS, payload:data})

    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAILURE, payload:error.message})
    }
}