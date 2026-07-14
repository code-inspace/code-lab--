import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import CounterPage from "./exercices/exercice-01-counter/counterPage.tsx";
import CalculatorPage from "./exercices/exercice-02-calculatrice/calculatorPage.tsx";
import TodoPage from "./exercices/exercice-03-todo/todoPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/exercice-01-counter",
    element: <CounterPage />,
  },
  {
    path: "/exercice-02-calculator",
    element: <CalculatorPage />,
  },
  {
    path: "/exercice-03-todo",
    element: <TodoPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
