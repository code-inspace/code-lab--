import { type Todo } from "../types";
import Button from "../../../components/Button";
interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}
const TodoItem = ({
  todo: { id, label, completed },
  deleteTodo,
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
      <Button onClick={() => deleteTodo(id)}>Delete</Button>
    </div>
  );
};

export default TodoItem;
