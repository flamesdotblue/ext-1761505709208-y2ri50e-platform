import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function Hero() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vK0TK9mHEhvY3bf1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-slate-900/60 dark:via-slate-900/30 dark:to-slate-900/70" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute bottom-0 -right-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
      </div>

      <header className="relative z-10">
        <nav className="mx-auto mt-6 w-[92%] md:w-11/12">
          <div className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/20 p-3 backdrop-blur-xl shadow-lg shadow-sky-900/5 dark:bg-slate-900/30 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 flex items-center justify-center text-sky-700 font-bold dark:bg-slate-800/50 dark:text-cyan-200">◎</div>
              <span className="font-semibold tracking-wide text-slate-700 dark:text-slate-100">Serene Path</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDark((d) => !d)}
                className="group relative inline-flex items-center gap-2 rounded-xl border border-white/40 bg-white/30 px-3 py-2 text-sm text-slate-700 backdrop-blur-md transition hover:bg-white/50 dark:bg-slate-800/40 dark:text-slate-100 dark:hover:bg-slate-800/60"
              >
                {dark ? (
                  <Sun className="h-4 w-4 opacity-80" />
                ) : (
                  <Moon className="h-4 w-4 opacity-80" />
                )}
                <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[70vh] w-[92%] flex-col items-center justify-center pt-16 text-center md:w-11/12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl bg-gradient-to-br from-slate-900 via-slate-700 to-sky-700 bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-sm dark:from-white dark:via-slate-100 dark:to-cyan-200 md:text-6xl"
        >
          A serene, modern space for reflection and Buddhist practice
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg dark:text-slate-300"
        >
          Gentle guidance, mindful tools, and timeless teachings — presented with contemporary clarity.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#teachings"
            className="rounded-xl border border-white/50 bg-white/40 px-5 py-3 text-sm font-medium text-slate-800 backdrop-blur-md shadow-sm transition hover:bg-white/60 dark:bg-slate-800/40 dark:text-slate-100 dark:hover:bg-slate-800/60"
          >
            Explore Teachings
          </a>
          <a
            href="#meditation"
            className="rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-sky-500/20 transition hover:from-sky-600 hover:to-cyan-600"
          >
            Begin Meditation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
