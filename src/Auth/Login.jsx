import {
  Box,
  Button,
  Card,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { Authenticate } from "./AuthContext";
import { toast } from "react-toastify";

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

const Login = () => {
  //User Details View
  const [open, setOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //auth function
  const { setAuth } = useContext(Authenticate);
  //page navigation declare
  const navigate = useNavigate();

  //form validation
  function FormValidate(e) {
    if (e.Email === "user@gmail.com") {
      if (e.Psw === "1234") {
        //auth change value and page navigate to home screen
        setAuth(true);
        toast.success("Login Successfully!");
        navigate("/");
      } else {
        toast.error("Invalid Password");
      }
    } else {
      toast.error("Invalid UserName");
    }
  }

  return (
    <Container className="login">
      <Box className="header-content">
        <Typography variant="h3">
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography color={'white'} component="p">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
          ipsum. Beatae ab quod quam consectetur velit ullam molestiae
          laboriosam fugiat Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Reprehenderit, debitis.
        </Typography>
      </Box>
      <form
        className="login-form"
        action=""
        onSubmit={handleSubmit(FormValidate)}
        method="post"
      >
        <Typography className="first-title" variant="h4">
          Sign In
        </Typography>
        <Typography variant="p">Discover Our Flavorful Symphony!</Typography>
        <TextField
          {...register("Email", { required: "Enter Email" })}
          error={errors.Email ? true : false}
          variant="standard"
          label="Enter Email"
          type="email"
        />
        <TextField
          {...register("Psw", { required: "Enter Password" })}
          error={errors.Psw ? true : false}
          variant="standard"
          label="Enter Password"
          type="password"
        />
        <Button className="hint-btn" onClick={() => setOpen(true)}>
          Check Hint{" "}
        </Button>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Link to="/">Go back</Link>
          <Button variant="contained" type="submit">
            Login Now
          </Button>
        </Box>
      </form>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
      >
        <Card sx={style}>
          <Typography id="modal-modal-title" variant="h6">
            UserName
          </Typography>
          <Typography component="p">user@gmail.com</Typography>
          <Typography id="modal-modal-title" variant="h6" marginTop={5}>
            Password
          </Typography>
          <Typography component="p">1234</Typography>
        </Card>
      </Modal>
    </Container>
  );
};

export default Login;
