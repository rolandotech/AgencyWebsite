import { configureStore } from '@reduxjs/toolkit';
import UserReducer  from './userReducer';

export const store = configureStore({
  reducer: UserReducer,
})