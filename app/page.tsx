'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-6 sm:py-10 space-y-6">
      
      {/* ROW 1: HERO & PHOTO WIDGET */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* HERO INTRO CARD */}
        <div className="md:col-span-8 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400">
                Available for PM &amp; Operations Roles
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl text-slate-100 font-semibold tracking-tight leading-tight">
              Operational Strategy &amp; Systems Architecture.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              I turn complex, chaotic workflows into clear, repeatable execution engines. Bridging project governance, human systems, and modern digital tools.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800/60">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-white shadow-md"
            >
              <span>Explore Projects</span>
              <span>→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-800/50 px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              <span>Read Notes Dossier</span>
            </Link>
          </div>
        </div>

        {/* PHOTO WIDGET */}
        <div className="group md:col-span-4 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-4 flex flex-col items-center justify-between relative overflow-hidden shadow-xl transition-all duration-300 hover:border-slate-700">
          <div className="relative aspect-[4/5] w-full rounded-2xl border border-slate-800/90 overflow-hidden bg-slate-950/80 shadow-inner">
            <img
              src="/tanza.jpg"
              alt="Tanza Taylor"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="w-full flex items-center justify-between pt-3 px-1 text-slate-300">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold">
              Tanza Taylor
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/90 px-2.5 py-0.5 text-[10px] font-mono text-slate-400">
              Atlanta, GA
            </span>
          </div>
        </div>

      </div>

      {/* ROW 2: 3-PILLAR OPERATING SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-5 space-y-2">
          <div className="text-amber-400 font-mono text-xs font-semibold">01 / STRUCTURE</div>
          <h2 className="text-sm font-semibold text-slate-100">Scope &amp; Governance</h2>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Deconstructing ambiguous mandates into Work Breakdown Structures, clear scope boundaries, and risk registers.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-5 space-y-2">
          <div className="text-emerald-400 font-mono text-xs font-semibold">02 / EXECUTION</div>
          <h2 className="text-sm font-semibold text-slate-100">Schedule &amp; Critical Path</h2>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Managing dependencies, vendor milestones, and cross-functional teams to eliminate bottlenecks and guarantee delivery.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-5 space-y-2">
          <div className="text-sky-400 font-mono text-xs font-semibold">03 / SYSTEMS</div>
          <h2 className="text-sm font-semibold text-slate-100">Process &amp; Automation</h2>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            Connecting tools and operational SOPs to eliminate manual busywork and give leadership transparent reporting.
          </p>
        </div>
      </div>

      {/* ROW 3: ACTIVE BLUEPRINTS & EXPERIENCE LEDGER SHORTCUT */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* ACTIVE MODULES WIDGET */}
        <div className="md:col-span-7 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
              Active Production Blueprints
            </span>
            <Link href="/projects" className="text-[11px] text-emerald-400 hover:text-emerald-300 font-medium">
              View All 3 →
            </Link>
          </div>

          <div className="space-y-2.5">
            <Link
              href="/projects/treat-truck"
              className="flex items-center justify-between p-3 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:bg-slate-800/40 transition group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">🚚</span>
                <div>
                  <h3 className="text-xs font-medium text-slate-200 group-hover:text-emerald-300 transition">
                    Lilac Treat Truck
                  </h3>
                  <p className="text-[10px] text-slate-500 font-light">35-page WBS &amp; unit margin governance</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">v1.4 →</span>
            </Link>

            <Link
              href="/projects/auracare-lite"
              className="flex items-center justify-between p-3 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:bg-slate-800/40 transition group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">🛡️</span>
                <div>
                  <h3 className="text-xs font-medium text-slate-200 group-hover:text-cyan-300 transition">
                    AuraCare Lite
                  </h3>
                  <p className="text-[10px] text-slate-500 font-light">Zero-friction medical emergency alert UI</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">v2.0 →</span>
            </Link>

            <Link
              href="/projects/soul-table"
              className="flex items-center justify-between p-3 rounded-xl border border-slate-800/60 bg-slate-950/40 hover:bg-slate-800/40 transition group"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">🍽️</span>
                <div>
                  <h3 className="text-xs font-medium text-slate-200 group-hover:text-amber-300 transition">
                    The Soul Table
                  </h3>
                  <p className="text-[10px] text-slate-500 font-light">10-section web architecture &amp; QA checklist</p>
                </div>
              </div>
              <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-300">v1.0 →</span>
            </Link>
          </div>
        </div>

        {/* CAREER LEDGER CALLOUT */}
        <div className="md:col-span-5 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Career History
              </span>
              <span className="text-[10px] font-mono text-slate-500">Apple Wallet Stack</span>
            </div>
            <h3 className="font-serif text-lg text-slate-100 font-semibold mt-4">
              Operational Proof in the Field
            </h3>
            <p className="text-xs text-slate-400 font-light leading-relaxed mt-2">
              From reducing training overhead across multi-unit retail to coordinating insurance and fitness operations, inspect real framework deliverables.
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/experience"
              className="w-full flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800/80 py-2.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700 hover:text-white"
            >
              <span>Inspect Experience Wallet</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>

    </main>
  );
}
