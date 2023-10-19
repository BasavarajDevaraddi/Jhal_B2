// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    // other reducers if you have them
  },
});

export default store;
