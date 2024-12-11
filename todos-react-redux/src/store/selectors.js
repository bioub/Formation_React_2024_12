export function todosDataSelector(state) {
  return state.todos.data;
}

export function newTodoSelector(state) {
  return state.todos.newTodo;
}