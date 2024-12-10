/**
  * TodoItem component
  * @param {Object} props
  * @param {Object} props.todo
  * @param {number} props.todo.id
  * @param {string} props.todo.title
  * @param {boolean} props.todo.completed
  * @returns {import('react').ReactNode}
 */
function TodoInputValue({ todo }) {
  return (
    <input type="text" className="todosInputValue" value={todo.title} />
  );
}

export default TodoInputValue;