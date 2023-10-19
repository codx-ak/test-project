import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {GiLoveMystery} from 'react-icons/gi'
import './home.css'
const Home = () => {
  return (

    <Container >
      <section className='home'>
      <Box className='home-content'>
      <Typography variant='h3' component='h3'>Lorem ipsum dolor sit amet.</Typography>
      <Typography component='p'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
      </Box>
      </section>
      
      <section className='benifits'>
        <Box className='benifits-item'>
        <Typography component='div'><TbTruckDelivery/></Typography>
          <Typography variant='h5'>Free shipping</Typography>
          <Typography component='p'>Enjoy seamless shopping with our complimentary shipping service.</Typography>
        </Box>
        <Box className='benifits-item'>
          <Typography component='div'><RiSecurePaymentFill/></Typography>
          <Typography variant='h5'>Secure Payment</Typography>
          <Typography component='p'>Experience worry-free transactions with our secure payment options.</Typography>
        </Box>
        <Box className='benifits-item'>
        <Typography component='div'><GiLoveMystery/></Typography>
          <Typography variant='h5'>Love to help you</Typography>
          <Typography component='p'>Our dedicated team is here to assist you every step of the way.</Typography>
        </Box>
      </section>
    </Container>
  )
}

export default Home