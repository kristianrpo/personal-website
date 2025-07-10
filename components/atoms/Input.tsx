import { JSX } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium">{label}</label>
      <input className="border rounded p-2 w-full" {...props} />
    </div>
  );
}
