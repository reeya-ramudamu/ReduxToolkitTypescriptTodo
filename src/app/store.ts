import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { TodoState } from '../features/todo/todoSlice';

export interface RootState {
  todos: TodoState;
  // Add other reducers here if needed
}

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    // Add other reducers here if needed
  },
});

export type AppDispatch = typeof store.dispatch;
