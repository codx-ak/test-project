import React from 'react'
import Layout from './routes/Layout'
import { Provider } from 'react-redux'
import {store} from './Redux/config/StoreConfig'
import AuthContext from './Auth/AuthContext'
const App = () => {
  return (
    <Provider store={store}>

      {/* auth config  */}
      <AuthContext>

        {/* page layout  */}
      <Layout/>
      
      </AuthContext>
    </Provider>
  )
}

export default App