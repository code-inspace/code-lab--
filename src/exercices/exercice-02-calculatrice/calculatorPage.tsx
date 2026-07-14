import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Count from "../../components/Count";

const Operation = {
  Add: "Add",
  Substract: "Substract",
  Multiply: "Multiply",
  Divide: "Divide",
  Reset: "Reset",
} as const;
type Operation = (typeof Operation)[keyof typeof Operation];

function CalculatorPage() {
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [operation, setOperation] = useState<Operation>(Operation.Add);

  const result = (() => {
    switch (operation) {
      case Operation.Add:
        return Number(leftValue) + Number(rightValue);
      case Operation.Substract:
        return Number(leftValue) - Number(rightValue);
      case Operation.Multiply:
        return Number(leftValue) * Number(rightValue);
      case Operation.Reset:
        return 0;
      case Operation.Divide:
        if (rightValue === "0") {
          return "Impossible";
        } else return Number(leftValue) / Number(rightValue);
      default:
        throw new Error("Unknown operation");
    }
  })();

  return (
    <section id="center">
      <h1>Calculator</h1>
      <div>
        <Input
          label="Left Value"
          type="number"
          value={leftValue}
          onChange={(e) => setLeftValue(e.target.value)}
        />
        <Input
          label="Right Value"
          type="number"
          value={rightValue}
          onChange={(e) => setRightValue(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={() => setOperation(Operation.Add)}>+</Button>
        <Button onClick={() => setOperation(Operation.Substract)}>-</Button>
        <Button onClick={() => setOperation(Operation.Multiply)}>x</Button>
        <Button onClick={() => setOperation(Operation.Divide)}>/</Button>
      </div>
      <Button onClick={() => setOperation(Operation.Reset)}>reset</Button>
      <Count value={result} />
    </section>
  );
}

export default CalculatorPage;
