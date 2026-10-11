"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

/**
 * The pages are static, so a build-time year would go stale on January 1.
 * The server renders the build year; the browser swaps in the current one.
 */
export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => new Date().getFullYear(),
  )
  return <>{year}</>
}
