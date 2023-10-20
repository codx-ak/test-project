import React from "react";
import {
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
import { MdDelete } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { RemoveTodo, UpdateTodo } from "../../Redux/store/TodoSlice";
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
const TodoItem = ({ todo }) => {
  //User Details View
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  function todoupdate(e) {
    dispatch(UpdateTodo({ id: todo.id, data: e }));
    setOpen(false);
  }

  return (
    <React.Fragment>
      <TableRow hover tabIndex={-1}>
        <TableCell align="center">{todo.id}</TableCell>
        <TableCell className="title-cell" align="center">
          {todo.title}
        </TableCell>
        <TableCell
          align="center"
          sx={{ color: todo.completed === true ? "green" : "red" }}
        >
          {todo.completed ? "completed" : "Pending"}
        </TableCell>
        <TableCell align="center">
          <IconButton onClick={() => setOpen(true)}>
            <LuClipboardEdit />
          </IconButton>
          <IconButton
            onClick={() => dispatch(RemoveTodo(todo.id))}
            color="error"
          >
            <MdDelete />
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
              <InputLabel color="success" id="status-label">
                Status
              </InputLabel>
              <Select
                {...register("status", {
                  required: "status Field Required",
                })}
                labelId="status-label"
                label="Status"
                error={errors.status ? true : false}
                color="success"
                defaultValue=""
              >
                <MenuItem value="true">Completed</MenuItem>
                <MenuItem value="false">Pending</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="warning">
              Update ToDO
            </Button>
          </form>
        </Card>
      </Modal>
    </React.Fragment>
  );
};

export default TodoItem;
