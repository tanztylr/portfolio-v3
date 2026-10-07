import Link from 'next/link';

export default function About() {
  const principles = [
    {
      title: 'Systems Over Chaos',
      desc: 'Every process can be mapped, streamlined, and documented to eliminate friction.'
    },
    {
      title: 'Data-Backed Decisions',
      desc: 'Balancing strategic vision with rigorous operational and financial analysis.'
    },
    {
      title: 'Cross-Functional Execution',
      desc: 'Translating high-level goals into clear, actionable workflows across technical and business teams.'
    }
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Building systems that turn complexity into clarity
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          I build systems that turn complexity into clarity—connecting strategy, operations, and execution in ways that scale.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {principles.map((principle) => (
          <div key={principle.title} className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 shadow-lg shadow-slate-950/30">
            <h2 className="mb-3 text-xl font-semibold text-white">{principle.title}</h2>
            <p className="text-slate-300">{principle.desc}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 flex flex-col gap-4 sm:flex-row">
        <Link href="/" className="inline-flex items-center justify-center rounded-full border border-slate-600 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:text-sky-300">
          Back to home
        </Link>
        <Link href="/projects" className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-sky-400">
          View work
        </Link>
      </section>
    </main>
  );
}