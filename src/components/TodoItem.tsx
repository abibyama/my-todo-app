import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './TodoItem.module.scss';
import { Todo } from './TodoList';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
  const handleToggleComplete = () => {
    onToggleComplete(todo.id);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <div className={styles.todoItem}>
      <div className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`} onClick={handleToggleComplete}>
        {todo.text}
      </div>
      <div className={styles.deleteButton} onClick={handleDeleteClick}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default TodoItem;
