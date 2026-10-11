import type { MetadataRoute } from "next"
import { nav, site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", ...nav.map((n) => n.href)]
  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    changeFrequency: path === "/menu" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/menu" ? 0.9 : 0.7,
  }))
}
