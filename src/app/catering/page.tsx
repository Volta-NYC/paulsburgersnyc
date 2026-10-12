import type { Metadata } from "next"
import Link from "next/link"
import CateringForm from "@/lib/components/catering-form"
import Print from "@/lib/components/print"
import { photos } from "@/lib/photos"
import { site } from "@/lib/site"
import { riseDelay, revealDelay, checkerColors } from "@/lib/motion"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  title: "Catering",
  description:
    "Catering from Paul’s Da Burger Joint: individually packed burgers, sliders, heroes, platters and sides for offices and parties, delivered around Manhattan or ready for pickup.",
  path: "/catering",
})

const steps = [
  {
    n: "1",
    title: "Tell us about it",
    body: "The date, how many people and whether you want delivery or pickup, at least 24 hours ahead. Use the form, call, or order directly on ezCater.",
  },
  {
    n: "2",
    title: "We build the order",
    body: "Burgers come individually packed with your choice of beef or turkey. Add sliders, heroes, platters, salads and sides.",
  },
  {
    n: "3",
    title: "We cook and deliver",
    body: "We prepare the order and bring it to your office or event, whether that’s Battery Park or the Upper East Side.",
  },
]

const ezcaterFacts = [
  { label: "Order minimum", value: "$100" },
  { label: "Lead time", value: "24 hours" },
  { label: "Delivery fee", value: "From $20" },
]

export default function CateringPage() {
  return (
    <>
      {/* Hero */}
      <section className="on-dark relative overflow-x-clip bg-ketchup text-white">
        <div className="container-site grid items-center gap-10 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <p className="eyebrow animate-rise text-cream">Catering</p>
            <h1 className="animate-rise mt-3 font-display text-d-xl" style={riseDelay(80)}>
              Feed the whole crew
            </h1>
            <p className="animate-rise mt-6 max-w-prose text-[1.15rem] text-white/90" style={riseDelay(160)}>
              An office lunch for a dozen coworkers or a reunion for a hundred. Our catering is built around what your
              group actually wants to eat, with the same burgers we serve at the counter.
            </p>
            <div className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" style={riseDelay(240)}>
              <a href="#request" className="btn btn-mustard">
                Request a quote
              </a>
              <a href={site.links.catering} target="_blank" rel="noreferrer" className="btn btn-outline-light">
                Order on ezCater<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="animate-rise mx-auto grid max-w-md grid-cols-6" style={riseDelay(200)}>
              <div className="col-span-5">
                <Print
                  photo={photos.twoBurgersCounter}
                  sizes="(min-width: 768px) 32vw, 78vw"
                  priority
                  reveal={false}
                  tilt={-2}
                />
              </div>
              <div className="col-span-4 col-start-3 -mt-12">
                <Print photo={photos.onionRings} sizes="(min-width: 768px) 26vw, 62vw" reveal={false} tilt={2.5} />
              </div>
            </div>
          </div>
        </div>
        <div className="checker" style={checkerColors("rgb(var(--ink))", "rgb(var(--ketchup))")} aria-hidden="true" />
      </section>

      {/* How it works */}
      <section className="py-section" aria-labelledby="how-heading">
        <div className="container-site">
          <h2 id="how-heading" className="font-display text-d-md" data-reveal="">
            How it works
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
            {steps.map((s, i) => (
              <li key={s.n} className="border-t-4 border-ink pt-5" data-reveal="" style={revealDelay(i * 80)}>
                <p aria-hidden="true" className="font-display text-[2.6rem] leading-none text-ketchup">
                  {s.n}
                </p>
                <h3 className="mt-3 font-cond text-[1.45rem] font-bold uppercase tracking-[0.04em]">{s.title}</h3>
                <p className="mt-2 text-ink/80">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What travels well */}
      <section className="border-y-2 border-ink bg-paper py-section" aria-labelledby="travels-heading">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="travels-heading" className="font-display text-d-md" data-reveal="">
              What travels well
            </h2>
            <p className="mt-4 max-w-prose text-ink/80" data-reveal="">
              The catering menu covers most of what we cook. On ezCater, the cheeseburgers, veggie burgers, onion rings
              and fries get ordered most.
            </p>
            <ul
              className="mt-8 space-y-3 font-cond text-[1.3rem] font-semibold uppercase tracking-[0.04em]"
              data-reveal=""
            >
              <li className="border-b-2 border-ink/10 pb-3">Burgers, beef or turkey, packed one by one</li>
              <li className="border-b-2 border-ink/10 pb-3">Veggie burgers</li>
              <li className="border-b-2 border-ink/10 pb-3">Philly cheesesteaks and sausage heroes</li>
              <li className="border-b-2 border-ink/10 pb-3">Chopped steak and fried chicken platters</li>
              <li className="border-b-2 border-ink/10 pb-3">
                Paul&rsquo;s Salad and Linda&rsquo;s grilled chicken salad
              </li>
              <li>Fries, onion rings, poppers and mozzarella sticks</li>
            </ul>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="letterboard p-6 sm:p-10" data-reveal="">
              <p className="letterboard-text text-center text-[1rem] text-mustard">Ordering on ezCater</p>
              <dl className="mt-6 divide-y divide-cream/10">
                {ezcaterFacts.map((f) => (
                  <div key={f.label} className="leader letterboard-text py-3 text-[1.2rem] sm:text-[1.55rem]">
                    <dt className="whitespace-nowrap">{f.label}</dt>
                    <dd className="leader-price whitespace-nowrap">{f.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-center text-[0.98rem] text-cream/70">
                Prefer to talk it through? Call us and we&rsquo;ll put it together with you.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-5">
              <Print photo={photos.burgerStack} sizes="(min-width: 768px) 22vw, 45vw" aspect="4 / 5" tilt={-1.5} />
              <Print
                photo={photos.chiliCheeseFries}
                sizes="(min-width: 768px) 22vw, 45vw"
                aspect="4 / 5"
                tilt={1.5}
                className="mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-section" aria-labelledby="request-heading">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="request-heading" className="font-display text-d-md" data-reveal="">
              Request a quote
            </h2>
            <p className="mt-4 text-ink/80" data-reveal="">
              Send us the basics and we&rsquo;ll follow up to confirm the menu, timing and price.
            </p>
            <div className="mt-8 space-y-5 border-l-4 border-ketchup pl-5" data-reveal="">
              <div>
                <p className="eyebrow text-muted">Call</p>
                <a href={site.phone.href} className="font-display text-[1.5rem] leading-tight hover:text-ketchup">
                  {site.phone.display}
                </a>
              </div>
              <div>
                <p className="eyebrow text-muted">Email</p>
                <a href={site.email.href} className="link-underline break-all">
                  {site.email.display}
                </a>
              </div>
              <div>
                <p className="eyebrow text-muted">Order directly</p>
                <a href={site.links.catering} target="_blank" rel="noreferrer" className="link-cta">
                  Paul&rsquo;s on ezCater<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8" data-reveal="">
            <CateringForm />
          </div>
        </div>
      </section>

      <section className="on-dark bg-ink py-12 text-cream">
        <div className="container-site flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <p className="font-display text-d-sm">Just lunch for you?</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
