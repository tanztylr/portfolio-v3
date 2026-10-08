import Link from 'next/link';

export default function TreatTruckPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 lg:py-20 text-slate-200">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition mb-8"
      >
        ← Back to Projects
      </Link>

      {/* HEADER */}
      <header className="border-b border-slate-800/80 pb-8">
        <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
          Case Study 01 · Operations &amp; Financial Management
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-100 font-semibold tracking-tight">
          Lilac Treat Truck
        </h1>
        <p className="mt-3 text-lg text-slate-400 leading-relaxed max-w-2xl">
          Mobile Retail Feasibility Study, Scope Baseline &amp; 3-Year Financial Model
        </p>
      </header>

      {/* 3-COLUMN METADATA BAR */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-slate-800/80 text-xs">
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Role</span>
          <span className="text-slate-200 font-medium mt-1 block">Project Manager &amp; Financial Analyst</span>
        </div>
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Tools</span>
          <span className="text-slate-200 font-medium mt-1 block">Excel / Spreadsheets, WBS Frameworks, Pro Forma Modeling</span>
        </div>
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Focus</span>
          <span className="text-slate-200 font-medium mt-1 block">Financial Modeling, Unit Costing &amp; Operational Roadmaps</span>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="py-10 space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            Overview
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            A comprehensive 35-page project management plan and dynamic financial model engineered to transition a mobile food and beverage business concept from initial ideation to structured market execution.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            The Challenge
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            Mobile retail ventures face high early mortality rates caused by unaccounted upfront CapEx, inventory shrinkage, and miscalculated daily unit economics. The project objective was to construct an operational plan and dynamic financial model to prove viability before committing startup capital.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Scope &amp; Execution
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Project Scope &amp; Work Breakdown Structure</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Mapped every deployment phase across municipal health permitting, commercial vehicle outfitting, vendor supply chain sourcing, and point-of-sale workflow architecture.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Financial Modeling &amp; Unit Costing</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Calculated accurate cost-of-goods-sold (COGS) at the individual menu item tier, modeled break-even volume targets, and structured projected monthly rolling cash flow statements.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Operational Risk &amp; Mitigation Planning</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Identified operational failure modes—including supply chain interruptions, mechanical maintenance contingencies, and zoning variances—and established actionable response protocols.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Key Deliverables
          </h2>
          <ul className="divide-y divide-slate-800/80 rounded-xl border border-slate-800 bg-slate-900/20 text-xs">
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Complete Project Management Plan (35 Pages)</span>
              <span className="text-slate-400">Baseline</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Dynamic Financial Model &amp; Unit Costing Workbook</span>
              <span className="text-slate-400">Complete</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Work Breakdown Structure (WBS) &amp; Execution Timeline</span>
              <span className="text-slate-400">Validated</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Operational Risk Register &amp; Contingency Strategy</span>
              <span className="text-slate-400">Integrated</span>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
            Impact &amp; Key Takeaway
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Transformed a high-level creative concept into an investor-ready roadmap, demonstrating cost transparency, schedule baselines, and practical financial viability.
          </p>
        </section>
      </div>
    </main>
  );
}
