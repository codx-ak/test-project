import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Typography component='p' textAlign="center" width='100%' margin='20px 0'>
        © {new Date().getFullYear()} All rights reserved | Made with ❤️ by{" "}
        <span>Ak Moorthi</span>
      </Typography>
    </footer>
  );
};

export default Footer;
