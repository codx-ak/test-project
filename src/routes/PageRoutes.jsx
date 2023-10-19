import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Loading from '../components/Loading'

const Login=React.lazy(()=>import('../Auth/Login'))
const Products=React.lazy(()=>import('../pages/Products'))
const Cart=React.lazy(()=>import('../pages/Cart'))
const Logout=React.lazy(()=>import('../Auth/Logout'))
const Blog=React.lazy(()=>import('../pages/Blogs'))

const PageRoutes = () => {
  return (
    <React.Suspense fallback={<Loading/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='product' element={<Products/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='logout' element={<Logout/>}/>
      </Routes>
    </React.Suspense>
  )
}

export default PageRoutes