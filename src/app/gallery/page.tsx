import type { Metadata } from "next"
import Link from "next/link"
import GalleryGrid from "@/lib/components/gallery-grid"
import { galleryItems, photos } from "@/lib/photos"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Paul's Da Burger Joint in the East Village: half-pound burgers, chili cheese fries, milkshakes and the checkered dining room on Second Avenue.",
  alternates: { canonical: "/gallery" },
}

export default function GalleryPage() {
  const items = galleryItems.map(({ key, category }) => ({ photo: photos[key], category }))

  return (
    <>
      <section className="bg-cream">
        <div className="container-site grid gap-6 pb-6 pt-10 md:grid-cols-12 md:items-end md:pb-10 md:pt-16">
          <div className="md:col-span-8">
            <p className="eyebrow animate-rise text-ketchup-deep">Gallery</p>
            <h1 className="animate-rise mt-3 font-display text-d-xl" style={{ ["--rise-delay" as string]: "80ms" }}>
              The photo wall
            </h1>
          </div>
          <p className="animate-rise text-[1.1rem] text-ink/80 md:col-span-4" style={{ ["--rise-delay" as string]: "160ms" }}>
            Burgers, fries, shakes and the room itself. Tap any photo to see it bigger.
          </p>
        </div>
      </section>

      <section className="pb-section pt-4" aria-label="Photos">
        <div className="container-site">
          <GalleryGrid items={items} />
        </div>
      </section>

      <section className="on-dark bg-ink py-section text-cream">
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-d-lg" data-reveal="">
              Hungry yet?
            </h2>
            <p className="mt-3 max-w-prose text-cream/80" data-reveal="">
              Order online for pickup or delivery, or come find us at {site.address.street}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row" data-reveal="">
            <a href={site.links.order} target="_blank" rel="noreferrer" className="btn btn-primary">
              Order online<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href="/menu" className="btn btn-outline-light">
              See the menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
