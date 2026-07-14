interface CountProps {
  value: number | null;
}
export default function Count({ value }: CountProps) {
  return <div>{value || "Impossible"}</div>;
}
