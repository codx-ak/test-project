import axios from "axios";
import { toast } from "react-toastify";

//ToDO api URL from "https://codx-json-server.vercel.app
const API_URL = "https://codx-json-server.vercel.app/todo";

//get method
//example : https://codx-json-server.vercel.app/todo
export const TodoData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    toast.error("Somthing Wrong!");
  }
};

//Post method
//example : https://codx-json-server.vercel.app/todo
export const AddTodoData = async (data) => {
  await axios
    .post(API_URL, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(() => toast.success("ToDo Added"))
    .catch(() => toast.error("Somthing Wrong!"));
};

//Delete method
//example : https://codx-json-server.vercel.app/todo/:id
export const DeleteTodoData = async (id) => {
  await axios
    .delete(`${API_URL}/${id}`)
    .then(() => toast.error("ToDo Deleted"))
    .catch(() => toast.error("Somthing Wrong!"));
};

//Patch method
//example : https://codx-json-server.vercel.app/todo/:id
export const UpdateTodoData = async ({id,data}) => {
  await axios
    .patch(`${API_URL}/${id}`, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(() => toast.success("ToDo Updated"))
    .catch(() => toast.error("Somthing Wrong!"));
};
