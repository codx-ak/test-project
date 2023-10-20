import {
  Box,
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from "@mui/material";
import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import "./todo.css";
import { BsListTask } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { AddTodo } from "../../Redux/store/TodoSlice";
import { TodoData } from "../../Api/TodoApi";

const Todo = () => {
  //Todo State
  const [ToDovalue,setTodo]=useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  //todo adding funcion
  function todoadding(e) {
    dispatch(AddTodo(e.title));
  }

  useEffect(()=>{
    //getting Todo data and update todo store
    TodoData().then(data=>setTodo(data))
  },[todoadding])
  
  return (
    <Container className="todo">
      <Box className="addTodo">
        <form action="" onSubmit={handleSubmit(todoadding)} method="post">
          <TextField
            {...register("title", { required: "Enter title" })}
            error={errors.title ? true : false}
            variant="outlined"
            placeholder="Type here"
            type="text"
          />
          <Button
            type="submit"
            startIcon={<BsListTask />}
            variant="contained"
            color="warning"
          >
            Add ToDO
          </Button>
        </form>
      </Box>

      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Process</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ToDovalue &&
              ToDovalue.map((data, index) => {
                return <TodoItem todo={data} key={index} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Todo;
