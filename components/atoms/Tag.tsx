import { JSX } from "react";

type Variant = "primary" | "secondary";

interface TagProps {
  label: string;
  variant: Variant;
  className?: string;
}

export default function Tag({
  label,
  variant,
  className,
}: TagProps): JSX.Element {
  return (
    <div
      className={`inline-block whitespace-nowrap rounded-3xl font-medium px-2 py-1 text-xs sm:px-2 sm:py-1 sm:text-sm md:px-2.5 md:py-1.5 md:text-sm lg:px-3 lg:py-2 lg:text-[0.9rem] xl:px-3.5 xl:py-2.5 xl:text-base ${variant === "primary" ? "bg-[#293038] text-white" : "bg-white text-black border"} ${className}`}
    >
      {label}
    </div>
  );
}
