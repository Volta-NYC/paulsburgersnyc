"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"
import { nav, site } from "@/lib/site"
import Logo from "@/lib/components/logo"
import { checkerColors } from "@/lib/motion"

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const close = useCallback((returnFocus = true) => {
    setOpen(false)
    if (returnFocus) toggleRef.current?.focus()
  }, [])

  // Close the mobile menu whenever the route changes (React's "adjust state on prop change" pattern).
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  // Mobile menu: lock scroll, move focus in, trap Tab, close on Escape.
  useEffect(() => {
    if (!open) return
    const panel = panelRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const focusables = () => Array.from(panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [])
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        close()
        return
      }
      if (e.key !== "Tab") return
      const items = focusables()
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [open, close])

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  return (
    <header
      className={`sticky top-0 z-50 h-nav border-b-2 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-ink bg-paper shadow-[0_6px_0_-4px_rgb(var(--ink)/0.08)]"
          : "border-transparent bg-cream"
      }`}
    >
      <nav aria-label="Main" className="container-site flex h-full items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label={`${site.name}, home`}>
          <Logo className="h-11 w-11" />
          <span className="hidden font-display text-[1.05rem] leading-none sm:block">
            Paul&rsquo;s <span className="text-ketchup">Da Burger Joint</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative inline-flex h-11 items-center px-3 font-cond text-[1.1rem] font-semibold uppercase tracking-[0.08em] transition-colors hover:text-ketchup ${
                  isActive(item.href)
                    ? "text-ketchup after:absolute after:inset-x-3 after:bottom-1.5 after:h-[3px] after:bg-ketchup"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.links.order}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary min-h-[2.75rem] px-4 text-base"
          >
            Order online
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              {open ? <path d="M4 4l14 14M18 4L4 18" /> : <path d="M2 5h18M2 11h18M2 17h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu. Must stay outside any ancestor with transform or backdrop-filter, which would trap this fixed panel. */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-nav z-40 overflow-y-auto bg-ink text-cream lg:hidden"
      >
        <div className="checker" style={checkerColors("rgb(var(--cream))", "rgb(var(--ink))")} />
        <div className="container-site flex min-h-[calc(100%-18px)] flex-col justify-between gap-10 py-8">
          <ul className="space-y-1">
            <li>
              <Link
                href="/"
                aria-current={pathname === "/" ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="block py-2 font-display text-[2rem] leading-tight hover:text-mustard aria-[current=page]:text-mustard"
              >
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-display text-[2rem] leading-tight hover:text-mustard aria-[current=page]:text-mustard"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="space-y-4 border-t border-cream/20 pt-6">
            <a href={site.phone.href} className="block font-cond text-xl font-semibold tracking-wide">
              Call {site.phone.display}
            </a>
            <p className="text-cream/80">
              {site.address.street} {site.address.crossStreet}
            </p>
            <button type="button" onClick={() => close()} className="btn btn-outline-light w-full">
              Close menu
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
