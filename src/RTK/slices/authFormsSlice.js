import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: false,
  register: false
}

export const authFormsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthForm: (state, action) => {
      state.auth = action.payload
    },
    setRegisterForm: (state, action) => {
      state.register = action.payload
    },
  },
})
export const { setAuthForm, setRegisterForm } = authFormsSlice.actions

export default authFormsSlice.reducer
