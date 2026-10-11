"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { galleryCategories, type GalleryCategory, type Photo } from "@/lib/photos"

type Item = { photo: Photo; category: GalleryCategory }

const FILTERS = ["All", ...galleryCategories] as const

/**
 * Filterable photo wall with an accessible lightbox built on <dialog>,
 * which provides focus containment and Escape-to-close natively.
 */
export default function GalleryGrid({ items }: { items: Item[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All")
  const [index, setIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const openerRef = useRef<HTMLButtonElement | null>(null)

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.category === filter)),
    [filter, items],
  )

  const open = (i: number, opener: HTMLButtonElement) => {
    openerRef.current = opener
    setIndex(i)
  }

  const close = useCallback(() => setIndex(null), [])
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length],
  )

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (index !== null && !dialog.open) {
      dialog.showModal()
      document.body.style.overflow = "hidden"
    }
    if (index === null && dialog.open) {
      dialog.close()
    }
  }, [index])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    const onClose = () => {
      document.body.style.overflow = ""
      setIndex(null)
      openerRef.current?.focus()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    dialog.addEventListener("close", onClose)
    dialog.addEventListener("keydown", onKey)
    return () => {
      dialog.removeEventListener("close", onClose)
      dialog.removeEventListener("keydown", onKey)
    }
  }, [step])

  const current = index !== null ? visible[index] : null

  return (
    <>
      <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={`min-h-[2.75rem] border-2 border-ink px-4 font-cond text-[1.05rem] font-semibold uppercase tracking-[0.08em] transition-colors ${
              filter === f ? "bg-ink text-cream" : "bg-transparent hover:bg-bun"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} photos
      </p>

      <ul className="mt-10 columns-2 gap-4 sm:gap-6 md:columns-3 lg:columns-4">
        {visible.map((item, i) => (
          <li key={item.photo.src} className="mb-4 break-inside-avoid sm:mb-6">
            <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              className="group block w-full bg-paper p-1.5 text-left ring-2 ring-ink transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-print sm:p-2"
            >
              <span
                className="relative block overflow-hidden bg-bun"
                style={{ aspectRatio: `${item.photo.width} / ${item.photo.height}` }}
              >
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 23vw, (min-width: 768px) 31vw, 47vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </span>
              <span className="sr-only">Open larger photo</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Photo viewer"
        className="on-dark m-auto h-full max-h-none w-full max-w-none bg-transparent p-0 text-cream backdrop:bg-ink/90"
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        {current ? (
          <div className="flex h-full flex-col">
            <div className="container-site flex items-center justify-between gap-4 py-4">
              <p className="font-cond text-[1.1rem] font-semibold uppercase tracking-[0.08em]" aria-live="polite">
                {index! + 1} of {visible.length}
              </p>
              <button type="button" onClick={close} className="btn btn-outline-light min-h-[2.75rem]">
                Close
              </button>
            </div>
            <div
              className="relative mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) close()
              }}
            >
              <figure className="w-full">
                <div
                  className="relative mx-auto max-h-[72vh] bg-paper p-2"
                  style={{
                    aspectRatio: `${current.photo.width} / ${current.photo.height}`,
                    maxWidth: `min(100%, calc(72vh * ${current.photo.width / current.photo.height}))`,
                  }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={current.photo.src}
                      alt={current.photo.alt}
                      fill
                      sizes="(min-width: 1024px) 64rem, 100vw"
                      className="object-contain"
                    />
                  </div>
                </div>
                <figcaption className="mx-auto mt-4 max-w-2xl text-center text-cream/85">
                  {current.photo.alt}
                </figcaption>
              </figure>
            </div>
            <div className="container-site flex justify-between gap-4 py-5">
              <button type="button" onClick={() => step(-1)} className="btn btn-outline-light">
                <span aria-hidden="true">&larr;</span> Previous
              </button>
              <button type="button" onClick={() => step(1)} className="btn btn-mustard">
                Next <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  )
}
