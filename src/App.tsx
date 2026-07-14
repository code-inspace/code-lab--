import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <section id="center">
      <ul>
        <li>
          <Link to="/exercice-01-counter">Exercice 01 - Counter</Link>
        </li>
        <li>
          <Link to="/exercice-02-calculator">Exercice 02 - Calculator</Link>
        </li>
        <li>
          <Link to="/exercice-03-todo">Exercice 03 - Todo</Link>
        </li>
      </ul>
    </section>
  );
}

export default App;
