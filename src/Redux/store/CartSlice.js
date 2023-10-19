import {createSlice} from '@reduxjs/toolkit'

const initialState={
    //initial state
    value:[]
}

const CartSlice=createSlice({
    // store Name
    name:'CartStore',
    initialState:initialState,
    reducers:{

        //adding items to cart DB
        AddCart:(state,action)=>{
            const Product={...action.payload,count:1}
            if(state.value.length){
                const Result=state.value.find(data=>action.payload.id === data.id)
                if(Result){
                    alert("Already Added")
                }else{
                    state.value.unshift(Product)
                    alert("Product Add Successfully")
                }}
            else{
                    state.value.push(Product)
                    alert("Product Add Successfully")
                }
                
        },

         //remove items to cart DB
        RemoveCart:(state,action)=>{
            let ProductIndex=state.value.findIndex((data)=>action.payload.id===data.id)
            state.value.splice(ProductIndex,1)
                alert("Product Removed ")  
        },

         //adding items count to cart DB
        ProductCountAdd:(state,action)=>{
            let ProductIndex=state.value.findIndex((data)=>action.payload.id===data.id)
            state.value[ProductIndex].count+=1
        },

         //minus items count to cart DB
        ProductCountDel:(state,action)=>{
            let ProductIndex=state.value.findIndex((data)=>action.payload.id===data.id)
            state.value[ProductIndex].count-=1
        }

}})

// export the functions
export const {AddCart,RemoveCart,ProductCountAdd,ProductCountDel}=CartSlice.actions
export default CartSlice.reducer