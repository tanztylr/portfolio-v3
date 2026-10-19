'use client';

import { useState } from 'react';
import Link from 'next/link';
import MacWindow from '../components/MacWindow';

interface NoteEntry {
  id: string;
  title: string;
  date: string;
  time: string;
  preview: string;
  folder: string;
  body: React.ReactNode;
}

const NOTES: NoteEntry[] = [
  {
    id: 'workflow-audit',
    title: 'Questions before touching any workflow',
    date: 'Oct 15',
    time: 'October 15, 2026 at 11:42 PM',
    folder: 'Operations Playbook',
    preview: '1. Who touches this first? 2. Where does it sit waiting? 3. What is the current workaround?...',
    body: (
      <div className="space-y-4 text-sm sm:text-base text-slate-200 font-light leading-relaxed">
        <p className="text-slate-400 italic text-xs font-mono">
          // Jotted down after watching another team try to automate a process before understanding who actually does the work.
        </p>

        <p>
          Never build a new dashboard, rule, or SOP until you walk the floor and answer these four questions:
        </p>

        <div className="space-y-3 pl-2">
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
            <span className="font-mono text-xs text-amber-400 font-semibold block mb-1">01 / WHO TOUCHES THIS FIRST?</span>
            <p className="text-slate-300 text-xs sm:text-sm">
              Not who manages it on paper. Who physically opens the box, logs the ticket, or types the initial name? Start where the raw information enters.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
            <span className="font-mono text-xs text-sky-400 font-semibold block mb-1">02 / WHERE DOES IT SIT WAITING?</span>
            <p className="text-slate-300 text-xs sm:text-sm">
              Bottlenecks are rarely active work. They are idle time: waiting on a second sign-off, waiting on a customer response, or sitting in an unread group inbox.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
            <span className="font-mono text-xs text-emerald-400 font-semibold block mb-1">03 / WHAT IS THE CURRENT WORKAROUND?</span>
            <p className="text-slate-300 text-xs sm:text-sm">
              People always find the fastest path. If they keep sticky notes on monitors instead of using the software, the software is what failed, not the people.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-4">
            <span className="font-mono text-xs text-rose-400 font-semibold block mb-1">04 / WHO GETS BLAMED WHEN IT BREAKS?</span>
            <p className="text-slate-300 text-xs sm:text-sm">
              If the person held accountable has zero control over the handoff steps before them, the workflow design is fundamentally flawed.
            </p>
          </div>
        </div>

        <p className="text-xs font-mono text-slate-400 pt-2">
          Rule: Fix the handoff before you touch the software.
        </p>
      </div>
    ),
  },
  {
    id: 'lego-vs-projects',
    title: 'LEGO manuals vs real world ops',
    date: 'Oct 12',
    time: 'October 12, 2026 at 2:15 PM',
    folder: 'Field Thoughts',
    preview: 'LEGO instruction booklets are pure luxury: every step is numbered, every piece exists, zero missing parts...',
    body: (
      <div className="space-y-4 text-sm sm:text-base text-slate-200 font-light leading-relaxed">
        <p className="text-slate-400 italic text-xs font-mono">
          // While staring at 3,000 loose pieces of the world map set.
        </p>

        <p>
          LEGO manuals are a masterclass in project design. Every single step is numbered. The exact pieces needed are shown in the corner. If you follow the sequence, the build is guaranteed to hold together.
        </p>

        <p>
          Real life operations is the exact opposite.
        </p>

        <ul className="space-y-2 text-xs sm:text-sm text-slate-300 pl-4 list-disc marker:text-amber-400">
          <li>Half the pieces arrive two weeks late from a vendor who stopped answering emails.</li>
          <li>Someone skipped steps 12 through 16 because they thought it looked faster.</li>
          <li>Two people are trying to build the same corner using different versions of the plan.</li>
        </ul>

        <p>
          That is why operations work matters so much to me. My job is essentially writing the missing manual: giving people the exact pieces, clear sequencing, and error checks so the entire team can build something stable without burning out.
        </p>
      </div>
    ),
  },
  {
    id: 'baking-variables',
    title: 'The 325°F rule (variables matter)',
    date: 'Sep 28',
    time: 'September 28, 2026 at 9:08 PM',
    folder: 'The Kitchen Lab',
    preview: 'If a cake pop batch turns out dense, you cannot change the milk, the oven temp, and the bake time all at once...',
    body: (
      <div className="space-y-4 text-sm sm:text-base text-slate-200 font-light leading-relaxed">
        <p className="text-slate-400 italic text-xs font-mono">
          // Troubleshooting a batch of strawberry pops with scorched bottoms.
        </p>

        <p>
          Box instructions always say 350°F. And at 350°F, the bottom crust always turns brown and hard before the center finishes baking, ruining the soft crumble needed for cake pops.
        </p>

        <p>
          The fix was dropping to 325°F, swapping water for whole milk, and using melted butter. Perfect moisture, zero browned crust.
        </p>

        <p className="font-medium text-slate-100">
          The operations lesson:
        </p>

        <p className="text-slate-300 text-xs sm:text-sm pl-3 border-l-2 border-pink-400">
          When a process fails, you cannot change three variables at once. If you adjust the schedule, the staffing, and the tool on the same day, you have no idea which one fixed the problem or which one broke it worse. Change one lever, observe the outcome, then adjust the next.
        </p>
      </div>
    ),
  },
  {
    id: 'why-projects-delay',
    title: 'What actually causes project delays',
    date: 'Sep 14',
    time: 'September 14, 2026 at 4:30 PM',
    folder: 'Operations Playbook',
    preview: 'It is almost never that people are working slow. In fact, most people are running at 110% trying to patch holes...',
    body: (
      <div className="space-y-4 text-sm sm:text-base text-slate-200 font-light leading-relaxed">
        <p className="text-slate-400 italic text-xs font-mono">
          // Observations across retail floor management, claims tracking, and launch roadmaps.
        </p>

        <p>
          When a deadline slips, leaders usually assume the team was moving too slow. In reality, it is almost always one of three structural bottlenecks:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/40">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-100">1. Ambiguous definitions of &ldquo;Done&rdquo;</h4>
            <p className="text-xs text-slate-300 font-light mt-1">
              One person thinks &ldquo;done&rdquo; means the spreadsheet is drafted. The next person thinks it means leadership approved it and sent it to payroll. That disconnect wastes days.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/40">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-100">2. Unclear escalation paths</h4>
            <p className="text-xs text-slate-300 font-light mt-1">
              A team member hits a blocker, emails one person, and waits 72 hours for a response because nobody established who to call when a decision needs to happen in 15 minutes.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/40">
            <h4 className="text-xs sm:text-sm font-semibold text-slate-100">3. Scope creep masquerading as &ldquo;just a quick tweak&rdquo;</h4>
            <p className="text-xs text-slate-300 font-light mt-1">
              Five minor additions that take &ldquo;ten minutes each&rdquo; will quietly derail a three-week critical path every single time.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'my-toolkit',
    title: 'Tools I actually open every single day',
    date: 'Aug 30',
    time: 'August 30, 2026 at 8:20 PM',
    folder: 'Tech & Setup',
    preview: 'No bloated enterprise stacks required. The core tools that keep my mind organized and projects on schedule...',
    body: (
      <div className="space-y-4 text-sm sm:text-base text-slate-200 font-light leading-relaxed">
        <p className="text-slate-400 italic text-xs font-mono">
          // The lean stack that keeps work moving without endless software subscription fatigue.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-1">
            <span className="font-semibold text-slate-100 block">VS Code &amp; Next.js</span>
            <p className="text-slate-400 font-light">Where ideas turn into live interactive interfaces.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-1">
            <span className="font-semibold text-slate-100 block">Notion</span>
            <p className="text-slate-400 font-light">My central brain for study notes, project trackers, and drafts.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-1">
            <span className="font-semibold text-slate-100 block">Google Sheets / Excel</span>
            <p className="text-slate-400 font-light">For unit costing, COGS modeling, and budget baselines.</p>
          </div>

          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/50 space-y-1">
            <span className="font-semibold text-slate-100 block">Physical Sticky Notes &amp; Timers</span>
            <p className="text-slate-400 font-light">Because nothing beats writing down the top three tasks for today.</p>
          </div>
        </div>

        <p className="text-xs text-slate-400 pt-2 font-mono">
          Setup: Atlanta, GA · MacBook + Windows desktop · Coffee nearby.
        </p>
      </div>
    ),
  },
];

export default function AboutPage() {
  const [activeNoteId, setActiveNoteId] = useState<string>('workflow-audit');
  const activeNote = NOTES.find((n) => n.id === activeNoteId) || NOTES[0];

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-8 py-8 lg:py-12">
      <MacWindow title="Notes — iCloud">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[620px] rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/40">
          
          {/* LEFT COLUMN: NOTES LIST */}
          <aside className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-900/30 flex flex-col">
            <div className="p-5 border-b border-slate-800/60 flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1.5 font-mono">
                  📁 Personal Notes
                </span>
                <p className="text-xs text-slate-400 mt-1">{NOTES.length} entries</p>
              </div>
              <span className="text-xs text-slate-500 font-mono">iCloud</span>
            </div>

            <div className="divide-y divide-slate-800/40 overflow-y-auto">
              {NOTES.map((note) => {
                const isSelected = activeNote.id === note.id;
                return (
                  <button
                    key={note.id}
                    type="button"
                    onClick={() => setActiveNoteId(note.id)}
                    className={`w-full text-left p-4 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-l-2 border-amber-400'
                        : 'hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className={`text-sm font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {note.title}
                      </h3>
                      <span className="text-xs text-slate-500 shrink-0 font-mono">{note.date}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block mt-0.5">
                      {note.folder}
                    </span>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1 font-light">
                      {note.preview}
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT COLUMN: NOTE CANVAS */}
          <div className="md:col-span-8 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-slate-950/30">
            
            <div className="space-y-6">
              {/* Note Timestamp Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800/50 pb-4 gap-2">
                <span className="text-xs font-mono text-slate-500">
                  {activeNote.time}
                </span>
                <span className="text-xs font-mono text-amber-400/90 self-start sm:self-auto">
                  📁 {activeNote.folder}
                </span>
              </div>

              {/* Note Title */}
              <h2 className="font-serif text-2xl sm:text-3xl text-slate-100 font-semibold tracking-tight">
                {activeNote.title}
              </h2>

              {/* Note Body */}
              <div>{activeNote.body}</div>
            </div>

            {/* Bottom Navigation Link */}
            <div className="pt-6 border-t border-slate-800/60 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-400">Want to see these principles in real projects?</span>
              <Link
                href="/projects"
                className="font-semibold text-amber-400 hover:text-amber-300 transition"
              >
                Inspect Blueprints →
              </Link>
            </div>

          </div>
        </div>
      </MacWindow>
    </main>
  );
}
