import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { PriceListTable } from "@/components/pricing/PriceListTable";
import {
  FileText,
  Clock,
  Moon,
  Compass,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  ReceiptText,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/pricing-terms")({
  head: () => ({
    meta: [
      { title: "Official Pricing Notes & Terms — Driv A Long Private Limited" },
      {
        name: "description",
        content:
          "Official tariff, Day & Night chauffeur rate cards, additional hour rates, convenience fees, and outstation policies for Driv A Long Private Limited.",
      },
      { property: "og:title", content: "Official Pricing Notes & Terms — Driv A Long Private Limited" },
      {
        property: "og:description",
        content:
          "Transparent Day & Night chauffeur rates starting from ₹299. Complete tariff notes, convenience fees, and outstation guidelines.",
      },
    ],
  }),
  component: PricingTermsPage,
});

export function PricingTermsPage() {
  return (
    <LegalLayout
      title="Official Pricing Notes & Terms"
      subtitle="Transparent Day & Night Chauffeur Tariff, Fare Computation, and Policy Notes"
      activeTab="pricing"
    >
      <div className="space-y-8 text-sm">
        {/* Document Header Metadata */}
        <div className="border-b border-border pb-6 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
            <span>
              Corporate Identification Number:{" "}
              <strong className="text-foreground">U52291KL2026PTC104826</strong>
            </span>
            <span className="rounded-full bg-blue-500/10 px-3 py-1 font-semibold text-blue-600">
              Effective: October 2026
            </span>
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4 text-xs text-foreground leading-relaxed">
            This Official Pricing Notes & Terms document sets out the transparent tariff structure, applicable
            Day and Night rates, convenience charges, and terms governing all chauffeur services arranged by{" "}
            <strong>Driv A Long Private Limited</strong>. It forms an integral part of the{" "}
            <Link to="/terms-of-service" className="text-primary font-semibold underline">
              Driv A Long User Terms and Conditions
            </Link>{" "}
            and should be read alongside the{" "}
            <Link to="/refund-policy" className="text-primary font-semibold underline">
              Refund & Cancellation Policy
            </Link>
            .
          </div>
        </div>

        {/* Section 1: Official Rate Card Table */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <ReceiptText className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">1. OFFICIAL CHAUFFEUR TARIFF & RATE CARD</h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            The table below reflects the official tariff approved by Driv A Long Private Limited for customer car
            chauffeur services across Kerala and inter-state journeys.
          </p>

          <div className="rounded-3xl border border-border bg-card p-2 sm:p-4 shadow-soft">
            <PriceListTable showHeader={false} />
          </div>
        </section>

        {/* Section 2: Comprehensive Pricing Notes & Rules */}
        <section className="space-y-6 pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-bold text-foreground">2. DETAILED PRICING NOTES & CONDITIONS</h2>
          </div>

          <div className="space-y-4">
            {/* Note 1: Base Fare */}
            <div className="rounded-2xl border border-border bg-subtle/50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                <CheckCircle2 className="h-4 w-4" />
                <span>2.1 Base Fare Structure</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Chauffeur service starts from <strong className="text-foreground">₹299</strong> for Day duty and{" "}
                <strong className="text-foreground">₹399</strong> for Night duty, as applicable to the selected
                service category. For <em>Full Day Chauffeur</em>, the base fare is{" "}
                <strong className="text-foreground">₹1,699</strong> (Day) and{" "}
                <strong className="text-foreground">₹2,199</strong> (Night), which includes a standard 12-hour
                duty block.
              </p>
            </div>

            {/* Note 2: Additional Hours */}
            <div className="rounded-2xl border border-border bg-subtle/50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                <Clock className="h-4 w-4" />
                <span>2.2 Additional Hours Calculation</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                After the included initial duration (1st hour for standard trips, or 12 hours for Full Day bookings), an
                additional charge of <strong className="text-foreground">₹129/hour (Day)</strong> or{" "}
                <strong className="text-foreground">₹169/hour (Night)</strong> will apply for every subsequent hour or
                part thereof. For Full-Day overtime duty, additional hours are billed at{" "}
                <strong className="text-foreground">₹169/hr (Day)</strong> and{" "}
                <strong className="text-foreground">₹219/hr (Night)</strong>.
              </p>
            </div>

            {/* Note 3: Convenience Fee */}
            <div className="rounded-2xl border border-border bg-subtle/50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                <MapPin className="h-4 w-4" />
                <span>2.3 Convenience Charge & Return Allowance</span>
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed space-y-1.5">
                <p>
                  A convenience fee is applicable per trip to facilitate the driver partner’s return transit, with
                  the explicit exception of <strong className="text-foreground">Round Trip bookings (Nil convenience fee)</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Round Trip:</strong> <span className="text-emerald-600 font-bold">Nil / Free</span> (driver returns with the vehicle).
                  </li>
                  <li>
                    <strong>One-Way Trip (Day):</strong> ₹8 per km after 8 km from the pickup origin.
                  </li>
                  <li>
                    <strong>One-Way Trip (Night):</strong> ₹16 per km after 5 km from the pickup origin.
                  </li>
                  <li>
                    <strong>Outstation Trip (Inside Kerala):</strong> ₹499–999 (Day) · ₹999–1499 (Night) one-way return allowance.
                  </li>
                  <li>
                    <strong>Outstation Trip (Outside Kerala):</strong> ₹999–1499 (Day) · ₹1499–1999 (Night) inter-state return allowance.
                  </li>
                </ul>
              </div>
            </div>

            {/* Note 4: Night Charges */}
            <div className="rounded-2xl border border-border bg-subtle/50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wide">
                <Moon className="h-4 w-4" />
                <span>2.4 Night-Duty Charges & Schedule</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Services operating during designated night hours (typically between 10:00 PM and 06:00 AM) are billed
                under the Night Tariff. The base fare starts at <strong className="text-foreground">₹399</strong> with
                an hourly rate of <strong className="text-foreground">+₹169/hr</strong> (+₹219/hr for Full Day duty) to
                compensate driver partners for night-time transit safety and late-night return arrangements.
              </p>
            </div>

            {/* Note 5: Outstation Expenses */}
            <div className="rounded-2xl border border-border bg-subtle/50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                <Compass className="h-4 w-4" />
                <span>2.5 Outstation Trips & Driver Allowances</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                For multi-day or overnight outstation journeys inside or outside Kerala, driver food, accommodation,
                and applicable inter-state permit/toll expenses (where not settled directly by the vehicle owner)
                must be clearly agreed upon and communicated at the time of booking confirmation.
              </p>
            </div>

            {/* Note 6: Cancellation */}
            <div className="rounded-2xl border border-border bg-subtle/50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <span>2.6 Cancellation & Driver Allocation</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Cancellation charges may apply depending on the timing of cancellation and the driver allocation status,
                in strict compliance with our{" "}
                <Link to="/refund-policy" className="text-primary font-semibold underline">
                  Refund & Cancellation Policy
                </Link>
                . Cancellations made within 2 minutes of driver allotment or resulting from driver delays over 10 minutes
                are strictly exempt from any cancellation fee.
              </p>
            </div>

            {/* Note 7: Final Fare Reconciliation */}
            <div className="rounded-2xl border border-border bg-subtle/50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                <ReceiptText className="h-4 w-4" />
                <span>2.7 Final Fare Determination</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The final payable amount is reconciled at trip completion based on the actual start and end timestamps,
                odometer travel distance (if applicable for one-way convenience charges), and any agreed night duty or
                waiting extensions. All details are visible to the customer and driver in the booking receipt.
              </p>
            </div>

            {/* Note 8: Rate Revision */}
            <div className="rounded-2xl border border-border bg-subtle/50 p-4 space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wide">
                <CheckCircle2 className="h-4 w-4" />
                <span>2.8 Rate Revision Policy</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Driv A Long Private Limited reserves the right to periodically revise tariff schedules. The applicable
                fare confirmed and communicated at the time of booking approval shall remain firm and binding for that
                booking.
              </p>
            </div>
          </div>
        </section>

        {/* Signatory & Corporate Endorsement */}
        <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-6 space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                Official Authorization
              </span>
              <p className="font-bold text-sm text-foreground">
                Authorized Signatory: Sajay P M
              </p>
              <p className="text-xs text-muted-foreground">
                Operations Manager · Driv A Long Private Limited
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917306605416?text=Hi%20Driv%20A%20Long,%20I%20have%20a%20pricing%20question"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-soft hover:bg-emerald-700 transition"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>WhatsApp Support (+91 7306605416)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </LegalLayout>
  );
}
