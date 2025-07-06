import Hero from "@/components/organisms/Hero";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="">
      <Hero
        title={t("hero.title")}
        description={t("hero.subtitle")}
        urlButton1="./"
        labelButton1={t("hero.downloadCV")}
        urlButton2="./"
        labelButton2={t("hero.contactMe")}
        imageSrc="/kristian.jpg"
        imageAlt={t("hero.imageAlt")}
      />
    </div>
  );
}
