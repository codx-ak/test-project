import { createSlice } from "@reduxjs/toolkit";
import { AddTodoData, DeleteTodoData, UpdateTodoData } from "../../Api/TodoApi";
import { toast } from "react-toastify";

let initialState = {
  value: [],
};

const TodoSlice = createSlice({
  // store Name
  name: "TodoStore",
  initialState: initialState,
  reducers: {
    //adding items to cart DB
    AddTodo: (state, action) => {
      const data = {
        title: action.payload,
        completed: false,
      };
      AddTodoData(data);
      toast.success("ToDo Added");
    },

    //remove items to cart DB
    RemoveTodo: (state, action) => {
      DeleteTodoData(action.payload);
      toast.error("ToDo Deleted");
    },

    UpdateTodo: (state, action) => {
      const data = {
        id: action.payload.id,
        title: action.payload.data.title,
        completed: action.payload.data.status === "true" ? true : false,
      };
      UpdateTodoData(action.payload.id, data);
      toast.success("ToDo Updated");
    },
  },
});

// export the functions
export const { AddTodo, RemoveTodo, UpdateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
