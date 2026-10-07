import Link from 'next/link';

export default function AuraCareLitePage() {
  const deliverables = [
    { label: "Role", value: "Product Manager & Digital Health Lead" },
    { label: "Deliverables Tag", value: "[Digital Health MVP] [PM Implementation] [UN SDG Goal 3]" },
    { label: "Platform", value: "Mobile-First Web App (Vercel Deployed)" },
    { label: "Core Tooling", value: "Next.js, Tailwind CSS, PM Risk Register, User Journeys" },
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
              Digital Health MVP
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-0.5 text-xs font-mono text-slate-300">
              PM Implementation
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-0.5 text-xs font-mono text-slate-300">
              UN SDG Goal 3
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-slate-50">
            AuraCare Lite
          </h1>
          <p className="mt-3 text-lg text-slate-400 font-sans">
            Digital Health & Seizure Management Platform
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

        {/* The Challenge */}
        <section className="mb-14">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">The Challenge</p>
          <h2 className="text-2xl font-serif font-medium text-slate-100 mb-4">
            Critical Communication Gaps During Emergencies
          </h2>
          <div className="space-y-4 text-slate-300 font-sans leading-relaxed text-base">
            <p>
              Individuals living with epilepsy face significant communication gaps during sudden medical episodes. Traditional health monitoring apps fail users in critical moments by requiring complex navigation, deep menu trees, and tedious manual entries during high-stress situations.
            </p>
          </div>
        </section>

        {/* The Solution Built */}
        <section className="mb-14 border-t border-slate-800/60 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">The Solution Built</p>
          <h2 className="text-2xl font-serif font-medium text-slate-100 mb-6">
            Low-Friction, High-Impact Safety Architecture
          </h2>
          
          <div className="space-y-6">
            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Emergency Safety Net</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Engineered an immediate "Help Now" SMS alert trigger paired with a 60-second "Aura Alert" delayed timer countdown, giving individuals the ability to summon assistance before losing consciousness.
              </p>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Low-Friction Quick Log</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Replaced lengthy medical forms with a streamlined 3-input post-event tracker: Date/Time, 15s–10m Duration slider, and Event Type selector.
              </p>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Bystander First Aid Guide</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Built a high-contrast, lock-screen-ready emergency protocol that gives bystanders and first responders immediate, clear steps on proper seizure response without medical jargon.
              </p>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Strategic PM Governance & Standards</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Aligned product development with UN SDG Goal 3 standards, authoring a complete PM package including a project charter, risk register, stakeholder matrix, and a phased V1-to-V2 technical roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section className="mb-20 border-t border-slate-800/60 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">The Impact</p>
          <h2 className="text-2xl font-serif font-medium text-slate-100 mb-4">
            Validated Prototype & Deployed Architecture
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed text-base">
            Successfully built and deployed a functional prototype on Vercel, demonstrating the ability to translate complex clinical accessibility constraints into a live, usable digital product.
          </p>
        </section>

        {/* Bottom Pagination */}
        <div className="border-t border-slate-800/60 pt-12 flex justify-between items-center text-sm font-sans">
          <Link href="/projects/treat-truck" className="text-slate-400 hover:text-white transition">
            ← The Treat Truck
          </Link>
          <Link href="/projects/soul-table" className="text-slate-200 hover:text-white transition font-medium">
            Next: The Soul Table →
          </Link>
        </div>

      </div>
    </main>
  );
}
