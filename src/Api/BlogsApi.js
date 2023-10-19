import axios from "axios";

//news api from https://newsapi.org/
const API_URL =
  "https://saurav.tech/NewsAPI/top-headlines/category/health/in.json";

//get method
export const BlogData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
