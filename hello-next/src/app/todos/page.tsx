"use client";

import { useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

async function fetchTodos(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json();
  return data.slice(0, 20);
}

export default function Todos() {
  // const todos = await fetchTodos();

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos));
  }, []);

  return (
    <div>
      <div className="todosList">
        {todos.map((todo) => (
          <div className="todosItem" key={todo.id}>
            <input type="checkbox" />
            <span>{todo.title}</span>
            <button>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}
