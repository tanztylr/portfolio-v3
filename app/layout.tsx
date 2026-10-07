'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      name: 'Home',
      href: '/',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      name: 'About',
      href: '/about',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      name: 'Projects',
      href: '/#work',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      name: 'Experience',
      href: '/experience',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      name: 'Beyond',
      href: '/beyond',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-slate-700">
        
        {/* DESKTOP FLOATING SQUIRCLE DOCK (Distinct Geometric Aesthetic) */}
        <aside className="hidden lg:flex fixed left-5 top-1/2 -translate-y-1/2 z-50 flex-col items-center gap-3 p-2 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl shadow-black/80">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                    : 'bg-slate-950/70 border border-slate-800/80 text-slate-400 hover:text-slate-100 hover:border-slate-700 hover:bg-slate-800/80'
                }`}
              >
                {item.icon}

                {/* Minimalist fly-out label */}
                <span className="pointer-events-none absolute left-14 hidden whitespace-nowrap rounded-xl bg-slate-900 border border-slate-800 px-3 py-1.5 text-xs font-mono tracking-wide text-slate-200 opacity-0 shadow-2xl transition-all duration-150 group-hover:block group-hover:opacity-100">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </aside>

        {/* MOBILE TOP BAR */}
        <header className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight text-slate-100">
            Tanza Taylor
          </Link>
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 transition"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* MOBILE OVERLAY */}
        {mobileMenuOpen && (
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />
        )}

        {/* MOBILE SLIDE-OUT DRAWER */}
        <div
          className={`lg:hidden fixed top-0 right-0 z-50 h-full w-[280px] bg-[#0b0f17] border-l border-slate-800 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/80">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-slate-900/60 border border-slate-800/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Content with padding for desktop dock & mobile header */}
        <div className="flex-1 pt-14 lg:pt-0 lg:pl-16">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="border-t border-slate-800/80 bg-[#0b0f17] py-8 text-xs font-mono text-slate-500 lg:pl-16">
          <div className="mx-auto flex max-w-5xl flex-col sm:flex-row items-center justify-between gap-4 px-6">
            <p>© {new Date().getFullYear()} Tanza Taylor. Built with Next.js & Tailwind CSS.</p>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-slate-200">GitHub</a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-slate-200">LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}