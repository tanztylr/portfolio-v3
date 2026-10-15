'use client';

import Link from 'next/link';
import MacWindow from '../components/MacWindow';

interface FieldNote {
  category: string;
  title: string;
  meta: string;
  description: string;
  takeaway: string;
  badgeColor: string;
}

const FIELD_NOTES: FieldNote[] = [
  {
    category: 'Modular Construction',
    title: 'LEGO Systems & Physical Assembly',
    meta: 'Hands-On Engineering · Spatial Logic',
    description:
      'Tackling high-piece modular sets from baseplate foundation up. The discipline of sorting components, interpreting sub-assemblies, and catching misalignments early translates directly into project work breakdown structures.',
    takeaway: 'Strong structures rely on strict sequencing and error-checking at layer one.',
    badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
  },
  {
    category: 'Culinary Formulation',
    title: 'Confectionery R&D & Temperature Control',
    meta: 'Precision Baking · Recipe Repeatability',
    description:
      'Formulating batches of cheesecake and strawberry cake pops and cakesicles. Managing chocolate temper windows, moisture retention at lower oven temperatures (325°F), and marble coating consistency requires standard operating procedures.',
    takeaway: 'Consistency is an operations problem solved with portion tools and repeatable timers.',
    badgeColor: 'border-pink-500/40 bg-pink-500/10 text-pink-300',
  },
  {
    category: 'Software Experimentation',
    title: 'Creative Tech & Interface Prototyping',
    meta: 'Modern Frameworks · Digital Exploration',
    description:
      'Prototyping responsive web apps using Next.js, Tailwind, and React. Constantly exploring how interaction micro-details reduce friction and make complex software interfaces feel intuitive and responsive.',
    takeaway: 'User clarity comes from simplifying cognitive load, not adding features.',
    badgeColor: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300',
  },
  {
    category: 'Operational Thinking',
    title: 'Systems Writing & Process Mapping',
    meta: 'Playbooks · Documentation Design',
    description:
      'Writing operational teardowns and study frameworks covering PMBOK standards, workflow bottlenecks, and organizational launch models. Turning raw operational theory into practical checklists.',
    takeaway: 'If a process cannot be explained in a simple diagram, it is too complicated to scale.',
    badgeColor: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300',
  },
];

export default function BeyondPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-4 sm:py-6">
      <MacWindow title="Photo Booth & Field Notes">
        <div className="p-4 sm:p-8 space-y-8">
          
          {/* HEADER */}
          <div className="border-b border-slate-800/80 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-pink-400">
                Off The Clock &amp; In The Field
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-slate-100 font-semibold tracking-tight mt-1">
                Beyond the Desk
              </h1>
              <p className="text-xs text-slate-400 mt-1 font-light max-w-xl">
                The hobbies, creative experiments, and hands-on builds that shape how I approach structure, systems, and execution.
              </p>
            </div>

            <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-[11px] text-slate-400 self-start sm:self-center">
              4 Field Entries
            </span>
          </div>

          {/* 4-CARD FIELD NOTES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FIELD_NOTES.map((note) => (
              <div
                key={note.title}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-6 flex flex-col justify-between space-y-4 hover:border-slate-700 transition"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider ${note.badgeColor}`}>
                      {note.category}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Archive</span>
                  </div>

                  <div>
                    <h2 className="text-base font-semibold text-slate-100">
                      {note.title}
                    </h2>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {note.meta}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {note.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                    Operational Takeaway
                  </span>
                  <p className="text-xs text-slate-200 font-medium italic">
                    "{note.takeaway}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM NAVIGATION FOOTER */}
          <div className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span>Want to see how these building blocks translate into project work?</span>
            <Link href="/projects" className="text-amber-400 hover:text-amber-300 transition font-medium">
              Explore Active Blueprints →
            </Link>
          </div>

        </div>
      </MacWindow>
    </main>
  );
}