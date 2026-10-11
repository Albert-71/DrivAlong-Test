/**
 * Driv-A-Long Professional Chauffeur Rental Fare Calculation Engine.
 *
 * Chauffeur Services pricing model:
 *   Base Fare        = Service Base Fare (₹299 - ₹1,499)
 *   Duration Charge  = Service Duration Hours × Rate per hour
 *   Distance Charge  = Optional Distance (km) × Rate per km
 *   Total Fare       = Base Fare + Duration Charge + Distance Charge
 */

export const PRICING = {
  baseFare: 299,
  ratePerKm: 13,
  ratePerHour: 120,
} as const;

export type ServiceType =
  | "One-Way Chauffeur"
  | "Round-Trip Chauffeur"
  | "Outstation Trip (Inside Kerala)"
  | "Outstation Trip (Outside Kerala)"
  | "Full-Day Chauffeur"
  | "Airport Chauffeur"
  | "Designated Driver"
  | "Corporate Chauffeur"
  | "Event Chauffeur"
  | "Outstation Chauffeur";

export type DurationOption =
  | "1 Hour"
  | "2 Hours"
  | "4 Hours"
  | "6 Hours"
  | "8 Hours"
  | "12 Hours"
  | "Full Day";

export const DURATION_HOURS: Record<DurationOption, number> = {
  "1 Hour": 1,
  "2 Hours": 2,
  "4 Hours": 4,
  "6 Hours": 6,
  "8 Hours": 8,
  "12 Hours": 12,
  "Full Day": 24,
};

export interface ServicePricingDetail {
  title: string;
  description: string;
  baseFare: number;
  nightBaseFare: number;
  ratePerHour: number;
  nightRatePerHour: number;
  ratePerKm: number;
  convenienceCharge: string;
  includedDuration?: string;
}

export const CHAUFFEUR_SERVICES: Record<ServiceType, ServicePricingDetail> = {
  "Round-Trip Chauffeur": {
    title: "Round-Trip Chauffeur",
    description: "Two-way driver service for round trips & return journeys in your car.",
    baseFare: 299,
    nightBaseFare: 399,
    ratePerHour: 129,
    nightRatePerHour: 169,
    ratePerKm: 10,
    convenienceCharge: "Nil",
    includedDuration: "1st hr included",
  },
  "One-Way Chauffeur": {
    title: "One-Way Chauffeur",
    description: "Hire a professional driver for a single point-to-point trip in your car.",
    baseFare: 299,
    nightBaseFare: 399,
    ratePerHour: 129,
    nightRatePerHour: 169,
    ratePerKm: 8,
    convenienceCharge: "₹8/km after 8 km (Day) · ₹16/km after 5 km (Night)",
    includedDuration: "1st hr included",
  },
  "Outstation Trip (Inside Kerala)": {
    title: "Outstation Trip (Inside Kerala)",
    description: "Experienced highway driver for trips anywhere inside Kerala state.",
    baseFare: 299,
    nightBaseFare: 399,
    ratePerHour: 129,
    nightRatePerHour: 169,
    ratePerKm: 12,
    convenienceCharge: "For One Way: ₹499–999 (Day) · ₹999–1499 (Night)",
    includedDuration: "1st hr included",
  },
  "Outstation Trip (Outside Kerala)": {
    title: "Outstation Trip (Outside Kerala)",
    description: "Verified long-distance chauffeur for interstate travel outside Kerala.",
    baseFare: 299,
    nightBaseFare: 399,
    ratePerHour: 129,
    nightRatePerHour: 169,
    ratePerKm: 14,
    convenienceCharge: "For One Way: ₹999–1499 (Day) · ₹1499–1999 (Night)",
    includedDuration: "1st hr included",
  },
  "Full-Day Chauffeur": {
    title: "Full-Day Chauffeur",
    description: "Dedicated driver for 12 hours of city or regional travel in your personal car.",
    baseFare: 1699,
    nightBaseFare: 2199,
    ratePerHour: 169,
    nightRatePerHour: 219,
    ratePerKm: 0,
    convenienceCharge: "Nil",
    includedDuration: "12 hrs included",
  },
  "Outstation Chauffeur": {
    title: "Outstation Chauffeur",
    description: "Highway chauffeurs for intercity inside and outside Kerala journeys.",
    baseFare: 299,
    nightBaseFare: 399,
    ratePerHour: 129,
    nightRatePerHour: 169,
    ratePerKm: 12,
    convenienceCharge: "For One Way: ₹499–1999",
    includedDuration: "1st hr included",
  },
  "Airport Chauffeur": {
    title: "Airport Chauffeur",
    description: "Punctual airport pickup or drop-off service in the comfort of your car.",
    baseFare: 499,
    nightBaseFare: 599,
    ratePerHour: 129,
    nightRatePerHour: 169,
    ratePerKm: 12,
    convenienceCharge: "Standard Airport Transfer",
    includedDuration: "2 hrs included",
  },
  "Designated Driver": {
    title: "Designated Driver",
    description: "Safe drive home service after parties, events, or nightlife in your car.",
    baseFare: 399,
    nightBaseFare: 399,
    ratePerHour: 169,
    nightRatePerHour: 169,
    ratePerKm: 12,
    convenienceCharge: "Night-Duty Safe Return",
    includedDuration: "1st hr included",
  },
  "Corporate Chauffeur": {
    title: "Corporate Chauffeur",
    description: "Executive chauffeurs for business meetings, VIP guests, and corporate travel.",
    baseFare: 799,
    nightBaseFare: 999,
    ratePerHour: 150,
    nightRatePerHour: 190,
    ratePerKm: 12,
    convenienceCharge: "Executive Chauffeur Service",
    includedDuration: "4 hrs included",
  },
  "Event Chauffeur": {
    title: "Event Chauffeur",
    description: "Tailored chauffeur service for weddings, family functions, and celebrations.",
    baseFare: 699,
    nightBaseFare: 899,
    ratePerHour: 140,
    nightRatePerHour: 180,
    ratePerKm: 10,
    convenienceCharge: "Event Host Chauffeur",
    includedDuration: "4 hrs included",
  },
};

export interface PriceListRow {
  service: string;
  day: {
    basePrice: string;
    perHour: string;
    convenienceCharge: string;
  };
  night: {
    basePrice: string;
    perHour: string;
    convenienceCharge: string;
  };
}

/** Official price list matching the Driv A Long PDF Document */
export const OFFICIAL_PRICE_LIST: PriceListRow[] = [
  {
    service: "Round Trip",
    day: {
      basePrice: "₹299",
      perHour: "+₹129",
      convenienceCharge: "Nil",
    },
    night: {
      basePrice: "₹399",
      perHour: "+₹169",
      convenienceCharge: "Nil",
    },
  },
  {
    service: "One Way Trip",
    day: {
      basePrice: "₹299",
      perHour: "+₹129",
      convenienceCharge: "₹8 /km after 8 km",
    },
    night: {
      basePrice: "₹399",
      perHour: "+₹169",
      convenienceCharge: "₹16 /km after 5 km",
    },
  },
  {
    service: "Outstation Trip (Inside Kerala)",
    day: {
      basePrice: "₹299",
      perHour: "+₹129",
      convenienceCharge: "For One Way: ₹499–999",
    },
    night: {
      basePrice: "₹399",
      perHour: "+₹169",
      convenienceCharge: "For One Way: ₹999–1499",
    },
  },
  {
    service: "Outstation Trip (Outside Kerala)",
    day: {
      basePrice: "₹299",
      perHour: "+₹129",
      convenienceCharge: "For One Way: ₹999–1499",
    },
    night: {
      basePrice: "₹399",
      perHour: "+₹169",
      convenienceCharge: "For One Way: ₹1499–1999",
    },
  },
  {
    service: "Full Day Chauffeur",
    day: {
      basePrice: "₹1699 (12 hrs)",
      perHour: "+₹169",
      convenienceCharge: "Nil",
    },
    night: {
      basePrice: "₹2199 (12 hrs)",
      perHour: "+₹219",
      convenienceCharge: "Nil",
    },
  },
];

export const OFFICIAL_PRICE_NOTES = [
  "Base Fare: Chauffeur service starts from ₹299, as applicable to the selected service.",
  "Additional Hours: After the included/base duration, ₹129 (Day) / ₹169 (Night) will be charged for every additional hour.",
  "Convenience Fee: A convenience fee is applicable per trip, except for Round Trip bookings.",
  "Night Charges: Additional charges apply for services during designated night-duty hours (Base: ₹399, +₹169/hr or +₹219/hr).",
  "Outstation: Driver allowance, food/accommodation or other applicable outstation expenses should be clearly communicated at booking.",
  "Cancellation: Cancellation charges may apply depending on the time of cancellation and driver allocation status.",
  "Final Fare: The final amount depends on the actual service duration and any applicable additional charges.",
  "Rate Revision: Driv A Long Private Limited reserves the right to revise its pricing; applicable charges will be communicated to the customer when the booking is confirmed.",
];

export interface FareBreakdown {
  baseFare: number;
  distanceKm: number;
  durationMinutes: number;
  ratePerKm: number;
  ratePerHour: number;
  distanceCharge: number;
  timeCharge: number;
  totalFare: number;
}

/**
 * Calculates the fare for Chauffeur Services.
 */
export function calculateFare(
  distanceKm: number = 0,
  durationMinutes: number = 60,
  serviceType: ServiceType = "Round-Trip Chauffeur"
): FareBreakdown {
  const service = CHAUFFEUR_SERVICES[serviceType] || CHAUFFEUR_SERVICES["Round-Trip Chauffeur"];
  const safeDistance = Math.max(0, distanceKm || 0);
  const safeDuration = Math.max(0, durationMinutes || 60);

  const baseFare = service.baseFare;
  const ratePerKm = service.ratePerKm;
  const ratePerHour = service.ratePerHour;

  const distanceCharge = Math.round(safeDistance * ratePerKm);
  const timeCharge = Math.round((safeDuration / 60) * ratePerHour);
  const totalFare = Math.round(baseFare + distanceCharge + timeCharge);

  return {
    baseFare,
    distanceKm: Math.round(safeDistance * 10) / 10,
    durationMinutes: Math.round(safeDuration),
    ratePerKm,
    ratePerHour,
    distanceCharge,
    timeCharge,
    totalFare,
  };
}

/** Formats duration in minutes to a human-readable label */
export function formatDuration(minutes: number): string {
  const total = Math.max(0, Math.round(minutes || 0));
  const h = Math.floor(total / 60);
  const m = total % 60;
  if (h <= 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

/** Formats ETA timestamp */
export function formatEta(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  if (Number.isNaN(d.getTime())) return "—";
  return d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

/** Computes ETA Date */
export function computeEtaDate(durationMinutes: number, from: Date = new Date()): Date {
  return new Date(from.getTime() + Math.max(0, durationMinutes || 0) * 60_000);
}

/** Formats currency amount */
export function formatCurrency(amount: number): string {
  return `₹${Math.round(amount).toLocaleString("en-IN")}`;
}

/** Haversine offline distance computation */
export function computeHaversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c * 1.3 * 10) / 10;
}
