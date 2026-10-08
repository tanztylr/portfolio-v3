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
          Case Study 01 · Operations &amp; Project Governance
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-100 font-semibold tracking-tight">
          Lilac Treat Truck
        </h1>
        <p className="mt-3 text-lg text-slate-400 leading-relaxed max-w-2xl">
          Multi-Phase Operational Deployment, Scope Baseline &amp; Vendor Governance
        </p>
      </header>

      {/* 3-COLUMN METADATA BAR */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-slate-800/80 text-xs">
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Role</span>
          <span className="text-slate-200 font-medium mt-1 block">Project Manager &amp; Operations Lead</span>
        </div>
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Methodologies</span>
          <span className="text-slate-200 font-medium mt-1 block">Work Breakdown Structure (WBS), Critical Path, Risk Governance</span>
        </div>
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Domain</span>
          <span className="text-slate-200 font-medium mt-1 block">Mobile Retail Infrastructure, Vendor Logistics, Permitting</span>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="py-10 space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            Operational Context
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            Launching a mobile retail venture requires orchestrating interdependent work streams under rigid municipal compliance guidelines. The objective was to design a comprehensive project management architecture—transforming an ambiguous retail launch into an operational roadmap with clear accountability and schedule controls.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            The Operational Challenge
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            Mobile food operations frequently stall due to mismanaged vendor handoffs, unpredictable equipment fabrication timelines, and delayed municipal health inspections. Without clear governance, scope creep across vehicle retrofitting and decentralized inventory tracking introduces project delays and schedule slippage.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Project Governance &amp; Execution
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">1. Work Breakdown Structure (WBS) &amp; Scope Baseline</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Deconstructed the launch lifecycle into five core work packages: Municipal Regulatory &amp; Permitting, Custom Commercial Outfitting, Supply Chain &amp; Inventory Systems, POS &amp; Merchant Infrastructure, and On-Site Operating Procedures. Defined acceptance criteria for each package to prevent unapproved scope creep.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">2. Critical Path &amp; Vendor Schedule Management</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Identified critical path bottlenecks—specifically mechanical retrofitting lead times and city health board review windows. Established buffer schedules and weekly vendor milestone checks to protect the go-live target.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">3. Operational Risk &amp; Change Control</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Maintained an operational risk register covering vendor equipment delays, severe weather disruptions, and cold-chain compliance failures. Implemented a change request protocol requiring formal impact assessments before adjusting baseline specifications.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Key Governance Deliverables
          </h2>
          <ul className="divide-y divide-slate-800/80 rounded-xl border border-slate-800 bg-slate-900/20 text-xs">
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Project Charter &amp; Stakeholder Accountability Matrix</span>
              <span className="text-slate-400">Baseline Approved</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Comprehensive WBS Dictionary &amp; Work Package Scope</span>
              <span className="text-slate-400">Validated</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Critical Path Deployment Schedule &amp; Milestone Roadmap</span>
              <span className="text-slate-400">Structured</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Risk Management Plan &amp; Formal Change Control Workflow</span>
              <span className="text-slate-400">Active Register</span>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
            Outcome &amp; Operational Takeaway
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Replaced unorganized ad-hoc planning with a rigorous operations management framework. By maintaining clear scope definitions, monitoring the critical path, and enforcing vendor accountability, the project established a predictable operational model ready for multi-location scaling.
          </p>
        </section>
      </div>
    </main>
  );
}
