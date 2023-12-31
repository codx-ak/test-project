import { Card, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CiCalendarDate } from "react-icons/ci";
import { BsFillPersonFill } from "react-icons/bs";

const BlogItem = ({blog}) => {
  return (
    <Card className="blog-item" variant="outlined">
                <img
                  width="100%"
                  height={150}
                  loading='lasy'
                  src={blog.urlToImage}
                  alt={blog.title}
                />
                <Link target="_blank" to={blog.url}>
                  <Typography variant="h6" className='overflow-text'>{blog.title}</Typography>
                  <Typography component="p" className="blog-info overflow-text">
                    <CiCalendarDate /> {blog.publishedAt.slice(0, 10)}{" "}
                    &nbsp;&nbsp; <BsFillPersonFill />
                    <span className="auther">{blog.author || 'Unknown'}</span>
                  </Typography>
                  <Typography component="p">{blog.description || 'No Description'}</Typography>
                </Link>
              </Card>
  )
}

export default BlogItem