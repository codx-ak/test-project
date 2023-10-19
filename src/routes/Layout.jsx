import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageRoutes from './PageRoutes'

const Layout = () => {
  return (
    <>
    <Header/>
    <PageRoutes/>
    <Footer/>
    </>
  )
}

export default Layout