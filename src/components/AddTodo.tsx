import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddTodoProps {
  onAddTodo: (title: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAddTodo = () => {
    if (title.trim() === "") {
      toast.error("Please enter a title");
    } else {
      onAddTodo(title);
      setTitle("");
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleTitleChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
