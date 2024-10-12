import { configureStore } from '@reduxjs/toolkit'

import person from './slices/personSlice'
import auth from './slices/authFormsSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    person,
    auth,
    cart,
  },
})
