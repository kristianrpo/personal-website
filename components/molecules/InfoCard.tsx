import { JSX } from "react";
import ButtonLink from "@/components/atoms/ButtonLink";
import Description from "@/components/atoms/Description";
import Heading from "@/components/atoms/Heading";

interface InfoCard {
  title: string;
  description: string;
  labelButton1: string;
  urlButton1: string;
  labelButton2: string;
  urlButton2: string;
}

export default function ProfileInfoCard({
  title,
  description,
  urlButton1,
  labelButton1,
  urlButton2,
  labelButton2,
}: InfoCard): JSX.Element {
  return (
    <div>
      <Heading variant="h1" className="w-full lg:w-150">
        {title}
      </Heading>
      <Description className="w-full my-4 lg:w-120">{description}</Description>
      <div className="flex justify-start gap-4 pt-2 w-fit">
        <ButtonLink
          href={urlButton1}
          className="bg-[#1463B8] hover:bg-white hover:text-[#1463B8]"
        >
          {labelButton1}
        </ButtonLink>
        <ButtonLink
          href={urlButton2}
          className="bg-[#1463B8] hover:bg-white hover:text-[#1463B8]"
        >
          {labelButton2}
        </ButtonLink>
      </div>
    </div>
  );
}
