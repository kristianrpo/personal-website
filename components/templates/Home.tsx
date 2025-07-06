import Hero from "@/components/organisms/Hero";
import { getTranslations } from "next-intl/server";
import Heading from "@/components/atoms/Heading";
import Description from "@/components/atoms/Description";
import TagGrid from "@/components/molecules/TagGrid";
import Tag from "@/components/atoms/Tag";

type Tag = React.ComponentProps<typeof Tag>;

export default async function Home() {
  const t = await getTranslations("HomePage");

  const skills: Tag[] = [
    { label: t("skills.python"), variant: "primary" },
    { label: t("skills.php"), variant: "primary" },
    { label: t("skills.javascript"), variant: "primary" },
    { label: t("skills.typescript"), variant: "primary" },
    { label: t("skills.frontend"), variant: "primary" },
    { label: t("skills.git"), variant: "primary" },
    { label: t("skills.github"), variant: "primary" },
    { label: t("skills.azure"), variant: "primary" },
    { label: t("skills.mysql"), variant: "primary" },
    { label: t("skills.django"), variant: "primary" },
    { label: t("skills.laravel"), variant: "primary" },
    { label: t("skills.nextjs"), variant: "primary" },
    { label: t("skills.n8n"), variant: "primary" },
    { label: t("skills.powerAutomate"), variant: "primary" },
    { label: t("skills.docker"), variant: "primary" },
    { label: t("skills.teamwork"), variant: "secondary" },
    { label: t("skills.leadership"), variant: "secondary" },
    { label: t("skills.communication"), variant: "secondary" },
    { label: t("skills.continuousLearning"), variant: "secondary" },
    { label: t("skills.problemSolving"), variant: "secondary" },
    { label: t("skills.adaptability"), variant: "secondary" },
  ];

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

      <section id="skills" className="my-10">
        <Heading variant="h3" className="my-5">
          {t("skills.title")}
        </Heading>
        <TagGrid tags={skills}></TagGrid>
      </section>
    </div>
  );
}
