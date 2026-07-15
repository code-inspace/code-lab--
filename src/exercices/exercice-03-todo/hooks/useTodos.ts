import { useState } from "react";
import type { Todo } from "../models/Todo";
import { add, remove, toggle } from "../services/todo.services";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (label: string) => setTodos((prev) => [...prev, add(label)]);

  const removeTodo = (id: string) => {
    setTodos((prev) => remove(prev, id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => toggle(prev, id));
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
};

export default useTodos;
