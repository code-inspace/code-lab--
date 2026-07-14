import { useState } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import type { Todo } from "../types";

const TodoForm = ({ createTodo }: { createTodo: (todo: Todo) => void }) => {
  const [formValue, setFormValue] = useState("");
  const [displayError, setDisplayError] = useState(false);

  const validateForm = () => {
    console.log(formValue);
    const trimmedValue = formValue.trim();
    console.log(trimmedValue);
    if (!trimmedValue) {
      setDisplayError(true);
      return;
    }
    setDisplayError(false);
    createTodo({
      completed: false,
      id: crypto.randomUUID(),
      label: trimmedValue,
    });
    setFormValue("");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateForm();
      }}
    >
      <Input
        type="text"
        value={formValue}
        onChange={(e) => {
          setFormValue(e.target.value);
          if (displayError) {
            setDisplayError(false);
          }
        }}
        label="New task"
      />
      {displayError && (
        <p style={{ color: "red" }}>Erreur : le texte n'est pas valide.</p>
      )}
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TodoForm;
