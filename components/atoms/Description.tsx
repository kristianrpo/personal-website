import React, { JSX } from "react";

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Description({
  children,
  className,
}: DescriptionProps): JSX.Element {
  return (
    <p className={`text-base md:text-lg leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
