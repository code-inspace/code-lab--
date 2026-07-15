import type { Todo } from "../models/Todo";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  removeTodo,
  toggleTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
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
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
