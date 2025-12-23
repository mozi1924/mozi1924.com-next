import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutTerminal from './components/AboutTerminal';
import SkillChart from './components/SkillChart';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import ChatAssistant from './components/ChatAssistant';

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200">
      <Navbar />
      
      <main>
        <Hero />
        
        <AboutTerminal />

        <div className="bg-zinc-950 py-12 px-4 border-y border-zinc-900">
          <div className="max-w-3xl mx-auto">
             <SkillChart />
          </div>
        </div>

        <Services />
        
        <Portfolio />

        <section id="contact" className="py-24 bg-zinc-900 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to collaborate?</h2>
            <p className="text-zinc-400 mb-8 text-lg">
              Whether you need a complex character rig, a Python script for Blender, or a headless server setup.
            </p>
            <a 
              href="mailto:contact@mozi1924.com" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-fedora rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-fedora/20"
            >
              contact@mozi1924.com
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-zinc-950 py-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-zinc-600 text-sm font-mono">
          <p>&copy; {new Date().getFullYear()} Mozi A. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind & Fedora Linux.</p>
        </div>
      </footer>

      <ChatAssistant />
    </div>
  );
}

export default App;