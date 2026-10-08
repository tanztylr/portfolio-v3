import Link from 'next/link';

export default function AuraCareLitePage() {
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
          Case Study 02 // Product Management & Digital Health
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-100 font-bold">
          AuraCare Lite
        </h1>
        <p className="mt-2 text-lg text-slate-400 font-light">
          Mobile Health MVP & Emergency Response System for Seizure Safety
        </p>
      </div>

      {/* METRICS STRIP */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-b border-slate-800/80 font-mono text-center">
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">4 Sprints</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">MVP Cycle</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">&lt; 3 Sec</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Alert Latency</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">SDG 3</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Health & Wellbeing</div>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
          <div className="text-2xl font-bold text-emerald-400">Zero</div>
          <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">Critical Blockers</div>
        </div>
      </section>

      {/* CORE CONTENT */}
      <section className="py-10 space-y-10">
        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            01 / Product Context & Problem Statement
          </h2>
          <p className="text-slate-300 leading-relaxed">
            Individuals living with epilepsy and recurring seizures require rapid-activation emergency protocols. AuraCare Lite was architected as a lightweight, low-friction mobile MVP designed to bridge the window between prodrome recognition and critical caretaker notification.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            02 / Agile Delivery & Backlog Prioritization
          </h2>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4 font-mono text-xs">
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">EPIC 1</span>
              <div>
                <strong className="text-slate-200">One-Tap Emergency Broadcast:</strong> Geolocation broadcast with customizable SMS triggers directed to prioritized emergency tiers.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">EPIC 2</span>
              <div>
                <strong className="text-slate-200">Aura / Trigger Timestamp Logging:</strong> Low-cognitive-load UI for patients to log prodromal sensations before full seizure onset.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-emerald-400 font-bold">EPIC 3</span>
              <div>
                <strong className="text-slate-200">Caregiver Dashboard & Historical Log:</strong> Read-only aggregate log exportable for clinical consultations.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-4">
            03 / Key Artifacts & Delivery Metrics
          </h2>
          <ul className="space-y-3 font-mono text-xs">
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">Product Requirement Document (PRD v1.2)</span>
              <span className="text-emerald-400">Baseline Locked</span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">User Journey Maps & Low-Fi Wireframe Flows</span>
              <span className="text-emerald-400">Approved</span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-xl border border-slate-800 bg-slate-950/60">
              <span className="text-slate-200">Sprint Backlog & Velocity Reports</span>
              <span className="text-emerald-400">Delivered</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}