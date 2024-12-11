/**
  * TodoItem component
  * @param {Object} props
  * @param {Object} props.todo
  * @param {number} props.todo.id
  * @param {string} props.todo.title
  * @param {boolean} props.todo.completed
  * @returns {import('react').ReactNode}
 */
function TodoInputValue({ todo, onUpdate, onEdit }) {
  function handleChange(event) {
    onUpdate({ ...todo, title: event.target.value });
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      onEdit(-1);
    }
  }
  

  return (
    <input type="text" className="todosInputValue" value={todo.title} onChange={handleChange} onKeyDown={handleKeyDown}/>
  );
}

export default TodoInputValue;