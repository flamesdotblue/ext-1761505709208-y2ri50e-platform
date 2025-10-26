import React from 'react';
import Hero from './components/Hero';
import Teachings from './components/Teachings';
import Meditation from './components/Meditation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf3ff] via-white to-[#eef7ff] text-slate-800">
      <Hero />
      <main className="relative z-10">
        <Teachings />
        <Meditation />
      </main>
      <Footer />
    </div>
  );
}
