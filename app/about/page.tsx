'use client';

import { useState } from 'react';
import Link from 'next/link';
import MacWindow from '../components/MacWindow';

interface NoteSection {
  id: string;
  title: string;
  preview: string;
  date: string;
}

const NOTES: NoteSection[] = [
  {
    id: 'story',
    title: 'How It Started',
    preview: 'Taking things apart, LEGOs, and seeing under the hood...',
    date: 'Oct 15',
  },
  {
    id: 'approach',
    title: 'My Approach',
    preview: 'At the intersection of people, process, and technology...',
    date: 'Oct 12',
  },
  {
    id: 'pillars',
    title: 'The Three Pillars',
    preview: 'Structure, Execution, Systems...',
    date: 'Sep 28',
  },
  {
    id: 'outcomes',
    title: 'Outcomes & Value',
    preview: 'Less manual work, cleaner communication, scalable systems...',
    date: 'Sep 14',
  },
  {
    id: 'off-clock',
    title: 'Off The Clock',
    preview: 'LEGO builds, creative tech experiments, and writing...',
    date: 'Aug 30',
  },
];

const PILLARS = [
  {
    title: 'Structure',
    description: 'Turning messy ideas into clear, organized plans so everyone knows where to start.',
  },
  {
    title: 'Execution',
    description: 'Keeping things moving forward and getting the work done right, without the chaos.',
  },
  {
    title: 'Systems',
    description: 'Setting up tools and workflows that make the work easier and stick around for the long haul.',
  },
];

const OUTCOMES = [
  {
    title: 'Less Manual Work',
    description: 'Automate repetitive tasks so teams stop wasting hours on things that should run on their own.',
  },
  {
    title: 'Smoother Operations',
    description: 'Clean up messy workflows, unclear handoffs, and scattered processes that slow execution down.',
  },
  {
    title: 'Better System Visibility',
    description: 'Connect tools, data, and updates so leadership sees progress without constantly chasing people.',
  },
  {
    title: 'Cleaner Communication',
    description: 'Build structure around status and deliverables so nothing gets lost in translation.',
  },
  {
    title: 'Scalable Systems',
    description: 'Create operational workflows that grow with the work instead of breaking under pressure.',
  },
  {
    title: 'Clearer Direction',
    description: 'Turn vague goals and complex challenges into practical next steps people can execute.',
  },
];

export default function AboutPage() {
  const [activeNote, setActiveNote] = useState<string>('story');

  return (
    <main className="mx-auto max-w-5xl px-4 py-4 sm:py-6">
      <MacWindow title="Notes">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[520px] rounded-xl overflow-hidden border border-slate-800/60 bg-slate-950/40">
          
          {/* LEFT COLUMN: NOTES LIST */}
          <aside className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-900/30 flex flex-col">
            <div className="p-4 border-b border-slate-800/60 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-medium text-amber-400/90 flex items-center gap-1.5">
                  📁 Notes
                </span>
                <p className="text-xs text-slate-400 mt-0.5">5 notes</p>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">iCloud</span>
            </div>

            <div className="divide-y divide-slate-800/40 overflow-y-auto">
              {NOTES.map((note) => {
                const isSelected = activeNote === note.id;
                return (
                  <button
                    key={note.id}
                    type="button"
                    onClick={() => setActiveNote(note.id)}
                    className={`w-full text-left p-3.5 transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/15 border-l-2 border-amber-400'
                        : 'hover:bg-slate-800/30'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className={`text-xs font-medium truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                        {note.title}
                      </h3>
                      <span className="text-[10px] text-slate-500 shrink-0 font-mono">{note.date}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 font-light">
                      {note.preview}
                    </p>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* RIGHT COLUMN: NOTE CANVAS */}
          <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-slate-950/30">
            
            <div className="space-y-6">
              {/* Note Timestamp */}
              <div className="text-center border-b border-slate-800/50 pb-3">
                <span className="text-[11px] font-mono text-slate-500">
                  {activeNote === 'story' && 'October 15, 2026 at 6:00 PM'}
                  {activeNote === 'approach' && 'October 12, 2026 at 2:15 PM'}
                  {activeNote === 'pillars' && 'September 28, 2026 at 11:30 AM'}
                  {activeNote === 'outcomes' && 'September 14, 2026 at 4:45 PM'}
                  {activeNote === 'off-clock' && 'August 30, 2026 at 8:20 PM'}
                </span>
              </div>

              {activeNote === 'story' && (
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-slate-100 font-medium">
                    How does this actually work?
                  </h2>
                  <div className="space-y-3.5 text-sm text-slate-300 leading-relaxed font-light">
                    <p>
                      Long before managing projects and building workflows, I was the kid taking things apart, building with LEGOs, and teaching myself tech just to see what was possible under the hood.
                    </p>
                    <p>
                      Today, I bring that same curiosity to operations and project management—helping teams take complex, messy ideas and rebuild them into clear, structured systems that actually move.
                    </p>
                    <p>
                      My focus stays on eliminating roadblocks, tightening team handoffs, and making daily execution smoother for everyone involved.
                    </p>
                  </div>
                </div>
              )}

              {activeNote === 'approach' && (
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-slate-100 font-medium">
                    At the intersection of people, process, and technology.
                  </h2>
                  <div className="space-y-3.5 text-sm text-slate-300 leading-relaxed font-light">
                    <p>
                      My approach comes down to basic curiosity: I like figuring out how things work, spotting where they break down, and building a cleaner, simpler path forward.
                    </p>
                    <p>
                      Whether that’s mapping out an end-to-end project, organizing a chaotic workflow, or designing digital tools, I focus on creating systems that make everyone’s job easier.
                    </p>
                  </div>

                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-4 grid grid-cols-2 gap-4 text-xs mt-6">
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">Location</span>
                      <span className="text-slate-200 font-medium mt-1 block">Atlanta, GA (Remote-Friendly)</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-mono text-slate-500 block">Focus</span>
                      <span className="text-slate-200 font-medium mt-1 block">PM · Operations · Digital Products</span>
                    </div>
                  </div>
                </div>
              )}

              {activeNote === 'pillars' && (
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-slate-100 font-medium">
                    What Defines My Work
                  </h2>
                  <div className="space-y-3">
                    {PILLARS.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="rounded-xl border border-slate-800/80 bg-slate-900/30 p-4"
                      >
                        <h3 className="text-sm font-semibold text-amber-400/90">{pillar.title}</h3>
                        <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeNote === 'outcomes' && (
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-slate-100 font-medium">
                    Measurable Outcomes
                  </h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {OUTCOMES.map((outcome) => (
                      <div
                        key={outcome.title}
                        className="rounded-xl border border-slate-800/70 bg-slate-900/30 p-4 space-y-1.5"
                      >
                        <h3 className="text-xs font-semibold text-slate-200">{outcome.title}</h3>
                        <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                          {outcome.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeNote === 'off-clock' && (
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-slate-100 font-medium">
                    Off The Clock
                  </h2>
                  <div className="space-y-3.5 text-sm text-slate-300 leading-relaxed font-light">
                    <p>
                      When I am not designing workflows, I am usually building something—putting together complex LEGO sets, experimenting with new software, or writing.
                    </p>
                    <p>
                      That hands-on tinker mindset carries straight into my daily operations work: I stay focused on turning plans into smooth, practical execution.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Project Navigation */}
            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between">
              <span className="text-xs text-slate-500">Ready to inspect the blueprints?</span>
              <Link
                href="/projects"
                className="text-xs font-medium text-amber-400/90 hover:text-amber-300 transition"
              >
                View Case Studies →
              </Link>
            </div>

          </div>
        </div>
      </MacWindow>
    </main>
  );
}
