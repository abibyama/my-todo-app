// TodoItem.tsx

import React from "react";
import styles from "./TodoList.module.scss";

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
  onDeleteTodo: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onDeleteTodo,
  onToggleComplete,
}) => {
  const handleDelete = () => {
    onDeleteTodo && onDeleteTodo(todo.id);
  };

  const handleToggleComplete = () => {
    onToggleComplete && onToggleComplete(todo.id);
  };

  return (
    <li
      className={`${styles["todo-item"]} ${todo.completed ? styles.completed : ""
        }`}
    >
      <span>{todo.title}</span>
      <div>
        <button onClick={handleToggleComplete}>
          {todo.completed ? "Incomplete" : "Complete"}
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
