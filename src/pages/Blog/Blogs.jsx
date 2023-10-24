import { Button, Container, Typography } from "@mui/material";
import React, { useState }  from "react";
import { NewsData } from "../../Api/BlogsApi";
import "./blog.css";
import BlogItem from "./BlogItem";
import Loading from "../../components/Loading";
import { useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import ScrollToTop from "react-scroll-to-top";

const Blogs = () => {
  //active page
  const[activeBtn,setActiveBtn]=useState('general')

  const queryClient = useQueryClient();
  const {data:BlogsData}=useQuery({
    queryKey:['blog'],
    //defualt data fetch
    queryFn:()=>NewsData('general')
  })

  const { mutateAsync: NewsMutation ,isPending} = useMutation({
    mutationFn: NewsData,
    onSuccess:data => {
      queryClient.setQueryData(['blog'], data)
    }
  });

function NewsCategory(e){
  // selected button to fetch data
  const category=e.target.getAttribute('data-value') || 'general';
  setActiveBtn(category)
  NewsMutation(category)
}

  return (
    <>
    <ScrollToTop smooth
      style={{background:"orange",borderRadius:'50%',padding:'4px'}}
      color="#fff"
      height={50}
      width={50}
        viewBox="0 0 24 24"
        svgPath="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
       />
      <Typography variant="h3" textAlign="center" paddingBottom="5px">
        News
      </Typography>
      <Typography component="p" textAlign="center" paddingBottom="20px">
        Lorem Lorem ipsum dolor sit amet. ipsum dolor sit amet.
      </Typography>
      <Container className="btn-group">
        <Button variant={activeBtn==='general'?'contained':'outlined'} data-value='general' onClick={NewsCategory}>All</Button>
        <Button variant={activeBtn==='business'?'contained':'outlined'} color="secondary" data-value='business' onClick={NewsCategory} >business</Button>
        <Button variant={activeBtn==='entertainment'?'contained':'outlined'} color="info" data-value='entertainment'onClick={NewsCategory}>entertainment</Button>
        <Button variant={activeBtn==='health'?'contained':'outlined'} color="success" data-value='health'  onClick={NewsCategory}>health</Button>
        <Button variant={activeBtn==='sports'?'contained':'outlined'} color="warning" data-value='sports' onClick={NewsCategory}>sports</Button>
        <Button variant={activeBtn==='science'?'contained':'outlined'} data-value='science' onClick={NewsCategory}>science</Button>
        <Button variant={activeBtn==='technology'?'contained':'outlined'} color="error" data-value='technology' onClick={NewsCategory}>technology</Button>
        </Container>
       
      <Container className="blogs">
        {
          isPending && <Loading />

        }
        {BlogsData ? (
          BlogsData.map((data, index) => {
            return <BlogItem key={index} blog={data} />;
          })
        ) : (
          <Typography variant="h5" textAlign="center">
            No News Available
          </Typography>
        )}
      </Container>
    </>
  );
};

export default Blogs;
