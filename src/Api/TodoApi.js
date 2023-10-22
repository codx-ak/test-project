import axios from "axios";
import { toast } from "react-toastify";

//product api from "https://codx-json-server.vercel.app
const API_URL = "https://codx-json-server.vercel.app/todo";

//get method
export const TodoData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    toast.error("Somthing Wrong!");
  }
};

//Post method
export const AddTodoData = async (data) => {
  await axios
    .post(API_URL, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

//Delete method
export const DeleteTodoData = async (id) => {
  await axios
    .delete(`${API_URL}/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

//Patch method
export const UpdateTodoData = async ({id,data}) => {
  await axios
    .patch(`${API_URL}/${id}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
