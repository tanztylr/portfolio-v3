import Link from 'next/link';

export default function TreatTruckPage() {
  const deliverables = [
    { label: "Role", value: "Business Intelligence & Financial Analyst" },
    { label: "Deliverables", value: "Scope Baseline, WBS, Operational Budget, Unit Economics" },
    { label: "Timeline", value: "Strategic Planning Phase" },
    { label: "Tools", value: "Excel / Sheets, Financial Modeling, Process Mapping" },
  ];

  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-slate-700">
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-24">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link href="/#work" className="text-xs font-mono text-slate-400 hover:text-slate-200 transition">
            ← Back to Featured Projects
          </Link>
        </div>

        {/* Case Study Header */}
        <header className="mb-14">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-0.5 text-xs font-mono text-slate-300">
              Financial Model
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-0.5 text-xs font-mono text-slate-300">
              Ops Strategy
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-0.5 text-xs font-mono text-slate-300">
              WBS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-slate-50">
            The Treat Truck
          </h1>
          <p className="mt-3 text-lg text-slate-400 font-sans">
            Business Intelligence & Financial Plan
          </p>
        </header>

        {/* Project Meta Strip */}
        <section className="mb-16 border-y border-slate-800/80 py-6">
          <div className="grid gap-4 sm:grid-cols-2 text-sm font-sans">
            {deliverables.map((item) => (
              <div key={item.label} className="flex items-baseline gap-2">
                <span className="text-slate-500 font-mono text-xs uppercase">{item.label}:</span>
                <span className="text-slate-200">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Challenge Section */}
        <section className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">The Challenge</p>
          <h2 className="text-2xl font-serif font-medium text-slate-100 mb-4">
            Translating Concept into Capital Viability
          </h2>
          <div className="space-y-4 text-slate-300 font-sans leading-relaxed text-base">
            <p>
              Mobile food ventures often stumble on initial operating assumptions underestimating overhead costs, fluctuating supply pricing, and labor allocation while operating without a rigorous financial baseline.
            </p>
            <p>
              The challenge was to take an initial business concept and build an audit-ready financial model, structured unit economics, and an operational Work Breakdown Structure (WBS) to evaluate long-term profitability.
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-14 border-t border-slate-800/60 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">The Solution Built</p>
          <h2 className="text-2xl font-serif font-medium text-slate-100 mb-6">
            Financial Architecture & Operational Modeling
          </h2>
          
          <div className="space-y-6">
            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Granular Unit Costing & Margins</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Modeled exact recipe costing down to individual units, factoring ingredient waste, bulk purchase variances, packaging overhead, and target gross margin thresholds.
              </p>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Operating Budget & Cash Flow Forecasts</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Constructed seasonal cash-flow projections comparing fixed operational overhead (licensing, vehicle maintenance, prep space) against variable revenue tiers.
              </p>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Work Breakdown Structure (WBS)</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Mapped every pre-launch milestone—from commercial health permits to point-of-sale configuration and supplier onboarding—into structured delivery phases.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-20 border-t border-slate-800/60 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">The Impact</p>
          <h2 className="text-2xl font-serif font-medium text-slate-100 mb-4">
            Decision-Ready Business Intelligence
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed text-base">
            Delivered an investor-ready operational package that eliminated strategic guesswork, validated break-even volume targets, and established a dependable blueprint for launch.
          </p>
        </section>

        {/* Bottom Pagination */}
        <div className="border-t border-slate-800/60 pt-12 flex justify-between items-center text-sm font-sans">
          <Link href="/#work" className="text-slate-400 hover:text-white transition">
            ← Featured Projects
          </Link>
          <Link href="/projects/auracare-lite" className="text-slate-200 hover:text-white transition font-medium">
            Next: AuraCare Lite →
          </Link>
        </div>

      </div>
    </main>
  );
}
