/**
  * TodoItem component
  * @param {Object} props
  * @param {Object} props.todo
  * @param {number} props.todo.id
  * @param {string} props.todo.title
  * @param {boolean} props.todo.completed
  * @param {Function} props.onEdit
  * @returns {import('react').ReactNode}
 */
function TodoSpanValue({ todo, onEdit }) {
  function handleDoubleClick() {
    onEdit(todo.id);
  }
  return (
    <span className="todosSpanValue" onDoubleClick={handleDoubleClick}>{todo.title}</span>
  );
}

export default TodoSpanValue;