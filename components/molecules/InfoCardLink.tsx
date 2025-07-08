import React, { JSX } from "react";
import Description from "@/components/atoms/Description";
import Heading from "@/components/atoms/Heading";
import Link from "next/link";

type VariantHeading = React.ComponentProps<typeof Heading>["variant"];
interface InfoCardLink {
  title: string;
  description: string;
  variantHeading: VariantHeading;
  url: string;
  classNameInfoCard?: string;
  classNameHeading?: string;
  classNameDescription?: string;
}

export default function InfoCardLink({
  title,
  description,
  variantHeading,
  url,
  classNameInfoCard,
  classNameHeading,
  classNameDescription,
}: InfoCardLink): JSX.Element {
  return (
    <div
      className={`${classNameInfoCard} border-b hover:border-blue-300 transition-colors duration-300`}
    >
      <Link href={url} className="block w-full py-4">
        <Heading variant={variantHeading} className={classNameHeading}>
          {title}
        </Heading>
        <Description className={classNameDescription}>
          {description}
        </Description>
      </Link>
    </div>
  );
}
