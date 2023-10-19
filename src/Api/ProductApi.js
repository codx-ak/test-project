import axios from "axios";

const API_URL="https://fakestoreapi.com/products"


export const ProductData=async()=>{
    try{
    const response=await axios.get(API_URL)
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

