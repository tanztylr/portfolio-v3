import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 lg:py-12">
      {/* 3-COLUMN BENTO GRID HERO */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        
        {/* CARD 1: BIO & HERO (Spans 6 cols on desktop) */}
        <div className="md:col-span-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-8 flex flex-col justify-between shadow-xl backdrop-blur-md">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-100">
              <span className="font-bold text-white">Tanza Taylor</span> is an Operations Lead &amp; Systems Architect in <span className="font-semibold text-white">Atlanta</span>.
            </h1>

            <div className="space-y-4 text-base text-slate-300 leading-relaxed font-light">
              <p>
                I build structure out of chaos so teams can move faster. Driven by curiosity and a hands-on mindset, I design practical workflows, manage end-to-end projects, and deliver clean results.
              </p>
              <p className="text-sm text-slate-400">
                At the intersection of people, process, and technology—focusing on eliminating operational bottlenecks and turning complex goals into clear execution.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-800/60 mt-8">
            <Link
              href="/projects"
              className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
            >
              Explore Projects →
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-slate-700/80 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>

        {/* CARD 2: PHOTO WIDGET (Spans 3 cols on desktop) */}
        <div className="md:col-span-3 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-xl">
          <div className="relative aspect-[4/5] w-full rounded-2xl border border-slate-800 bg-slate-950/60 flex flex-col items-center justify-center text-center p-6">
            <div className="h-16 w-16 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-300 font-serif text-2xl mb-3 shadow-inner">
              TT
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-medium">
              Tanza Taylor
            </span>
            <span className="text-[11px] text-slate-500 mt-1">
              Photo Anchor
            </span>
          </div>
        </div>

        {/* CARD 3: CALENDAR & AVAILABILITY WIDGET (Spans 3 cols on desktop) */}
        <div className="md:col-span-3 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Status</span>
              <span className="text-xs font-mono text-emerald-400">Live</span>
            </div>

            <div className="mt-4">
              <div className="text-3xl font-bold font-mono text-slate-100">2026</div>
              <p className="text-xs text-slate-400 mt-1">Available for Q4 &amp; 2027 Roles</p>
            </div>

            <div className="mt-6 space-y-2 text-xs">
              <div className="flex justify-between text-slate-400 border-b border-slate-800/40 pb-1.5">
                <span>Focus</span>
                <span className="text-slate-200 font-medium">PM &amp; Ops</span>
              </div>
              <div className="flex justify-between text-slate-400 border-b border-slate-800/40 pb-1.5">
                <span>Location</span>
                <span className="text-slate-200 font-medium">Atlanta / Remote</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Notice</span>
                <span className="text-slate-200 font-medium">Immediate</span>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-center">
            <span className="flex items-center justify-center gap-2 text-xs font-medium text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open for Opportunities
            </span>
          </div>
        </div>

      </div>

      {/* ROW 2: NOTION/APP CARDS & SYSTEM MODULES */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5">
        
        {/* WIDGET: CORE DOMAINS (Spans 6 cols) */}
        <div className="md:col-span-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Operating System</span>
            <span className="text-xs text-slate-500">v3.1</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center">
              <div className="text-lg mb-1">📐</div>
              <h3 className="text-xs font-semibold text-slate-200">Structure</h3>
              <p className="text-[11px] text-slate-500 mt-1">WBS &amp; Scope</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center">
              <div className="text-lg mb-1">⚡</div>
              <h3 className="text-xs font-semibold text-slate-200">Execution</h3>
              <p className="text-[11px] text-slate-500 mt-1">Zero Bottlenecks</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-center">
              <div className="text-lg mb-1">⚙️</div>
              <h3 className="text-xs font-semibold text-slate-200">Systems</h3>
              <p className="text-[11px] text-slate-500 mt-1">Scalable SOPs</p>
            </div>
          </div>
        </div>

        {/* WIDGET: RECENT DELIVERABLES (Spans 6 cols) */}
        <div className="md:col-span-6 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-6 shadow-xl flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Active Modules</span>
            <Link href="/projects" className="text-xs text-slate-400 hover:text-white transition">View All →</Link>
          </div>
          <div className="space-y-2 text-xs">
            <Link href="/projects/treat-truck" className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/40 p-3 hover:border-slate-700 transition">
              <span className="text-slate-200 font-medium">Lilac Treat Truck</span>
              <span className="text-slate-500 font-mono text-[11px]">WBS &amp; Financial Model</span>
            </Link>
            <Link href="/projects/auracare-lite" className="flex items-center justify-between rounded-xl border border-slate-800/60 bg-slate-950/40 p-3 hover:border-slate-700 transition">
              <span className="text-slate-200 font-medium">AuraCare Lite</span>
              <span className="text-slate-500 font-mono text-[11px]">Digital Safety Architecture</span>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
