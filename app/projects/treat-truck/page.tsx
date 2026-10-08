import Link from 'next/link';

export default function TreatTruckPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 lg:py-20 text-slate-200">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition mb-8"
      >
        ← Back to Projects
      </Link>

      <div className="border-b border-slate-800 pb-8">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">
          Case Study 01 // Operations & Finance
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-100 font-bold">
          The Treat Truck
        </h1>
        <p className="mt-2 text-lg text-slate-400 font-light">
          Mobile Retail Feasibility Study, Scope Baseline & 3-Year Pro Forma Model
        </p>
      </div>

      {/* METRICS STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-slate-800/80 font-mono text-center">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">$84,500</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">CapEx Baseline</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">14 Mo.</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Payback Period</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">62%</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Gross Margin</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">100%</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">WBS Coverage</div>
        </div>
      </section>

      {/* CORE CONTENT */}
      <section className="py-10 space-y-10">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            01 / Executive Summary & Scope Baseline
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Formulated an operational launch strategy for a mobile confectionary unit. Designed a comprehensive Work Breakdown Structure (WBS) spanning municipal permitting, equipment retrofitting, supply chain sourcing, and merchant POS operations.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            02 / Work Breakdown Structure (WBS)
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4 font-mono text-xs">
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">1.0</span>
              <div>
                <strong className="text-slate-200">Regulatory & Permitting:</strong> Health inspection certification, fire safety clearance, and mobile vendor licensing across target transit zones.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">2.0</span>
              <div>
                <strong className="text-slate-200">Capital Asset Procurement:</strong> Vehicle retrofit, refrigeration installations, generator backup, and POS terminal integration.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">3.0</span>
              <div>
                <strong className="text-slate-200">Inventory & Vendor Management:</strong> Supplier SLA establishment, bulk pricing renegotiation thresholds, and perishables tracking log.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">4.0</span>
              <div>
                <strong className="text-slate-200">Launch & Go-Live Controls:</strong> Route optimization algorithm test, event-based surge schedule, and day-to-day cash drawer balancing procedures.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            03 / Key Deliverables & Documentation
          </h2>
          <ul className="space-y-3 font-mono text-xs">
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">3-Year Financial Model & Pro Forma (.xlsx)</span>
              <span className="text-emerald-400">Scope Verified</span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">Level-3 Work Breakdown Structure & Dictionary</span>
              <span className="text-emerald-400">Complete</span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">Route Feasibility & Foot-Traffic Variance Matrix</span>
              <span className="text-emerald-400">Documented</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
