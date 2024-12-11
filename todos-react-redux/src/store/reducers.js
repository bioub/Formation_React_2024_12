import { createReducer } from '@reduxjs/toolkit';

import { addTodo, updateNewTodo } from './actions';

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
    });
});
