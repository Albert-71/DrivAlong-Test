import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sun, Moon, CheckCircle2, ShieldCheck, ArrowRight, FileText, Info } from "lucide-react";
import { OFFICIAL_PRICE_LIST, OFFICIAL_PRICE_NOTES } from "@/lib/pricing";

export function PriceListTable({ showHeader = true }: { showHeader?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<"all" | "day" | "night">("all");

  return (
    <div className="w-full space-y-8">
      {showHeader && (
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold text-primary">
            <FileText className="h-3.5 w-3.5" /> Official Driv A Long Price List
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Transparent Day & Night Chauffeur Rates
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-muted-foreground">
            Official tariff for Round Trip, One Way, Outstation (Inside & Outside Kerala), and Full Day chauffeur bookings.
          </p>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-1.5 rounded-2xl bg-muted p-1 text-xs font-semibold">
          <button
            onClick={() => setActiveFilter("all")}
            className={`rounded-xl px-4 py-2 transition cursor-pointer ${
              activeFilter === "all" ? "bg-background text-foreground shadow-soft font-bold" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All Rates (Day & Night)
          </button>
          <button
            onClick={() => setActiveFilter("day")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 transition cursor-pointer ${
              activeFilter === "day" ? "bg-amber-500/10 text-amber-700 dark:text-amber-300 shadow-soft font-bold border border-amber-500/30" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sun className="h-3.5 w-3.5 text-amber-500" /> Day Duty (Starts ₹299)
          </button>
          <button
            onClick={() => setActiveFilter("night")}
            className={`inline-flex items-center gap-1.5 rounded-xl px-4 py-2 transition cursor-pointer ${
              activeFilter === "night" ? "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 shadow-soft font-bold border border-indigo-500/30" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Moon className="h-3.5 w-3.5 text-indigo-500" /> Night Duty (Starts ₹399)
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                <th className="py-4 px-4 sm:px-6">Type of Trip</th>
                {(activeFilter === "all" || activeFilter === "day") && (
                  <>
                    <th className="py-4 px-4 bg-amber-500/5 text-amber-700 dark:text-amber-300">
                      <span className="flex items-center gap-1">
                        <Sun className="h-3.5 w-3.5 text-amber-500" /> Day Base Price (1st hr / 12h)
                      </span>
                    </th>
                    <th className="py-4 px-4 bg-amber-500/5 text-amber-700 dark:text-amber-300">Day Per Hour</th>
                    <th className="py-4 px-4 bg-amber-500/5 text-amber-700 dark:text-amber-300">Day Convenience Charge</th>
                  </>
                )}
                {(activeFilter === "all" || activeFilter === "night") && (
                  <>
                    <th className="py-4 px-4 bg-indigo-500/5 text-indigo-700 dark:text-indigo-300">
                      <span className="flex items-center gap-1">
                        <Moon className="h-3.5 w-3.5 text-indigo-500" /> Night Base Price (1st hr / 12h)
                      </span>
                    </th>
                    <th className="py-4 px-4 bg-indigo-500/5 text-indigo-700 dark:text-indigo-300">Night Per Hour</th>
                    <th className="py-4 px-4 bg-indigo-500/5 text-indigo-700 dark:text-indigo-300">Night Convenience Charge</th>
                  </>
                )}
                <th className="py-4 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {OFFICIAL_PRICE_LIST.map((row, idx) => (
                <tr key={idx} className="hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-bold text-foreground">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>{row.service}</span>
                    </div>
                  </td>

                  {(activeFilter === "all" || activeFilter === "day") && (
                    <>
                      <td className="py-4 px-4 font-mono font-bold text-amber-700 dark:text-amber-300 bg-amber-500/5">
                        {row.day.basePrice}
                      </td>
                      <td className="py-4 px-4 font-semibold text-foreground bg-amber-500/5">
                        {row.day.perHour}
                      </td>
                      <td className="py-4 px-4 font-medium text-muted-foreground bg-amber-500/5">
                        {row.day.convenienceCharge === "Nil" ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Nil
                          </span>
                        ) : (
                          row.day.convenienceCharge
                        )}
                      </td>
                    </>
                  )}

                  {(activeFilter === "all" || activeFilter === "night") && (
                    <>
                      <td className="py-4 px-4 font-mono font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-500/5">
                        {row.night.basePrice}
                      </td>
                      <td className="py-4 px-4 font-semibold text-foreground bg-indigo-500/5">
                        {row.night.perHour}
                      </td>
                      <td className="py-4 px-4 font-medium text-muted-foreground bg-indigo-500/5">
                        {row.night.convenienceCharge === "Nil" ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Nil
                          </span>
                        ) : (
                          row.night.convenienceCharge
                        )}
                      </td>
                    </>
                  )}

                  <td className="py-4 px-4 text-center">
                    <Link
                      to="/book"
                      className="inline-flex items-center gap-1 rounded-xl bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground shadow-soft hover:brightness-110 active:scale-98 transition"
                    >
                      <span>Book</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Notes & Signatory Box */}
        <div className="border-t border-border bg-subtle p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
            <Info className="h-4 w-4 text-primary" /> Official Pricing Notes & Terms
          </div>

          <ol className="grid gap-2 sm:grid-cols-2 text-xs text-muted-foreground list-decimal list-inside leading-relaxed">
            {OFFICIAL_PRICE_NOTES.map((note, nIdx) => (
              <li key={nIdx} className="space-x-1">
                <span className="text-foreground font-medium">{note}</span>
              </li>
            ))}
          </ol>

          <div className="border-t border-border/80 pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>
                Authorized Signatory: <strong className="text-foreground">Sajay P M</strong> · Operations Manager, For Driv A Long Private Limited
              </span>
            </div>
            <div className="font-mono text-[11px] text-primary font-bold">
              WhatsApp Support: +91 7306605416
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
