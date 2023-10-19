import React, { useState } from 'react'
import { createContext } from 'react'

export const Authenticate=createContext()
const AuthContext = ({children}) => {
  const [IsAuth,setAuth]=useState(false)

  return (
    <Authenticate.Provider value={{IsAuth,setAuth}}>
      {children}
    </Authenticate.Provider>
  )
}

export default AuthContext