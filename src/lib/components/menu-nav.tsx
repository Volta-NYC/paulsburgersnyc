"use client"

import { useEffect, useRef, useState } from "react"

type Item = { id: string; label: string }

/**
 * Sticky category bar for the menu page. Plain anchor links (so it works
 * without JavaScript); JavaScript only adds the active-section highlight.
 */
export default function MenuNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id)
  const navRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const sections = items.map((i) => document.getElementById(i.id)).filter((el): el is HTMLElement => Boolean(el))

    // The active section is the last one whose top has reached the bottom
    // edge of this sticky bar (plus the 1rem anchor gap). Scroll-driven, so scrolling back up resets it.
    let frame = 0
    const update = () => {
      frame = 0
      const line = (navRef.current?.getBoundingClientRect().bottom ?? 0) + 32
      let current = sections[0]?.id
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id
      }
      if (current) setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [items])

  // Keep the active chip visible inside the horizontally scrolling bar.
  useEffect(() => {
    const list = listRef.current
    const link = list?.querySelector<HTMLAnchorElement>(`a[href="#${active}"]`)
    if (!list || !link) return
    const left = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    list.scrollTo({ left, behavior: reduce ? "auto" : "smooth" })
  }, [active])

  return (
    <nav
      ref={navRef}
      aria-label="Menu categories"
      className="sticky top-nav z-30 h-[var(--menubar-h)] border-y-2 border-ink bg-paper"
    >
      <ul
        ref={listRef}
        className="container-site flex h-full items-center gap-1 overflow-x-auto [scrollbar-width:none] max-lg:[mask-image:linear-gradient(to_right,black_calc(100%-3rem),transparent)] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const isActive = active === item.id
          return (
            <li key={item.id} className="shrink-0 last:pr-8 lg:last:pr-0">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`inline-flex min-h-[2.75rem] items-center px-3.5 font-cond text-[1.05rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
                  isActive ? "bg-ketchup text-white" : "text-ink hover:bg-bun"
                }`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
