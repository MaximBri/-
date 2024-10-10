import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: false,
  data: {
    name: '',
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
    setData: (state, action) => {
      state.data.email = action.payload.email
      state.data.name = action.payload.first_name
      state.auth = true
      // console.log(state.auth, state.data.email, state.data.name)
    }
  },
})
export const getAuth = (state) => state.person.auth
export const { setAuth, setData } = personSlice.actions

export default personSlice.reducer
