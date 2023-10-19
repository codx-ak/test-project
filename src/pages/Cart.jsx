import React from 'react'
import {Container,Box, Typography} from '@mui/material'
import CartItem from '../components/CartItem'
import {useSelector} from 'react-redux'
import './cart.css'

const Cart = () => {
  const CartItems=useSelector(state=>state.CartStore.value)
  return (
    <Container sx={{minHeight:'80vh'}}>
      {
        CartItems.length ? <>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{padding:2}}>
          <Box className='cart-heading'><Typography component='p' sx={{width:'50%'}}>Product</Typography><Typography component='p'sx={{width:'25%'}}>Quantity</Typography><Typography component='p'>Total</Typography></Box>
          <Box className='cart-heading-2'><Typography component='h4' sx={{padding:'10px 0'}} variant='h4' textAlign='center'>Cart</Typography></Box>
          {
            CartItems.length && CartItems.map((product,index)=>{
              return <CartItem key={index} Product={product}/>
            })
          }
          
        </Box>
      </Box>
      </> : <Typography variant='h5' color='gray' sx={{textAlign:'center',padding:'10% 0',width:'100%'}}>No Items Available</Typography>

      }
    </Container>
  )
}

export default Cart