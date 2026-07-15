import type { Todo } from "../models/Todo";

export const add = (label: string): Todo => ({
  completed: false,
  id: crypto.randomUUID(),
  label,
});

export const remove = (todos: Todo[], id: string): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const toggle = (todos: Todo[], id: string): Todo[] => {
  return todos.map((todo) => {
    if (todo.id === id) return { ...todo, completed: !todo.completed };
    return todo;
  });
};
