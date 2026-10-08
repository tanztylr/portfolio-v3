import Link from 'next/link';

const FEATURED_PROJECTS = [
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

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
      {/* HERO SECTION */}
      <section className="border-b border-slate-800/60 pb-16">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to PM & Operations Roles
        </div>

        <h1 className="mt-8 font-serif text-4xl sm:text-6xl text-slate-100 font-semibold tracking-tight leading-[1.1]">
          Tanza Taylor
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-slate-400 font-normal tracking-wide">
          Operations Strategy · Project Management · Digital Systems
        </p>

        <div className="mt-8 max-w-2xl space-y-4">
          <p className="font-serif text-2xl sm:text-3xl text-slate-200 font-normal leading-snug">
            I build structure out of chaos so teams can move faster.
          </p>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            Driven by curiosity and a hands-on mindset, I design practical workflows, manage end-to-end projects, and deliver clean results.
          </p>
        </div>

        {/* Primary CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-xl bg-slate-100 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white hover:shadow-lg"
          >
            See Projects
          </a>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </section>

      {/* FEATURED PROJECTS (UNBOXED EDITORIAL LIST) */}
      <section id="work" className="pt-20 pb-12">
        <div className="flex items-baseline justify-between border-b border-slate-800/80 pb-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-100 font-medium tracking-tight">
            Selected Work
          </h2>
          <span className="text-xs uppercase tracking-widest text-slate-400">
            Case Studies
          </span>
        </div>

        <div className="divide-y divide-slate-800/60">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block py-10 transition duration-150 hover:pl-2"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-serif text-2xl sm:text-3xl text-slate-100 font-normal tracking-tight group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-slate-400 font-medium">
                  {project.role}
                </span>
              </div>

              <p className="mt-3 max-w-3xl text-sm sm:text-base text-slate-400 leading-relaxed">
                {project.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-800 bg-slate-900/40 px-3 py-1 text-xs text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}