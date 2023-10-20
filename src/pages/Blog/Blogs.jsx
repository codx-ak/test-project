import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BlogData } from "../../Api/BlogsApi";
import "./blog.css";
import BlogItem from "./BlogItem";

const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    //blogs data fetch to api and storing to DB
    BlogData().then((value) => setBlogs(value.articles));
  }, [Blogs]);
  return (
    <>
      <Typography variant="h3" textAlign="center" paddingBottom="5px">
        World News
      </Typography>
      <Typography component="p" textAlign="center" paddingBottom="20px">
        Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet.
      </Typography>
      <Container className="blogs">
        {Blogs ? (
          Blogs.map((data, index) => {
          return <BlogItem key={index} blog={data}/>          })
        ) : (
          <Typography variant="h5" textAlign="center">
            No Blogs
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Blogs;
