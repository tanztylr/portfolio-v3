import Link from 'next/link';

interface ExperienceItem {
  role: string;
  organization: string;
  dates: string;
  location: string;
  broken: string;
  did: string;
  changed: string;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: 'Grant Research & Partnerships Volunteer',
    organization: 'Tech Teens Inc.',
    dates: 'May 2026 – Present',
    location: 'Lithia Springs, GA',
    broken:
      'Grant tracking, deadlines, and program impact data were scattered, risking missed funding opportunities and inconsistent reporting.',
    did: 'Centralized project tracking, set up automated milestone reminders, and standardized attendance and outcome data into clean reporting packages.',
    changed:
      'Maintained a 100% on-time submission rate across active initiatives while streamlining budget and narrative preparation for leadership.',
  },
  {
    role: 'Operations Assistant Manager',
    organization: 'Cracker Barrel',
    dates: 'Sept 2022 – Feb 2025',
    location: 'Lithia Springs, GA',
    broken:
      'High-volume daily operations suffered from peak-hour bottlenecks, scheduling conflicts, and inconsistent team communication.',
    did: 'Redesigned shift rotation schedules, standardized daily shift handoffs, and coached staff through clear, structured training workflows.',
    changed:
      'Reduced recurring operational delays by 24% while keeping daily floor execution smooth across multi-department teams.',
  },
  {
    role: 'Claims Associate',
    organization: 'Assurant',
    dates: 'Apr 2021 – Apr 2022',
    location: 'Kennesaw, GA',
    broken:
      'HR and internal initiative tracking lacked central visibility, leading to delayed project deadlines and operational rework.',
    did: 'Built a structured tracking dashboard for team projects, coordinated HRIS technology rollout milestones, and delivered system onboarding for new hires.',
    changed:
      'Standardized leadership progress updates, cut down operational rework, and improved new-hire software adoption rates.',
  },
  {
    role: 'Operations Manager / Project Coordinator',
    organization: '1000 Degrees',
    dates: 'Mar 2019 – Mar 2021',
    location: 'Kennesaw, GA',
    broken:
      'Labor scheduling inefficiencies led to improper shift coverage, compliance risks, and slow onboarding for new team members.',
    did: 'Overhauled labor rotation schedules, reorganized onboarding documentation, and managed recurring payroll and compliance deadlines.',
    changed:
      'Balanced shift coverage, reduced early-stage operational errors from new hires, and kept core business workflows running on schedule.',
  },
  {
    role: 'Team Lead',
    organization: 'Planet Fitness',
    dates: 'Aug 2017 – Aug 2019',
    location: 'Mableton, GA',
    broken:
      'Communication gaps during shift changes created inconsistent facility operations and member tracking issues.',
    did: 'Led daily shift syncs, trained staff on member-tracking systems, and maintained strict operational and safety compliance.',
    changed:
      'Improved shift communication, ensured consistent service delivery, and maintained high performance evaluation ratings.',
  },
];

const SKILLS = [
  'Project Planning & Lifecycle Management',
  'Workflow & Process Optimization',
  'Resource & Labor Scheduling',
  'Cross-Functional Team Coordination',
  'SOP & Onboarding Documentation',
  'Operational Compliance & Reporting',
];

export default function ExperiencePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
      {/* PAGE HEADER */}
      <header className="border-b border-slate-800/80 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
          Career Record
        </span>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-slate-100 font-semibold tracking-tight">
          Resume &amp; Experience
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
          Operations specialist and project coordinator focused on building clear workflows, eliminating operational bottlenecks, and keeping teams execution-ready.
        </p>
        <div className="mt-6">
          <a
            href="/resume.pdf"
            download="Tanza_Taylor_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
          >
            Download My Resume ↓
          </a>
        </div>
      </header>

      {/* TWO-COLUMN LAYOUT */}
      <div className="mt-16 grid gap-16 lg:grid-cols-12 items-start">
        {/* LEFT COLUMN: SIDEBAR SUMMARY, SKILLS & EDUCATION */}
        <aside className="lg:col-span-4 space-y-12 lg:sticky lg:top-28">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium">
              Profile
            </span>
            <h2 className="font-serif text-xl text-slate-100 font-medium">
              Tanza Taylor
            </h2>
            <p className="text-xs font-medium text-slate-300">
              Project Management &amp; Operations Lead
            </p>
            <p className="text-xs text-slate-400 font-light">
              Atlanta, GA (Remote-Friendly)
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium block">
              Core Skills
            </span>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {SKILLS.map((skill) => (
                <li key={skill} className="flex items-start gap-2.5">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 border-t border-slate-800/80 pt-8 text-xs">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium block">
              Education
            </span>
            <p className="font-medium text-slate-200">
              Project Management &amp; Operations Studies
            </p>
            <p className="text-slate-400 font-light leading-relaxed">
              Focus on process architecture, scope governance, and resource optimization.
            </p>
          </div>
        </aside>

        {/* RIGHT COLUMN: PROFESSIONAL EXPERIENCE TIMELINE */}
        <section className="lg:col-span-8 divide-y divide-slate-800/60">
          {EXPERIENCES.map((exp, idx) => (
            <article key={exp.role} className={`space-y-6 ${idx === 0 ? 'pb-14' : 'py-14'}`}>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3 className="font-serif text-2xl text-slate-100 font-medium tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-xs text-slate-400 font-medium">
                    {exp.dates}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">{exp.organization}</span>
                  <span>·</span>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* 3-Part PM Framework */}
              <div className="space-y-4 rounded-xl border border-slate-800/60 bg-slate-900/20 p-6 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                    What was broken
                  </span>
                  <p className="text-slate-300 font-light leading-relaxed">
                    {exp.broken}
                  </p>
                </div>

                <div className="border-t border-slate-800/40 pt-4">
                  <span className="text-xs uppercase tracking-wider text-slate-200 font-semibold block mb-1">
                    What I did
                  </span>
                  <p className="text-slate-300 font-light leading-relaxed">
                    {exp.did}
                  </p>
                </div>

                <div className="border-t border-slate-800/40 pt-4">
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mb-1">
                    What changed
                  </span>
                  <p className="text-slate-300 font-light leading-relaxed">
                    {exp.changed}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
