import type { Metadata } from "next"
import Link from "next/link"
import Print from "@/lib/components/print"
import { famousFaces } from "@/lib/famous-faces"
import { photos } from "@/lib/photos"
import { press, site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Paul's Da Burger Joint opened as Paul's Palace on Second Avenue in 1989 and is still family run. The story, the counter, famous faces and press.",
  alternates: { canonical: "/about" },
}

const timeline = [
  {
    year: "1989",
    title: "Paul's Palace opens",
    body: "Paul Koval opens a burger counter on Second Avenue at St. Mark's Place. It later takes the name it still has: Paul's Da Burger Joint.",
  },
  {
    year: "2007",
    title: "Kept in the family",
    body: "Paul's cousin, Matt Wardrop, takes over and keeps running it the same way: big portions, fair prices, counter service.",
  },
  {
    year: "2014",
    title: "Twenty-five years on the corner",
    body: "A quarter century of half-pound burgers, egg creams and late nights in the East Village.",
  },
  {
    year: "2015",
    title: "Burger Week and a tough spring",
    body: "Eater profiles the crew for New York Burger Week. After the East Village gas explosion down the avenue, Crain's and Gothamist cover the small businesses on the block, Paul's among them.",
  },
  {
    year: "2026",
    title: "Still the best hole in the wall",
    body: "Tasting Table names Paul's New York's best hole-in-the-wall burger joint.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero: the year, set like a sign */}
      <section className="relative overflow-x-clip bg-cream">
        <div className="container-site grid items-end gap-10 pb-12 pt-10 md:grid-cols-12 md:pb-16 md:pt-16">
          <div className="md:col-span-7">
            <p className="eyebrow animate-rise text-ketchup-deep">Our story</p>
            <h1 className="animate-rise mt-3 font-display text-d-lg" style={{ ["--rise-delay" as string]: "80ms" }}>
              Same corner, same family, since
            </h1>
            <p
              aria-hidden="true"
              className="animate-rise -ml-1 mt-1 font-inline text-[clamp(5.5rem,20vw,15rem)] leading-[0.85] text-ketchup"
              style={{ ["--rise-delay" as string]: "160ms" }}
            >
              {site.founded}
            </p>
            <p className="sr-only">{site.founded}</p>
            <p className="animate-rise mt-6 max-w-prose text-[1.15rem] text-ink/85" style={{ ["--rise-delay" as string]: "240ms" }}>
              Paul&rsquo;s is a fifties-style eatery with counter service, checkered tablecloths and vintage decorations.
              A lot of people call it their home away from home. We like that.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="animate-rise mx-auto max-w-md" style={{ ["--rise-delay" as string]: "200ms" }}>
              <Print photo={photos.signEst1989} sizes="(min-width: 768px) 36vw, 92vw" priority reveal={false} tilt={2} caption="The sign out front" />
            </div>
          </div>
        </div>
        <div className="checker" aria-hidden="true" />
      </section>

      {/* Timeline */}
      <section className="py-section" aria-labelledby="timeline-heading">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="timeline-heading" className="font-display text-d-md lg:sticky lg:top-[calc(var(--nav-h)+2rem)]" data-reveal="">
              Thirty-plus years on Second Avenue
            </h2>
          </div>
          <ol className="relative border-l-4 border-ink lg:col-span-8">
            {timeline.map((t, i) => (
              <li
                key={t.year}
                className="relative pb-10 pl-8 last:pb-0 sm:pl-12"
                data-reveal="slide"
                style={{ ["--reveal-delay" as string]: `${i * 40}ms` }}
              >
                <span aria-hidden="true" className="absolute -left-[0.8rem] top-1 h-5 w-5 rounded-full border-4 border-ink bg-mustard" />
                <p className="font-display text-[1.6rem] leading-none text-ketchup">{t.year}</p>
                <h3 className="mt-2 font-cond text-[1.4rem] font-bold uppercase tracking-[0.04em]">{t.title}</h3>
                <p className="mt-1 max-w-prose text-ink/80">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The room */}
      <section className="on-dark bg-ink py-section text-cream" aria-labelledby="room-heading">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="grid grid-cols-6 gap-4 md:col-span-7">
            <div className="col-span-4">
              <Print photo={photos.diningRoom} sizes="(min-width: 768px) 38vw, 64vw" caption="The dining room" tilt={-1.5} />
            </div>
            <div className="col-span-3 col-start-3 -mt-10 sm:-mt-16">
              <Print photo={photos.cowStatue} sizes="(min-width: 768px) 28vw, 48vw" caption="Our oldest regular" tilt={2} />
            </div>
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow text-mustard" data-reveal="">
              The counter
            </p>
            <h2 id="room-heading" className="mt-3 font-display text-d-md" data-reveal="">
              Where regulars know the cooks by name
            </h2>
            <div className="mt-5 space-y-4 text-cream/85" data-reveal="">
              <p>
                Grab a stool at the counter and you&rsquo;ll see why people keep coming back: a big juicy burger, a cold
                beer, and cooks you&rsquo;ll soon know by name.
              </p>
              <p>
                The menu runs long on purpose. Twenty half-pound burgers, shakes and frosteds, egg creams and soda
                floats, omelettes, heroes and platters. Big portions of good food at a fair price, the way it&rsquo;s
                been since day one.
              </p>
            </div>
            <div className="mt-8" data-reveal="">
              <Link href="/gallery" className="btn btn-outline-light">
                See more photos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Famous faces */}
      <section id="famous-faces" className="scroll-mt-[calc(var(--nav-h)+1rem)] py-section" aria-labelledby="faces-heading">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
            <p className="eyebrow text-ketchup-deep" data-reveal="">
              On the wall
            </p>
            <h2 id="faces-heading" className="mt-3 font-display text-d-md" data-reveal="">
              Famous faces at the counter
            </h2>
            <p className="mt-4 text-ink/80" data-reveal="">
              Actors, chefs, a Met and a Miss America have all stopped in for a burger. A few of the photos from our
              wall.
            </p>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:col-span-8 lg:gap-x-8">
            {famousFaces.map((f, i) => (
              <li key={f.name} style={{ ["--reveal-delay" as string]: `${(i % 4) * 60}ms` }} data-reveal="">
                <Print
                  photo={f.photo}
                  sizes="(min-width: 1024px) 19vw, (min-width: 640px) 30vw, 45vw"
                  tilt={i % 3 === 0 ? -1.5 : i % 3 === 1 ? 1 : -0.5}
                  aspect="4 / 5"
                  reveal={false}
                />
                <p className="mt-4 font-cond text-[1.2rem] font-bold uppercase leading-tight tracking-[0.04em]">{f.name}</p>
                <p className="text-[0.98rem] text-muted">{f.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Press */}
      <section id="press" className="scroll-mt-[calc(var(--nav-h)+1rem)] border-t-2 border-ink bg-paper py-section" aria-labelledby="press-list-heading">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-ketchup-deep" data-reveal="">
              Press &amp; reviews
            </p>
            <h2 id="press-list-heading" className="mt-3 font-display text-d-md" data-reveal="">
              What they wrote
            </h2>
          </div>
          <ul className="divide-y-2 divide-ink/10 border-y-2 border-ink lg:col-span-8">
            {press.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6"
                >
                  <span>
                    <span className="block font-cond text-[1.35rem] font-bold uppercase tracking-[0.04em] group-hover:text-ketchup">
                      {p.outlet}
                    </span>
                    <span className="block text-ink/75">{p.note}</span>
                  </span>
                  <span className="font-cond text-[1.05rem] font-semibold uppercase tracking-[0.08em] text-muted">
                    {p.year ?? "Listing"}
                    <span aria-hidden="true" className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="on-dark bg-ketchup py-section text-white">
        <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-d-lg" data-reveal="">
            Come see for yourself
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row" data-reveal="">
            <Link href="/visit" className="btn btn-mustard">
              Hours &amp; directions
            </Link>
            <Link href="/menu" className="btn btn-outline-light">
              See the menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
