import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsCart: [],
  },
  reducers: {
    setItemCart: (state, action) => {
      state.itemsCart.push(action.payload)
      console.log(action.payload)
    },
    deleteItemCart: (state, action) => {
      state.itemsCart = state.itemsCart.filter(
        (item) =>
          !(item.id === action.payload.id && item.type === action.payload.type)
      )
    },
    setAllCart: (state, action) => {
      state.itemsCart = action.payload
      console.log(action.payload)
    }
  },
})
export const getCart = (state) => state.cart.itemsCart
export const { setItemCart, deleteItemCart, setAllCart } = cartSlice.actions
export default cartSlice.reducer
