import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { suites } from "@/lib/suites";
import { posts } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = ["", "/suites", "/experiences", "/contact", "/blog"].map(
    (path) => ({
      url: `${base}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const suiteRoutes = suites.map((s) => ({
    url: `${base}/suites/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...suiteRoutes, ...postRoutes];
}
