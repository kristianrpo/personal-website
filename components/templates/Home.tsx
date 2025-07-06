import Hero from "@/components/organisms/Hero";
import { getTranslations } from "next-intl/server";
import Heading from "@/components/atoms/Heading";
import Description from "@/components/atoms/Description";
import TagGrid from "@/components/molecules/TagGrid";
import Tag from "@/components/atoms/Tag";
import data from "@/data/pageContent.json";

type Tag = React.ComponentProps<typeof Tag>;

export default async function Home() {
  const t = await getTranslations("HomePage");

  const heroSection = data.homePage.hero;

  const profileSection = data.homePage.profile;

  const skillSection = data.homePage.skills;
  const skillsItems = data.homePage.skills.items as Tag[];
  const skillList = skillsItems.map((skillItem) => ({
    label: t(skillItem.label),
    variant: skillItem.variant,
  }));

  return (
    <div className="">
      <section id="hero" className="my-10">
        <Hero
          title={t(heroSection.title)}
          description={t(heroSection.subtitle)}
          urlButton1={heroSection.downloadCVUrl}
          labelButton1={t(heroSection.downloadCV)}
          urlButton2={heroSection.contactMeUrl}
          labelButton2={t(heroSection.contactMe)}
          imageSrc={heroSection.imageSrc}
          imageAlt={t(heroSection.imageAlt)}
        />
      </section>

      <section id="profile" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(profileSection.title)}
        </Heading>
        <Description>{t(profileSection.description)}</Description>
      </section>

      <section id="skills" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(skillSection.title)}
        </Heading>
        <TagGrid tags={skillList}></TagGrid>
      </section>
    </div>
  );
}
