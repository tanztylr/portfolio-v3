import Link from 'next/link';

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Tech Teens Inc",
      role: "Grant Research & Partnerships Volunteer",
      dates: "May 2026 – Present",
      location: "Lithia Springs, GA",
      broken: "Grant tracking, deadlines, and program impact data were scattered, risking missed funding opportunities and inconsistent reporting.",
      did: "Centralized project tracking, set up milestone reminders, and standardized attendance and outcome data into clean reporting packages.",
      changed: "Maintained a 100% on-time submission rate across active initiatives and streamlined budget and narrative preparation for leadership."
    },
    {
      company: "Cracker Barrel",
      role: "Operations Assistant Manager",
      dates: "Sept 2022 – Feb 2025",
      location: "Lithia Springs, GA",
      broken: "High-volume daily operations suffered from peak-hour bottlenecks, scheduling conflicts, and inconsistent team communication.",
      did: "Redesigned shift rotation schedules, standardized daily shift handoffs, and coached staff through clear, structured training workflows.",
      changed: "Reduced recurring operational delays by 24% and kept daily floor execution smooth across multi-department teams."
    },
    {
      company: "Assurant",
      role: "Claims Associate",
      dates: "Apr 2021 – Apr 2022",
      location: "Kennesaw, GA",
      broken: "HR and internal initiative tracking lacked central visibility, leading to delayed project deadlines and operational rework.",
      did: "Built a structured tracking dashboard for team projects, coordinated HRIS technology rollout milestones, and delivered system onboarding for new hires.",
      changed: "Standardized leadership progress updates, cut down operational rework, and improved new-hire software adoption rates."
    },
    {
      company: "1000 Degrees",
      role: "Operations Manager / Project Coordinator",
      dates: "Mar 2019 – Mar 2021",
      location: "Kennesaw, GA",
      broken: "Labor scheduling inefficiencies led to improper shift coverage, compliance risks, and slow onboarding for new team members.",
      did: "Overhauled labor rotation schedules, reorganized onboarding documentation, and managed recurring payroll and compliance deadlines.",
      changed: "Balanced shift coverage, reduced early-stage operational errors from new hires, and kept core business workflows running on schedule."
    },
    {
      company: "Planet Fitness",
      role: "Team Lead",
      dates: "Aug 2017 – Aug 2019",
      location: "Mableton, GA",
      broken: "Communication gaps during shift changes created inconsistent facility operations and member tracking issues.",
      did: "Led daily shift syncs, trained staff on member-tracking systems, and maintained strict operational and safety compliance.",
      changed: "Improved shift communication, ensured consistent service delivery, and maintained high performance evaluation ratings."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-slate-700">
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-24">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-12">
          <Link href="/" className="text-xs font-mono text-slate-400 hover:text-slate-200 transition">
            ← Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">Track Record</p>
          <h1 className="mt-2 text-4xl font-serif font-semibold text-slate-50 sm:text-5xl">
            Experience
          </h1>
          <p className="mt-4 text-base text-slate-400 font-sans max-w-2xl leading-relaxed">
            Operations and project coordination focused on execution over buzzwords: identifying structural friction, standardizing workflows, and driving measurable impact.
          </p>
        </header>

        {/* Timeline List */}
        <section className="space-y-12">
          {experiences.map((item) => (
            <div 
              key={`${item.company}-${item.role}`} 
              className="border-l border-slate-800 pl-6 sm:pl-8 py-2 relative"
            >
              {/* Dot marker */}
              <div className="absolute -left-[5px] top-4 h-2 w-2 rounded-full bg-slate-500"></div>

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <h2 className="text-xl font-serif font-semibold text-slate-100">
                    {item.company}
                  </h2>
                  <p className="text-sm font-medium text-slate-300">
                    {item.role}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-500 sm:text-right">
                  <span>{item.dates}</span>
                  <span className="block sm:inline sm:before:content-['·_']">{item.location}</span>
                </div>
              </div>

              {/* 3-Part Breakdown */}
              <div className="mt-6 space-y-3 font-sans text-sm leading-relaxed">
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4">
                  <div className="space-y-3">
                    <div>
                      <span className="text-xs font-mono uppercase text-rose-400/90 font-semibold block mb-1">
                        What was broken
                      </span>
                      <p className="text-slate-300">
                        {item.broken}
                      </p>
                    </div>

                    <div className="border-t border-slate-800/60 pt-3">
                      <span className="text-xs font-mono uppercase text-sky-400/90 font-semibold block mb-1">
                        What I did
                      </span>
                      <p className="text-slate-300">
                        {item.did}
                      </p>
                    </div>

                    <div className="border-t border-slate-800/60 pt-3">
                      <span className="text-xs font-mono uppercase text-emerald-400/90 font-semibold block mb-1">
                        What changed
                      </span>
                      <p className="text-slate-200 font-medium">
                        {item.changed}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </section>

        {/* Bottom Navigation */}
        <div className="border-t border-slate-800/60 mt-20 pt-12 flex justify-between items-center text-sm font-sans">
          <Link href="/about" className="text-slate-400 hover:text-white transition">
            ← About Approach
          </Link>
          <Link href="/beyond" className="text-slate-200 hover:text-white transition font-medium">
            Next: Beyond Page →
          </Link>
        </div>

      </div>
    </main>
  );
}
