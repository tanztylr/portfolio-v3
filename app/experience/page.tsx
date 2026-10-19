'use client';

import { useState } from 'react';
import Link from 'next/link';
import MacWindow from '../components/MacWindow';

interface PassRole {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  badge: string;
  badgeColor: string;
  gradient: string;
  borderAccent: string;
  dotColor: string;
  passId: string;
  whatWasBroken: string;
  whatIDid: string;
  whatChanged: string;
}

const CAREER_PASSES: PassRole[] = [
  {
    id: 'tech-teens',
    company: 'Tech Teens Inc.',
    role: 'Operations & Technical Program Lead',
    period: 'Dec 2025 · Oct 2026',
    location: 'Atlanta, GA (Hybrid)',
    badge: 'OPERATIONS & LEADERSHIP',
    badgeColor: 'border-sky-400/50 bg-sky-500/10 text-sky-300',
    gradient: 'from-sky-950/80 via-slate-900/90 to-slate-950',
    borderAccent: 'border-sky-500/50 hover:border-sky-400',
    dotColor: 'bg-sky-400',
    passId: 'PASS ID: TT-2026-LEAD',
    whatWasBroken:
      'Youth technical programs lacked standardized curriculum pacing, clear volunteer onboarding, and structured project milestones, creating inconsistent student engagement.',
    whatIDid:
      'Restructured weekly session roadmaps, built digital resource libraries for volunteers, and managed delivery timelines across cross-functional student technical initiatives.',
    whatChanged:
      'Delivered structured program completion rates, improved volunteer onboarding clarity, and established repeatable execution playbooks for technical workshops.',
  },
  {
    id: 'cracker-barrel',
    company: 'Cracker Barrel',
    role: 'Operations Assistant Manager',
    period: 'Sept 2022 · Feb 2025',
    location: 'Lithia Springs, GA',
    badge: 'OPERATIONS & LABOR',
    badgeColor: 'border-amber-400/50 bg-amber-500/10 text-amber-300',
    gradient: 'from-amber-950/80 via-slate-900/90 to-slate-950',
    borderAccent: 'border-amber-500/50 hover:border-amber-400',
    dotColor: 'bg-amber-400',
    passId: 'PASS ID: CB-2026-AUTH',
    whatWasBroken:
      'High-volume daily operations suffered from peak-hour floor bottlenecks, shift coverage gaps, and inconsistent cross-department communication.',
    whatIDid:
      'Redesigned shift rotation schedules, standardized opening and closing handoffs, and coached floor personnel through structured execution checklists.',
    whatChanged:
      'Reduced recurring operational delays by 24% while maintaining seamless daily floor execution across multi-department teams.',
  },
  {
    id: 'assurant',
    company: 'Assurant',
    role: 'Claims Associate',
    period: 'Apr 2021 · Apr 2022',
    location: 'Kennesaw, GA',
    badge: 'SYSTEMS ROLLOUT',
    badgeColor: 'border-blue-500/50 bg-blue-600/10 text-blue-300',
    gradient: 'from-blue-950/90 via-slate-900/90 to-slate-950',
    borderAccent: 'border-blue-500/50 hover:border-blue-400',
    dotColor: 'bg-blue-400',
    passId: 'PASS ID: AS-2026-AUTH',
    whatWasBroken:
      'Internal claims tracking lacked centralized milestone visibility, leading to delayed escalations and repetitive manual inquiries.',
    whatIDid:
      'Maintained structured tracking queues, monitored claim status lifecycles, and assisted team members with system adoption during software workflow transitions.',
    whatChanged:
      'Standardized leadership progress updates, cut down operational rework, and improved software adoption consistency.',
  },
  {
    id: 'thousand-degrees',
    company: '1000 Degrees Pizza',
    role: 'Operations Manager / Project Coordinator',
    period: 'Mar 2019 · Mar 2021',
    location: 'Kennesaw, GA',
    badge: 'COMPLIANCE & SCHEDULING',
    badgeColor: 'border-red-500/50 bg-red-600/10 text-red-300',
    gradient: 'from-red-950/80 via-slate-900/90 to-slate-950',
    borderAccent: 'border-red-500/50 hover:border-red-400',
    dotColor: 'bg-red-400',
    passId: 'PASS ID: TD-2026-AUTH',
    whatWasBroken:
      'Labor scheduling inefficiencies led to improper shift coverage, compliance bottlenecks, and slow onboarding for new team members.',
    whatIDid:
      'Overhauled labor rotation schedules, reorganized training documentation, and audited weekly compliance milestones and inventory logs.',
    whatChanged:
      'Balanced shift coverage, reduced onboarding errors, and kept core business workflows running smoothly on schedule.',
  },
  {
    id: 'planet-fitness',
    company: 'Planet Fitness',
    role: 'Team Lead',
    period: 'Aug 2017 · Aug 2019',
    location: 'Mableton, GA',
    badge: 'SHIFT EXECUTION',
    badgeColor: 'border-purple-400/50 bg-purple-600/15 text-purple-300',
    gradient: 'from-purple-950/90 via-slate-900/90 to-slate-950',
    borderAccent: 'border-purple-500/50 hover:border-purple-400',
    dotColor: 'bg-purple-400',
    passId: 'PASS ID: PF-2026-AUTH',
    whatWasBroken:
      'Communication gaps during shift handoffs created inconsistent facility upkeep and member account tracking delays.',
    whatIDid:
      'Led daily shift syncs, trained front-desk staff on account systems, and maintained strict operational compliance and safety standards.',
    whatChanged:
      'Improved shift communication consistency, kept operations aligned, and maintained high performance evaluation ratings.',
  },
];

export default function ExperiencePage() {
  // Set to 'tech-teens' so the top pass is fully expanded by default
  const [activePassId, setActivePassId] = useState<string>('tech-teens');

  const togglePass = (id: string) => {
    setActivePassId((prev) => (prev === id ? '' : id));
  };

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-4 sm:py-8">
      <MacWindow title="Wallet — Career Passes">
        <div className="p-5 sm:p-8 space-y-6">
          
          {/* TOP WALLET ACTION BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">
                  Career Passes
                </h1>
                <p className="text-xs font-mono text-slate-400 mt-0.5">
                  Select any card to inspect operational deliverables
                </p>
              </div>
            </div>

            <a
              href="/Tanza_Taylor_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-xs font-mono text-slate-200 transition hover:border-slate-500 hover:text-white shadow-md self-start sm:self-auto cursor-pointer"
            >
              <span>Export Pass (PDF)</span>
              <span>↓</span>
            </a>
          </div>

          {/* WALLET PASSES ACCORDION STACK */}
          <div className="flex flex-col space-y-3 pt-1">
            {CAREER_PASSES.map((pass) => {
              const isOpen = activePassId === pass.id;

              return (
                <div
                  key={pass.id}
                  onClick={() => togglePass(pass.id)}
                  className={`rounded-2xl border bg-gradient-to-br ${pass.gradient} ${pass.borderAccent} transition-all duration-300 shadow-2xl cursor-pointer overflow-hidden ${
                    isOpen ? 'ring-1 ring-white/10' : 'opacity-85 hover:opacity-100 hover:translate-y-[-2px]'
                  }`}
                >
                  {/* PASS CARD HEADER */}
                  <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-0.5 text-[10px] font-mono tracking-wider font-semibold uppercase ${pass.badgeColor}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${pass.dotColor}`} />
                          {pass.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {pass.period}
                        </span>
                      </div>
                      
                      <h2 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight pt-0.5">
                        {pass.company}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium">
                        {pass.role} · <span className="text-slate-400 font-light">{pass.location}</span>
                      </p>
                    </div>

                    {/* NFC SIGNAL ICON */}
                    <div className="shrink-0 text-slate-400 pt-1">
                      <svg className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z" />
                      </svg>
                    </div>
                  </div>

                  {/* EXPANDED PASS BODY */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 space-y-3.5 border-t border-white/10">
                      
                      <div className="rounded-xl border border-white/5 bg-black/30 p-4 space-y-1">
                        <span className="font-mono text-[10px] tracking-wider text-rose-400 font-semibold uppercase block">
                          What Was Broken
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                          {pass.whatWasBroken}
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/5 bg-black/30 p-4 space-y-1">
                        <span className="font-mono text-[10px] tracking-wider text-sky-400 font-semibold uppercase block">
                          What I Did
                        </span>
                        <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                          {pass.whatIDid}
                        </p>
                      </div>

                      <div className="rounded-xl border border-white/5 bg-black/30 p-4 space-y-1">
                        <span className="font-mono text-[10px] tracking-wider text-emerald-400 font-semibold uppercase block">
                          What Changed
                        </span>
                        <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                          {pass.whatChanged}
                        </p>
                      </div>

                      {/* PASS FOOTER METADATA */}
                      <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-slate-500">
                        <span>{pass.passId}</span>
                        <span>Tap to fold</span>
                      </div>

                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* BOTTOM WALLET FOOTER */}
          <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs sm:text-sm">
            <span className="text-slate-400">Want to inspect verified project blueprints?</span>
            <Link
              href="/projects"
              className="font-semibold text-amber-400 hover:text-amber-300 transition"
            >
              Explore Launchpad →
            </Link>
          </div>

        </div>
      </MacWindow>
    </main>
  );
}
