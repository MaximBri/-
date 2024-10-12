import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsCart: []
  },
  reducers: {
    setItemCart: (state, action) => {
      state.itemsCart.push(action.payload)
    },
    deleteItemCart: (state, action) => {
      state.itemsCart = state.itemsCart.filter(item => item.id !== action.payload)
    }
  }
})

export const {setItemCart, deleteItemCart} = cartSlice.actions
export default cartSlice.reducer