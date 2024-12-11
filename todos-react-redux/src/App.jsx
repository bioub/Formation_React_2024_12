import './App.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodo, updateNewTodo } from './store/actions';
import { newTodoSelector, todosDataSelector } from './store/selectors';
import TodoItem from './TodoItem';

async function fetchTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.slice(0, 20);
}

function App() {
  const todos = useSelector(todosDataSelector);
  // const [todos, setTodos] = useState([]);
  // const [newTodo, setNewTodo] = useState('ABC');
  const [allChecked, setAllChecked] = useState(false);

  // Exercice 5
  // Créer l'action updateEditingId
  // Modifier le reducer todosReducer pour gérer cet état
  // Faire le dispatch là où c'est nécessaire (où j'appelais setEditingId)
  // Ajouter un selecteur pour récupérer l'editingId
  const [editingId, setEditingId] = useState(-1);

  const newTodo = useSelector(newTodoSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener('click', (event) => {
      // TODO Avancé : Récupérer la référence sur l'input avec
      // une ref et forward (jusqu'à 18) et une prop dans React 19+
      if (!event.target.classList.contains('todosInputValue')) {
        // setEditingId(-1);
      }
    });
  }, []);

  useEffect(() => {
    fetchTodos().then((newTodos) => {
      // Exercice 1
      // Créer un action creator setAllTodos
      // Ajouter un cas dans le reducer todosReducer qui reçoit payload et le retourne
      // Dispatcher ci-dessous l'action en passant par l'action creator
      // dispatch(setAllTodos(newTodos));
    });
  }, [dispatch]);

  /**
   * @param {SubmitEvent} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(newTodo));
    // dispatch(addTodo({
    //   id: Date.now(),
    //   title: newTodo,
    //   completed: false,
    // }));
    // setTodos([...todos, { id: Date.now(), title: newTodo, completed: false }]);
    dispatch(updateNewTodo(''));
  }

  function handleAllChecked(e) {
    // setAllChecked(e.target.checked);

    // Exercice 2
    // Créer un action creator toggleCheckedAllTodo qui reçoit un booléen en entrée
    // Ajouter un cas dans le reducer todosReducer qui reçoit payload et affecte ce booléen
    // à toutes les clés completed du tableau
    // Appeler l'action creator ici avec dispatch
    // dispatch(toggleCompletedAllTodos(globalChecked))
    // setTodos(todos.map((todo) => ({ ...todo, completed: e.target.checked })));
  }

  function handleDelete(todo) {
    // Exercice 3
    // Supprimer la todos du store (à vous de trouver les étapes)
    // setTodos(todos.filter((t) => t.id !== todo.id));
  }

  function handleEdit(id) {
    // setEditingId(id);
  }

  function handleUpdate(updatedTodo) {
    // Exercice 4
    // Editer la todo du store (à vous de trouver les étapes)
    // setTodos(todos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)));
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
          onChange={(e) => dispatch(updateNewTodo(e.target.value))}
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
