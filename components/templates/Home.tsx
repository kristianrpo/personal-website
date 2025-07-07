import Hero from "@/components/organisms/Hero";
import { getTranslations } from "next-intl/server";
import Heading from "@/components/atoms/Heading";
import TagGrid from "@/components/molecules/TagGrid";
import Tag from "@/components/atoms/Tag";
import data from "@/data/pageContent.json";
import InfoCard from "../molecules/InfoCard";
import SideImageCard from "../organisms/SideImageCard";

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

  const experience = data.homePage.experience;
  const studies = data.homePage.studies;
  const languages = data.homePage.languages;

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
        <InfoCard
          title={t(profile.title)}
          description={t(profile.description)}
          variantHeading="h3"
          classNameHeading="my-5"
          classNameDescription="text-zinc-300"
        />
      </section>

      <section id="skills" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(skills.title)}
        </Heading>

        <TagGrid tags={skillList} />
      </section>

      <section id="experience" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(experience.title)}
        </Heading>

        {experience.items.map((item, index) => (
          <SideImageCard
            key={index}
            title={t(item.title)}
            subtitle={t(item.subtitle)}
            description={item.description ? t(item.description) : undefined}
            labelButton={t(item.labelButton)}
            urlButton={item.urlButton}
            imageSrc={item.imageSrc}
            imageAlt={t(item.imageAlt)}
          />
        ))}
      </section>

      <section id="studies" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(studies.title)}
        </Heading>
        {studies.items.map((item, index) => (
          <InfoCard
            key={index}
            title={t(item.title)}
            description={t(item.subtitle)}
            variantHeading="h4"
            classNameInfoCard="mb-10"
            classNameHeading="w-full"
            classNameDescription="w-full my-2 text-[#9EABB8]"
          />
        ))}
      </section>

      <section id="languages" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(languages.title)}
        </Heading>
        {languages.items.map((item, index) => (
          <InfoCard
            key={index}
            title={t(item.title)}
            description={t(item.subtitle)}
            variantHeading="h4"
            classNameInfoCard="mb-10"
            classNameHeading="w-full"
            classNameDescription="w-full my-2 text-[#9EABB8]"
          />
        ))}
      </section>
    </div>
  );
}
