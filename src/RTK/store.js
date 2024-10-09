import { configureStore } from '@reduxjs/toolkit'

import person from './slices/personSlice'

export const store = configureStore({
  reducer: {
    person,
  },
})
