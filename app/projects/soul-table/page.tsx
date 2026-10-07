import Link from 'next/link';

export default function SoulTablePage() {
  const deliverables = [
    { label: "Role", value: "Brand Strategist, Experience Designer & Operations Lead" },
    { label: "Deliverables Tag", value: "[Hospitality Concept] [Options Analysis] [Web Architecture] [Brand Governance]" },
    { label: "Format", value: "Curated Pop-Up Dining & Reservation Model" },
    { label: "Core Tooling", value: "Figma, Web Information Architecture, Risk Register, Financial Modeling" },
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
              Hospitality Concept
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-0.5 text-xs font-mono text-slate-300">
              Options Analysis
            </span>
            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-0.5 text-xs font-mono text-slate-300">
              Web Architecture
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-semibold text-slate-50">
            The Soul Table
          </h1>
          <p className="mt-3 text-lg text-slate-400 font-sans">
            Modern Southern Hospitality & Pop-Up Dining Concept
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
            Transactional Dining in a Saturated Market
          </h2>
          <div className="space-y-4 text-slate-300 font-sans leading-relaxed text-base">
            <p>
              Atlanta's dining scene is saturated with high-volume, interchangeable restaurants where marketing promises authentic Southern hospitality, but the actual guest experience feels transactional and disconnected.
            </p>
          </div>
        </section>

        {/* The Solution Built */}
        <section className="mb-14 border-t border-slate-800/60 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">The Solution Built</p>
          <h2 className="text-2xl font-serif font-medium text-slate-100 mb-6">
            Curated Hospitality Strategy & Digital Infrastructure
          </h2>
          
          <div className="space-y-6">
            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Strategic Options Analysis</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Conducted a comprehensive business case evaluation comparing traditional brick-and-mortar models against mobile concepts and curated pop-ups, choosing a low-overhead, high-impact reservation gathering model.
              </p>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Experience & Culinary Direction</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Formulated a "Story Before Recipe" culinary framework (featuring elevated comfort dishes like Smothered Chicken Pot Pie with Sweet Potato Purée and Cornbread Flights) paired with warm earth-tone aesthetic guidelines.
              </p>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Digital Experience Architecture</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Designed the complete 10-section web information architecture: Hero, Experience Pillars, Upcoming Gatherings, Reservation System, Founder/Chef Profiles, and PM Portfolio Hub.
              </p>
            </div>

            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Project Governance & Operations</h3>
              <p className="mt-1 text-sm text-slate-400 leading-relaxed font-sans">
                Built the full PM infrastructure, including the Project Charter, Risk Register (venue/vendor mitigations), Financial Model, and Guest Satisfaction Metrics.
              </p>
            </div>
          </div>
        </section>

        {/* The Impact */}
        <section className="mb-20 border-t border-slate-800/60 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">The Impact</p>
          <h2 className="text-2xl font-serif font-medium text-slate-100 mb-4">
            Investor-Ready Strategic Proof of Concept
          </h2>
          <p className="text-slate-300 font-sans leading-relaxed text-base">
            Delivered an investor-ready proof-of-concept demonstrating how strategic project management, brand strategy, and user experience design can bring a physical hospitality brand to life.
          </p>
        </section>

        {/* Bottom Pagination */}
        <div className="border-t border-slate-800/60 pt-12 flex justify-between items-center text-sm font-sans">
          <Link href="/projects/auracare-lite" className="text-slate-400 hover:text-white transition">
            ← AuraCare Lite
          </Link>
          <Link href="/#work" className="text-slate-200 hover:text-white transition font-medium">
            Back to Featured Projects →
          </Link>
        </div>

      </div>
    </main>
  );
}
