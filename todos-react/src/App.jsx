import './App.css';

import { useState } from 'react';

import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([
    { id: 123, title: 'AAA', completed: false },
    { id: 456, title: 'BBB', completed: true },
    { id: 789, title: 'CCC', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('ABC');
  const [allChecked, setAllChecked] = useState(false);
  const editingId = -1;

  /** 
   * @param {SubmitEvent} event 
   */
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
    setNewTodo('');
  }

  function handleAllChecked(e) {
    setAllChecked(e.target.checked)
    setTodos(todos.map(todo => ({ ...todo, completed: e.target.checked })))
  } 
  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checked" checked={allChecked} onChange={handleAllChecked} />
        <input type="text" className="todos-new-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} isEditing={editingId === todo.id} />)}
        
        {/* <TodoItem todo={{ id: 345, title: 'XYZ', completed: false }} /> */}
        {/* React.createElement(TodoItem, { todo: { id: 345, title: 'XYZ', completed: false } }) */}
      </div>
    </>
  );
}

export default App;
