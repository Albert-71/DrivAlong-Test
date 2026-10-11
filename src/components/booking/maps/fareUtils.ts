/**
 * Re-exports the shared Driv-A-Long Chauffeur pricing engine for use inside the
 * booking UI components.
 */
export {
  PRICING,
  CHAUFFEUR_SERVICES,
  DURATION_HOURS,
  calculateFare,
  computeHaversineDistance,
  formatDuration,
  formatEta,
  formatCurrency,
  computeEtaDate,
  OFFICIAL_PRICE_LIST,
  OFFICIAL_PRICE_NOTES,
} from "@/lib/pricing";
export type { ServiceType, DurationOption, FareBreakdown, PriceListRow } from "@/lib/pricing";
