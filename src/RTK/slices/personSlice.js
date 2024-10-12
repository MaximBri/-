import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth: false,
  access: '',
  refresh: '',
  data: {
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    phone: '',
    birthday: '',
    inRF: true,
    gender: 'male'
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
      state.data.name = action.payload.name
      state.data.access = action.payload.access
      state.data.refresh = action.payload.refresh
      if(state.data.name) state.auth = true
      // console.log(state.data.access)
      // console.log(state.data.refresh)
      // console.log(state.auth, state.data.email, state.data.name)
    },
    setAllFields: (state, action) => {
      state.data = action.payload
      if(state.data.name) state.auth = true
      // state.data.access = action.payload.access
      // state.data.refresh = action.payload.refresh
    }
  },
})
export const getAuth = (state) => state.person.auth
export const getUserData = (state) => state.person.data
export const { setAuth, setData, setAllFields } = personSlice.actions

export default personSlice.reducer
