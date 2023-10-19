// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { registeredUsers: [], loggedInUser: null },
  reducers: {
    loginUser: (state, action) => {
      state.loggedInUser = action.payload;
    },
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload);
    },
  },
});

export const { loginUser, registerUser } = userSlice.actions;
export default userSlice.reducer;
