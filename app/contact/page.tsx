import Link from 'next/link';
import MacWindow from '../components/MacWindow';

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <MacWindow title="Messages — New Message">
        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-slate-800/80 pb-6">
            <span className="text-xs uppercase tracking-[0.2em] text-emerald-400 font-medium">
              Direct Channel
            </span>
            <h1 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-100 font-medium">
              Let&apos;s Connect
            </h1>
            <p className="mt-2 text-sm text-slate-400 font-light">
              Send a note directly to my inbox. I read everything that lands here.
            </p>
          </div>

          {/* Messages Bubble Layout / Form & Links */}
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 space-y-4 text-xs">
                <div>
                  <span className="text-slate-500 block uppercase tracking-wider text-[10px]">To</span>
                  <span className="text-slate-200 font-medium mt-0.5 block font-mono">Tanza Taylor &lt;tanztaylor@gmail.com&gt;</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase tracking-wider text-[10px]">Status</span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 font-medium">Available for PM & Operations Roles</span>
                  </div>
                </div>
              </div>

              {/* Direct Social / Contact Links */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 space-y-3 text-xs">
                <span className="text-slate-500 block uppercase tracking-wider text-[10px]">Other Channels</span>
                <div className="flex flex-col space-y-2">
                  <a 
                    href="https://github.com/tanztylr" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>GitHub</span>
                    <span className="font-mono text-slate-500">github.com/tanztylr</span>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>LinkedIn</span>
                    <span className="font-mono text-slate-500">Connect →</span>
                  </a>
                  <a 
                    href="mailto:tanzataylor@gmail.com" 
                    className="text-slate-300 hover:text-white transition flex items-center justify-between"
                  >
                    <span>Email</span>
                    <span className="font-mono text-slate-500">tanzataylor@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form 
                action="https://formsubmit.co/tanzataylor@gmail.com" 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-slate-600 focus:outline-none transition"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-slate-600 focus:outline-none transition"
                    placeholder="your.email@domain.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-slate-600 focus:outline-none transition resize-none"
                    placeholder="Let's talk about an operations lead role..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-slate-100 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-white hover:shadow-lg cursor-pointer"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </MacWindow>
    </main>
  );
}
