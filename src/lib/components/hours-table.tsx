"use client"

import { useSyncExternalStore } from "react"
import { DAY_NAMES, formatTime, hours } from "@/lib/site"

// Start the week on Monday for display.
const ORDER = [1, 2, 3, 4, 5, 6, 0]

const subscribe = () => () => {}

function todayInNewYork() {
  const weekday = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", weekday: "long" }).format(new Date())
  return DAY_NAMES.indexOf(weekday as (typeof DAY_NAMES)[number])
}

/** Weekly hours with today's row highlighted (in New York time, after mount). */
export default function HoursTable() {
  // Server render has no "today"; the client fills it in without a hydration mismatch.
  const today = useSyncExternalStore<number | null>(subscribe, todayInNewYork, () => null)

  return (
    <table className="w-full border-collapse text-left">
      <caption className="sr-only">Opening hours</caption>
      <tbody>
        {ORDER.map((d) => {
          const h = hours.find((x) => x.day === d)!
          const isToday = today === d
          return (
            <tr key={d} className={`border-b-2 border-ink/10 ${isToday ? "bg-mustard" : ""}`}>
              <th scope="row" className="py-3 pl-3 pr-4 font-cond text-[1.2rem] font-bold uppercase tracking-[0.04em]">
                {DAY_NAMES[d]}
                {isToday ? (
                  <span className="ml-2 font-sans text-[0.95rem] font-semibold normal-case tracking-normal">
                    (today)
                  </span>
                ) : null}
              </th>
              <td className="py-3 pr-3 text-right font-cond text-[1.2rem] font-semibold tabular-nums">
                {formatTime(h.open)} to {formatTime(h.close)}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
