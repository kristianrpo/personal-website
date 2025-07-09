import React, { JSX } from "react";
import Description from "@/components/atoms/Description";
import Heading from "@/components/atoms/Heading";

type VariantHeading = React.ComponentProps<typeof Heading>["variant"];
interface InfoCard {
  title: string;
  description: string;
  variantHeading: VariantHeading;
  classNameInfoCard?: string;
  classNameHeading?: string;
  classNameDescription?: string;
}

export default function InfoCard({
  title,
  description,
  variantHeading,
  classNameInfoCard,
  classNameHeading,
  classNameDescription,
}: InfoCard): JSX.Element {
  return (
    <div className={`${classNameInfoCard}`}>
      <Heading variant={variantHeading} className={classNameHeading}>
        {title}
      </Heading>
      <Description className={classNameDescription}>{description}</Description>
    </div>
  );
}
