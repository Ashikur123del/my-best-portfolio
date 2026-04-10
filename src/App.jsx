import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatIDo from './components/WhatIDo';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * Fresh React Portfolio Project
 * Built with: Vite 6, Tailwind 3, Framer Motion, React Icons
 */
function App() {
  return (
    <div className="bg-slate-950 font-outfit selection:bg-cyan-500/30 selection:text-white min-h-screen">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <WhatIDo />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
