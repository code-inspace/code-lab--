import { useState } from "react";
import type { Todo } from "../models/Todo";
import { add, remove, toggle, update } from "../services/todo.services";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (label: string) => setTodos((prev) => [...prev, add(label)]);

  const removeTodo = (id: string) => {
    setTodos((prev) => remove(prev, id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => toggle(prev, id));
  };

  const updateTodo = (id: string, label: string) => {
    console.log(label);
    setTodos((prev) => update(prev, id, label));
  };

  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    updateTodo,
  };
};

export default useTodos;
