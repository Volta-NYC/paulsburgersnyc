import Link from "next/link"
import Logo from "@/lib/components/logo"
import { hoursSummary, nav, site } from "@/lib/site"
import CurrentYear from "@/lib/components/current-year"

const footerLink = "inline-flex min-h-11 items-center hover:text-mustard"
import { checkerColors } from "@/lib/motion"

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-cream">
      <div
        className="checker checker-lg"
        style={checkerColors("rgb(var(--ink))", "rgb(var(--cream))")}
        aria-hidden="true"
      />

      <div className="container-site grid gap-12 py-14 md:grid-cols-12 md:gap-8 lg:py-20">
        {/* Identity */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-4">
            <Logo className="h-16 w-16" />
            <p className="font-display text-[1.6rem] leading-[1.05]">
              Paul&rsquo;s
              <br />
              <span className="text-mustard">Da Burger Joint</span>
            </p>
          </div>
          <p className="mt-6 max-w-sm text-cream/80">
            Half-pound burgers, egg creams and frosteds at the corner of Second Avenue and St. Mark&rsquo;s Place since{" "}
            {site.founded}. Family run, counter service, open late.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.links.order} target="_blank" rel="noreferrer" className="btn btn-primary">
              Order online<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a href={site.phone.href} className="btn btn-outline-light">
              Call {site.phone.display}
            </a>
          </div>
        </div>

        {/* Visit */}
        <div className="md:col-span-4 lg:col-span-3">
          <h2 className="eyebrow text-mustard">Find us</h2>
          <address className="mt-4 not-italic leading-relaxed">
            {site.address.street}
            <br />
            {site.address.crossStreet}
            <br />
            {site.address.city}, {site.address.region} {site.address.postalCode}
          </address>
          <a
            href={site.links.maps}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex min-h-11 items-center font-semibold underline decoration-mustard decoration-2 underline-offset-4 hover:text-mustard"
          >
            Get directions<span className="sr-only"> (opens in a new tab)</span>
          </a>
          <div className="mt-4 flex flex-col items-start">
            <a href={site.phone.href} className={`${footerLink} font-semibold`}>
              {site.phone.display}
            </a>
            <a href={site.email.href} className={footerLink}>
              {site.email.display}
            </a>
          </div>
          <h2 className="eyebrow mt-8 text-mustard">Hours</h2>
          <dl className="mt-4 space-y-2">
            {hoursSummary.map((h) => (
              <div key={h.days}>
                <dt className="text-cream/70">{h.days}</dt>
                <dd className="font-semibold">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Pages + social */}
        <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-1 lg:col-span-4 lg:grid-cols-2">
          <div>
            <h2 className="eyebrow text-mustard">Explore</h2>
            <ul className="mt-2">
              <li>
                <Link href="/" className={footerLink}>
                  Home
                </Link>
              </li>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.links.giftCards} target="_blank" rel="noreferrer" className={footerLink}>
                  Gift cards<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow text-mustard">Follow</h2>
            <ul className="mt-2">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className={footerLink}>
                    {s.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-site flex flex-col gap-3 py-6 text-[0.95rem] text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; <CurrentYear /> {site.name}. {site.address.street}, New York.
          </p>
          <a
            href="https://novusnyc.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center self-start font-semibold text-mustard underline-offset-4 hover:underline"
          >
            Made by Novus
          </a>
        </div>
      </div>
    </footer>
  )
}
