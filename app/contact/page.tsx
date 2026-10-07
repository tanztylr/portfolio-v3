import Link from 'next/link';

export default function ContactPage() {
  const contactLinks = [
    {
      label: "Email",
      value: "tanzaneya.taylor1@gmail.com",
      href: "mailto:tanzaneya.taylor1@gmail.com",
      description: "Direct inbox for opportunities, consulting, and collaboration"
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/tanzaneya-taylor",
      href: "https://www.linkedin.com/in/tanzaneya-taylor",
      description: "Professional network and project updates"
    },
    {
      label: "GitHub",
      value: "github.com/tanztylr",
      href: "https://github.com/tanztylr",
      description: "Repositories, open source experiments, and code bases"
    },
    {
      label: "Resume",
      value: "Download PDF",
      href: "/resume.pdf",
      description: "Complete career history and project leadership breakdown"
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Open to PM & Operations Roles
          </div>

          <h1 className="text-4xl font-serif font-semibold text-slate-50 sm:text-5xl">
            Let's Connect.
          </h1>
          <p className="mt-4 text-lg text-slate-300 font-sans max-w-2xl leading-relaxed">
            Whether you have an ambiguous initiative that needs structure, an operational workflow ready to scale, or an open role in project management and operations—let's talk.
          </p>
        </header>

        {/* Contact Links Grid */}
        <section className="space-y-4 mb-20">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') || item.href.endsWith('.pdf') ? "_blank" : undefined}
              rel={item.href.startsWith('http') ? "noreferrer" : undefined}
              className="group block p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-slate-600 hover:bg-slate-900/80 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 group-hover:text-slate-400 transition">
                    {item.label}
                  </span>
                  <span className="text-lg font-medium text-slate-200 group-hover:text-white transition">
                    {item.value}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500 group-hover:text-slate-300 transition">
                  Open link ↗
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400 font-sans">
                {item.description}
              </p>
            </a>
          ))}
        </section>

        {/* Bottom Navigation */}
        <div className="border-t border-slate-800/60 pt-12 flex justify-between items-center text-sm font-sans">
          <Link href="/beyond" className="text-slate-400 hover:text-white transition">
            ← Beyond Page
          </Link>
          <Link href="/" className="text-slate-200 hover:text-white transition font-medium">
            Back to Home →
          </Link>
        </div>

      </div>
    </main>
  );
}
