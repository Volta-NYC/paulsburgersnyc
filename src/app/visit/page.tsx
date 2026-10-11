import type { Metadata } from "next"
import Link from "next/link"
import HoursTable from "@/lib/components/hours-table"
import OpenStatus from "@/lib/components/open-status"
import Print from "@/lib/components/print"
import { photos } from "@/lib/photos"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Visit & Contact",
  description:
    "Paul's Da Burger Joint is at 131 2nd Avenue at St. Mark's Place, New York, NY 10003. Open daily from 11:00 AM, until midnight on Friday and Saturday. Call (212) 529-3033.",
  alternates: { canonical: "/visit" },
}

/** NYC street-sign blade, drawn in CSS. Decorative; the address is also in text. */
function StreetSign({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block rounded-[6px] border-[3px] border-white bg-[#1D6B45] px-4 py-1.5 font-display text-[clamp(1.8rem,4.6vw,3rem)] leading-none text-white shadow-[0_0_0_3px_#1D6B45] ${className}`}
    >
      {children}
    </span>
  )
}

export default function VisitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-x-clip bg-cream">
        <div className="container-site grid items-center gap-10 pb-12 pt-10 md:grid-cols-12 md:pb-16 md:pt-16">
          <div className="md:col-span-7">
            <p className="eyebrow animate-rise text-ketchup-deep">Visit &amp; contact</p>
            <h1 className="animate-rise mt-3 font-display text-d-lg" style={{ ["--rise-delay" as string]: "80ms" }}>
              Find us at Second Avenue and St. Mark&rsquo;s Place
            </h1>
            <address className="animate-rise mt-6 not-italic text-[1.2rem] leading-relaxed" style={{ ["--rise-delay" as string]: "160ms" }}>
              {site.address.street} ({site.address.crossStreet})
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </address>
            <OpenStatus className="animate-rise mt-4" />
            <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ ["--rise-delay" as string]: "240ms" }}>
              <a href={site.links.maps} target="_blank" rel="noreferrer" className="btn btn-primary">
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={site.phone.href} className="btn btn-outline">
                Call {site.phone.display}
              </a>
            </div>
          </div>
          <div className="relative md:col-span-5">
            <div className="animate-rise relative mx-auto flex h-60 max-w-md items-center justify-center sm:h-72" style={{ ["--rise-delay" as string]: "200ms" }}>
              <span aria-hidden="true" className="absolute bottom-0 left-1/2 top-6 w-3 -translate-x-1/2 bg-ink/80" />
              <div className="relative flex flex-col items-center gap-3">
                <StreetSign className="-rotate-2">2 Av</StreetSign>
                <StreetSign className="rotate-1">St Marks Pl</StreetSign>
              </div>
            </div>
          </div>
        </div>
        <div className="checker" aria-hidden="true" />
      </section>

      {/* Hours + map */}
      <section className="py-section" aria-labelledby="hours-heading">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="hours-heading" className="font-display text-d-md" data-reveal="">
              Hours
            </h2>
            <div className="mt-6 border-2 border-ink bg-paper" data-reveal="">
              <HoursTable />
            </div>
            <p className="mt-4 text-[1rem] text-ink/75" data-reveal="">
              Online ordering for pickup and delivery closes a little earlier each night.
            </p>

            <h2 className="mt-12 font-display text-d-sm" data-reveal="">
              Getting here
            </h2>
            <ul className="mt-4 space-y-2 text-ink/85" data-reveal="">
              <li>{site.transit}</li>
              <li>At the corner of Second Avenue and St. Mark&rsquo;s Place (East 8th Street).</li>
            </ul>
          </div>

          <div className="lg:col-span-7" data-reveal="">
            <div className="border-2 border-ink bg-bun p-2 shadow-[6px_6px_0_rgb(var(--ink))]">
              <iframe
                title={`Map showing ${site.name} at ${site.address.street}`}
                src={site.links.mapEmbed}
                className="block aspect-[4/3] w-full border-0 lg:aspect-[5/4]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="on-dark bg-ink py-section text-cream" aria-labelledby="contact-heading">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 id="contact-heading" className="font-display text-d-md" data-reveal="">
              Get in touch
            </h2>
            <p className="mt-4 max-w-prose text-cream/80" data-reveal="">
              Questions, big orders, a lost scarf? Calling is fastest. For catering, use the{" "}
              <Link href="/catering#request" className="font-semibold text-cream underline decoration-mustard decoration-2 underline-offset-4 hover:text-mustard">
                catering request form
              </Link>
              .
            </p>
          </div>
          <dl className="grid gap-8 sm:grid-cols-2 md:col-span-7">
            <div data-reveal="">
              <dt className="eyebrow text-mustard">Phone</dt>
              <dd className="mt-2">
                <a href={site.phone.href} className="font-display text-[1.6rem] leading-tight hover:text-mustard">
                  {site.phone.display}
                </a>
              </dd>
            </div>
            <div data-reveal="">
              <dt className="eyebrow text-mustard">Email</dt>
              <dd className="mt-2">
                <a href={site.email.href} className="break-all text-[1.15rem] font-semibold underline decoration-mustard decoration-2 underline-offset-4 hover:text-mustard">
                  {site.email.display}
                </a>
              </dd>
            </div>
            <div data-reveal="">
              <dt className="eyebrow text-mustard">Follow along</dt>
              <dd className="mt-2">
                <ul className="space-y-1.5">
                  {site.social.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} target="_blank" rel="noreferrer" className="text-[1.1rem] hover:text-mustard">
                        {s.label}<span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <div data-reveal="">
              <dt className="eyebrow text-mustard">Gift cards</dt>
              <dd className="mt-2">
                <a href={site.links.giftCards} target="_blank" rel="noreferrer" className="text-[1.1rem] font-semibold underline decoration-mustard decoration-2 underline-offset-4 hover:text-mustard">
                  Buy a gift certificate<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Closing */}
      <section className="py-section">
        <div className="container-site grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5 md:col-start-2">
            <Print photo={photos.cowStatue} sizes="(min-width: 768px) 36vw, 92vw" tilt={-1.5} caption="See you inside" />
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <h2 className="font-display text-d-md" data-reveal="">
              Can&rsquo;t make it over?
            </h2>
            <p className="mt-4 text-ink/80" data-reveal="">
              We deliver. Order online and we&rsquo;ll bring the half pound to you.
            </p>
            <div className="mt-7" data-reveal="">
              <a href={site.links.order} target="_blank" rel="noreferrer" className="btn btn-primary">
                Order delivery<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
