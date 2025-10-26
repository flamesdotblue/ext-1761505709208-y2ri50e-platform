import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    title: 'Settle the body',
    text: 'Sit comfortably. Soften the jaw and shoulders. Let your hands rest gently.',
    duration: 10,
  },
  {
    title: 'Follow the breath',
    text: 'Notice the natural rise and fall. No need to change anything — just feel.',
    duration: 10,
  },
  {
    title: 'Meet thoughts kindly',
    text: 'When the mind wanders, acknowledge it softly and return to the breath.',
    duration: 10,
  },
  {
    title: 'Rest in awareness',
    text: 'Let sounds, sensations, and thoughts come and go in a spacious field of awareness.',
    duration: 10,
  },
];

export default function Meditation() {
  const [index, setIndex] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const current = steps[index];

  React.useEffect(() => {
    if (!running) return;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % steps.length);
    }, current.duration * 1000);
    return () => clearTimeout(id);
  }, [running, index]);

  return (
    <section id="meditation" className="relative z-10 mx-auto w-[92%] md:w-11/12 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-slate-800 dark:text-slate-100"
        >
          Soft Guided Meditation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-slate-600 dark:text-slate-300"
        >
          A gentle timer with mindful prompts. Move at your own pace.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/30 p-6 backdrop-blur-xl shadow-xl dark:bg-slate-900/30 dark:border-white/10 lg:col-span-2">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-200/30 to-cyan-200/30" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Mindful Steps</h3>
              <div className="text-xs text-slate-500 dark:text-slate-400">{index + 1} / {steps.length}</div>
            </div>
            <div className="mt-6 h-36 md:h-40 flex items-center justify-center rounded-xl border border-white/40 bg-white/50 p-4 text-center backdrop-blur-md dark:bg-slate-800/40">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">{current.title}</div>
                  <div className="mt-2 text-lg md:text-xl text-slate-800 dark:text-slate-100">{current.text}</div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 w-8 rounded-full transition ${i === index ? 'bg-sky-500' : 'bg-slate-300/70 dark:bg-slate-600/70 hover:bg-slate-400/70'}`}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRunning((r) => !r)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium text-white shadow transition ${running ? 'bg-rose-500 hover:bg-rose-600' : 'bg-sky-500 hover:bg-sky-600'}`}
                >
                  {running ? 'Pause' : 'Auto-play'}
                </button>
                <button
                  onClick={() => { setRunning(false); setIndex(0); }}
                  className="rounded-xl border border-white/50 bg-white/40 px-4 py-2 text-sm font-medium text-slate-800 backdrop-blur-md transition hover:bg-white/60 dark:bg-slate-800/40 dark:text-slate-100 dark:hover:bg-slate-800/60"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 rounded-full bg-white/40 blur-3xl" />
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/40 bg-white/30 p-6 backdrop-blur-xl shadow-xl dark:bg-slate-900/30 dark:border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-teal-200/30" />
          <div className="relative z-10">
            <h4 className="text-lg font-semibold text-slate-800 dark:text-white">A Quiet Reminder</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Peace grows in ordinary moments. Even three mindful breaths can change the day.
            </p>
            <figure className="mt-6 rounded-xl border border-white/40 bg-white/50 p-4 backdrop-blur-md dark:bg-slate-800/40">
              <blockquote className="text-slate-800 dark:text-slate-100">
                “Just as rain penetrates a house with a thatched roof, so passion penetrates an undeveloped mind. Train the mind well.”
              </blockquote>
              <figcaption className="mt-2 text-xs text-slate-500 dark:text-slate-400">Dhammapada</figcaption>
            </figure>
            <div className="mt-6">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-full rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 transition hover:from-emerald-600 hover:to-teal-600"
              >
                Return to the Breath
              </button>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
