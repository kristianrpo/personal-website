import { JSX } from "react";
import Image from "next/image";

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function CustomImage({
  src,
  alt,
  width,
  height,
  className,
}: CustomImageProps): JSX.Element {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className}`}
    />
  );
}
