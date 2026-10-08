import Link from 'next/link';

export default function AuraCareLitePage() {
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
          Case Study 02 · Product &amp; Project Management Package
        </span>
        <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-100 font-semibold tracking-tight">
          AuraCare Lite
        </h1>
        <p className="mt-3 text-lg text-slate-400 leading-relaxed max-w-2xl">
          Mobile Emergency Response System &amp; Seizure Safety Architecture
        </p>
      </header>

      {/* 3-COLUMN METADATA BAR */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-b border-slate-800/80 text-xs">
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Role</span>
          <span className="text-slate-200 font-medium mt-1 block">Product &amp; Project Lead</span>
        </div>
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Tools</span>
          <span className="text-slate-200 font-medium mt-1 block">Digital Product Specs, Wireframing, Agile Roadmaps</span>
        </div>
        <div>
          <span className="text-slate-500 uppercase tracking-wider block">Focus</span>
          <span className="text-slate-200 font-medium mt-1 block">Emergency Safety Design, UN SDG Goal 3 Alignment</span>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <div className="py-10 space-y-12">
        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            Overview
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            A low-friction digital health and emergency response system engineered to support individuals with neurological conditions, structured under the standards of UN SDG Goal 3 (Good Health &amp; Well-Being).
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
            The Challenge
          </h2>
          <p className="text-slate-300 leading-relaxed font-light">
            Traditional health applications introduce high friction by demanding multi-field data entry during medical distress. Individuals experiencing pre-seizure auras have limited time before losing focus or consciousness, requiring a zero-friction system designed for split-second activation.
          </p>
        </section>

        <section>
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4">
            Scope &amp; Execution
          </h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Core Interaction Architecture</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Defined three primary functional modules: an instant Emergency Safety Net trigger with automated countdown timers, a rapid 3-input post-incident Quick Log, and a high-visibility Bystander First Aid guide.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">UN SDG Goal 3 Metric Alignment</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Mapped product requirements directly to global health and safety indicators, ensuring accessible design decisions addressed emergency response equity.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-5">
              <h3 className="text-sm font-semibold text-slate-200">Project Governance &amp; Sprint Package</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                Structured phased release roadmaps, backlog prioritization frameworks, and acceptance criteria to ensure engineering teams moved with clear sprint requirements.
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
              <span>Functional Feature Specification Document</span>
              <span className="text-slate-400">Delivered</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>UN SDG Goal 3 Impact Alignment Framework</span>
              <span className="text-slate-400">Complete</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>Agile Product Backlog &amp; Sprint Delivery Roadmap</span>
              <span className="text-slate-400">Structured</span>
            </li>
            <li className="flex items-center justify-between p-4 text-slate-300 font-medium">
              <span>User Persona &amp; Critical Emergency Journey Mapping</span>
              <span className="text-slate-400">Documented</span>
            </li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
          <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
            Impact &amp; Key Takeaway
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-light">
            Demonstrated how to bridge human-centered medical safety requirements with structured Agile project management governance, driving the platform from user requirements to deployed prototypes.
          </p>
        </section>
      </div>
    </main>
  );
}