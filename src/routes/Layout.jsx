import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageRoutes from './PageRoutes'

const Layout = () => {
  return (
    <>
    {/* navbar */}
    <Header/>
    
    {/* page routes  */}
    <PageRoutes/>

    {/* footer  */}
    <Footer/>
    </>
  )
}

export default Layout