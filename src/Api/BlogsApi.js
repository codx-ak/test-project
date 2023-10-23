import axios from "axios";
import { toast } from "react-toastify";

//news api from https://saurav.tech/NewsAPI
const API_URL =
  "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

//get method
export const BlogData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.articles;
  } catch (err) {
    toast.error("Somthing Wrong!");
  }
};
