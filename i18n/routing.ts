import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",

  pathnames: {
    "/": {
      en: "/",
      es: "/",
    },
  },
});
export type Locale = (typeof routing.locales)[number];

export type Href = {
  pathname: string;
  query?: Record<string, any>;
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
