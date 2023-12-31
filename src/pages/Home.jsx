import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HomeIMG from '../assets/home.svg'

const Home = () => {
  return (
    <Container>
      <section className="home">
        <img src={HomeIMG} height={450} width='auto' alt="Home" />
        <Box className="home-content" sx={{width:500}}>
          <Typography variant="h4">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Typography>
          <Typography component="p">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </Typography>
        </Box>
      </section>

    </Container>
  );
};

export default Home;
