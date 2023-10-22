import { Container, Typography } from "@mui/material";
import React  from "react";
import { BlogData } from "../../Api/BlogsApi";
import "./blog.css";
import BlogItem from "./BlogItem";
import Loading from "../../components/Loading";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["blog"],
    queryFn: BlogData,
  });

  const BlogsData = data || [];
  if (isLoading) return <Loading />;

  return (
    <>
      <Typography variant="h3" textAlign="center" paddingBottom="5px">
        World News
      </Typography>
      <Typography component="p" textAlign="center" paddingBottom="20px">
        Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet.
      </Typography>
      <Container className="blogs">
        {BlogsData.length ? (
          BlogsData.map((data, index) => {
            return <BlogItem key={index} blog={data} />;
          })
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
