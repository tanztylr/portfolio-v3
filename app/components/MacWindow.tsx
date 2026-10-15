// components/MacWindow.tsx
'use client';

import { ReactNode } from 'react';

interface MacWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function MacWindow({ title, children, className = '' }: MacWindowProps) {
  return (
    <div className={`rounded-2xl border border-slate-800/80 bg-slate-900/60 backdrop-blur-md shadow-2xl overflow-hidden ${className}`}>
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/40 border-b border-slate-800/60">
        {/* Custom Purple, Blue, Orange Buttons */}
        <div className="flex items-center space-x-2">
          <button 
            type="button" 
            aria-label="Close window"
            className="w-3 h-3 rounded-full bg-purple-500/80 hover:bg-purple-400 transition-colors cursor-pointer" 
          />
          <button 
            type="button" 
            aria-label="Minimize window"
            className="w-3 h-3 rounded-full bg-blue-500/80 hover:bg-blue-400 transition-colors cursor-pointer" 
          />
          <button 
            type="button" 
            aria-label="Maximize window"
            className="w-3 h-3 rounded-full bg-orange-500/80 hover:bg-orange-400 transition-colors cursor-pointer" 
          />
        </div>

        {/* Window Title */}
        <span className="text-xs font-mono tracking-wider text-slate-400">
          {title}
        </span>

        {/* Spacer to balance the layout */}
        <div className="w-12" />
      </div>

      {/* Window Body Content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}