import type { Metadata } from "next"
import Link from "next/link"
import MenuNav from "@/lib/components/menu-nav"
import Print from "@/lib/components/print"
import { formatPrice, menu, type MenuSection } from "@/lib/menu"
import { photos, type PhotoKey } from "@/lib/photos"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The full Paul's Da Burger Joint menu: 20 half-pound burgers, the smash burger, heroes, omelettes, platters, fries and soda fountain classics. Order online for pickup or delivery.",
  alternates: { canonical: "/menu" },
}

/** Photos that sit beside particular sections. */
const sectionPhotos: Partial<Record<string, { key: PhotoKey; caption: string }>> = {
  "half-pound": { key: "baconCheeseburger", caption: "Half pound, bacon, cheese" },
  smash: { key: "twoBurgersCounter", caption: "At the counter" },
  "more-than-burgers": { key: "englishBurger", caption: "The English Burger" },
  platters: { key: "onionBurgerFries", caption: "Steak fries on the side" },
  sides: { key: "onionRings", caption: "Rings and curlies" },
  salads: { key: "salad", caption: "Paul's Salad" },
}

function count(sectionId: string, match?: RegExp) {
  const section = menu.find((s) => s.id === sectionId)
  if (!section) return 0
  return match ? section.items.filter((i) => match.test(i.name)).length : section.items.length
}

function Price({ value, from }: { value: number; from?: boolean }) {
  return (
    <span className="leader-price whitespace-nowrap font-cond text-[1.2rem] font-bold tabular-nums">
      {formatPrice(value)}
      {from ? (
        <>
          <span aria-hidden="true" className="text-ketchup">
            +
          </span>
          <span className="sr-only"> and up</span>
        </>
      ) : null}
    </span>
  )
}

function Section({ section, index }: { section: MenuSection; index: number }) {
  const photo = sectionPhotos[section.id]
  const isFountain = section.id === "fountain"
  const isFeature = section.id === "half-pound"
  const twoCol = section.items.length > 6
  // Short sections put their photo beside the list instead of under the heading.
  const compact = Boolean(photo) && section.items.length <= 5

  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className={`scroll-mt-[calc(var(--nav-h)+4rem)] border-b-2 border-ink ${
        isFountain ? "bg-mint" : index % 2 === 1 ? "bg-paper" : "bg-cream"
      }`}
    >
      <div className="container-site grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-12">
        <header className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--nav-h)+5.5rem)]">
            <h2 id={`${section.id}-title`} className="font-display text-d-md" data-reveal="">
              {section.title}
            </h2>
            {section.intro ? (
              <p className="mt-4 max-w-sm text-ink/80" data-reveal="">
                {section.intro}
              </p>
            ) : null}

            {isFeature ? (
              <div className="mt-6 max-w-sm border-2 border-ink bg-mustard p-5" data-reveal="">
                <p className="font-cond text-[1.15rem] font-bold uppercase tracking-[0.06em]">How to order</p>
                <ul className="mt-2 space-y-1.5 text-[1rem] leading-snug">
                  <li>Pick beef or turkey.</li>
                  <li>Make it deluxe to add fries, lettuce and tomato.</li>
                  <li>Add cheese, bacon, a fried egg or extra toppings.</li>
                </ul>
              </div>
            ) : null}

            {photo && !compact ? (
              <div className="mt-8 hidden max-w-xs lg:block">
                <Print photo={photos[photo.key]} sizes="20rem" caption={photo.caption} tilt={index % 2 ? 1.5 : -1.5} />
              </div>
            ) : null}
          </div>
        </header>

        <div className={`lg:col-span-8 ${compact ? "grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_16rem] lg:gap-12" : ""}`}>
          <ul className={`grid gap-x-12 ${twoCol ? "md:grid-cols-2" : "max-w-2xl"}`}>
            {section.items.map((item) => (
              <li key={item.name} className="border-b border-ink/15 py-4 last:border-b-0 md:[&:nth-last-child(2)]:border-b-0">
                <div className="leader">
                  <h3 className="font-cond text-[1.25rem] font-bold uppercase leading-tight tracking-[0.04em]">
                    {item.name}
                  </h3>
                  <Price value={item.price} from={item.from} />
                </div>
                {item.tag ? (
                  <p className="mt-1.5 inline-block bg-ketchup px-2 py-0.5 font-cond text-[0.9rem] font-bold uppercase tracking-[0.1em] text-white">
                    {item.tag}
                  </p>
                ) : null}
                {item.description ? (
                  <p className="mt-1 text-[1rem] leading-snug text-ink/75">{item.description}</p>
                ) : null}
              </li>
            ))}
          </ul>

          {photo && compact ? (
            <div className="max-w-sm">
              <Print photo={photos[photo.key]} sizes="(min-width: 768px) 16rem, 90vw" caption={photo.caption} tilt={index % 2 ? 1.5 : -1.5} />
            </div>
          ) : null}

          {photo && !compact ? (
            <div className="mt-10 max-w-sm lg:hidden">
              <Print photo={photos[photo.key]} sizes="(min-width: 640px) 24rem, 90vw" caption={photo.caption} tilt={-1} />
            </div>
          ) : null}

          {isFountain ? (
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-5">
              <Print photo={photos.float} sizes="(min-width: 768px) 18rem, 45vw" tilt={-2} aspect="3 / 4" />
              <Print photo={photos.stewarts} sizes="(min-width: 768px) 18rem, 45vw" tilt={2} aspect="3 / 4" />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

export default function MenuPage() {
  const board = [
    `${count("half-pound")} half-pound burgers`,
    `${count("eggs", /Omelette/)} omelettes`,
    `${count("sides", /Fries/)} kinds of fries`,
    "1 egg cream",
  ]

  return (
    <>
      {/* Header: the letterboard */}
      <section className="bg-cream">
        <div className="container-site grid items-center gap-10 py-10 md:grid-cols-12 md:py-16">
          <div className="md:col-span-6">
            <p className="eyebrow animate-rise text-ketchup-deep">Paul&rsquo;s Da Burger Joint</p>
            <h1 className="animate-rise mt-3 font-display text-d-xl" style={{ ["--rise-delay" as string]: "80ms" }}>
              The menu
            </h1>
            <p className="animate-rise mt-5 max-w-prose text-[1.15rem] text-ink/85" style={{ ["--rise-delay" as string]: "160ms" }}>
              Everything we cook, from the half-pounders to the omelettes, heroes and platters. Order online for
              pickup or delivery, or come in and order at the counter.
            </p>
            <div className="animate-rise mt-7 flex flex-col gap-3 sm:flex-row" style={{ ["--rise-delay" as string]: "240ms" }}>
              <a href={site.links.order} target="_blank" rel="noreferrer" className="btn btn-primary">
                Order online<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={site.phone.href} className="btn btn-outline">
                Call {site.phone.display}
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="letterboard animate-rise px-6 py-8 sm:px-10 sm:py-10" style={{ ["--rise-delay" as string]: "200ms" }}>
              <p className="letterboard-text text-center text-[1rem] text-mustard">Now serving</p>
              <ul className="mt-5 space-y-2 text-center">
                {board.map((line) => (
                  <li key={line} className="letterboard-text text-[clamp(1.4rem,3vw,2.1rem)] leading-tight">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MenuNav items={menu.map((s) => ({ id: s.id, label: s.short }))} />

      {menu.map((section, i) => (
        <Section key={section.id} section={section} index={i} />
      ))}

      {/* Notes + closing CTA */}
      <section className="bg-cream py-section">
        <div className="container-site grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-d-md" data-reveal="">
              Ready to order?
            </h2>
            <p className="mt-4 max-w-prose text-ink/85" data-reveal="">
              Online ordering handles pickup and delivery, with every option and add-on. Big group? Our catering menu
              is built for offices and parties.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row" data-reveal="">
              <a href={site.links.order} target="_blank" rel="noreferrer" className="btn btn-primary">
                Order online<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/catering" className="btn btn-outline">
                Catering
              </Link>
            </div>
          </div>
          <aside className="border-l-4 border-ketchup pl-5 text-[1rem] text-ink/80 md:col-span-5" aria-label="Menu notes" data-reveal="">
            <h2 className="font-cond text-[1.15rem] font-bold uppercase tracking-[0.08em] text-ink">Good to know</h2>
            <ul className="mt-3 space-y-2">
              <li>
                Prices shown are our online ordering prices and can change. A <span className="font-bold text-ketchup">+</span>{" "}
                means options such as deluxe, cheese or extras add to the price.
              </li>
              <li>Online ordering closes a little before the restaurant does each night.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
