import CartSlice from '../store/CartSlice'
import {configureStore} from '@reduxjs/toolkit'

export const store=configureStore({
    reducer:{
        CartStore: CartSlice
    }
})