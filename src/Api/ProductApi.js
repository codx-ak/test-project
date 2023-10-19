import axios from "axios";

//product api from https://fakestoreapi.com/
const API_URL="https://fakestoreapi.com/products"

//get method
export const ProductData=async()=>{
    try{
    const response=await axios.get(API_URL)
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

