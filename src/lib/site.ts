/**
 * Single source of truth for Paul's Da Burger Joint business details.
 * Every page, the navbar, the footer and metadata read from here.
 *
 * Sources (verified October 2026):
 * - Address, phone, email, hours: paulsburgersnyc.com contact page, matched against Yelp.
 * - Online ordering: orderpaulsburgersnyc.com (Menufy), carryout and delivery.
 * - Founding story: the restaurant's own About page and Tasting Table (September 2026).
 */

export const site = {
  name: "Paul's Da Burger Joint",
  shortName: "Paul's",
  tagline: "Half-pound burgers on Second Avenue since 1989",
  description:
    "Family-run East Village burger joint at 131 2nd Avenue and St. Mark's Place. Half-pound burgers, egg creams and frosteds since 1989. Order online for pickup or delivery.",
  url: "https://paulsburgersnyc.com",
  founded: 1989,

  address: {
    street: "131 2nd Avenue",
    crossStreet: "at St. Mark's Place",
    city: "New York",
    region: "NY",
    postalCode: "10003",
    neighborhood: "East Village",
  },
  transit: "A short walk from Astor Place (6) and 8th Street NYU (N, R, W).",

  phone: {
    display: "(212) 529-3033",
    href: "tel:+12125293033",
    e164: "+1-212-529-3033",
  },
  email: {
    display: "info@paulsburgersnyc.com",
    href: "mailto:info@paulsburgersnyc.com",
  },

  links: {
    order: "https://www.orderpaulsburgersnyc.com/",
    catering: "https://www.ezcater.com/catering/pvt/pauls-da-burger-joint-1",
    giftCards: "https://onelink.quickgifts.com/merchant/pauls-da-burger-joint/",
    maps: "https://www.google.com/maps/search/?api=1&query=Paul%27s+Da+Burger+Joint+131+2nd+Ave+New+York+NY+10003",
    mapEmbed: "https://www.google.com/maps?q=Paul%27s+Da+Burger+Joint,+131+2nd+Ave,+New+York,+NY+10003&output=embed",
  },

  social: [
    { label: "Instagram", href: "https://www.instagram.com/paulsdaburgerjoint/" },
    { label: "Facebook", href: "https://www.facebook.com/PaulsDaBurgerJoint" },
    { label: "X (Twitter)", href: "https://x.com/PaulsBurgerNYC" },
  ],
} as const

/**
 * Opening hours. Day index follows JavaScript: 0 is Sunday.
 * Times are 24 hour minutes after midnight; a close of 24 * 60 means midnight.
 */
export type DayHours = { day: number; open: number; close: number }

export const hours: DayHours[] = [
  { day: 0, open: 11 * 60, close: 23 * 60 + 30 },
  { day: 1, open: 11 * 60, close: 23 * 60 + 30 },
  { day: 2, open: 11 * 60, close: 23 * 60 + 30 },
  { day: 3, open: 11 * 60, close: 23 * 60 + 30 },
  { day: 4, open: 11 * 60, close: 23 * 60 + 30 },
  { day: 5, open: 11 * 60, close: 24 * 60 },
  { day: 6, open: 11 * 60, close: 24 * 60 },
]

export const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const

/** 690 -> "11:30 AM"; 24 * 60 -> "midnight". */
export function formatTime(minutes: number) {
  if (minutes >= 24 * 60) return "midnight"
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  const h12 = h % 12 === 0 ? 12 : h % 12
  return `${h12}:${m.toString().padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`
}

const timeRange = (d: DayHours) => `${formatTime(d.open)} to ${formatTime(d.close)}`

/** Human-readable grouping used on the homepage, footer, Visit page and metadata. */
export const hoursSummary = [
  { days: "Sunday to Thursday", time: timeRange(hours[0]) },
  { days: "Friday and Saturday", time: timeRange(hours[5]) },
] as const

/** schema.org openingHoursSpecification, grouped by identical hours. */
export function openingHoursSpecification() {
  const hhmm = (m: number) =>
    m >= 24 * 60 ? "23:59" : `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`
  const groups = new Map<string, string[]>()
  for (const d of hours) {
    const key = `${d.open}-${d.close}`
    groups.set(key, [...(groups.get(key) ?? []), DAY_NAMES[d.day]])
  }
  return Array.from(groups.entries()).map(([key, days]) => {
    const [open, close] = key.split("-").map(Number)
    return { "@type": "OpeningHoursSpecification", dayOfWeek: days, opens: hhmm(open), closes: hhmm(close) }
  })
}

export const nav = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "Our Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/catering", label: "Catering" },
  { href: "/visit", label: "Visit" },
] as const

/** Press coverage linked from the old site's Press page. */
export const press = [
  {
    outlet: "Tasting Table",
    note: "Named New York's best hole-in-the-wall burger joint",
    year: 2026,
    href: "https://www.tastingtable.com/2259879/new-york-best-burger-spot-hole-in-wall-pauls/",
  },
  {
    outlet: "Eater NY",
    note: "New York Burger Week profile of the crew behind the counter",
    year: 2015,
    href: "https://ny.eater.com/2015/4/14/8408245/matt-wardrop-pauls-da-burger-joint-new-york-burger-week-lifers",
  },
  {
    outlet: "Serious Eats",
    note: "A Hamburger Today review of the East Village counter",
    year: 2008,
    href: "http://aht.seriouseats.com/archives/2008/07/pauls-da-burger-joint-east-village-nyc.html",
  },
  {
    outlet: "New York Magazine",
    note: "Restaurant listing, under the old Paul's Palace name",
    year: null,
    href: "https://nymag.com/listings/restaurant/pauls-palace/",
  },
  {
    outlet: "Time Out New York",
    note: "Restaurant listing and review",
    year: null,
    href: "https://www.timeout.com/newyork/restaurants/pauls",
  },
  {
    outlet: "Crain's New York",
    note: "Matt Wardrop of Paul's, in a story on the block after the 2015 East Village explosion",
    year: 2015,
    href: "https://www.crainsnewyork.com/article/20150405/SMALLBIZ/150409943/when-a-disaster-like-the-east-village-explosion-visits-your-block/",
  },
  {
    outlet: "Gothamist",
    note: "A small business crawl stopping at Paul's, a few storefronts up from the explosion site",
    year: 2015,
    href: "https://gothamist.com/food/small-biz-crawl-will-help-establishments-reeling-from-east-village-explosion",
  },
  {
    outlet: "The Burger Review",
    note: "A burger-by-burger write-up",
    year: 2011,
    href: "http://www.theburgerreview.com/2011/11/pauls-da-burger-joint-new-york-ny.html",
  },
] as const

export function fullAddress() {
  const a = site.address
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`
}
