import { configureStore } from '@reduxjs/toolkit'

import person from './slices/personSlice'
import auth from './slices/authFormsSlice'

export const store = configureStore({
  reducer: {
    person,
    auth,
  },
})
