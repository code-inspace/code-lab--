import type { Todo } from "../types";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  deleteTodo,
  toggleTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}) => {
  if (todos.length === 0) {
    return <p>La liste est vide</p>;
  }

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
