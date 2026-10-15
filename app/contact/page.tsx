'use client';

import { useState } from 'react';
import MacWindow from '../components/MacWindow';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tanztylr@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-8 lg:py-12">
      <MacWindow title="Messages — Tanza Taylor">
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[580px] rounded-xl overflow-hidden border border-slate-800/60 bg-slate-950/40">
          
          {/* LEFT CONVERSATION LIST (Spans 4 cols on desktop) */}
          <aside className="md:col-span-4 border-b md:border-b-0 md:border-r border-slate-800/80 bg-slate-900/30 flex flex-col justify-between">
            <div>
              <div className="p-4 border-b border-slate-800/60">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">Direct Line</span>
                <h2 className="text-sm font-semibold text-slate-200 mt-0.5">Inbox Channels</h2>
              </div>

              {/* Active Conversation Item */}
              <div className="p-3.5 bg-blue-600/15 border-l-2 border-blue-500">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-serif text-slate-200 font-semibold shrink-0">
                    TT
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-semibold text-white truncate">Tanza Taylor</span>
                      <span className="text-[10px] font-mono text-emerald-400">Online</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5 font-light">
                      Available for PM &amp; Ops roles
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Social Links Box */}
            <div className="p-4 border-t border-slate-800/60 bg-slate-950/60 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 block">External Reach</span>
              <div className="space-y-2 text-xs">
                <a
                  href="https://github.com/tanztylr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-white transition"
                >
                  <span>GitHub</span>
                  <span className="text-[11px] font-mono text-slate-500">@tanztylr</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tanzaneya-taylor"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between text-slate-300 hover:text-white transition"
                >
                  <span>LinkedIn</span>
                  <span className="text-[11px] font-mono text-slate-500">Connect →</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between text-slate-300 hover:text-white transition cursor-pointer text-left"
                >
                  <span>Email</span>
                  <span className="text-[11px] font-mono text-emerald-400">
                    {copied ? 'Copied ✓' : 'Copy Email'}
                  </span>
                </button>
              </div>
            </div>
          </aside>

          {/* RIGHT CHAT THREAD (Spans 8 cols on desktop) */}
          <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between space-y-6 bg-slate-950/30">
            
            {/* Thread Timestamp */}
            <div className="text-center">
              <span className="text-[11px] font-mono text-slate-500">
                iMessage · Today
              </span>
            </div>

            {/* Inbound Message Bubble (From Tanza) */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-serif text-xs text-slate-200 shrink-0">
                  TT
                </div>
                <div className="max-w-md rounded-2xl rounded-tl-sm bg-slate-900 border border-slate-800 p-4 text-xs text-slate-200 leading-relaxed shadow-lg font-light">
                  <p>
                    Hey! Thanks for stopping by my portfolio. Whether you need an operations lead to eliminate workflow bottlenecks, want to talk systems architecture, or have an open role, drop me a note below.
                  </p>
                </div>
              </div>
            </div>

            {/* Outbound Message Form Bubble (User sends to Tanza) */}
            <form
              action="https://formsubmit.co/tanztylr@gmail.com"
              method="POST"
              className="space-y-3 pt-4 border-t border-slate-800/60"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition"
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  rows={3}
                  required
                  placeholder="iMessage..."
                  className="w-full rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-xs text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition resize-none pr-12"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="absolute bottom-3.5 right-3 h-7 w-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center transition shadow-md cursor-pointer"
                >
                  ↑
                </button>
              </div>
            </form>

          </div>
        </div>
      </MacWindow>
    </main>
  );
}
