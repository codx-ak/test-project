import React, { useContext, useEffect } from 'react'
import { Authenticate } from './AuthContext'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const {setAuth}=useContext(Authenticate)
    const navigate=useNavigate()
    useEffect(()=>{
        setAuth(false)
        navigate('/')
    },[])
  return (
    <></>
  )
}

export default Logout