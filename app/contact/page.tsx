'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 lg:py-24">
      <header className="border-b border-slate-800/80 pb-12">
        <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
          Get in Touch
        </span>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl text-slate-100 font-semibold tracking-tight">
          Let's Connect
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
          Whether you have an ambiguous initiative that needs structure, an operational workflow ready to scale, or an open role in project management and operations—let's talk.
        </p>
      </header>

      <div className="mt-16 grid gap-16 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium block">
              Direct Inquiries
            </span>
            <a
              href="mailto:tanzaneya.taylor1@gmail.com"
              className="mt-2 block font-serif text-xl sm:text-2xl text-slate-100 hover:text-slate-300 transition break-all"
            >
              tanzaneya.taylor1@gmail.com
            </a>
            <p className="mt-2 text-xs text-slate-400 font-light">
              Fastest response for contract, advisory, and full-time inquiries.
            </p>
          </div>

          <div className="border-t border-slate-800/80 pt-8 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-500 font-medium block">
              Online Profiles & Documents
            </span>
            <ul className="space-y-3 text-xs text-slate-300">
              <li>
                <a
                  href="https://www.linkedin.com/in/tanzaneya-taylor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-slate-800/60 pb-2 hover:text-white transition"
                >
                  <span>LinkedIn Profile</span>
                  <span className="text-slate-500">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tanztylr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-slate-800/60 pb-2 hover:text-white transition"
                >
                  <span>GitHub Repository</span>
                  <span className="text-slate-500">↗</span>
                </a>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border-b border-slate-800/60 pb-2 hover:text-white transition"
                >
                  <span>Download Full Resume (PDF)</span>
                  <span className="text-slate-500">↓</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-2xl border border-slate-800/80 bg-slate-900/30 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="hidden" name="to_email" value="tanzaneya.taylor1@gmail.com" />

            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-slate-800 bg-[#0d121c] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-slate-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@organization.com"
                className="w-full rounded-xl border border-slate-800 bg-[#0d121c] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-slate-500 focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-400 font-medium mb-2">
                Project Scope or Inquiry
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Share a brief overview of the project, operational timeline, or role..."
                className="w-full rounded-xl border border-slate-800 bg-[#0d121c] px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-slate-500 focus:outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-xl bg-slate-100 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:bg-white transition disabled:opacity-50"
            >
              {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-xs text-emerald-400 font-medium text-center">
                Message delivered. I will be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-xs text-rose-400 font-medium text-center">
                Could not send directly through the form. Please email tanzaneya.taylor1@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
