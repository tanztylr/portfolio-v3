'use client';

import { useState } from 'react';
import MacWindow from '../components/MacWindow';

interface ExperiencePass {
  id: string;
  role: string;
  organization: string;
  dates: string;
  location: string;
  category: string;
  gradient: string;
  badgeColor: string;
  broken: string;
  did: string;
  changed: string;
}

const PASSES: ExperiencePass[] = [
  {
    id: 'cb',
    role: 'Operations Assistant Manager',
    organization: 'Cracker Barrel',
    dates: 'Sept 2022 – Feb 2025',
    location: 'Lithia Springs, GA',
    category: 'Operations & Labor',
    gradient: 'from-amber-950/70 via-slate-900 to-slate-950',
    badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-500/10',
    broken:
      'High-volume daily operations suffered from peak-hour bottlenecks, scheduling conflicts, and inconsistent team communication.',
    did: 'Redesigned shift rotation schedules, standardized daily shift handoffs, and coached staff through clear, structured training workflows.',
    changed:
      'Reduced recurring operational delays by 24% while keeping daily floor execution smooth across multi-department teams.',
  },
  {
    id: 'as',
    role: 'Claims Associate',
    organization: 'Assurant',
    dates: 'Apr 2021 – Apr 2022',
    location: 'Kennesaw, GA',
    category: 'Systems Rollout',
    gradient: 'from-blue-950/70 via-slate-900 to-slate-950',
    badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-500/10',
    broken:
      'HR and internal initiative tracking lacked central visibility, leading to delayed project deadlines and operational rework.',
    did: 'Built a structured tracking dashboard for team projects, coordinated HRIS technology rollout milestones, and delivered system onboarding for new hires.',
    changed:
      'Standardized leadership progress updates, cut down operational rework, and improved new-hire software adoption rates.',
  },
  {
    id: 'td',
    role: 'Operations Manager / Project Coordinator',
    organization: '1000 Degrees',
    dates: 'Mar 2019 – Mar 2021',
    location: 'Kennesaw, GA',
    category: 'Compliance & Scheduling',
    gradient: 'from-purple-950/70 via-slate-900 to-slate-950',
    badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-500/10',
    broken:
      'Labor scheduling inefficiencies led to improper shift coverage, compliance risks, and slow onboarding for new team members.',
    did: 'Overhauled labor rotation schedules, reorganized onboarding documentation, and managed recurring payroll and compliance deadlines.',
    changed:
      'Balanced shift coverage, reduced early-stage operational errors from new hires, and kept core business workflows running on schedule.',
  },
  {
    id: 'pf',
    role: 'Team Lead',
    organization: 'Planet Fitness',
    dates: 'Aug 2017 – Aug 2019',
    location: 'Mableton, GA',
    category: 'Shift Execution',
    gradient: 'from-emerald-950/70 via-slate-900 to-slate-950',
    badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10',
    broken:
      'Communication gaps during shift changes created inconsistent facility operations and member tracking issues.',
    did: 'Led daily shift syncs, trained staff on member-tracking systems, and maintained strict operational and safety compliance.',
    changed:
      'Improved shift communication, ensured consistent service delivery, and maintained high performance evaluation ratings.',
  },
];

export default function ExperiencePage() {
  const [activePassId, setActivePassId] = useState<string | null>('cb');

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 lg:py-12">
      <MacWindow title="Wallet">
        <div className="p-2 sm:p-4 space-y-6">
          
          {/* WALLET TOP APP BAR */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">💳</span>
              <div>
                <h1 className="text-sm font-semibold text-slate-100">Career Passes</h1>
                <p className="text-[11px] text-slate-400 font-light">
                  {activePassId ? 'Tap card to minimize' : 'Select a pass to inspect breakdown'}
                </p>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download="Tanza_Taylor_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-900/90 px-3.5 py-1 text-xs font-mono text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              <span>Export Pass</span>
              <span className="text-emerald-400">↓</span>
            </a>
          </div>

          {/* NATIVE OVERLAPPING WALLET PASS STACK */}
          <div className="relative pt-4 pb-24">
            {PASSES.map((pass, index) => {
              const isSelected = activePassId === pass.id;
              
              return (
                <div
                  key={pass.id}
                  onClick={() => setActivePassId(isSelected ? null : pass.id)}
                  style={{
                    // Stacked offset: cards naturally peek out from underneath each other
                    marginTop: index === 0 ? 0 : isSelected ? '16px' : '-70px',
                    zIndex: isSelected ? 40 : index + 10,
                  }}
                  className={`group relative rounded-3xl border transition-all duration-500 ease-out cursor-pointer overflow-hidden shadow-2xl bg-gradient-to-b ${pass.gradient} ${
                    isSelected
                      ? 'border-slate-500 ring-1 ring-white/20 translate-y-[-6px]'
                      : 'border-slate-800/90 hover:border-slate-600 hover:translate-y-[-10px]'
                  }`}
                >
                  {/* PASS TOP HEADER STRIP */}
                  <div className="p-5 sm:p-6 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider ${pass.badgeColor}`}>
                          {pass.category}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400">
                          {pass.dates}
                        </span>
                      </div>
                      
                      <h2 className="mt-2 text-lg sm:text-xl font-semibold text-white tracking-tight">
                        {pass.organization}
                      </h2>
                      <p className="text-xs text-slate-300 font-light mt-0.5">
                        {pass.role} · <span className="text-slate-400">{pass.location}</span>
                      </p>
                    </div>

                    {/* NFC / CONTACTLESS PASS ICON */}
                    <div className="h-8 w-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
                      <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />
                      </svg>
                    </div>
                  </div>

                  {/* EXPANDED PASS BODY (Only visible when card is active) */}
                  {isSelected && (
                    <div className="px-5 pb-6 sm:px-6 pt-2 space-y-4 animate-fadeIn">
                      
                      {/* Perforated Pass Divider */}
                      <div className="relative border-t border-dashed border-slate-700/80 my-2">
                        <div className="absolute -left-7 -top-2 h-4 w-4 rounded-full bg-[#0b0f17]" />
                        <div className="absolute -right-7 -top-2 h-4 w-4 rounded-full bg-[#0b0f17]" />
                      </div>

                      <div className="grid grid-cols-1 gap-3 pt-2">
                        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-1">
                          <span className="text-[10px] font-mono uppercase text-rose-400 font-semibold block">
                            What was broken
                          </span>
                          <p className="text-xs text-slate-300 font-light leading-relaxed">
                            {pass.broken}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-1">
                          <span className="text-[10px] font-mono uppercase text-sky-400 font-semibold block">
                            What I did
                          </span>
                          <p className="text-xs text-slate-300 font-light leading-relaxed">
                            {pass.did}
                          </p>
                        </div>

                        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-1">
                          <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block">
                            What changed
                          </span>
                          <p className="text-xs text-slate-300 font-light leading-relaxed">
                            {pass.changed}
                          </p>
                        </div>
                      </div>

                      {/* Barcode Pass Footer */}
                      <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/60">
                        <span>PASS ID: {pass.id.toUpperCase()}-2026-AUTH</span>
                        <span className="text-slate-400">Tap to fold</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </MacWindow>
    </main>
  );
}
