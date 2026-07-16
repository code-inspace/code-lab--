import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";

interface TodoFormProps {
  addTodo: (label: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [formValue, setFormValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const trimmedValue = formValue.trim();
    if (!trimmedValue) {
      setError("Erreur : le texte n'est pas valide.");
      return;
    }
    setError(null);
    addTodo(trimmedValue);
    setFormValue("");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        type="text"
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        label="New task"
      />
      {error !== null && <p style={{ color: "red" }}>{error}</p>}
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TodoForm;
