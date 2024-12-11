import { createAction } from '@reduxjs/toolkit';

// export const addTodo = createAction('todos/addTodo');
export const addTodo = createAction('todos/addTodo', (newTodo) => ({
  payload: {
    id: Date.now(),
    title: newTodo,
    completed: false,
  },
}));

export const updateNewTodo = createAction('todos/updateNewTodo');
