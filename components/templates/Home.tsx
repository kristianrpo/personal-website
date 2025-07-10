import { getTranslations } from "next-intl/server";
import Hero from "@/components/organisms/Hero";
import Heading from "@/components/atoms/Heading";
import Tag from "@/components/atoms/Tag";
import InfoCard from "@/components/molecules/cards/InfoCard";
import SideImageCard from "@/components/organisms/cards/SideImageCard";
import TopImageCard from "@/components/organisms/cards/TopImageCard";
import ContactForm from "@/components/organisms/ContactForm";
import data from "@/data/page_content.json";
import InfoCardLink from "@/components/molecules/cards/InfoCardLink";

type Variant = React.ComponentProps<typeof Tag>["variant"];

export default async function Home() {
  const t = await getTranslations("HomePage");

  const hero = data.homePage.hero;
  const profile = data.homePage.profile;
  const skills = data.homePage.skills;
  const experience = data.homePage.experience;
  const studies = data.homePage.studies;
  const languages = data.homePage.languages;
  const projects = data.homePage.projects;
  const courses = data.homePage.courses;
  const extracurricularActivities = data.homePage.extracurricularActivities;
  const contactMe = data.homePage.contactMe;

  return (
    <div className="">
      <section id="hero" className="my-10">
        <Hero
          title={t(hero.title)}
          description={t(hero.subtitle)}
          urlButton1={hero.downloadCVUrl}
          labelButton1={t(hero.downloadCV)}
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

        <div className="flex flex-wrap gap-3">
          {skills.items.map((skill, key) => (
            <Tag
              key={key}
              label={t(skill.label)}
              variant={skill.variant as Variant}
            />
          ))}
        </div>
      </section>

      <section id="experience" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(experience.title)}
        </Heading>

        {experience.items.map((item, index) => (
          <div className="mb-10" key={index}>
            <SideImageCard
              title={t(item.title)}
              subtitle={t(item.subtitle)}
              description={item.description ? t(item.description) : undefined}
              labelButton={t(item.labelButton)}
              urlButton={item.urlButton}
              imageSrc={item.imageSrc}
              imageAlt={t(item.imageAlt)}
            />
          </div>
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

      <section id="projects" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(projects.title)}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((item, index) => (
            <TopImageCard
              key={index}
              title={t(item.title)}
              description={t(item.description)}
              url={item.url}
              imageSrc={item.imageSrc}
              imageAlt={t(item.imageAlt)}
            />
          ))}
        </div>
      </section>

      <section id="courses" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(courses.title)}
        </Heading>
        {courses.items.map((item, index) => (
          <InfoCardLink
            key={index}
            title={t(item.title)}
            description={t(item.subtitle)}
            url={item.url}
            variantHeading="h4"
            classNameInfoCard="mb-10"
            classNameHeading="w-full"
            classNameDescription="w-full my-2 text-[#9EABB8]"
          />
        ))}
      </section>

      <section id="extracurricular-activities" className="my-10">
        <Heading variant="h3" className="my-5">
          {t(extracurricularActivities.title)}
        </Heading>

        {extracurricularActivities.items.map((item, index) => (
          <div className="mb-10" key={index}>
            <SideImageCard
              title={t(item.title)}
              subtitle={t(item.subtitle)}
              description={item.description ? t(item.description) : undefined}
              labelButton={t(item.labelButton)}
              urlButton={item.urlButton}
              imageSrc={item.imageSrc}
              imageAlt={t(item.imageAlt)}
            />
          </div>
        ))}
      </section>
      <ContactForm
        title={t(contactMe.title)}
        labelButton={t(contactMe.labelButton)}
        labelName={t(contactMe.labelName)}
        labelEmail={t(contactMe.labelEmail)}
        labelMessage={t(contactMe.labelMessage)}
        errorMessage={t(contactMe.errorMessage)}
        successMessage={t(contactMe.successMessage)}
        sendingLabelButton={t(contactMe.sendingLabelButton)}
        sendLabelButton={t(contactMe.sendLabelButton)}
      />
    </div>
  );
}
