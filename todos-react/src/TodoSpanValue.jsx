/**
  * TodoItem component
  * @param {Object} props
  * @param {Object} props.todo
  * @param {number} props.todo.id
  * @param {string} props.todo.title
  * @param {boolean} props.todo.completed
  * @returns {import('react').ReactNode}
 */
function TodoSpanValue({ todo }) {
  return (
    <span className="todosSpanValue">{todo.title}</span>
  );
}

export default TodoSpanValue;