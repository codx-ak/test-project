import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Loading from '../components/Loading'

//lasy way to import pages
const Products=React.lazy(()=>import('../pages/Products'))
const Blog=React.lazy(()=>import('../pages/Blogs'))
const Cart=React.lazy(()=>import('../pages/Cart'))
const Login=React.lazy(()=>import('../Auth/Login'))
const Logout=React.lazy(()=>import('../Auth/Logout'))

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