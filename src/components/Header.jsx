import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { BiLogoBlogger } from "react-icons/bi";
import { IoTrailSignOutline } from "react-icons/io5";
import { SiAmazondocumentdb } from "react-icons/si";
import { LuListTodo } from "react-icons/lu";
import { Link } from "react-router-dom";
import "./header.css";
import { Authenticate } from "../Auth/AuthContext";
const Header = () => {
  //auth value checking
  const { IsAuth } = useContext(Authenticate);

  //dropdown menu condition
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <Typography variant="h5" component="div" color="red">
        Codx.
      </Typography>
      <Box>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="warning"
        >
          <FiMenu />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<HiHome />}>Home</Button>
            </MenuItem>
          </Link>
          <Link to="/todo">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<LuListTodo />}>todo</Button>
            </MenuItem>
          </Link>
          <Link to="/blog">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<BiLogoBlogger />}>Blogs</Button>
            </MenuItem>
          </Link>
          <Link to="/doc">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<SiAmazondocumentdb />}>Documentaion</Button>
            </MenuItem>
          </Link>
          {IsAuth ? (
            <Link to="/logout">
              <MenuItem onClick={handleClose}>
                <Button startIcon={<IoTrailSignOutline />}>Logout</Button>
              </MenuItem>
            </Link>
          ) : (
            <Link to="/login">
              <MenuItem onClick={handleClose}>
                <Button startIcon={<IoTrailSignOutline />}>Login</Button>
              </MenuItem>
            </Link>
          )}
        </Menu>
      </Box>
    </nav>
  );
};

export default Header;
