import Link from 'next/link';
import SkillIcons from './components/SkillIcons';

export default function Home() {
  const projects = [
    {
      title: "The Treat Truck",
      sub: "Business Intelligence & Financial Plan",
      deliverable: "Scope Baseline & Financial Model",
      tags: ["Financial Model", "Ops Strategy", "WBS"],
      link: "/projects/treat-truck"
    },
    {
      title: "AuraCare Lite",
      sub: "Digital Health & Seizure Safety App",
      deliverable: "Digital Health MVP",
      tags: ["Digital Health MVP", "PM Implementation", "UN SDG Goal 3"],
      link: "/projects/auracare-lite"
    },
    {
      title: "The Soul Table",
      sub: "Hospitality Concept & Business Strategy",
      deliverable: "Brand Strategy & Architecture",
      tags: ["Hospitality Concept", "Options Analysis", "Web Architecture"],
      link: "/projects/soul-table"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-slate-700">
      {/* Hero Section */}
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <div>
          {/* Status Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-3.5 py-1 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to PM & Operations Roles
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl font-serif text-slate-50">
            Turning ambiguity & messy operations into clean, usable systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400 font-sans leading-relaxed">
            Project management, business operations, and systems thinking. I help teams cut through chaos, build reliable workflows, and execute digital products with momentum.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 font-sans text-sm">
            <Link
              href="#work"
              className="rounded-full bg-slate-100 px-6 py-2.5 font-medium text-slate-950 transition hover:bg-slate-200"
            >
              Selected Work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-slate-800 px-6 py-2.5 font-medium text-slate-300 transition hover:border-slate-600 hover:text-white"
            >
              About Approach
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work (Stacked List Rows) */}
      <section id="work" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-6 border-b border-slate-800/80 pb-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">Case Studies</p>
          <h2 className="mt-1 text-2xl font-serif font-semibold text-slate-100">Featured Projects</h2>
        </div>

        <div className="divide-y divide-slate-800/60 border-y border-slate-800/60">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group block py-7 transition hover:bg-slate-900/40 px-2"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-xl font-medium text-slate-100 group-hover:text-white transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">{project.sub}</p>
                </div>
                <span className="text-xs font-mono text-slate-400 border border-slate-800 rounded px-2.5 py-1 w-fit mt-2 sm:mt-0">
                  {project.deliverable}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900 border border-slate-800/80 px-2.5 py-0.5 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Core Skills Strip */}
      <section className="mx-auto max-w-5xl px-6 py-16 border-t border-slate-800/60">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">Toolkit</p>
            <h2 className="mt-1 text-xl font-serif font-medium text-slate-100">Systems & Technologies</h2>
          </div>
          <div>
            <SkillIcons />
          </div>
        </div>
      </section>
    </main>
  );
}