import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


export const store = configureStore({
  reducer: {
    todosReducer: todoReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
