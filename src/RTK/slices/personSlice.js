// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: false,
  data: {
    name: '',
    surName: '',
    email: '',
  },
}

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setAuth: (state) => {
      state.auth = true
      console.log(state.auth)
    },
  },
})
export const getAuth = (state) => state.person.auth
export const { setAuth } = personSlice.actions

export default personSlice.reducer
