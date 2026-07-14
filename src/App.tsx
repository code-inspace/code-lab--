import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prev) => prev + 1);

  const handleReset = () => setCount(0);

  const handleDecrement = () => setCount((prev) => Math.max(0, prev - 1));

  return (
    <section id="center">
      <Counter value={count} />
      <Button onClick={handleIncrement}>Add</Button>
      <Button onClick={handleDecrement}>Remove</Button>
      <Button onClick={handleReset}>Reset</Button>
    </section>
  );
}

export default App;
