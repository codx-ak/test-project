import axios from "axios";

const API_URL="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=21677e0d1eb04e0db60ffa093e590b40"


export const BlogData=async()=>{
    try{
    const response=await axios.get(API_URL)
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

