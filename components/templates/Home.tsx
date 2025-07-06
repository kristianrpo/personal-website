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

  const hero = data.homePage.hero;

  const profile = data.homePage.profile;

  const skills = data.homePage.skills;
  const skillList = skills.items.map((item) => ({
    label: t(item.label),
    variant: item.variant,
  })) as Tag[];

  return (
    <div className="">
      <section id="hero" className="my-10">
        <Hero
          title={t(hero.title)}
          description={t(hero.subtitle)}
          urlButton1={hero.downloadCVUrl}
          labelButton1={t(hero.downloadCV)}
          urlButton2={hero.contactMeUrl}
          labelButton2={t(hero.contactMe)}
          imageSrc={hero.imageSrc}
          imageAlt={t(hero.imageAlt)}
        />
      </section>

      <section id="profile" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(profile.title)}
        </Heading>
        <Description>{t(profile.description)}</Description>
      </section>

      <section id="skills" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(skills.title)}
        </Heading>
        <TagGrid tags={skillList}></TagGrid>
      </section>
    </div>
  );
}
