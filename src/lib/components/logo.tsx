import Image from "next/image"

/**
 * The restaurant's round "Paul's" badge, taken from the original site.
 * The source file is small (205 x 200), so it is only ever shown at badge sizes.
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/pauls-logo.png"
      alt=""
      width={205}
      height={200}
      priority
      sizes="64px"
      className={`object-contain ${className}`}
    />
  )
}
