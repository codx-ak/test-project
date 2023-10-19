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
import { FaOpencart, FaShop } from "react-icons/fa6";
import { BiLogoBlogger } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import { IoTrailSignOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./header.css";
import {Authenticate} from "../Auth/AuthContext";
const Header = () => {
  const {IsAuth}=useContext(Authenticate)

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav>
      <Typography
        variant="h5"
        component="div"
        color='red'
      >
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
              <Button startIcon={<HiHome/>}>Home</Button>
            </MenuItem>
          </Link>
          <Link to="/product">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<FaShop/>}>Products</Button>
            </MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<FaOpencart/>}>Cart</Button>
            </MenuItem>
          </Link>
          <Link to="/blog">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<BiLogoBlogger/>}>Blogs</Button>
            </MenuItem>
          </Link>
          {
            IsAuth ? <Link to="/logout">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<IoTrailSignOutline/>}>Logout</Button>
            </MenuItem>
          </Link> :<Link to="/login">
            <MenuItem onClick={handleClose}>
              <Button startIcon={<IoTrailSignOutline/>}>Login</Button>
            </MenuItem>
          </Link>
          }
          
          
        </Menu>
      </Box>
    </nav>
  );
};

export default Header;
