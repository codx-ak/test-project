import {
  Button,
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";
import { BsListTask } from "react-icons/bs";
import { useForm } from "react-hook-form";
import "./todo.css";
import {
  AddTodoData,
  DeleteTodoData,
  TodoData,
  UpdateTodoData,
} from "../../Api/TodoApi";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import TodoItem from "./TodoItem";

const Todo = () => {
    const queryClient=useQueryClient()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isLoading, data } = useQuery({
    queryKey: ["todo"],
    queryFn: TodoData,
  });

  const {mutateAsync:addTodoMutation}=useMutation({
    mutationFn: AddTodoData,
    onSuccess:()=> {
      queryClient.invalidateQueries(['todo'])
       toast.success("ToDo Added");
      }
    })

  const {mutateAsync:updateTodoMutation}=useMutation({
    mutationFn: UpdateTodoData,
    onSuccess:()=> {
        queryClient.invalidateQueries(['todo'])
        toast.success("ToDo Updated");
    }
      })

  const {mutateAsync:deleteTodoMutation}=useMutation({
    mutationFn: DeleteTodoData,
    onSuccess:()=>{
        queryClient.invalidateQueries(['todo'])
        toast.error("ToDo Deleted");
    } 
      })
  const ToDoValue = data || [];

  if(isLoading) return <Loading/>
  
  return (
    <Container className="todo">
      <form action="" onSubmit={handleSubmit(data=>addTodoMutation({...data,completed: false}))} method="post">
        <TextField
          {...register("title", { required: "Enter title" })}
          error={errors.title ? true : false}
          variant="outlined"
          placeholder="Type here"
          autoComplete='true'
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
      <Card variant="outlined">
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Process</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ToDoValue.length ? (
                ToDoValue.map((todo , index) => {
                  return <TodoItem options={{ todo,deleteTodoMutation,updateTodoMutation }} key={index} />;
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={2} align="center">
                    {" "}
                    No Items Available
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Container>
  );
};

export default Todo;
