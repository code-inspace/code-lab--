import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Count from "../../components/Count";

const Operation = {
  Add: "Add",
  Subtract: "Subtract",
  Multiply: "Multiply",
  Divide: "Divide",
} as const;
type Operation = (typeof Operation)[keyof typeof Operation];

const OPERATIONS: {
  label: string;
  value: Operation;
}[] = [
  {
    label: "+",
    value: Operation.Add,
  },
  {
    label: "-",
    value: Operation.Subtract,
  },
  {
    label: "*",
    value: Operation.Multiply,
  },
  {
    label: "/",
    value: Operation.Divide,
  },
];

const calculate = (
  operation: Operation,
  left: number,
  right: number,
): number | null => {
  if (Number.isNaN(left) || Number.isNaN(right)) {
    return null;
  }
  switch (operation) {
    case Operation.Add:
      return left + right;
    case Operation.Subtract:
      return left - right;
    case Operation.Multiply:
      return left * right;
    case Operation.Divide:
      if (right === 0) {
        return null;
      }
      return left / right;
    default:
      throw new Error("Unknown operation");
  }
};

function CalculatorPage() {
  const [leftValue, setLeftValue] = useState("");
  const [rightValue, setRightValue] = useState("");
  const [operation, setOperation] = useState<Operation>(Operation.Add);
  const left = Number(leftValue);
  const right = Number(rightValue);
  const result = calculate(operation, left, right);
  const handleReset = () => {
    setLeftValue("");
    setRightValue("");
    setOperation(Operation.Add);
  };

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
        {OPERATIONS.map(({ label, value }) => (
          <Button key={value} onClick={() => setOperation(value)}>
            {label}
          </Button>
        ))}
      </div>
      <Button onClick={handleReset}>reset</Button>
      <Count value={result} />
    </section>
  );
}

export default CalculatorPage;
