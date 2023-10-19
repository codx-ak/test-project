import { Card, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BlogData } from "../Api/BlogsApi";
import './blog.css'
import { Link } from "react-router-dom";
import {CiCalendarDate} from 'react-icons/ci'
import {BsFillPersonFill} from 'react-icons/bs'
const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);
  useEffect(() => {
    //blogs data fetch to api and storing to DB
    BlogData().then((value) => setBlogs(value.articles));
  }, [Blogs]);
  return (
  <>
  <Typography variant="h3" textAlign='center' paddingBottom="5px">World News</Typography>
  <Typography component='p' textAlign='center' paddingBottom="20px">Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet.</Typography>
    <Container className="blogs">
      {Blogs ?
        Blogs.map((blog, index) => {
          return (
            <Card className="blog-item" variant="outlined" key={index}>
              <img width='100%' height={150} src={blog.urlToImage} alt={blog.title} />
              <Link target="_blank" to={blog.url}>
              <Typography variant="h6">{blog.title}</Typography>
              <Typography component='p' className="blog-info"><CiCalendarDate/> {blog.publishedAt.slice(0,10)} &nbsp;&nbsp; <BsFillPersonFill/><span className="auther">{blog.author}</span></Typography>
              <Typography component="p">{blog.description}</Typography>
              </Link>
            </Card>
          );
        }) :<Typography variant="h5" textAlign='center'>No Blogs</Typography>}
    </Container>
  </>
  );
};

export default Blogs;
