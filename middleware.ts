import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const HUMANITY_FIRST_HOSTS = new Set(["humanityfirst.ai", "www.humanityfirst.ai"]);
const HUMANITY_FIRST_ICON_PATHS = new Set([
  "/favicon.ico",
  "/icon",
  "/icon.png",
  "/apple-icon",
  "/apple-icon.png",
  "/apple-touch-icon.png",
  "/apple-touch-icon-precomposed.png",
  "/favicon-16x16.png",
  "/favicon-32x32.png"
]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0];

  if (!host || !HUMANITY_FIRST_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (HUMANITY_FIRST_ICON_PATHS.has(pathname)) {
    return NextResponse.rewrite(new URL("/humanityfirstlogobadge.png", request.url));
  }

  if (pathname === "/humanityfirstlogo.svg" || pathname === "/humanityfirstlogobadge.png" || pathname === "/humanityfirst.html") {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/humanityfirst.html", request.url));
}

export const config = {
  matcher: "/:path*"
};
