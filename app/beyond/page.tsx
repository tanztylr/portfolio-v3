import Link from 'next/link';

interface WritingCard {
  title: string;
  preview: string;
  linkText: string;
  href?: string;
  isUpcoming?: boolean;
}

const WRITING_CARDS: WritingCard[] = [
  {
    title: "Opportunity Doesn't Always Look Like a Paycheck",
    preview:
      'I used to think career growth only counted when it came with a title or salary. Volunteering changed how I measure progress—and completely reshaped how I think about success.',
    linkText: 'Read on Substack →',
    href: 'https://substack.com',
  },
  {
    title: 'Coming Soon',
    preview:
      'More essays on project management, systems thinking, career growth, and building in public.',
    linkText: 'Read on Substack →',
    isUpcoming: true,
  },
];

export default function BeyondPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:py-24 space-y-20">
      {/* HEADER */}
      <header className="border-b border-slate-800/80 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
          Personal Life &amp; Perspectives
        </span>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-slate-100 font-semibold tracking-tight">
          A Little Bit About Me
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
          Outside of organizing project workflows and refining digital systems, here is what keeps me curious, grounded, and building.
        </p>
      </header>

      {/* PROFILE SNAPSHOT & DETAILS */}
      <section className="grid gap-12 lg:grid-cols-12 items-start border-b border-slate-800/80 pb-16">
        {/* Photo Container */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-2xl flex flex-col items-center justify-center p-6 text-center">
            <div className="h-20 w-20 rounded-full border border-slate-700 bg-slate-800/80 flex items-center justify-center text-slate-400 mb-4 font-serif text-2xl">
              TT
            </div>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
              LEGO Adidas Sneaker Build
            </span>
            <p className="mt-2 text-xs text-slate-500 max-w-[220px]">
              Hands-on building: LEGO sets, mechanics, and breaking things down.
            </p>
          </div>
        </div>

        {/* Quick Facts List */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
              Snapshot
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-slate-100 font-medium">
              Off the Clock
            </h2>
          </div>

          <div className="divide-y divide-slate-800/60 rounded-xl border border-slate-800/80 bg-slate-900/20 text-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between p-4 gap-1">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Based In
              </span>
              <span className="text-slate-200 font-light">Atlanta, Georgia</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between p-4 gap-1">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Currently Learning
              </span>
              <span className="text-slate-200 font-light">Project management and product design</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between p-4 gap-1">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Currently Into
              </span>
              <span className="text-slate-200 font-light">LEGO builds, creative technology, &amp; how things work</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between p-4 gap-1">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Fun Fact
              </span>
              <span className="text-slate-200 font-light">I almost always have a random idea or side project in progress</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between p-4 gap-1">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                Also Me
              </span>
              <span className="text-slate-200 font-light">Nintendo Switch, coloring books, stationery, &amp; good conversations</span>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE OUTLET & ESSAYS */}
      <section className="space-y-8">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
            Creative Outlet
          </span>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-slate-100 font-medium">
            Writing — where I explore ideas that stick with me.
          </h2>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl font-light">
            A space where I share honest thoughts on systems, execution, and project coordination.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {WRITING_CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-900/20 p-6 transition duration-150 hover:border-slate-700"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  {card.isUpcoming ? 'In Progress' : 'Essay Highlight'}
                </span>
                <h3 className="mt-3 font-serif text-xl text-slate-100 font-medium">
                  {card.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {card.preview}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/40">
                {card.isUpcoming ? (
                  <span className="text-xs text-slate-500 font-medium">
                    {card.linkText}
                  </span>
                ) : (
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-slate-300 hover:text-white font-medium transition inline-flex items-center gap-1"
                  >
                    {card.linkText}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
