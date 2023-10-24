import axios from "axios";
import { toast } from "react-toastify";

//news api from https://saurav.tech/NewsAPI

const heading=(data)=> {
  return `https://saurav.tech/NewsAPI/top-headlines/category/${data}/in.json`
}


//get method
export const NewsData = async (data) => {
  try {
    const response = await axios.get(heading(data));
    return response.data.articles;
  } catch (err) {
    toast.error("Somthing Wrong!");
  }
};

