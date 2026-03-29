import europe from "./europe.png"
import unitedKingdom from "./united-kingdom.png"
import canada from "./canada.png"
import australia from "./australia.png"

export const flagsByCurrencyCode = {
  EUR: { src: europe, alt: "European Union flag" },
  GBP: { src: unitedKingdom, alt: "United Kingdom flag" },
  CAD: { src: canada, alt: "Canada flag" },
  AUD: { src: australia, alt: "Australia flag" },
} as const

