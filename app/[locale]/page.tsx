import { getTranslations } from "next-intl/server";
import Home from "@/components/templates/Home";

export async function generateMetadata() {
  const t = await getTranslations("HomePage");
  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default function HomePage() {
  return <Home />;
}
