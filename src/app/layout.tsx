import type { Metadata, Viewport } from "next"
import "@fontsource/bungee/400.css"
import "@fontsource/bungee-inline/400.css"
import "@fontsource/barlow/400.css"
import "@fontsource/barlow/500.css"
import "@fontsource/barlow/600.css"
import "@fontsource/barlow/700.css"
import "@fontsource/barlow-condensed/500.css"
import "@fontsource/barlow-condensed/600.css"
import "@fontsource/barlow-condensed/700.css"
import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import RevealObserver from "@/lib/components/reveal-observer"
import { site, fullAddress, openingHoursSpecification } from "@/lib/site"
import { DEFAULT_TITLE } from "@/lib/metadata"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${site.name}`,
  },
  description: site.description,
}

export const viewport: Viewport = {
  themeColor: "#C1272D",
}

/** Restaurant structured data so search engines get hours, address and menu. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  url: site.url,
  telephone: site.phone.e164,
  email: site.email.display,
  servesCuisine: ["Burgers", "American", "Diner"],
  priceRange: "$",
  foundingDate: String(site.founded),
  menu: `${site.url}/menu`,
  acceptsReservations: false,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: "US",
  },
  openingHoursSpecification: openingHoursSpecification(),
  sameAs: site.social.map((s) => s.href),
  hasMap: site.links.maps,
  description: `${site.description} ${fullAddress()}.`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Mark JS as available before first paint so scroll reveals never hide content without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-[60] bg-ink px-4 py-3 font-cond font-bold uppercase tracking-wider text-cream focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  )
}
