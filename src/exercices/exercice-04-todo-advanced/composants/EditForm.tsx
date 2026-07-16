import { useState } from "react";
import Input from "../../../components/Input";

interface EditFormProps {
  updateTodo: (id: string, label: string) => void;
  id: string;
  label: string;
  onCancelEdit: () => void;
}

const EditForm = ({ updateTodo, id, label, onCancelEdit }: EditFormProps) => {
  const [formValue, setFormValue] = useState(label);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const trimmedValue = formValue.trim();
    if (!trimmedValue) {
      setError("Erreur : le texte n'est pas valide.");
      return;
    }
    if (trimmedValue === label) {
      onCancelEdit();
      return;
    }
    updateTodo(id, trimmedValue);
    onCancelEdit();
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Input
        autoFocus
        type="text"
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            onCancelEdit();
          }
        }}
      />
      {error !== null && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default EditForm;
