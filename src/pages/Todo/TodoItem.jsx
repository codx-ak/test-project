import React from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { MdOutlineClear } from "react-icons/md";
import { LuListTodo } from "react-icons/lu";

import { useForm } from "react-hook-form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 270,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
};
const TodoItem = ({ options }) => {
  const { todo, deleteTodoMutation, updateTodoMutation } = options;
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function todoupdate(e) {
    const updateData = {
      title: e.title,
      completed: e.status === "true" ? true : false,
    };
    updateTodoMutation({ id: todo.id, data: updateData });
    setOpen(false);
  }
  return (
    <React.Fragment>
      <TableRow hover sx={{ cursor: "pointer" }}>
        <TableCell className="title-cell" align="center">
          {todo.title}
        </TableCell>

        <TableCell align="center">
          <IconButton onClick={() => setOpen(true)}>
            <LuListTodo />
          </IconButton>
          <IconButton onClick={() => deleteTodoMutation(todo.id)}>
            <MdOutlineClear />
          </IconButton>
        </TableCell>
      </TableRow>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
      >
        <Card sx={style} className="update-card">
          <Typography
            id="modal-modal-title"
            variant="h5"
            textAlign="center"
            component="h2"
          >
            Todo
          </Typography>
          <form action="" onSubmit={handleSubmit(todoupdate)} method="post">
            <TextField
              {...register("title", { required: "Enter title" })}
              error={errors.title ? true : false}
              variant="outlined"
              placeholder="Type here"
              type="text"
              defaultValue={todo.title}
            />
            <FormControl sx={{ width: "270px" }}>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                {...register("status", {
                  required: "status Field Required",
                })}
                labelId="status-label"
                label="Status"
                error={errors.status ? true : false}
                defaultValue={todo.completed ? "true" : "false"}
              >
                <MenuItem value="true">Completed</MenuItem>
                <MenuItem value="false">Pending</MenuItem>
              </Select>
            </FormControl>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Button onClick={() => setOpen(false)} type="text">
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="warning">
                Update ToDO
              </Button>
            </Box>
          </form>
        </Card>
      </Modal>
    </React.Fragment>
  );
};

export default TodoItem;
