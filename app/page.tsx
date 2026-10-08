import Link from 'next/link';
import SkillIcons from './components/SkillIcons';

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

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:py-24 space-y-20">
      {/* HERO SECTION */}
      <section className="space-y-8 border-b border-slate-800/60 pb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to PM & Operations Roles
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl text-slate-100 font-semibold tracking-tight leading-[1.1]">
          Tanza Taylor
        </h1>
        <p className="text-lg sm:text-xl text-slate-400 font-normal tracking-wide">
          Operations Strategy · Project Management · Digital Systems
        </p>

        <div className="max-w-2xl space-y-4">
          <p className="font-serif text-2xl sm:text-3xl text-slate-200 font-normal leading-snug">
            I build structure out of chaos so teams can move faster.
          </p>
          <p className="text-base text-slate-400 leading-relaxed font-light">
            Driven by curiosity and a hands-on mindset, I design practical workflows, manage end-to-end projects, and deliver clean results.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/projects"
            className="rounded-xl bg-slate-100 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white hover:shadow-lg"
          >
            Explore Projects →
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-slate-700/80 bg-slate-900/60 px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </section>

      {/* MEET TANZA & BIO / PHOTO */}
      <section className="grid gap-12 lg:grid-cols-12 items-start border-b border-slate-800/80 pb-16">
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[100px] rounded-b-2xl border border-slate-800 bg-slate-900/60 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
            <div className="h-16 w-16 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-400 mb-4 font-serif text-xl">
              TT
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Tanza Taylor
            </span>
            <p className="mt-2 text-xs text-slate-400 max-w-[200px]">
              Profile Photo Anchor
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
            Profile Snapshot
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-slate-100 font-medium">
            At the intersection of people, process, and technology.
          </h2>

          <div className="grid grid-cols-2 gap-4 rounded-xl border border-slate-800/80 bg-slate-900/30 p-5 text-xs">
            <div>
              <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Location</span>
              <span className="text-slate-200 font-medium mt-1 block">Atlanta, GA (Remote-Friendly)</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Focus</span>
              <span className="text-slate-200 font-medium mt-1 block">PM · Operations · Digital Systems</span>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            <p>
              I take messy ideas and build clear, structured systems that teams can execute without the friction.
            </p>
            <p>
              Whether structuring full scope baselines, coordinating technical deliverables, or streamlining cross-team handoffs, my focus stays on eliminating roadblocks and delivering tangible impact.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS BANK */}
      <section className="space-y-6 border-b border-slate-800/80 pb-16">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
            Capabilities
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-slate-100 font-medium">
            Skills & Tools
          </h2>
        </div>
        <SkillIcons />
      </section>

      {/* WHAT I BRING / OUTCOMES */}
      <section className="space-y-10 pb-8">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
            Measurable Value
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-slate-100 font-medium">
            What I Bring to a Team
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
    </main>
  );
}
