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
export const deleteTodo = createAction('todos/deleteTodo');
export const updateTodo = createAction('todos/updateTodo');
export const setAllTodos = createAction('todos/setAllTodos');
export const toggleCheckedAllTodo = createAction('todos/toggleCheckedAllTodo');
export const setEditingId = createAction('todos/setEditingId');