import type { Config } from "tailwindcss"

/**
 * Paul's Da Burger Joint design tokens.
 *
 * Art direction: "East Village counter signage". 1950s diner cues (ketchup red,
 * mustard, checkerboard, the felt letterboard) set against the grit and density
 * of St. Mark's Place. Colors are defined as CSS variables in globals.css so the
 * roles stay coherent; Tailwind just exposes them.
 */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        ketchup: {
          DEFAULT: "rgb(var(--ketchup) / <alpha-value>)",
          deep: "rgb(var(--ketchup-deep) / <alpha-value>)",
        },
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          soft: "rgb(var(--ink-soft) / <alpha-value>)",
        },
        // Supplemental
        mustard: {
          DEFAULT: "rgb(var(--mustard) / <alpha-value>)",
          deep: "rgb(var(--mustard-deep) / <alpha-value>)",
        },
        mint: "rgb(var(--mint) / <alpha-value>)",
        // Neutrals
        cream: "rgb(var(--cream) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        bun: "rgb(var(--bun) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ['"Bungee"', "Impact", "sans-serif"],
        inline: ['"Bungee Inline"', '"Bungee"', "Impact", "sans-serif"],
        sans: ['"Barlow"', "system-ui", "sans-serif"],
        cond: ['"Barlow Condensed"', '"Barlow"', "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display scale, fluid between mobile and desktop
        "d-xl": ["clamp(2.5rem, 6.4vw, 5.4rem)", { lineHeight: "0.92", letterSpacing: "-0.01em" }],
        "d-lg": ["clamp(2.1rem, 4.8vw, 4rem)", { lineHeight: "0.95" }],
        "d-md": ["clamp(1.65rem, 3.2vw, 2.6rem)", { lineHeight: "1" }],
        "d-sm": ["clamp(1.25rem, 2vw, 1.6rem)", { lineHeight: "1.05" }],
      },
      maxWidth: {
        site: "78rem",
        prose: "38rem",
      },
      spacing: {
        nav: "var(--nav-h)",
        section: "clamp(4rem, 9vw, 7.5rem)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
export default config
