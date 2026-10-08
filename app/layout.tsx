'use client';

import './globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: 'Home' },
  { label: 'About', href: '/about', icon: 'User' },
  { label: 'Projects', href: '/projects', icon: 'Folder' },
  { label: 'Experience', href: '/experience', icon: 'Briefcase' },
  { label: 'Beyond', href: '/beyond', icon: 'Sparkles' },
  { label: 'Contact', href: '/contact', icon: 'Mail' },
];

function NavIcon({ name, className }: { name: string; className?: string }) {
  if (name === 'Home') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    );
  }
  if (name === 'User') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    );
  }
  if (name === 'Folder') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    );
  }
  if (name === 'Briefcase') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    );
  }
  if (name === 'Sparkles') {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash);
    updateHash();
    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);
  return (
    <html lang="en" className="scroll-smooth bg-[#0b0f17]">
      <body className="min-h-screen bg-[#0b0f17] text-slate-200 antialiased selection:bg-slate-700 selection:text-white">
        
        {/* DESKTOP FLOATING SQUIRCLE DOCK */}
        <nav
          aria-label="Desktop Navigation"
          className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-2 backdrop-blur-xl shadow-2xl lg:flex"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
          item.href === '/#work'
            ? pathname === '/' && currentHash === '#work'
            : item.href === '/'
            ? pathname === '/' && !currentHash
            : pathname === item.href;

            return (
              <div key={item.label} className="group relative flex items-center">
                <Link
                  href={item.href}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-sm shadow-emerald-500/20'
                      : 'text-slate-400 hover:border hover:border-slate-700 hover:bg-slate-900/60 hover:text-slate-100'
                  }`}
                  aria-label={item.label}
                >
                  <NavIcon name={item.icon} className="h-5 w-5" />
                </Link>

                {/* Hover Tooltip Pill */}
                <span
                  role="tooltip"
                  className="pointer-events-none absolute left-14 whitespace-nowrap rounded-lg border border-slate-800 bg-slate-900/95 px-3 py-1 text-xs font-medium text-slate-200 opacity-0 shadow-lg backdrop-blur-md transition-all duration-150 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </nav>

        {/* MOBILE TOP BAR */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-slate-800/60 bg-[#0b0f17]/90 px-6 py-4 backdrop-blur-md lg:hidden">
          <Link href="/" className="font-serif text-base font-medium tracking-tight text-slate-100">
            Tanza Taylor
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 text-slate-300 transition hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </header>

        {/* MOBILE SLIDE-OUT DRAWER */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            />
            <div className="relative ml-auto flex h-full w-3/4 max-w-xs flex-col border-l border-slate-800 bg-[#0b0f17] p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/60">
                <span className="font-serif text-sm font-semibold text-slate-200">Navigation</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg p-1 text-slate-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800/50 hover:text-white"
                  >
                    <NavIcon name={item.icon} className="h-5 w-5 text-slate-400" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MAIN PAGE VIEW */}
        <div className="lg:pl-20 min-h-[calc(100vh-80px)]">
          {children}
        </div>

        {/* GLOBAL EXECUTIVE FOOTER */}
        <footer className="border-t border-slate-800/60 bg-[#0b0f17] py-10 text-xs text-slate-400 lg:pl-20">
          <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-6">
            <p>© {new Date().getFullYear()} Tanza Taylor. Operations Strategy & Project Management.</p>
            <div className="flex gap-6 font-medium">
              <a href="https://github.com/tanztylr" target="_blank" rel="noreferrer" className="hover:text-slate-100 transition">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/tanzaneya-taylor" target="_blank" rel="noreferrer" className="hover:text-slate-100 transition">
                LinkedIn
              </a>
              <a href="mailto:tanzaneya.taylor1@gmail.com" className="hover:text-slate-100 transition">
                Email
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
