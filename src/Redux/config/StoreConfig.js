import CartSlice from '../store/CartSlice'
import {configureStore} from '@reduxjs/toolkit'

//config the redux store
export const store=configureStore({
    reducer:{
        CartStore: CartSlice
    }
})