// components/SkillsSection.tsx
'use client';

import { useState } from 'react';

type CategoryKey = 'operations' | 'frontend' | 'tools';

interface SkillItem {
  name: string;
  description: string;
}

const skillsData: Record<CategoryKey, SkillItem[]> = {
  operations: [
    { name: 'Financial & Unit Costing Models', description: 'Building dynamic spreadsheets and pricing frameworks to calculate break-even points and profit margins.' },
    { name: 'Work Breakdown Structures (WBS)', description: 'Decomposing complex, chaotic project concepts into structured phase gates and actionable milestones.' },
    { name: 'Workflow & SOP Engineering', description: 'Standardizing daily handoffs, eliminating operational bottlenecks, and writing clear execution guides.' },
  ],
  frontend: [
    { name: 'Next.js & React', description: 'Building modern, component-driven web applications with dynamic routing and clean state management.' },
    { name: 'Tailwind CSS', description: 'Designing responsive, high-performance dark/light interfaces with custom layouts and typography.' },
    { name: 'Git & GitHub', description: 'Managing version control, repository branches, and seamless team collaboration.' },
  ],
  tools: [
    { name: 'Figma', description: 'Wireframing user interfaces, mapping customer journeys, and prototyping layout structures.' },
    { name: 'Vercel', description: 'Handling production deployments, domain management, and continuous live previews.' },
    { name: 'Notion & Asana', description: 'Structuring centralized tracking databases, documentation hubs, and team management workspaces.' },
  ],
};

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<CategoryKey>('operations');

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-3">
          Where I&apos;m strongest.
        </h2>
        <p className="text-slate-400">
          The practical operational frameworks and technical tools I use to ship real work.
        </p>
      </div>

      {/* Interactive Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
        {(['operations', 'frontend', 'tools'] as CategoryKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all capitalize ${
              activeTab === key
                ? 'bg-slate-100 text-slate-900 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {key === 'operations' ? 'Operations & PM' : key === 'frontend' ? 'Frontend Dev' : 'Tools & Stack'}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillsData[activeTab].map((skill, index) => (
          <div 
            key={index} 
            className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
