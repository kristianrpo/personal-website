import type { JSX } from "react";
import InfoCard from "@/components/molecules/cards/InfoCard";
import CustomImage from "@/components/atoms/CustomImage";
import ButtonLinkCTA from "@/components/atoms/buttons/ButtonLinkCTA";

export interface HeroProps {
  title: string;
  description: string;
  urlButton1: string;
  labelButton1: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Hero({
  title,
  description,
  urlButton1,
  labelButton1,
  imageSrc,
  imageAlt,
}: HeroProps): JSX.Element {
  return (
    <section className="flex flex-col xl:flex-row gap-8 items-stretch rounded-2xl overflow-hidden bg-gradient-to-bl from-[#1C1C1C] to-[#293038] my-5">
      <div className="flex-1 p-8 sm:p-10 md:p-20 flex flex-col justify-center items-start">
        <InfoCard
          title={title}
          description={description}
          variantHeading="h1"
          classNameHeading="w-full lg:w-150"
          classNameDescription="w-full my-4 lg:w-120"
        />
        <div className="flex gap-4">
          <ButtonLinkCTA
            href={urlButton1}
            className="bg-[#1463B8] hover:bg-white hover:text-[#1463B8]"
          >
            {labelButton1}
          </ButtonLinkCTA>
        </div>
      </div>

      <div className="flex-1 relative min-h-[320px] md:max-h-[850px]">
        <CustomImage
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={1000}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
