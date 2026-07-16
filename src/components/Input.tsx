import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <>
      <p>{label}</p>
      <input {...props} />
    </>
  );
}
