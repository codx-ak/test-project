import axios from "axios";

//news api from https://newsapi.org/
const API_URL="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=973fd9a4750e4e7faa88934fd3e8d44b"


//get method 
export const BlogData=async()=>{
    try{
    const response=await axios.get(API_URL)
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

