import type { NextConfig } from "next"

/**
 * The old paulsburgersnyc.com was a set of static .html pages. Redirect those
 * URLs (and the old menu PDF) to the new routes so bookmarks, Google results
 * and press links keep working.
 */
const legacy: [string, string][] = [
  ["/index.html", "/"],
  ["/about.html", "/about"],
  ["/press.html", "/about#press"],
  ["/celebrities.html", "/about#famous-faces"],
  ["/popup.html", "/about"],
  ["/gallery.html", "/gallery"],
  ["/catering.html", "/catering"],
  ["/contactus.html", "/visit"],
  ["/accessibility.html", "/visit"],
  ["/pdf/:file*", "/menu"],
]

const nextConfig: NextConfig = {
  images: {
    // These local photos rarely change. Replacing one requires a new filename
    // so Vercel serves the new image without waiting for the cache to expire.
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
}

export default nextConfig
