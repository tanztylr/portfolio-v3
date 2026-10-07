import Link from 'next/link';

export default function BeyondPage() {
  const beyondHighlights = [
    { title: "Based in", value: "Atlanta, Georgia" },
    { title: "Currently Learning", value: "Project management, product design, and modern web tooling" },
    { title: "Currently Into", value: "LEGO builds, creative technology, and figuring out how things work" },
    { title: "Fun Fact", value: "I almost always have a random idea or side project in progress" },
    { title: "Also Me", value: "Nintendo Switch, coloring books, stationery, and good conversations" }
  ];

  const focusAreas = [
    "Turning messy operational processes into clean systems.",
    "Navigating project management as a practitioner focusing on execution over buzzwords.",
    "Lessons learned from building digital side projects and web apps."
  ];

  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-slate-700">
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-24">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link href="/" className="text-xs font-mono text-slate-400 hover:text-slate-200 transition">
            ← Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">Personal & Creative</p>
          <h1 className="mt-2 text-4xl font-serif font-semibold text-slate-50 sm:text-5xl">
            Beyond the Work
          </h1>
          <p className="mt-4 text-base text-slate-400 font-sans max-w-2xl leading-relaxed">
            When I'm not organizing project workflows or refining digital products, you'll usually find me building, learning, and exploring ideas that stick with me.
          </p>
        </header>

        {/* Profile / Quick Facts Section */}
        <section className="mb-20 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-6">A Little Bit About Me</p>
          <div className="space-y-4 font-sans text-sm">
            {beyondHighlights.map((item) => (
              <div key={item.title} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-b border-slate-800/40 pb-3 last:border-none last:pb-0">
                <span className="text-xs font-mono text-slate-500 uppercase sm:w-44 shrink-0">{item.title}:</span>
                <span className="text-slate-300">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Outside of Work Exploration */}
        <section className="mb-20 border-t border-slate-800/60 pt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-2">Everyday Pursuits</p>
          <h2 className="text-2xl font-serif font-semibold text-slate-50 mb-6">
            Outside of Work
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Continuous Learning</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed font-sans">
                Exploring new software, AI productivity tools, and hands-on web projects.
              </p>
            </div>
            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Creative Strategy</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed font-sans">
                Analyzing hospitality concepts, dining experiences, and brand storytelling.
              </p>
            </div>
            <div className="border-l border-slate-800 pl-4">
              <h3 className="text-base font-semibold text-slate-200">Community</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed font-sans">
                Following workforce development and tech education initiatives.
              </p>
            </div>
          </div>
        </section>

        {/* Writing & Substack Section */}
        <section className="mb-20 border-t border-slate-800/60 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">Creative Outlet</p>
              <h2 className="mt-1 text-2xl font-serif font-semibold text-slate-50">
                Writing & Substack
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Essays on systems & execution
            </span>
          </div>

          <p className="text-base text-slate-300 font-sans leading-relaxed mb-8 max-w-2xl">
            A space where I share honest thoughts on systems, execution, and project coordination.
          </p>

          {/* Substack Focus Areas */}
          <div className="mb-10 rounded-xl border border-slate-800 bg-slate-900/30 p-5">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">Core Themes</p>
            <ul className="space-y-2 text-sm text-slate-300 font-sans">
              {focusAreas.map((area) => (
                <li key={area} className="flex items-start gap-2">
                  <span className="text-slate-500 font-mono">›</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Essay Highlights Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between hover:border-slate-700 transition">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-2">Essay Highlight</span>
                <h3 className="text-lg font-serif font-semibold text-slate-100">
                  Opportunity Doesn't Always Look Like a Paycheck
                </h3>
                <p className="mt-3 text-sm text-slate-400 font-sans leading-relaxed">
                  I used to think career growth only counted when it came with a title or salary. Volunteering changed how I measure progress and completely reshaped how I think about success.
                </p>
              </div>
              <a
                href="https://substack.com"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white underline underline-offset-4"
              >
                Read on Substack ↗
              </a>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-900/20 p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-2">In Progress</span>
                <h3 className="text-lg font-serif font-semibold text-slate-300">
                  Coming Soon
                </h3>
                <p className="mt-3 text-sm text-slate-400 font-sans leading-relaxed">
                  More essays on project management, systems thinking, career growth, and building in public.
                </p>
              </div>
              <span className="mt-6 text-xs font-mono text-slate-500">
                Drafting
              </span>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="border-t border-slate-800/60 pt-12 flex justify-between items-center text-sm font-sans">
          <Link href="/experience" className="text-slate-400 hover:text-white transition">
            ← Experience
          </Link>
          <Link href="/contact" className="text-slate-200 hover:text-white transition font-medium">
            Next: Contact Page →
          </Link>
        </div>

      </div>
    </main>
  );
}
