// TodoList.tsx

import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.scss";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDeleteTodo,
  onToggleComplete,
}) => {
  return (
    <ul className={styles["todo-list"]}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
