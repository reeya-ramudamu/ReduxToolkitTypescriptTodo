
import {createSlice,PayloadAction, nanoid} from '@reduxjs/toolkit';
import { Todo, TodoState } from '../../types/data';

const initialState : TodoState={
    todos: [{ id: nanoid(), text: 'Example Todo' }]
};
export const todoSlice = createSlice({

    name:'todo',
    initialState,
    reducers :{
        addTodo :(state, action: PayloadAction<string>) => {
            const newTodo: Todo = {
                id: nanoid(),
                text:action.payload
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter( (todo) => todo.
            id !== action.payload )

        },
        updateTodo: (state, action: PayloadAction<{ id: string; newText: string }>) => {
            const { id, newText } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = newText;
             }

            },
    }
});

export const {addTodo, removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer