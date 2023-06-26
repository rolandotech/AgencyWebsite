import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: null,
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsername } = userReducer.actions

export default userReducer.reducer