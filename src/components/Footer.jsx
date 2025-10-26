import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-white/50 bg-white/40 backdrop-blur-xl dark:bg-slate-900/30 dark:border-white/10">
      <div className="mx-auto w-[92%] md:w-11/12 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} Serene Path. Crafted with mindfulness.
          </p>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#teachings" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Teachings</a>
            <a href="#meditation" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Meditation</a>
            <a href="#" className="text-slate-600 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
