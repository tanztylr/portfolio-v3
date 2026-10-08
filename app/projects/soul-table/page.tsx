import Link from 'next/link';

export default function SoulTablePage() {
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
          Case Study 03 · Web Architecture &amp; PM Governance
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-100 font-semibold tracking-tight">
          The Soul Table
        </h1>
        <p className="mt-3 text-lg text-slate-400 leading-relaxed max-w-2xl">
          Digital Infrastructure Strategy, Pop-Up Booking &amp; Experience Architecture
        </p>
      </header>

      {/* 3-COLUMN METADATA BAR */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-slate-800/80 text-xs">
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Role</span>
          <span className="text-slate-200 font-medium mt-1 block">Systems Architect &amp; Project Coordinator</span>
        </div>
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Tools</span>
          <span className="text-slate-200 font-medium mt-1 block">Information Architecture (IA), Feasibility Analysis, Web Specs</span>
        </div>
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Focus</span>
          <span className="text-slate-200 font-medium mt-1 block">Culinary Strategy, 10-Section Web Blueprint &amp; Governance</span>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="py-10 space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            Overview
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            An end-to-end digital infrastructure and operational governance project engineered to present cultural culinary storytelling while supporting a structured 10-section web architecture for community dining events.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            The Challenge
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            Hospitality brands frequently encounter friction when translating an intimate, narrative-driven gathering into an online reservation experience without falling back on generic, transactional booking tools. The challenge was building an architecture balancing identity with rigorous technical feasibility and launch governance.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Scope &amp; Execution
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Options &amp; Platform Feasibility Analysis</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Evaluated commercial hospitality platforms, custom CMS architectures, and lightweight static delivery pipelines to optimize hosting overhead and operational maintenance.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">10-Section Information Architecture</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Constructed complete site hierarchy wireframes, defining visitor navigation flows across the narrative hero, culinary pillars, reservation pipeline, and chef background blocks.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Launch Governance &amp; QA Checklists</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Established deployment timelines, asset ingestion protocols, cross-browser quality assurance procedures, and reservation triage workflows.
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
              <span>Technical Stack Options Analysis Document</span>
              <span className="text-slate-400">Complete</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>10-Section Web Architecture &amp; Wireframe Blueprint</span>
              <span className="text-slate-400">Validated</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Brand Direction &amp; Content Management Guidelines</span>
              <span className="text-slate-400">Documented</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Website Launch &amp; QA Operations Checklist</span>
              <span className="text-slate-400">Operational</span>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
            Impact &amp; Key Takeaway
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Created an operational blueprint proving how narrative-driven hospitality ventures can deploy a scalable digital architecture backed by reliable project management governance.
          </p>
        </section>
      </div>
    </main>
  );
}
