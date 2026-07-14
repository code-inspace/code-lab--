import { useState } from "react";
import TodoForm from "./composants/Todoform";
import TodoList from "./composants/TodoList";
import type { Todo } from "./types";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  const createTodo = (todo: Todo) => setTodos((prev) => [...prev, todo]);

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        return todo;
      });
    });
  };

  return (
    <section id="center">
      <h1>Todo</h1>
      <TodoForm createTodo={createTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </section>
  );
};

export default TodoPage;
