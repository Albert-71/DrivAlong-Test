import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, RefreshCw, Award, Plane, Shield, Building2, PartyPopper, Navigation, ArrowRight } from "lucide-react";
import { PriceListTable } from "@/components/pricing/PriceListTable";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Chauffeur Services & Official Pricing — Driv A Long Private Limited" },
      { name: "description", content: "Hire professional drivers on demand for your vehicle. Official transparent rates for Round Trip, One Way, Outstation, and Full Day chauffeur services." },
      { property: "og:title", content: "Chauffeur Rental Services & Rates — Driv A Long Private Limited" },
      { property: "og:description", content: "Transparent day & night chauffeur pricing starting from ₹299." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Compass, title: "One-Way Chauffeur", desc: "Single point-to-point trip in your personal car.", price: "Day: ₹299 · Night: ₹399", sub: "+₹129/hr" },
  { icon: RefreshCw, title: "Round-Trip Chauffeur", desc: "Two-way driver service for return journeys and errands.", price: "Day: ₹299 · Night: ₹399", sub: "+₹129/hr · No conv. fee" },
  { icon: Navigation, title: "Outstation Trip (Inside Kerala)", desc: "Experienced highway driver for trips anywhere inside Kerala state.", price: "Day: ₹299 · Night: ₹399", sub: "+₹129/hr · One-way fee ₹499–999" },
  { icon: Navigation, title: "Outstation Trip (Outside Kerala)", desc: "Verified long-distance chauffeur for interstate travel outside Kerala.", price: "Day: ₹299 · Night: ₹399", sub: "+₹129/hr · One-way fee ₹999–1499" },
  { icon: Award, title: "Full-Day Chauffeur", desc: "Dedicated driver for 12 hours of driving.", price: "Day: ₹1,699 · Night: ₹2,199", sub: "12 hours included" },
  { icon: Plane, title: "Airport Chauffeur", desc: "Airport pickup or drop-off service in your vehicle.", price: "From ₹499", sub: "Fixed Transfer Standard" },
  { icon: Shield, title: "Designated Driver", desc: "Safe drive home service after parties & nightlife.", price: "From ₹399", sub: "Night Duty Service" },
  { icon: Building2, title: "Corporate Chauffeur", desc: "Executive chauffeurs for business meetings and VIPs.", price: "From ₹799", sub: "Executive Standard" },
  { icon: PartyPopper, title: "Event Chauffeur", desc: "Chauffeur service for weddings & special occasions.", price: "From ₹699", sub: "Event Host Standard" },
];

function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#061847] via-[#0B2D7A] to-[#041235] py-20 text-center text-white relative overflow-hidden">
        <div className="container-px mx-auto max-w-4xl relative z-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F4B400]">
            CHAUFFEUR CATALOGUE & TARIFF
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Your driver. Your car.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-blue-100/80 font-normal leading-relaxed">
            Verified, experienced chauffeurs who drive your personal or executive vehicle on demand — with 100% transparent day and night tariff.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-px mx-auto max-w-7xl space-y-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl border border-border/80 bg-background p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card-hover flex flex-col justify-between">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition group-hover:bg-primary/10" />
                <div>
                  <s.icon className="h-8 w-8 text-primary" strokeWidth={1.8} />
                  <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
                <div className="mt-6 border-t border-border/60 pt-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-primary block">{s.price}</span>
                    <span className="text-[10px] text-muted-foreground font-medium block">{s.sub}</span>
                  </div>
                  <Link to="/book" className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-soft hover:brightness-110 active:scale-98">
                    Book <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Full Official Tariff Section */}
          <div className="border-t border-border/70 pt-8">
            <PriceListTable showHeader={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
