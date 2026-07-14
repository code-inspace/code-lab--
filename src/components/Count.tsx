interface CountProps {
  value: number | string;
}
export default function Count({ value }: CountProps) {
  return <div>{value}</div>;
}
