"use client"

import { useState, type FormEvent } from "react"
import { site } from "@/lib/site"

type Fields = {
  name: string
  email: string
  phone: string
  date: string
  guests: string
  fulfillment: "Delivery" | "Pickup"
  details: string
}

type Errors = Partial<Record<keyof Fields, string>>

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  date: "",
  guests: "",
  fulfillment: "Delivery",
  details: "",
}

function validate(f: Fields): Errors {
  const e: Errors = {}
  if (!f.name.trim()) e.name = "Please tell us your name."
  if (!f.email.trim()) e.email = "We need an email address to reply to."
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "That email address doesn't look complete."
  if (!f.date) e.date = "Pick the date of your event."
  const guests = Number(f.guests)
  if (!f.guests) e.guests = "Roughly how many people are you feeding?"
  else if (!Number.isFinite(guests) || guests < 1) e.guests = "Enter a number of guests, like 25."
  return e
}

/**
 * Catering request form. The restaurant has no form backend, so submitting
 * composes an email to the restaurant in the visitor's own mail app, with
 * everything filled in. The copy says so plainly.
 */
export default function CateringForm() {
  const [fields, setFields] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }))
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found = validate(fields)
    setErrors(found)
    const firstError = Object.keys(found)[0]
    if (firstError) {
      document.getElementById(`catering-${firstError}`)?.focus()
      return
    }
    const body = [
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.phone ? `Phone: ${fields.phone}` : null,
      `Event date: ${fields.date}`,
      `Guests: ${fields.guests}`,
      `Delivery or pickup: ${fields.fulfillment}`,
      "",
      fields.details ? `Details:\n${fields.details}` : null,
    ]
      .filter((l) => l !== null)
      .join("\n")
    const subject = `Catering request for ${fields.date} (${fields.guests} guests)`
    window.location.href = `${site.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    "mt-1.5 block w-full border-2 border-ink bg-paper px-3.5 py-3 text-[1.05rem] text-ink placeholder:text-muted/70 focus:outline-none focus-visible:outline-none focus:ring-4 focus:ring-mustard aria-[invalid=true]:border-ketchup"
  const label = "font-cond text-[1.1rem] font-bold uppercase tracking-[0.06em]"
  const errorText = "mt-1.5 font-semibold text-ketchup-deep"

  if (sent) {
    return (
      <div className="border-2 border-ink bg-paper p-6 sm:p-8" role="status">
        <p className="font-display text-d-sm">Almost done</p>
        <p className="mt-3 text-ink/85">
          Your email app should have opened with the request filled in. Hit send and we&rsquo;ll get back to you to
          confirm the menu and price.
        </p>
        <p className="mt-3 text-ink/85">
          Nothing opened? Email{" "}
          <a href={site.email.href} className="link-underline">
            {site.email.display}
          </a>{" "}
          or call{" "}
          <a href={site.phone.href} className="link-underline">
            {site.phone.display}
          </a>
          .
        </p>
        <button type="button" className="btn btn-outline mt-6" onClick={() => setSent(false)}>
          Edit the request
        </button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="border-2 border-ink bg-paper p-5 sm:p-8" aria-describedby="catering-form-note">
      <p id="catering-form-note" className="text-[1rem] text-ink/75">
        Fields marked <span aria-hidden="true" className="font-bold text-ketchup">*</span>
        <span className="sr-only">with an asterisk</span> are required. Sending opens your email app with your request
        written out for you.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="catering-name" className={label}>
            Your name <span aria-hidden="true" className="text-ketchup">*</span>
          </label>
          <input
            id="catering-name"
            className={field}
            autoComplete="name"
            required
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "catering-name-error" : undefined}
          />
          {errors.name ? <p id="catering-name-error" className={errorText}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="catering-email" className={label}>
            Email <span aria-hidden="true" className="text-ketchup">*</span>
          </label>
          <input
            id="catering-email"
            type="email"
            className={field}
            autoComplete="email"
            required
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "catering-email-error" : undefined}
          />
          {errors.email ? <p id="catering-email-error" className={errorText}>{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="catering-phone" className={label}>
            Phone <span className="font-sans text-[0.95rem] font-medium normal-case tracking-normal text-muted">(optional)</span>
          </label>
          <input
            id="catering-phone"
            type="tel"
            className={field}
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="catering-date" className={label}>
            Event date <span aria-hidden="true" className="text-ketchup">*</span>
          </label>
          <input
            id="catering-date"
            type="date"
            className={field}
            required
            value={fields.date}
            onChange={(e) => set("date", e.target.value)}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={errors.date ? "catering-date-error" : undefined}
          />
          {errors.date ? <p id="catering-date-error" className={errorText}>{errors.date}</p> : null}
        </div>
        <div>
          <label htmlFor="catering-guests" className={label}>
            Number of guests <span aria-hidden="true" className="text-ketchup">*</span>
          </label>
          <input
            id="catering-guests"
            type="number"
            inputMode="numeric"
            min={1}
            className={field}
            required
            value={fields.guests}
            onChange={(e) => set("guests", e.target.value)}
            aria-invalid={Boolean(errors.guests)}
            aria-describedby={errors.guests ? "catering-guests-error" : undefined}
          />
          {errors.guests ? <p id="catering-guests-error" className={errorText}>{errors.guests}</p> : null}
        </div>
        <fieldset>
          <legend className={label}>Delivery or pickup</legend>
          <div className="mt-1.5 grid grid-cols-2 gap-2">
            {(["Delivery", "Pickup"] as const).map((opt) => (
              <label
                key={opt}
                className={`flex min-h-[3.1rem] cursor-pointer items-center justify-center border-2 border-ink font-cond text-[1.05rem] font-semibold uppercase tracking-[0.06em] has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-mustard ${
                  fields.fulfillment === opt ? "bg-ink text-cream" : "bg-paper"
                }`}
              >
                <input
                  type="radio"
                  name="fulfillment"
                  value={opt}
                  checked={fields.fulfillment === opt}
                  onChange={() => set("fulfillment", opt)}
                  className="sr-only"
                />
                {opt}
              </label>
            ))}
          </div>
        </fieldset>
        <div className="sm:col-span-2">
          <label htmlFor="catering-details" className={label}>
            What are you thinking?{" "}
            <span className="font-sans text-[0.95rem] font-medium normal-case tracking-normal text-muted">(optional)</span>
          </label>
          <textarea
            id="catering-details"
            rows={4}
            className={field}
            placeholder="Burgers and sliders for 30, a few veggie burgers, fries and sodas. Delivery to our office near Union Square."
            value={fields.details}
            onChange={(e) => set("details", e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto">
        Email your request
      </button>
    </form>
  )
}
