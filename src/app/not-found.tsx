import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page isn’t on the menu. Find the menu, our hours and online ordering for Paul’s Da Burger Joint.",
}

export default function NotFound() {
  return (
    <section className="bg-cream">
      <div className="container-site grid items-center gap-10 py-section md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-ketchup-deep">Error 404</p>
          <h1 className="mt-3 font-display text-d-xl">Not on the menu</h1>
          <p className="mt-5 max-w-prose text-[1.15rem] text-ink/85">
            We couldn&rsquo;t find that page. It may have moved when we rebuilt the site. Everything you&rsquo;re
            looking for is a tap away.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/menu" className="btn btn-primary">
              See the menu
            </Link>
            <a href={site.links.order} target="_blank" rel="noreferrer" className="btn btn-outline">
              Order online<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link href="/visit" className="btn btn-outline">
              Hours &amp; directions
            </Link>
          </div>
        </div>
        <div className="md:col-span-5" aria-hidden="true">
          <div className="letterboard mx-auto max-w-sm px-6 py-10 text-center">
            <p className="letterboard-text text-[1rem] text-mustard">Today&rsquo;s special</p>
            <p className="letterboard-text mt-4 text-[clamp(2.4rem,6vw,3.6rem)] leading-none">404</p>
            <p className="letterboard-text mt-3 text-[1.3rem]">Page not found</p>
          </div>
        </div>
      </div>
    </section>
  )
}
