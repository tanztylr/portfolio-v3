import Link from 'next/link';
import SkillIcons from './components/SkillIcons';

export default function Home() {
  const projects = [
    {
      title: "The Treat Truck",
      sub: "Business Intelligence & Financial Plan",
      tags: ["Financial Model", "Ops Strategy", "WBS"],
      link: "#"
    },
    {
      title: "AuraCare Lite",
      sub: "Digital Health & Seizure Safety App",
      tags: ["Digital Health MVP", "PM Implementation", "UN SDG Goal 3"],
      link: "#"
    },
    {
      title: "The Soul Table",
      sub: "Hospitality Concept & Business Strategy",
      tags: ["Brand Strategy", "Web Architecture"],
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">
              Product & Strategy Consultant
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Building better operations, experiences, and business models.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              I help ambitious teams turn complex ideas into clear strategy,
              scalable product decisions, and measurable impact.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#work"
                className="rounded-full bg-cyan-400 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                View Work
              </Link>
              <Link
                href="#about"
                className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/20">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Core strengths</p>
            <div className="mt-6 space-y-4">
              <SkillIcons />
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Selected work</p>
            <h2 className="mt-2 text-3xl font-bold">Projects</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Case study</p>
              <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-slate-300">{project.sub}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700 px-2.5 py-1 text-xs text-slate-200">
                    {tag}
                  </span>
                ))}
              </div>

              <Link href={project.link} className="mt-6 inline-block text-cyan-300 hover:text-cyan-200">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">About</p>
            <h2 className="mt-2 text-3xl font-bold">Strategy with execution in mind.</h2>
          </div>
          <p className="text-lg text-slate-300">
            I blend business strategy, product thinking, and operational planning to help teams move from concept to delivery with clarity and momentum.
          </p>
        </div>
      </section>
    </main>
  );
}