import Link from 'next/link';

const PROJECTS = [
  {
    title: 'The Treat Truck',
    subtitle: 'Mobile Retail Feasibility Study, Scope Baseline & 3-Year Pro Forma',
    role: 'Project Manager & Financial Analyst',
    tags: ['Scope Baseline', 'Financial Model', 'WBS Dictionary'],
    href: '/projects/treat-truck',
  },
  {
    title: 'AuraCare Lite',
    subtitle: 'Mobile Emergency Response System & Seizure Safety Initiative',
    role: 'Product & Project Lead',
    tags: ['Digital Health MVP', 'Agile PM', 'UN SDG Goal 3'],
    href: '/projects/auracare-lite',
  },
  {
    title: 'The Soul Table',
    subtitle: 'Digital Infrastructure Strategy, Pop-Up Booking & Experience Design',
    role: 'Systems Architect & Project Coordinator',
    tags: ['Options Analysis', 'Web Information Architecture', 'Brand Governance'],
    href: '/projects/soul-table',
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:py-24 space-y-12">
      <section className="border-b border-slate-800/80 pb-8">
        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
          Portfolio
        </span>
        <h1 className="mt-2 font-serif text-3xl sm:text-5xl text-slate-100 font-semibold tracking-tight">
          Selected Projects
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-400 font-light">
          In-depth case studies covering operational design, financial modeling, and system architectures.
        </p>
      </section>

      <div className="divide-y divide-slate-800/60">
        {PROJECTS.map((project) => (
          <div key={project.title} className="relative py-10">
            <Link href={project.href} className="group block focus:outline-none">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h2 className="inline-flex items-center gap-2 font-serif text-2xl sm:text-3xl text-slate-100 font-normal tracking-tight transition-transform duration-200 ease-out group-hover:translate-x-2 group-hover:text-white">
                  <span>{project.title}</span>
                  <span className="opacity-0 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-1 text-slate-400 font-sans text-xl">
                    →
                  </span>
                </h2>
                <span className="text-xs text-slate-400 font-medium transition-colors duration-200 group-hover:text-slate-200">
                  {project.role}
                </span>
              </div>

              <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed font-light transition-colors duration-200 group-hover:text-slate-300">
                {project.subtitle}
              </p>
            </Link>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-md border border-slate-800 bg-slate-900/40 px-3 py-1 text-xs text-slate-400 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
