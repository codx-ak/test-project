import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Doc = () => {
  return (
    <Container>
        <Typography align='center' padding={'10px 0'} variant='h4'>API Documentaion</Typography>
        <Typography variant='h5'>Blog API</Typography>
        <Typography component='p'>Source : https://saurav.tech/NewsAPI</Typography>
        <Box sx={{padding:2,width:'fit-content'}}>
        <Typography color='green'>GET METHOD</Typography>
        <Typography sx={{padding:2}} component='li'>Get List Blogs : https://saurav.tech/NewsAPI/top-headlines/category/ <span style={{color:'orange'}}>category-type</span> /in.json</Typography>
    <br />
        </Box>
        <Typography variant='h5'>ToDo API</Typography>
        <Typography component='p'>Its a Own Json server.</Typography>
        <Typography component='p'>Source : https://codx-json-server.vercel.app</Typography>
        <Box sx={{padding:2,width:'fit-content'}}>
        <Typography color='green'>GET METHOD</Typography>
        <Typography sx={{padding:2}} component='li'>Get List ToDo :   https://codx-json-server.vercel.app/todo</Typography>
        </Box>
        <Box sx={{padding:2,width:'fit-content'}}>
        <Typography color='green'>POST METHOD</Typography>
        <Typography sx={{padding:2}} component='li'>Create ToDo  :   https://codx-json-server.vercel.app/todo/</Typography>
        </Box>
        <Box sx={{padding:2,width:'fit-content'}}>
        <Typography color={'orange'}>PATCH METHOD</Typography>
        <Typography sx={{padding:2}} component='li'>update ToDo by ID  :   https://codx-json-server.vercel.app/todo/ <span style={{color:'orange'}}>:id</span></Typography>
        </Box>
        <Box sx={{padding:2,width:'fit-content'}}>
        <Typography color='error'>DELETE METHOD</Typography>
        <Typography sx={{padding:2}} component='li'>Delete ToDo by ID :   https://codx-json-server.vercel.app/todo/<span style={{color:'orange'}}>:id</span></Typography>
        </Box>
    

    </Container>
  )
}

export default Doc