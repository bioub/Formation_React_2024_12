import TodoInputValue from './TodoInputValue';
import TodoSpanValue from './TodoSpanValue';

/**
  * TodoItem component
  * @param {Object} props
  * @param {Object} props.todo
  * @param {number} props.todo.id
  * @param {string} props.todo.title
  * @param {boolean} props.todo.completed
  * @param {boolean} props.isEditing
  * @returns {import('react').ReactNode}
 */
function TodoItem({ todo, isEditing }) {
  return (
    <div className="todosItem" data-todo-id={todo.id}>
      <input type="checkbox" className="todosCompleted" checked={todo.completed} />
      {isEditing ? <TodoInputValue todo={todo} /> : <TodoSpanValue todo={todo} />}
      <button className="todosDeleteBtn">-</button>
    </div>
  );
}

export default TodoItem;
