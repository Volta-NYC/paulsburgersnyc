"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

/**
 * One observer for the whole site. Any element with a `data-reveal` attribute
 * fades or unmasks into place the first time it enters the viewport.
 * Re-scans on every route change because the layout persists between pages.
 */
export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"))
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-in"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in")
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])

  return null
}
