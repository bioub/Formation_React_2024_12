import { useEffect } from 'react';

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
function TodoItem({ todo, isEditing, onDelete, onEdit, onUpdate }) {
  function handleClickDelete() {
    onDelete(todo);
  }

  function handleCheckboxChange() {
    onUpdate({ ...todo, completed: !todo.completed });
  }

  return (
    <div className="todosItem" data-todo-id={todo.id}>
      <input type="checkbox" className="todosCompleted" checked={todo.completed} onChange={handleCheckboxChange} />
      {isEditing ? <TodoInputValue todo={todo} onUpdate={onUpdate} onEdit={onEdit} /> : <TodoSpanValue todo={todo} onEdit={onEdit} />}
      <button className="todosDeleteBtn" onClick={handleClickDelete}>-</button>
    </div>
  );
}

export default TodoItem;
