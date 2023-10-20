import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { Authenticate } from "./AuthContext";
import { toast } from "react-toastify";

const Login = () => {
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
        <Typography variant="h2" component="h2">
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography component="p">
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
        <FormControlLabel
          sx={{ width: "100%", fontSize: "14px", marginLeft: 5 }}
          control={<Checkbox color="success" />}
          label="Remember Me"
        />
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
    </Container>
  );
};

export default Login;
