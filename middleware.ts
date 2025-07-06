import createIntlMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";
const intlMiddleware = createIntlMiddleware(routing);

export default async function middleware(request: NextRequest) {
  const response = await intlMiddleware(request);
  return response;
}

export const config = {
  matcher: ["/", "/(en|es)", "/(en|es)/:path*"],
};
