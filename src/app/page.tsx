import Image from "next/image"
import Link from "next/link"
import OpenStatus from "@/lib/components/open-status"
import Print from "@/lib/components/print"
import { findItem, formatPrice, menu } from "@/lib/menu"
import { photos } from "@/lib/photos"
import { hoursSummary, press, site } from "@/lib/site"
import { riseDelay, revealDelay } from "@/lib/motion"
import type { Metadata } from "next"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({ description: site.description, path: "/" })

const lineup = [
  { name: "Eastsider Burger", note: "The house specialty. Bacon, ham, mushrooms, tomatoes, onions, cheese." },
  { name: "Saint Mark’s Burger", note: "Named for the corner. Mushrooms and fried onions." },
  { name: "Second Avenue Burger", note: "Fried onions, ham and tomatoes on a cheeseburger." },
  { name: "Texas Burger", note: "A fried egg on top. Break the yolk." },
  { name: "El Paso Burger", note: "Cheddar and fresh jalapeños." },
  { name: "Soul Burger", note: "A bacon cheeseburger with ham and fried onions." },
].map((l) => ({ ...l, item: findItem(l.name) }))

const fountain = menu.find((s) => s.id === "fountain")!

export default function HomePage() {
  const beef = findItem("Beef Burger")
  const halfPoundCount = menu.find((s) => s.id === "half-pound")!.items.length

  return (
    <>
      {/* ------------------------------------------------------------ */}
      {/* Hero: signage-style type against a pinned photo collage      */}
      {/* ------------------------------------------------------------ */}
      <section className="relative overflow-x-clip bg-cream">
        <div className="container-site grid items-center gap-10 pb-14 pt-8 md:grid-cols-12 md:gap-6 md:pb-20 md:pt-14 lg:min-h-[calc(100svh-var(--nav-h)-26px)] lg:max-h-[54rem]">
          <div className="md:col-span-7 lg:col-span-7">
            <p className="eyebrow animate-rise flex flex-wrap items-center gap-x-3 gap-y-1 text-ketchup-deep">
              <span>{site.address.street}</span>
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-ketchup" />
              <span>{site.address.crossStreet}</span>
            </p>
            <h1 className="mt-5 font-display text-d-xl text-ink">
              <span className="animate-rise block" style={riseDelay(60)}>
                Half-pound
              </span>{" "}
              <span className="animate-rise block" style={riseDelay(120)}>
                burgers on
              </span>{" "}
              <span className="animate-rise block text-ketchup" style={riseDelay(180)}>
                Second Ave
              </span>{" "}
              <span
                className="animate-rise mt-3 block font-inline text-[0.42em] leading-none text-ink/90"
                style={riseDelay(240)}
              >
                since {site.founded}
              </span>
            </h1>
            <p
              className="animate-rise mt-7 max-w-prose text-[1.15rem] leading-relaxed text-ink/85 md:text-[1.2rem]"
              style={riseDelay(320)}
            >
              Paul&rsquo;s Da Burger Joint is the family-run counter at St. Mark&rsquo;s Place. Eight-ounce burgers
              cooked to order, steak fries, egg creams and frosteds, served late every night of the week.
            </p>
            <div
              className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
              style={riseDelay(380)}
            >
              <a
                href={site.links.order}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary text-[1.2rem] sm:px-7"
              >
                Order pickup or delivery<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/menu" className="btn btn-outline">
                See the full menu
              </Link>
            </div>
            <OpenStatus className="animate-rise mt-6" />
          </div>

          {/* Photo collage */}
          <div
            className="relative mx-auto w-full max-w-[34rem] md:col-span-5 md:max-w-none"
            aria-label="Photos from Paul’s"
          >
            <div className="animate-rise relative z-10 ml-auto w-[88%]" style={riseDelay(150)}>
              <Print
                photo={photos.baconCheeseburgerChecker}
                sizes="(min-width: 1024px) 34vw, (min-width: 768px) 38vw, 88vw"
                priority
                reveal={false}
                tilt={2}
              />
            </div>
            <div className="animate-rise relative z-20 -mt-[18%] w-[52%]" style={riseDelay(300)}>
              <Print photo={photos.signEst1989} sizes="(min-width: 768px) 20vw, 48vw" reveal={false} tilt={-3} />
            </div>
            <div className="sticker animate-stamp absolute right-[2%] top-[54%] z-30 h-28 w-28 -rotate-[8deg] md:h-32 md:w-32">
              <p className="font-cond font-bold uppercase leading-none">
                <span className="block text-[0.95rem] tracking-[0.1em]">8 oz from</span>
                <span className="block font-display text-[1.9rem] leading-none md:text-[2.2rem]">
                  ${formatPrice(beef.price)}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="checker" aria-hidden="true" />
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Quick facts strip                                             */}
      {/* ------------------------------------------------------------ */}
      <section aria-label="Hours and location" className="on-dark bg-ink text-cream">
        <dl className="container-site grid gap-6 py-8 sm:grid-cols-3 sm:gap-8">
          <div data-reveal="">
            <dt className="eyebrow text-mustard">Open late, every day</dt>
            <dd className="mt-2 text-cream/90">
              {hoursSummary[0].time}, {hoursSummary[0].days}.
              <br />
              {hoursSummary[1].time}, {hoursSummary[1].days}.
            </dd>
          </div>
          <div data-reveal="" style={revealDelay(80)}>
            <dt className="eyebrow text-mustard">On the corner</dt>
            <dd className="mt-2 text-cream/90">
              {site.address.street} {site.address.crossStreet}.{" "}
              <a
                href={site.links.maps}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-cream underline decoration-mustard decoration-2 underline-offset-4 hover:text-mustard"
              >
                Get directions<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </dd>
          </div>
          <div data-reveal="" style={revealDelay(160)}>
            <dt className="eyebrow text-mustard">Call the counter</dt>
            <dd className="mt-2">
              <a
                href={site.phone.href}
                className="font-display text-[1.5rem] leading-none text-cream hover:text-mustard"
              >
                {site.phone.display}
              </a>
            </dd>
          </div>
        </dl>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* The lineup: a felt letterboard of the burgers named for the block */}
      {/* ------------------------------------------------------------ */}
      <section className="py-section" aria-labelledby="lineup-heading">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="self-start lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:col-span-5">
            <p className="eyebrow text-ketchup-deep" data-reveal="">
              {halfPoundCount} half-pound burgers
            </p>
            <h2 id="lineup-heading" className="mt-3 font-display text-d-lg" data-reveal="">
              Named for the block
            </h2>
            <p className="mt-5 max-w-prose text-ink/85" data-reveal="">
              The Second Avenue, the Saint Mark&rsquo;s and the Eastsider are named for the corner they&rsquo;re cooked
              on. Every one starts as a full half pound of beef, or turkey if you ask.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5">
              <Print
                photo={photos.texasBurger}
                sizes="(min-width: 1024px) 19vw, 45vw"
                caption="The Texas"
                tilt={-1.5}
              />
              <Print
                photo={photos.mushroomBaconBurger}
                sizes="(min-width: 1024px) 19vw, 45vw"
                caption="Mushrooms, bacon"
                className="mt-8"
                tilt={1.5}
              />
            </div>
          </div>

          <div className="lg:col-span-7" data-reveal="">
            <div className="letterboard p-6 sm:p-10">
              <p className="letterboard-text text-center text-[1.05rem] text-mustard">The lineup</p>
              <ul className="mt-6 divide-y divide-cream/10">
                {lineup.map(({ name, note, item }) => (
                  <li key={name} className="py-4">
                    <div className="leader letterboard-text text-[1.35rem] sm:text-[1.6rem]">
                      <span>{name.replace(" Burger", "")}</span>
                      <span className="leader-price tabular-nums">{formatPrice(item.price)}</span>
                    </div>
                    <p className="mt-1 max-w-md text-[1rem] leading-snug text-cream/75">{note}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-center text-[0.95rem] text-cream/65">
                Online prices. Deluxe, cheese and extras cost more.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/menu" className="btn btn-ink">
                See all {halfPoundCount} burgers
              </Link>
              <Link href="/menu#eggs" className="link-cta">
                Or the omelettes, platters and heroes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Story teaser: the room                                        */}
      {/* ------------------------------------------------------------ */}
      <section className="border-y-2 border-ink bg-paper" aria-labelledby="story-heading">
        <div className="grid lg:grid-cols-2">
          <div
            className="relative min-h-[18rem] border-b-2 border-ink sm:min-h-[24rem] lg:min-h-0 lg:border-b-0 lg:border-r-2"
            data-reveal="mask"
          >
            <Image
              src={photos.diningRoomTables.src}
              alt={photos.diningRoomTables.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="container-site py-section lg:max-w-none lg:px-16 xl:px-24">
            <p className="eyebrow text-ketchup-deep" data-reveal="">
              Same corner since {site.founded}
            </p>
            <h2 id="story-heading" className="mt-3 font-display text-d-lg" data-reveal="">
              Pull up a stool
            </h2>
            <div className="mt-6 max-w-prose space-y-4 text-ink/85" data-reveal="">
              <p>
                Paul opened this place as Paul&rsquo;s Palace in {site.founded}. Today it&rsquo;s still a family
                business, run by his cousin Matt, with the same checkered tablecloths, the same counter and the same
                cooks regulars greet by name.
              </p>
              <p>
                It&rsquo;s a fifties-style counter-service joint: big portions, fair prices, and a dining room covered
                in framed photos from more than three decades on Second Avenue.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3" data-reveal="">
              <Link href="/about" className="btn btn-outline">
                Read our story
              </Link>
              <Link href="/gallery" className="link-cta">
                Look around the joint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Soda fountain moment                                          */}
      {/* ------------------------------------------------------------ */}
      <section className="relative overflow-x-clip bg-mint py-section" aria-labelledby="fountain-heading">
        <div className="container-site grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="eyebrow text-ink" data-reveal="">
              The soda fountain
            </p>
            <h2 id="fountain-heading" className="mt-3 font-display text-d-lg" data-reveal="">
              Egg creams, frosteds &amp; floats
            </h2>
            <p className="mt-5 max-w-prose text-ink/85" data-reveal="">
              A New York egg cream has no egg and no cream. It does have milk, seltzer and chocolate syrup, and
              it&rsquo;s the right call next to a half-pound burger. So is a frosted: a shake made with extra ice cream.
            </p>
            <ul className="mt-8 max-w-md space-y-3 border-t-2 border-ink pt-5" data-reveal="">
              {fountain.items.map((item) => (
                <li
                  key={item.name}
                  className="leader font-cond text-[1.3rem] font-semibold uppercase tracking-[0.06em]"
                >
                  <span>{item.name}</span>
                  <span className="leader-price tabular-nums">{formatPrice(item.price)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative md:col-span-6 lg:col-span-6 lg:col-start-7">
            <div className="grid grid-cols-5 items-end gap-4 sm:gap-6">
              <div className="col-span-3">
                <Print
                  photo={photos.milkshakeCounter}
                  sizes="(min-width: 768px) 28vw, 58vw"
                  tilt={-2}
                  aspect="4 / 5"
                  focus="0% 50%"
                />
              </div>
              <div className="col-span-2 pb-10">
                <Print photo={photos.float} sizes="(min-width: 768px) 18vw, 38vw" tilt={2.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Press                                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="py-section" aria-labelledby="press-heading">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-ketchup-deep" data-reveal="">
                In the papers
              </p>
              <h2 id="press-heading" className="mt-3 font-display text-d-md" data-reveal="">
                &ldquo;Best hole-in-the-wall burger joint&rdquo; in New York
              </h2>
              <p className="mt-4 text-ink/80" data-reveal="">
                That was Tasting Table in 2026. Eater, Serious Eats, New York Magazine and Time Out have all pulled up a
                stool over the years too.
              </p>
            </div>
            <div className="lg:col-span-5 lg:text-right" data-reveal="">
              <Link href="/about#press" className="link-cta">
                Read the reviews
              </Link>
            </div>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-y-2 border-ink py-6" data-reveal="">
            {press.slice(0, 6).map((p) => (
              <li key={p.outlet} className="font-cond text-[1.35rem] font-bold uppercase tracking-[0.06em] text-ink/80">
                {p.outlet}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Catering + gift cards                                         */}
      {/* ------------------------------------------------------------ */}
      <section className="grid md:grid-cols-2" aria-label="Catering and gift cards">
        <div className="on-dark bg-ketchup text-white">
          <div className="flex h-full flex-col justify-between gap-10 px-[clamp(1rem,4vw,2.5rem)] py-section md:pr-12 lg:pl-[max(2.5rem,calc((100vw-78rem)/2+2.5rem))]">
            <div data-reveal="">
              <p className="eyebrow text-cream">Catering</p>
              <h2 className="mt-3 font-display text-d-md">Burgers for the whole office</h2>
              <p className="mt-4 max-w-md text-white/90">
                From a dozen coworkers to a hundred-person reunion. Sliders, burgers, platters and sides, packed up and
                delivered around Manhattan.
              </p>
            </div>
            <div data-reveal="">
              <Link href="/catering" className="btn btn-mustard">
                Plan a catering order
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-mustard text-ink">
          <div className="flex h-full flex-col justify-between gap-10 px-[clamp(1rem,4vw,2.5rem)] py-section md:pl-12 lg:pr-[max(2.5rem,calc((100vw-78rem)/2+2.5rem))]">
            <div data-reveal="">
              <p className="eyebrow">Gift cards</p>
              <h2 className="mt-3 font-display text-d-md">Give someone a half pound</h2>
              <p className="mt-4 max-w-md text-ink/85">
                Send a gift certificate by email, or have one mailed. Birthdays, thank-yous, the friend who moved away
                from the neighborhood.
              </p>
            </div>
            <div data-reveal="">
              <a href={site.links.giftCards} target="_blank" rel="noreferrer" className="btn btn-ink">
                Buy a gift card<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Closing CTA                                                   */}
      {/* ------------------------------------------------------------ */}
      <section className="py-section" aria-labelledby="hungry-heading">
        <div className="container-site grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Print photo={photos.chiliCheeseFries} sizes="(min-width: 768px) 36vw, 92vw" tilt={-1.5} />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 id="hungry-heading" className="font-display text-d-lg" data-reveal="">
              Hungry now?
            </h2>
            <p className="mt-4 max-w-prose text-ink/85" data-reveal="">
              Order online for pickup or delivery, or walk in and grab a seat. We&rsquo;re a few blocks from Astor
              Place.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap" data-reveal="">
              <a href={site.links.order} target="_blank" rel="noreferrer" className="btn btn-primary">
                Order online<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <Link href="/visit" className="btn btn-outline">
                Hours &amp; directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
