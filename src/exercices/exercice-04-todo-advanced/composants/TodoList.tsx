import { useState } from "react";
import type { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  removeTodo,
  toggleTodo,
  updateTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, label: string) => void;
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);

  const onCancelEdit = () => setEditingId(null);
  const handleEditMode = (id: string) => setEditingId(id);

  if (todos.length === 0) {
    return <p>La liste est vide</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          editingId={editingId}
          onCancelEdit={onCancelEdit}
          handleEditMode={handleEditMode}
        />
      ))}
    </div>
  );
};

export default TodoList;
