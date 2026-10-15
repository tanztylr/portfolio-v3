'use client';

import Link from 'next/link';
import MacWindow from '../components/MacWindow';

interface ProjectApp {
  id: string;
  href: string;
  title: string;
  subtitle: string;
  domain: string;
  version: string;
  iconBg: string;
  iconSymbol: string;
  tags: string[];
  description: string;
}

const PROJECTS: ProjectApp[] = [
  {
    id: 'treat-truck',
    href: '/projects/treat-truck',
    title: 'Lilac Treat Truck',
    subtitle: 'Mobile Retail & Financial Modeling',
    domain: 'Operations & Finance',
    version: 'v1.4',
    iconBg: 'from-fuchsia-600 to-purple-800',
    iconSymbol: '🚚',
    tags: ['WBS Baseline', 'Dynamic Costing', 'Vendor Logistics'],
    description:
      'A comprehensive 35-page project management plan and financial model to stress-test retail viability and unit margins before capital outlay.',
  },
  {
    id: 'auracare-lite',
    href: '/projects/auracare-lite',
    title: 'AuraCare Lite',
    subtitle: 'Zero-Friction Emergency Architecture',
    domain: 'Digital Health Product',
    version: 'v2.0',
    iconBg: 'from-cyan-600 to-blue-800',
    iconSymbol: '🛡️',
    tags: ['Agile Roadmap', 'UN SDG Goal 3', 'Incident Logging'],
    description:
      'Lightweight emergency response specification designed for rapid execution during pre-seizure auras, bridging safety design with agile governance.',
  },
  {
    id: 'soul-table',
    href: '/projects/soul-table',
    title: 'The Soul Table',
    subtitle: 'Web Architecture & Launch Governance',
    domain: 'Digital Systems & UX',
    version: 'v1.0',
    iconBg: 'from-amber-600 to-orange-800',
    iconSymbol: '🍽️',
    tags: ['10-Section Wireframe', 'Options Analysis', 'QA Checklists'],
    description:
      'Complete 10-section web blueprint and operational governance roadmap built to scale community culinary experiences without generic booking tools.',
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-4">
      <MacWindow title="Launchpad — System Modules">
        <div className="p-2 sm:p-6 space-y-8">
          
          {/* HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                Application Suite
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-slate-100 font-semibold tracking-tight mt-1">
                Selected Projects
              </h1>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Verified blueprints spanning operations modeling, zero-friction product design, and digital architecture.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-[11px] text-slate-400">
                3 Production Releases
              </span>
            </div>
          </div>

          {/* APPLICATION GRID TILES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={project.href}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-800/90 bg-slate-950/60 p-6 shadow-xl transition-all duration-300 hover:border-slate-600 hover:bg-slate-900/50 hover:shadow-2xl hover:translate-y-[-4px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${project.iconBg} p-0.5 shadow-lg flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-105`}
                    >
                      <span className="drop-shadow-md">{project.iconSymbol}</span>
                    </div>

                    <span className="rounded-md border border-slate-800 bg-slate-900/90 px-2 py-0.5 text-[10px] font-mono text-slate-400">
                      {project.version}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">
                      {project.domain}
                    </span>
                    <h2 className="text-base font-semibold text-white tracking-tight mt-0.5 group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5 font-light">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light mt-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-800/80 bg-slate-900/60 px-2 py-0.5 text-[10px] text-slate-400 font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span>Inspect Blueprint</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* DOCK BAR STATUS FOOTER */}
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400">
            <span>All systems reviewed for schedule, scope, and technical governance.</span>
            <Link href="/contact" className="text-slate-300 hover:text-white transition font-medium">
              Request Project Access →
            </Link>
          </div>

        </div>
      </MacWindow>
    </main>
  );
}
