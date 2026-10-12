import type { Metadata } from "next"
import { site } from "@/lib/site"

export const DEFAULT_TITLE = `${site.name} | Half-Pound Burgers in the East Village`

const ogImage = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Half-pound burgers on Second Avenue since 1989: Paul’s Da Burger Joint",
}

/**
 * Per-route metadata. A route's openGraph object replaces the root one
 * entirely, so url, title, description and image are always set together.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string
  description: string
  path: string
}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: title ? `${title} | ${site.name}` : DEFAULT_TITLE,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image" },
  }
}
