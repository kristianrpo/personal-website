import Hero from "@/components/organisms/Hero";
import { getTranslations } from "next-intl/server";
import Heading from "@/components/atoms/Heading";
import Description from "@/components/atoms/Description";
export default async function Home() {
  const t = await getTranslations("HomePage");

  return (
    <div className="">
      <section id="hero" className="my-10">
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
      </section>
      <section id="profile" className="my-10">
        <Heading variant="h3" className="my-5">
          {t("profile.title")}
        </Heading>
        <Description>{t("profile.description")}</Description>
      </section>
    </div>
  );
}
