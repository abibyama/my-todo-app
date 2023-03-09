import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoList, { Todo } from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import "./App.css";


const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Math.floor(Math.random() * 100000),
      text: title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <header>
        <h1>To Do List</h1>
      </header>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
