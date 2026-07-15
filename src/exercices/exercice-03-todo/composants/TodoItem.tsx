import Button from "../../../components/Button";
import type { Todo } from "../models/Todo";
interface TodoItemProps {
  todo: Todo;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
const TodoItem = ({
  todo: { id, label, completed },
  removeTodo,
  toggleTodo,
}: TodoItemProps) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <p>{label}</p>
      <Button onClick={() => removeTodo(id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;
