import React from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(rgba(60, 110, 180, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(60, 110, 180, 0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fedora/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blender/10 rounded-full blur-[100px]"></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-4 px-3 py-1 border border-zinc-700 rounded-full bg-zinc-900/50 backdrop-blur-sm">
          <span className="text-sm font-mono text-zinc-400">Available for contract work</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6">
          <span className="block glitch-text">MOZI A.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto font-light">
          <span className="text-white font-medium">Technical 3D Artist</span> & 
          <span className="text-white font-medium"> Linux SysAdmin</span>.
          <br/>
          Building digital worlds on open source infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#portfolio" className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors">
            View Work
          </a>
          <a href="#contact" className="px-8 py-3 bg-zinc-900 text-white border border-zinc-700 font-bold rounded-lg hover:border-fedora transition-colors flex items-center justify-center gap-2">
            <Mail size={18} /> Contact Me
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6 text-zinc-500">
           {/* Social Proof Icons could go here */}
           <div className="flex items-center gap-2">
              <Github size={20} /> <span className="font-mono text-sm">github.com/mozi1924</span>
           </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-500">
        <ArrowDown />
      </div>
    </section>
  );
};

export default Hero;