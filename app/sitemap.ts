import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl.replace(/\/$/, "");
  const now = new Date();
  const paths = ["/", "/services", "/ai-for-business", "/service-area", "/request-install", "/business", "/about", "/legal", "/thanks"];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7
  }));
}
