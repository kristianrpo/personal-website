import { JSX } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Space_Grotesk } from "next/font/google";
import { routing } from "@/i18n/routing";
import { Locale } from "@/i18n/routing";
import CursorBlob from "@/components/utils/CursorBlob";
import NavBar from "@/components/molecules/NavBar";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

interface LocaleProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleProps): Promise<JSX.Element> {
  const { locale } = await params;

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} antialiased mx-[20px] sm:mx-[40px] md:mx-[60px] lg:mx-[80px] xl:mx-[100px] 2xl:mx-[150px] bg-[#111214] text-zinc-200`}
      >
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          {children}
          <CursorBlob />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
