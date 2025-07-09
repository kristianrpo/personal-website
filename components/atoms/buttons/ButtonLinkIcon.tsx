import type { JSX } from "react";
import Link from "next/link";

interface ButtonLinkIconProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function ButtonLinkIcon({
  children,
  href,
  className,
}: ButtonLinkIconProps): JSX.Element {
  return (
    <Link
      href={href}
      className={`rounded-full bg-[#293038] inline-block text-white rounded-3xl font-bold duration-300 ease-linear px-2 py-1 text-base sm:px-3 sm:py-1.5 md:px-4 md:py-2 md:text-base lg:px-4.5 lg:py-2.5 lg:text-[1.45rem] xl:px-5 xl:py-3 xl:text-[1.5rem] ${className}`}
    >
      {children}
    </Link>
  );
}
