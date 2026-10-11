"use client"

import { useEffect, useState } from "react"
import { DAY_NAMES, formatTime, hours } from "@/lib/site"

type Status = { open: boolean; label: string }

/** Current day and minute in New York, regardless of the visitor's time zone. */
function nowInNewYork() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date())
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ""
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"))
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) }
}

export function computeStatus(): Status {
  const { day, minutes } = nowInNewYork()
  const today = hours.find((h) => h.day === day)
  if (today && minutes >= today.open && minutes < today.close) {
    return { open: true, label: `Open now until ${formatTime(today.close)}` }
  }
  if (today && minutes < today.open) {
    return { open: false, label: `Closed now. Opens today at ${formatTime(today.open)}` }
  }
  const next = hours.find((h) => h.day === (day + 1) % 7)
  return {
    open: false,
    label: `Closed now. Opens ${next ? `${DAY_NAMES[next.day]} at ${formatTime(next.open)}` : "tomorrow"}`,
  }
}

/**
 * Live open or closed badge. Renders a neutral placeholder on the server and
 * fills in after mount, so there is no hydration mismatch.
 */
export default function OpenStatus({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<Status | null>(null)

  useEffect(() => {
    const update = () => setStatus(computeStatus())
    update()
    const id = window.setInterval(update, 60_000)
    return () => window.clearInterval(id)
  }, [])

  const dot = status?.open ? "bg-go" : status ? "bg-ketchup" : "bg-muted"

  return (
    <p
      className={`flex min-h-[1.75rem] items-center gap-2.5 font-cond text-[1.1rem] font-semibold text-ink ${className}`}
      aria-live="polite"
    >
      <span className={`relative inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
      <span>{status ? status.label : `Open daily from ${formatTime(hours[0].open)}`}</span>
    </p>
  )
}
