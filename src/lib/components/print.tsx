import Image from "next/image"
import type { Photo } from "@/lib/photos"

type PrintProps = {
  photo: Photo
  /** Responsive sizes hint for next/image. */
  sizes: string
  caption?: string
  /** Small tilt, in degrees, for the photo-wall moments. Keep within 3 degrees. */
  tilt?: number
  priority?: boolean
  className?: string
  /** Force an aspect ratio crop, e.g. "4 / 5". Defaults to the photo's own ratio. */
  aspect?: string
  /** Where to anchor a forced crop, e.g. "15% 50%" to keep a subject on the left. */
  focus?: string
  reveal?: boolean
}

/**
 * A photo presented like a print pinned behind the counter: cream border, a
 * hard ink edge and an optional handwritten-style caption strip. The originals
 * are small, so this framing keeps them at honest sizes.
 */
export default function Print({
  photo,
  sizes,
  caption,
  tilt = 0,
  priority = false,
  className = "",
  aspect,
  focus,
  reveal = true,
}: PrintProps) {
  return (
    <figure
      className={`bg-paper p-2 shadow-print ring-2 ring-ink sm:p-2.5 ${className}`}
      style={tilt ? { rotate: `${tilt}deg` } : undefined}
      data-reveal={reveal ? "" : undefined}
    >
      <div
        className="relative overflow-hidden bg-bun"
        style={{ aspectRatio: aspect ?? `${photo.width} / ${photo.height}` }}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={focus ? { objectPosition: focus } : undefined}
        />
      </div>
      {caption ? (
        <figcaption className="px-1 pb-0.5 pt-2 font-cond text-[1rem] font-semibold uppercase tracking-[0.08em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
