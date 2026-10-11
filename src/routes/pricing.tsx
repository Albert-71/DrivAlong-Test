import { createFileRoute } from "@tanstack/react-router";
import { PricingTermsPage } from "./pricing-terms";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Official Pricing Notes & Terms — Driv A Long Private Limited" },
      { name: "description", content: "Official transparent Day & Night tariff, rate card, and terms for Driv A Long chauffeur services." },
    ],
  }),
  component: PricingTermsPage,
});
