import './App.css';

import TodoItem from './TodoItem';

function App() {
  const todos = [
    { id: 123, title: 'AAA', completed: false },
    { id: 456, title: 'BBB', completed: true },
    { id: 789, title: 'CCC', completed: false },
  ];
  const editingId = -1;
  return (
    <>
      <form className="todos-form">
        <input type="checkbox" className="todos-toggle-checked" />
        <input type="text" className="todos-new-input" />
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
