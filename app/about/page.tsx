'use client';

import { useState } from 'react';
import Link from 'next/link';
import MacWindow from '../components/MacWindow';

interface NoteItem {
  id: string;
  title: string;
  date: string;
  folder: string;
  preview: string;
}

const NOTES: NoteItem[] = [
  {
    id: 'how-i-think',
    title: 'How I Think & Who I Am',
    date: 'Oct 19',
    folder: 'EXECUTIVE BIO',
    preview: 'How does this actually work? Long before managing projects and building workflows, I was the kid taking things apart...',
  },
  {
    id: 'outcomes-matrix',
    title: 'The 6 Operational Outcomes',
    date: 'Oct 17',
    folder: 'DELIVERY MATRIX',
    preview: 'My work is built to reduce chaos, improve execution, and give teams clear, durable systems to move faster...',
  },
  {
    id: 'workflow-diagnostic',
    title: 'Questions before touching any workflow',
    date: 'Oct 15',
    folder: 'OPERATIONS PLAYBOOK',
    preview: '1. Who touches this first? 2. Where does it sit waiting? 3. What is the current workaround? 4. Who gets blamed...',
  },
  {
    id: 'project-delays',
    title: 'What actually causes project delays',
    date: 'Oct 10',
    folder: 'OPERATIONS PLAYBOOK',
    preview: 'It is almost never that people are working slow. Bottlenecks live in handoffs, idle review queues, and hidden dependencies...',
  },
  {
    id: 'daily-toolkit',
    title: 'Operating toolkit & standards',
    date: 'Oct 04',
    folder: 'TECH & SYSTEMS',
    preview: 'No bloated enterprise stacks required. The core tools, frameworks, and habits that keep projects execution-ready...',
  },
];

export default function AboutPage() {
  const [activeNoteId, setActiveNoteId] = useState<string>('how-i-think');
  const activeNote = NOTES.find((n) => n.id === activeNoteId) || NOTES[0];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-8 py-8 lg:py-12">
      <MacWindow title="Notes — iCloud">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[640px]">
          
          {/* LEFT COLUMN: NOTES LIST (4 COLS) */}
          <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-950/40 p-4 sm:p-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-bold">📁</span>
                  <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider font-mono">
                    Operational Notes
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">iCloud</span>
              </div>

              <div className="space-y-2">
                {NOTES.map((note) => {
                  const isSelected = note.id === activeNoteId;
                  return (
                    <button
                      key={note.id}
                      onClick={() => setActiveNoteId(note.id)}
                      className={`w-full text-left rounded-xl p-3.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'border border-amber-500/50 bg-amber-500/10 text-white shadow-lg'
                          : 'border border-transparent hover:bg-slate-900/60 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                        <span className="text-amber-400/90 font-semibold">{note.folder}</span>
                        <span>{note.date}</span>
                      </div>
                      <h2 className="text-sm font-semibold text-slate-100 line-clamp-1">
                        {note.title}
                      </h2>
                      <p className="text-xs text-slate-400 font-light line-clamp-2 mt-1">
                        {note.preview}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 flex justify-between">
              <span>5 Notes</span>
              <span>Updated Today</span>
            </div>
          </div>

          {/* RIGHT COLUMN: READING PANE (8 COLS) */}
          <div className="md:col-span-8 p-6 sm:p-10 bg-slate-950/20 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-4 text-xs font-mono text-slate-400">
                <span>{activeNote.folder}</span>
                <span className="text-slate-500">October 2026 · Tanza Taylor</span>
              </div>

              {/* NOTE 1: HOW I THINK (BIO & 3 PILLARS) */}
              {activeNoteId === 'how-i-think' && (
                <article className="space-y-6">
                  <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
                    How does this actually work?
                  </h1>

                  <p className="text-base text-slate-300 font-light leading-relaxed">
                    Long before managing cross-functional initiatives and building operational workflows, I was the kid taking things apart, organizing pieces, and teaching myself tech just to see what was possible under the hood. Today, I bring that same curiosity to operations and project management: helping teams take messy, ambiguous directives and rebuild them into clear, structured execution paths.
                  </p>

                  <div className="pt-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-3">
                      The Three Pillars That Define My Approach
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1.5">
                        <span className="font-mono text-xs font-bold text-amber-400">01 / STRUCTURE</span>
                        <h2 className="text-sm font-semibold text-slate-100">Scope &amp; Governance</h2>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                          Turning chaotic ideas into clear, organized WBS roadmaps so every stakeholder knows where to start.
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1.5">
                        <span className="font-mono text-xs font-bold text-sky-400">02 / EXECUTION</span>
                        <h2 className="text-sm font-semibold text-slate-100">Critical Path</h2>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                          Managing task dependencies, eliminating idle wait time, and driving momentum without the noise.
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1.5">
                        <span className="font-mono text-xs font-bold text-emerald-400">03 / SYSTEMS</span>
                        <h2 className="text-sm font-semibold text-slate-100">Durable SOPs</h2>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                          Setting up digital tools and documentation that stick around and scale with the team long-term.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-0.5">
                      <span className="font-mono text-slate-400">Snapshot:</span>
                      <p className="text-slate-200">Atlanta, GA · Focus: Operations &amp; Project Management · Degree: UMPI</p>
                    </div>
                    <Link href="/contact" className="text-amber-400 hover:text-amber-300 font-mono font-semibold shrink-0">
                      Reach Out →
                    </Link>
                  </div>
                </article>
              )}

              {/* NOTE 2: OUTCOMES MATRIX (6-CARD GRID) */}
              {activeNoteId === 'outcomes-matrix' && (
                <article className="space-y-6">
                  <div>
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
                      Operational Outcomes
                    </h1>
                    <p className="text-sm text-slate-400 font-light mt-2 leading-relaxed">
                      My work is built to reduce chaos, eliminate repetitive friction, and give teams clear, durable systems to move with momentum.
                    </p>
                  </div>

                  {/* 6-CARD GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1 hover:border-slate-700 transition">
                      <span className="font-mono text-xs text-amber-400 font-semibold">01 / Less Manual Work</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Automating repetitive tasks and tracking so teams can stop wasting hours on manual updates that should run automatically.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1 hover:border-slate-700 transition">
                      <span className="font-mono text-xs text-sky-400 font-semibold">02 / Smoother Operations</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Cleaning up messy workflows, ambiguous handoffs, and scattered files that stall delivery during peak periods.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1 hover:border-slate-700 transition">
                      <span className="font-mono text-xs text-emerald-400 font-semibold">03 / Better System Visibility</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Connecting tools, data, and deliverables so leadership can see real project status without constantly chasing people down.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1 hover:border-slate-700 transition">
                      <span className="font-mono text-xs text-purple-400 font-semibold">04 / Cleaner Communication</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Structuring updates, stakeholder reporting, and review cadences so critical context never gets lost in email threads.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1 hover:border-slate-700 transition">
                      <span className="font-mono text-xs text-rose-400 font-semibold">05 / Scalable Systems</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Creating operational processes and playbooks that scale with volume instead of breaking under increased workload.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1 hover:border-slate-700 transition">
                      <span className="font-mono text-xs text-cyan-400 font-semibold">06 / Clearer Direction</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Turning vague ideas, complex goals, and broad mandates into practical, sequential next steps people can execute immediately.
                      </p>
                    </div>
                  </div>
                </article>
              )}

              {/* NOTE 3: WORKFLOW DIAGNOSTIC */}
              {activeNoteId === 'workflow-diagnostic' && (
                <article className="space-y-6">
                  <div>
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
                      Questions before touching any workflow
                    </h1>
                    <p className="text-xs font-mono text-slate-500 mt-2">
                      // Rule: Fix the handoff before you touch the software.
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Never build a new dashboard, rule, or SOP until you walk the floor and answer these four questions:
                  </p>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-4 space-y-1">
                      <span className="font-mono text-xs font-bold text-amber-400 uppercase">
                        01 / Who touches this first?
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        Not who manages it on paper. Who physically opens the file, logs the request, or types the initial name? Start where raw information enters.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-4 space-y-1">
                      <span className="font-mono text-xs font-bold text-sky-400 uppercase">
                        02 / Where does it sit waiting?
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        Bottlenecks are rarely active work. They are idle time: waiting on a second sign-off, waiting on a customer response, or sitting in an unread group inbox.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-4 space-y-1">
                      <span className="font-mono text-xs font-bold text-emerald-400 uppercase">
                        03 / What is the current workaround?
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        People always find the fastest path. If they keep sticky notes on monitors instead of using the software, the software is what failed, not the people.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-4 space-y-1">
                      <span className="font-mono text-xs font-bold text-rose-400 uppercase">
                        04 / Who gets blamed when it breaks?
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        If the person held accountable has zero control over the handoff steps before them, the workflow design is fundamentally flawed.
                      </p>
                    </div>
                  </div>
                </article>
              )}

              {/* NOTE 4: PROJECT DELAYS */}
              {activeNoteId === 'project-delays' && (
                <article className="space-y-6">
                  <div>
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
                      What actually causes project delays
                    </h1>
                    <p className="text-xs font-mono text-slate-500 mt-2">
                      // Insights from high-volume operations and software handoffs.
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    It is almost never that people are working slow. In fact, individual contributors are usually moving as fast as they can. Projects stall because of three structural gaps:
                  </p>

                  <div className="space-y-3.5">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 space-y-1.5">
                      <h2 className="text-sm font-semibold text-slate-100">Unclear Definition of &ldquo;Done&rdquo;</h2>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Tasks sit in 90% completion purgatory because stakeholders have different criteria for acceptance. A clear WBS and acceptance checklist fixes this on day one.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 space-y-1.5">
                      <h2 className="text-sm font-semibold text-slate-100">Hidden Task Dependencies</h2>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        Team B cannot start until Team A finishes, but Team A doesn&apos;t know they are on the critical path. Mapping dependencies upfront avoids bottleneck collisions.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4 space-y-1.5">
                      <h2 className="text-sm font-semibold text-slate-100">Feedback Loops That Take 5 Days</h2>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        When approval cadences only happen once a week in formal meetings, every minor question adds 7 days to the project timeline. Async review checkpoints eliminate this drag.
                      </p>
                    </div>
                  </div>
                </article>
              )}

              {/* NOTE 5: DAILY TOOLKIT */}
              {activeNoteId === 'daily-toolkit' && (
                <article className="space-y-6">
                  <div>
                    <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 tracking-tight">
                      Operating toolkit &amp; standards
                    </h1>
                    <p className="text-xs font-mono text-slate-500 mt-2">
                      // The frameworks and platforms that run my daily execution.
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 font-light leading-relaxed">
                    Tools don&apos;t manage projects—habits and clarity do. But having the right lean stack turns strategy into reality without unnecessary software bloat:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1.5">
                      <span className="font-mono text-xs text-amber-400 font-semibold block">Frameworks &amp; PM</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Work Breakdown Structures (WBS), Critical Path Analysis, Risk Logs, RACI matrices, and Agile sprint roadmaps.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1.5">
                      <span className="font-mono text-xs text-sky-400 font-semibold block">Organization &amp; Docs</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Notion workspaces, Asana boards, Microsoft Excel / Google Sheets financial models, and SOP documentation repositories.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1.5">
                      <span className="font-mono text-xs text-emerald-400 font-semibold block">Product &amp; Code</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        Next.js, React, Tailwind CSS, GitHub version control, Vercel deployments, and rapid interactive UI prototyping.
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-1.5">
                      <span className="font-mono text-xs text-purple-400 font-semibold block">Education &amp; Growth</span>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        University of Maine at Presque Isle (YourPace Degree Program), continuous study of operations frameworks and tech systems.
                      </p>
                    </div>
                  </div>
                </article>
              )}

            </div>

            {/* BOTTOM CONTEXT SWITCHER */}
            <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <span className="text-slate-400">Looking for off-the-clock builds and creative projects?</span>
              <Link href="/beyond" className="text-amber-400 hover:text-amber-300 font-semibold transition">
                Explore Beyond the Desk →
              </Link>
            </div>

          </div>

        </div>
      </MacWindow>
    </main>
  );
}
