import TodoForm from "./composants/TodoForm";
import TodoList from "./composants/TodoList";
import useTodos from "./hooks/useTodos";

const TodoPage = () => {
  const { todos, addTodo, removeTodo, toggleTodo, updateTodo } = useTodos();

  return (
    <section id="center">
      <h1>Todo</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        updateTodo={updateTodo}
      />
    </section>
  );
};

export default TodoPage;
