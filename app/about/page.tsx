import Link from 'next/link';

const PILLARS = [
  {
    title: 'Structure',
    description:
      'Turning messy ideas into clear, organized plans so everyone knows where to start.',
  },
  {
    title: 'Execution',
    description:
      'Keeping things moving forward and getting the work done right, without the chaos.',
  },
  {
    title: 'Systems',
    description:
      'Setting up tools and workflows that make the work easier and stick around for the long haul.',
  },
];

const OUTCOMES = [
  {
    number: '01',
    title: 'Less Manual Work',
    description:
      'Automate repetitive tasks so teams can stop wasting time on manual work that should already be handled.',
  },
  {
    number: '02',
    title: 'Smoother Operations',
    description:
      'Clean up messy workflows, unclear handoffs, and scattered processes that slow execution down.',
  },
  {
    number: '03',
    title: 'Better System Visibility',
    description:
      'Connect tools, data, and updates so teams can see what’s happening without constantly chasing people down.',
  },
  {
    number: '04',
    title: 'Cleaner Communication',
    description:
      'Build structure around updates, stakeholder info, and project status so nothing gets lost in translation.',
  },
  {
    number: '05',
    title: 'Scalable Systems',
    description:
      'Create operational workflows that grow with the project instead of breaking down when the workload increases.',
  },
  {
    number: '06',
    title: 'Clearer Direction',
    description:
      'Turn vague ideas, complex problems, and messy goals into practical next steps people can actually execute.',
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:py-24 space-y-24">
      {/* SECTION 1: OPENING / INTRODUCTION */}
      <section className="space-y-6 border-b border-slate-800/80 pb-16">
        <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
          About Tanza
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl text-slate-100 font-semibold tracking-tight leading-tight max-w-3xl">
          I’ve always been driven by a simple question: <span className="italic font-normal text-slate-300">How does this actually work?</span>
        </h1>
        <div className="max-w-3xl space-y-4 text-base sm:text-lg text-slate-400 leading-relaxed font-light">
          <p>
            Long before managing projects and building workflows, I was the kid taking things apart, building with LEGOs, and teaching myself tech just to see what was possible under the hood.
          </p>
          <p>
            Today, I bring that same curiosity to operations and project management—helping teams take complex, messy ideas and rebuild them into clear, structured systems that actually move.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHAT DEFINES MY WORK (THE THREE PILLARS) */}
      <section className="space-y-10 border-b border-slate-800/80 pb-16">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
            Core Philosophy
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-slate-100 font-medium">
            What Defines My Work
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-8 space-y-3"
            >
              <h3 className="font-serif text-xl text-slate-100 font-medium">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: MEET TANZA (TWO-COLUMN LAYOUT) */}
      <section className="grid gap-12 lg:grid-cols-12 items-start border-b border-slate-800/80 pb-16">
        {/* Left Column: Portrait Frame Placeholder */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[100px] rounded-b-2xl border border-slate-800 bg-slate-900/60 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
            {/* If an image is added, replace this block with <Image src="/glam-shot.jpg" ... /> */}
            <div className="h-16 w-16 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 mb-4 font-serif text-xl">
              TT
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Portrait Anchor
            </span>
            <p className="mt-2 text-xs text-slate-400 max-w-[200px]">
              Arched photo frame ready for profile photography.
            </p>
          </div>
        </div>

        {/* Right Column: Metadata & Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
              Profile
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-slate-100 font-medium">
              Meet Tanza
            </h2>
          </div>

          {/* Quick Stats / Snapshot */}
          <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-800/80 bg-slate-900/30 p-5 text-xs">
            <div>
              <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Location</span>
              <span className="text-slate-200 font-medium mt-1 block">Atlanta, GA (Remote-Friendly)</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Focus</span>
              <span className="text-slate-200 font-medium mt-1 block">PM · Operations · Digital Products</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Currently Learning</span>
              <span className="text-slate-200 font-medium mt-1 block">Advanced Product Design & Workflows</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Outside of Work</span>
              <span className="text-slate-200 font-medium mt-1 block">LEGO builds · Creative tech · Writing</span>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            <p>
              I’m Tanza—a project manager and operations lead who naturally sits at the intersection of people, processes, and technology.
            </p>
            <p>
              My approach comes down to basic curiosity: I like figuring out how things work, spotting where they break down, and building a cleaner, simpler path forward. Whether that’s mapping out an end-to-end project, organizing a chaotic workflow, or designing digital tools, I focus on creating systems that make everyone’s job easier.
            </p>
            <p>
              Off the clock, I’m usually building something—whether that’s putting together complex LEGO sets, experimenting with new software, or writing. That same hands-on mindset carries straight into my daily work, where I stay focused on turning plans into smooth, practical execution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUTCOMES (6-CARD GRID) */}
      <section className="space-y-10 border-b border-slate-800/80 pb-16">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
            Measurable Value
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-slate-100 font-medium">
            Outcomes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 font-light">
            My work is built to reduce chaos, improve execution, and help teams move with clarity.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OUTCOMES.map((outcome) => (
            <div
              key={outcome.title}
              className="flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-900/30 p-6 transition duration-150 hover:border-slate-700"
            >
              <div>
                <span className="text-xs font-mono text-emerald-400">
                  {outcome.number}
                </span>
                <h3 className="mt-3 font-serif text-lg text-slate-100 font-medium">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: EXPLORE THE WORK (CTA TRANSITION) */}
      <section className="py-8 flex flex-col sm:flex-row items-baseline justify-between gap-6">
        <div className="max-w-xl space-y-2">
          <h2 className="font-serif text-2xl text-slate-100 font-medium">
            Want to see how this plays out in real projects?
          </h2>
          <p className="text-sm text-slate-400 font-light">
            Check out my project portfolio to see the plans, workflows, and tools I’ve built from start to finish.
          </p>
        </div>
        <Link
          href="/#work"
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-slate-100 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white hover:shadow-lg"
        >
          Explore Featured Work →
        </Link>
      </section>
    </main>
  );
}
