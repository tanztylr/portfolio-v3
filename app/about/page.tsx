import Link from 'next/link';

export default function About() {
  const metaList = [
    { label: "Role", value: "Project Manager & Operations Specialist" },
    { label: "City", value: "Atlanta, GA (Remote-friendly)" },
    { label: "Focus", value: "Operations, PM, Digital Products" },
    { label: "Industries", value: "Digital Health, Hospitality, Technology" },
    { label: "Email", value: "tanzaneya.taylor1@gmail.com", isLink: true, href: "mailto:tanzaneya.taylor1@gmail.com" },
    { label: "Status", value: "Open to PM & Operations Roles" },
  ];

  const skillCategories = [
    {
      category: "Project Management",
      skills: ["Scope & WBS Definition", "Risk & Milestone Tracking", "Stakeholder Alignment", "Agile & Waterfall Workflows"]
    },
    {
      category: "Operations & Systems",
      skills: ["Process Mapping & SOPs", "Workflow Optimization", "Cross-Functional Handoffs", "Resource & Capacity Planning"]
    },
    {
      category: "Product & Digital Delivery",
      skills: ["User Journey & IA Design", "Low-Friction Prototyping", "MVP Scope Prioritization", "Web & App Deployment"]
    },
    {
      category: "Platforms & Tooling",
      skills: ["Jira / Asana / Notion", "Next.js / Vercel", "Excel / Google Sheets"]
    }
  ];

  const framework = [
    {
      stage: "STRUCTURE",
      detail: "Before writing a plan, I find what’s broken. I sort out what’s actually needed, eliminate the friction, and give the team a clear roadmap they can follow."
    },
    {
      stage: "EXECUTION",
      detail: "Once direction is set, I manage momentum: coordinating cross-functional team members, tracking milestone health, logging decisions, and eliminating operational roadblocks before they stall timelines."
    },
    {
      stage: "RESULTS",
      detail: "Success is measurable operational stability: an adopted tool, an automated reporting rhythm, reduced cycle time, or a digital initiative deployed cleanly on schedule."
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

        {/* 1. Overview & Meta List */}
        <section className="mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">Overview</p>
          <h1 className="mt-2 text-3xl font-serif font-semibold text-slate-50 sm:text-4xl">
            Project Management & Operations Specialist
          </h1>
          <p className="mt-3 text-base text-slate-400 italic font-sans leading-relaxed">
            I help teams turn ambiguity and messy operations into clean, usable systems.
          </p>

          {/* Chevron Bullet List */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 border-y border-slate-800/80 py-6 text-sm font-sans">
            {metaList.map((item) => (
              <div key={item.label} className="flex items-baseline gap-2">
                <span className="text-slate-400 font-bold select-none">›</span>
                <span className="font-semibold text-slate-200">{item.label}:</span>
                {item.isLink ? (
                  <a href={item.href} className="text-slate-300 underline underline-offset-4 hover:text-white transition">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-slate-300">{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 2. Narrative Bio */}
        <section className="mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono">Background</p>
          <h2 className="mt-2 text-2xl font-serif font-semibold text-slate-50 sm:text-3xl">
            About Me
          </h2>
          
          <div className="mt-6 space-y-6 text-lg text-slate-300 font-sans leading-relaxed">
            <p>
              My interest in systems started with hands-on building: LEGO sets, mechanics, and breaking things down to see how individual pieces fit together. That curiosity taught me early on how small components connect to create complex, functional structures.
            </p>
            <p>
              My foundation comes from high-volume operations. Being on the ground showed me how quickly execution falls apart when communication breaks, roles blur, and manual handoffs create bottlenecks. That experience shaped how I approach project management, process standardization, and digital product delivery.
            </p>
            <p>
              Today, I work across many sectors including digital health, hospitality, workforce development, and business services taking puzzling initiatives and turning them into structured and reliable systems.
            </p>
            <p>
              I work best where things are messy: fragmented tool stacks, and scattered communication that need structure and follow-through.
            </p>
          </div>
        </section>

        {/* 3. Snapshot Strip */}
        <section className="mb-20 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-6">My Bio</p>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-sm font-sans">
            <div>
              <span className="text-slate-500 block text-xs font-mono">Location</span>
              <span className="text-slate-200 font-medium">Atlanta, Georgia</span>
            </div>
            <div>
              <span className="text-slate-500 block text-xs font-mono">Focus</span>
              <span className="text-slate-200 font-medium">Project Management, Operations</span>
            </div>
            <div>
              <span className="text-slate-500 block text-xs font-mono">Industries</span>
              <span className="text-slate-200 font-medium">Digital Health, Hospitality, Tech</span>
            </div>
            <div>
              <span className="text-slate-500 block text-xs font-mono">Interests</span>
              <span className="text-slate-200 font-medium">LEGO builds, Baking, Cars</span>
            </div>
          </div>
        </section>

        {/* 4. Core Skills & Capabilities (Replaces the repetitive cards) */}
        <section className="mb-20 border-t border-slate-800/60 pt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-8">Capabilities & Skills</p>
          <div className="grid gap-8 sm:grid-cols-2">
            {skillCategories.map((group) => (
              <div key={group.category} className="border-l border-slate-800 pl-4">
                <h3 className="text-lg font-serif font-medium text-slate-100">{group.category}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-400 font-sans">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-slate-500"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Problem-Solving Framework */}
        <section className="mb-20 border-t border-slate-800/60 pt-16">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono mb-8">How I Work</p>
          <div className="space-y-10">
            {framework.map((step) => (
              <div key={step.stage} className="grid md:grid-cols-[180px_1fr] gap-4">
                <span className="text-sm font-mono text-slate-400 tracking-wider font-semibold">{step.stage}</span>
                <p className="text-slate-300 leading-relaxed font-sans">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Bottom Navigation */}
        <section className="border-t border-slate-800/60 pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif text-slate-100">Explore the Work</h3>
            <p className="text-sm text-slate-400 mt-1">
              Review case studies across digital products, financial planning, and operational workflows.
            </p>
          </div>
          <Link
            href="/#work"
            className="rounded-full bg-slate-100 px-6 py-2.5 font-medium text-slate-950 transition hover:bg-slate-200 text-sm whitespace-nowrap w-fit"
          >
            View Projects →
          </Link>
        </section>

      </div>
    </main>
  );
}
