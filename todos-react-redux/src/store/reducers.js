import { createReducer } from '@reduxjs/toolkit';

import { addTodo, deleteTodo, setAllTodos, setEditingId, toggleCheckedAllTodo, updateNewTodo, updateTodo } from './actions';

const initialState = {
  todos: {
    data: [],
    isLoading: false,
    error: null,
    newTodo: '',
    editingId: -1,
  },
};

export const todosReducer = createReducer(initialState.todos, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.data.push(action.payload);
    })
    .addCase(updateNewTodo, (state, action) => {
      state.newTodo = action.payload;
    })
    .addCase(setAllTodos, (state, action) => {
      state.data = action.payload;
    })
    .addCase(toggleCheckedAllTodo, (state, action) => {
      for (const todo of state.data) {
        todo.completed = action.payload;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload.id);
    })
    .addCase(updateTodo, (state, action) => { 
      const index = state.data.findIndex((todo) => todo.id === action.payload.id);
      state.data[index] = action.payload;
    })
    .addCase(setEditingId, (state, action) => {
      state.editingId = action.payload;
    });
});
