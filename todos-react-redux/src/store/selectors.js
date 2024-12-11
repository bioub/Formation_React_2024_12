export function todosDataSelector(state) {
  return state.todos.data;
}

export function newTodoSelector(state) {
  return state.todos.newTodo;
}

export function togglerCheckedAllSelector(state) {
  return state.todos.data.every((todo) => todo.completed);
}

export function editingIdSelector(state) {
  return state.todos.editingId;
}