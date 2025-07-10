import type { JSX } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      {...props}
    >
      {children}
    </button>
  );
}
