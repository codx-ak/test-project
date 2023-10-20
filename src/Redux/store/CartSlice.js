import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  //initial state
  value: [],
};

const CartSlice = createSlice({
  // store Name
  name: "CartStore",
  initialState: initialState,
  reducers: {
    //adding items to cart DB
    AddCart: (state, action) => {
      const Product = { ...action.payload, count: 1 };
      if (state.value.length) {
        const Result = state.value.find(
          (data) => action.payload.id === data.id
        );
        if (Result) {
          toast.warning("Already Added");
        } else {
          state.value.unshift(Product);
          toast.success("Product Added");
        }
      } else {
        state.value.push(Product);
        toast.success("Product Added");
      }
    },

    //remove items to cart DB
    RemoveCart: (state, action) => {
      let ProductIndex = state.value.findIndex(
        (data) => action.payload.id === data.id
      );
      state.value.splice(ProductIndex, 1);
      toast.error("Product Removed");
    },

    //adding items count to cart DB
    ProductCountAdd: (state, action) => {
      let ProductIndex = state.value.findIndex(
        (data) => action.payload.id === data.id
      );
      state.value[ProductIndex].count += 1;
    },

    //minus items count to cart DB
    ProductCountDel: (state, action) => {
      let ProductIndex = state.value.findIndex(
        (data) => action.payload.id === data.id
      );
      state.value[ProductIndex].count -= 1;
    },
  },
});

// export the functions
export const { AddCart, RemoveCart, ProductCountAdd, ProductCountDel } =
  CartSlice.actions;
export default CartSlice.reducer;
