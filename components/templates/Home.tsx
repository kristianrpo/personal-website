import Hero from "@/components/organisms/Hero";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("HomePage");

  const title = t("hero.title");
  const description = t("hero.subtitle");
  const downloadCV = t("hero.downloadCV");
  const contactMe = t("hero.contactMe");
  const imageAlt = t("hero.imageAlt");

  return (
    <div className="">
      <Hero
        title={title}
        description={description}
        urlButton1="./"
        labelButton1={downloadCV}
        urlButton2="./"
        labelButton2={contactMe}
        imageSrc="/kristian.jpg"
        imageAlt={imageAlt}
      />
    </div>
  );
}
