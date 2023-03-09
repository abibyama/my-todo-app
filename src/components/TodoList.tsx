import React from 'react';
import TodoItem from './TodoItem';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo, onToggleComplete }) => {
  const handleDeleteTodo = (id: number) => {
    onDeleteTodo(id);
  };

  const handleToggleComplete = (id: number) => {
    onToggleComplete(id);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} onToggleComplete={handleToggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;
