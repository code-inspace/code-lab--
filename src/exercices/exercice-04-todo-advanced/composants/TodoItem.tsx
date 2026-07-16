import Button from "../../../components/Button";
import type { Todo } from "../models/Todo";
import EditForm from "./EditForm";
interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (id: string, label: string) => void;
  editingId: string;
  onCancelEdit: () => void;
  handleEditMode: (id: string) => void;
}
const TodoItem = ({
  todo: { id, label, completed },
  removeTodo,
  toggleTodo,
  updateTodo,
  editingId,
  onCancelEdit,
  handleEditMode,
}: TodoItemProps) => {
  const isEditing = id === editingId;

  const labelBoxes = isEditing ? (
    <EditForm
      updateTodo={updateTodo}
      id={id}
      label={label}
      onCancelEdit={onCancelEdit}
    />
  ) : (
    <p onDoubleClick={() => handleEditMode(id)}>{label}</p>
  );

  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      {labelBoxes}
      <Button onClick={() => removeTodo(id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;
