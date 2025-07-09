import type { JSX } from "react";
import InfoCard from "@/components/molecules/cards/InfoCard";
import CustomImage from "@/components/atoms/CustomImage";
import Link from "next/link";

export interface TopImageCardProps {
  title: string;
  description: string;
  url: string;
  imageSrc: string;
  imageAlt: string;
}

export default function TopImageCard({
  title,
  description,
  url,
  imageSrc,
  imageAlt,
}: TopImageCardProps): JSX.Element {
  return (
    <Link
      href={url}
      className="flex flex-col gap-8 items-stretch rounded-2xl overflow-hidden bg-gradient-to-bl from-[#1C1C1C] to-[#293038] transition-transform duration-300 hover:scale-105"
    >
      <div className="flex-2/3 flex flex-col items-start order-2">
        <InfoCard
          title={title}
          description={description}
          variantHeading="h4"
          classNameInfoCard="px-6 pb-6"
          classNameHeading="w-full"
          classNameDescription="w-full my-2 text-[#9EABB8]"
        />
      </div>
      <div className="flex-1/3 order-1">
        <CustomImage
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={400}
          className="object-cover rounded-xl"
        />
      </div>
    </Link>
  );
}
