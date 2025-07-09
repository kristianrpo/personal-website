import type { JSX } from "react";
import Link from "next/link";

interface ButtonLinkCTAProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function ButtonLinkCTA({
  children,
  href,
  className,
}: ButtonLinkCTAProps): JSX.Element {
  return (
    <Link
      href={href}
      className={`inline-block text-white rounded-3xl font-bold duration-300 ease-linear px-3 py-2 text-base sm:px-4 sm:py-2.5 md:px-5 md:py-3 md:text-base lg:px-5.5 lg:py-3.5 lg:text-[1.05rem] xl:px-6 xl:py-4 xl:text-[1.1rem] ${className}`}
    >
      {children}
    </Link>
  );
}
