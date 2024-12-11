import './App.css';

import { useEffect, useState } from 'react';

import TodoItem from './TodoItem';

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.slice(0, 20);
}

function App() {
  const [todos, setTodos] = useState([
    // { id: 123, title: 'AAA', completed: false },
    // { id: 456, title: 'BBB', completed: true },
    // { id: 789, title: 'CCC', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('ABC');
  const [allChecked, setAllChecked] = useState(false);
  const [editingId, setEditingId] = useState(-1);

  useEffect(() => {
    window.addEventListener('click', (event) => {
      // TODO Avancé : Récupérer la référence sur l'input avec
      // une ref et forward (jusqu'à 18) et une prop dans React 19+
      if (!event.target.classList.contains('todosInputValue')) {
        setEditingId(-1);
      }
    });
  }, []);

  useEffect(() => {
    fetchTodos().then((newTodos) => {
      setTodos(newTodos);
    });
  }, []);

  /**
   * @param {SubmitEvent} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
    setNewTodo('');
  }

  function handleAllChecked(e) {
    setAllChecked(e.target.checked);
    setTodos(todos.map((todo) => ({ ...todo, completed: e.target.checked })));
  }

  function handleDelete(todo) {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  function handleEdit(id) {
    setEditingId(id);
  }

  function handleUpdate(updatedTodo) {
    setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));
  }

  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input
          type="checkbox"
          className="todos-toggle-checked"
          checked={allChecked}
          onChange={handleAllChecked}
        />
        <input
          type="text"
          className="todos-new-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button>+</button>
      </form>
      <div className="todos-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isEditing={editingId === todo.id}
            onDelete={handleDelete}
            onEdit={handleEdit}
            onUpdate={handleUpdate}
          />
        ))}

        {/* <TodoItem todo={{ id: 345, title: 'XYZ', completed: false }} /> */}
        {/* React.createElement(TodoItem, { todo: { id: 345, title: 'XYZ', completed: false } }) */}
      </div>
    </>
  );
}

export default App;
