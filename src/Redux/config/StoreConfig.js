import CartSlice from '../store/CartSlice'
import {configureStore} from '@reduxjs/toolkit'
import TodoSlice from '../store/TodoSlice'

//config the redux store
export const store=configureStore({
    reducer:{
        CartStore: CartSlice,
        TodoStore:TodoSlice
    }
})