import type { JSX } from "react";
import ProfileInfoCard from "@/components/molecules/InfoCard";
import CustomImage from "@/components/atoms/CustomImage";

export interface HeroProps {
  title: string;
  description: string;
  urlButton1: string;
  labelButton1: string;
  urlButton2: string;
  labelButton2: string;
  imageSrc: string;
  imageAlt: string;
}

export default function Hero({
  title,
  description,
  urlButton1,
  labelButton1,
  urlButton2,
  labelButton2,
  imageSrc,
  imageAlt,
}: HeroProps): JSX.Element {
  return (
    <section className="flex flex-col xl:flex-row gap-8 items-stretch rounded-2xl overflow-hidden bg-gradient-to-bl from-[#1C1C1C] to-[#293038] my-5">
      <div className="flex-1 p-8 sm:p-10 md:p-20 flex items-center">
        <ProfileInfoCard
          title={title}
          description={description}
          urlButton1={urlButton1}
          labelButton1={labelButton1}
          urlButton2={urlButton2}
          labelButton2={labelButton2}
        />
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
