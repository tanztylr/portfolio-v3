import Link from 'next/link';

export default function SoulTablePage() {
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
          Case Study 03 // Web Production & Community Operations
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-100 font-bold">
          The Soul Table
        </h1>
        <p className="mt-2 text-lg text-slate-400 font-light">
          Homepage Prototype, Reservation Architecture & Community Operations
        </p>
      </div>

      {/* METRICS STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-slate-800/80 font-mono text-center">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">Figma</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Hi-Fi Prototype</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">Web3Forms</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Form Pipeline</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">100%</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Async Booking</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">Zero-Code</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Ops Handoff</div>
        </div>
      </section>

      {/* CORE CONTENT */}
      <section className="py-10 space-y-10">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            01 / Strategic Context
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Designed and managed the web digital presence for The Soul Table, an initiative uniting culinary heritage, roots, and storytelling. Created end-to-end workflows connecting digital reservation inquiry forms directly into operational triage spreadsheets.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            02 / Operations Pipeline Architecture
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4 font-mono text-xs">
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">STEP 1</span>
              <div>
                <strong className="text-slate-200">UX Layout & Figma Wireframing:</strong> Built accessible typographic hierarchies honoring the culinary narrative.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">STEP 2</span>
              <div>
                <strong className="text-slate-200">Inquiry Endpoint Integration:</strong> Integrated Web3Forms API to process reservations directly into client triage channels.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">STEP 3</span>
              <div>
                <strong className="text-slate-200">Client Handoff & Governance:</strong> Provided clear maintenance documentation for ongoing menu and event updates.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            03 / Key Artifacts
          </h2>
          <ul className="space-y-3 font-mono text-xs">
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">Figma Design System & Interactive Prototype</span>
              <span className="text-emerald-400">Shipped</span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">Web3Forms Reservation Integration Workflow</span>
              <span className="text-emerald-400">Active</span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">Stakeholder Standard Operating Procedure (SOP)</span>
              <span className="text-emerald-400">Delivered</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}