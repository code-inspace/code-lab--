interface CounterProps {
  value: number;
}
export default function Counter({ value }: CounterProps) {
  return <div>{value}</div>;
}
