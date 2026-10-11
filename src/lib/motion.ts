import type { CSSProperties } from "react"

/** Inline style that sets CSS custom properties without casts at every call site. */
type CSSVars = CSSProperties & Record<`--${string}`, string>

/** Delay for the on-load `.animate-rise` entrance. */
export const riseDelay = (ms: number): CSSVars => ({ "--rise-delay": `${ms}ms` })

/** Delay for a `data-reveal` scroll reveal, to stagger siblings. */
export const revealDelay = (ms: number): CSSVars => ({ "--reveal-delay": `${ms}ms` })

/** Recolor a `.checker` band: c1 is the square color, c2 the ground. */
export const checkerColors = (c1: string, c2: string): CSSVars => ({ "--c1": c1, "--c2": c2 })
