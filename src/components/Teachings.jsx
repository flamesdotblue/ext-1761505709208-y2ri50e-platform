import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Book } from 'lucide-react';

const cards = [
  {
    icon: Leaf,
    title: 'Impermanence',
    text: 'Everything changes. Meeting change with softness frees us from grasping and aversion.',
    colorFrom: 'from-emerald-400/30',
    colorTo: 'to-teal-400/30',
  },
  {
    icon: Heart,
    title: 'Compassion',
    text: 'Kindness to self and others calms the heart and clarifies our intentions.',
    colorFrom: 'from-rose-400/30',
    colorTo: 'to-pink-400/30',
  },
  {
    icon: Book,
    title: 'Right View',
    text: 'Seeing things as they are — with curiosity and humility — opens the path to wise action.',
    colorFrom: 'from-sky-400/30',
    colorTo: 'to-cyan-400/30',
  },
];

export default function Teachings() {
  return (
    <section id="teachings" className="relative z-10 mx-auto w-[92%] md:w-11/12 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-semibold text-slate-800 dark:text-slate-100"
        >
          Gentle Teachings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-3 text-slate-600 dark:text-slate-300"
        >
          Simple reflections to cultivate clarity, ease, and mindful presence.
        </motion.p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/30 p-5 backdrop-blur-xl shadow-lg dark:bg-slate-900/30 dark:border-white/10"
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.colorFrom} ${c.colorTo}`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/50 bg-white/50 backdrop-blur-md text-slate-700 shadow-sm dark:bg-slate-800/50 dark:text-slate-100">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{c.text}</p>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
