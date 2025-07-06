import React, { JSX } from "react";
import { baseHeadingStyles } from "@/styles/customs";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  children: React.ReactNode;
  variant: Variant;
  className?: string;
}

export default function Heading({
  variant: Tag,
  className,
  children,
}: HeadingProps): JSX.Element {
  return (
    <Tag className={`${baseHeadingStyles[Tag]} ${className}`}>{children}</Tag>
  );
}
