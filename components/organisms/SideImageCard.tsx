import type { JSX } from "react";
import InfoCard from "@/components/molecules/InfoCard";
import CustomImage from "@/components/atoms/CustomImage";
import ButtonLink from "@/components/atoms/ButtonLink";
import Description from "@/components/atoms/Description";

export interface SideImageCardProps {
  title: string;
  subtitle: string;
  description?: string;
  urlButton: string;
  labelButton: string;
  imageSrc: string;
  imageAlt: string;
}

export default function SideImageCard({
  title,
  subtitle,
  description,
  urlButton,
  labelButton,
  imageSrc,
  imageAlt,
}: SideImageCardProps): JSX.Element {
  return (
    <section className="flex flex-col xl:flex-row gap-8 items-stretch rounded-2xl overflow-hidden my-10">
      <div className="flex-2/3 flex flex-col items-start order-2">
        <InfoCard
          title={title}
          description={subtitle}
          variantHeading="h4"
          classNameHeading="w-full"
          classNameDescription="w-full my-2 text-[#9EABB8]"
        />
        {description && (
          <Description className="my-2">{description}</Description>
        )}
        <ButtonLink
          href={urlButton}
          className="bg-[#1463B8] hover:bg-white hover:text-[#1463B8] my-3"
        >
          {labelButton}
        </ButtonLink>
      </div>
      <div className="flex-1/3 max-h-[400px] order-1">
        <CustomImage
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={400}
          className="object-cover max-h-[400px] rounded-xl"
        />
      </div>
    </section>
  );
}
