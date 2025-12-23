import React from 'react';
import { Terminal as TerminalIcon, Circle } from 'lucide-react';

const AboutTerminal: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-fedora/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans">
              Computer Science <span className="text-zinc-500">x</span> Art
            </h2>
            <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
              I bridge the gap between technical logic and artistic expression. 
              Graduating with a CS degree gave me the foundation to not just use tools, but to build them.
            </p>
            <p className="text-zinc-400 mb-6 text-lg leading-relaxed">
              My workflow is heavily rooted in the Linux ecosystem. I believe in open-source tools and the power of the command line to optimize creative pipelines.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-fedora/20 rounded-lg flex items-center justify-center text-fedora mb-2 font-bold">Fd</div>
                <span className="text-xs text-zinc-500 font-mono">Fedora</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-arch/20 rounded-lg flex items-center justify-center text-arch mb-2 font-bold">Ar</div>
                <span className="text-xs text-zinc-500 font-mono">Arch</span>
              </div>
               <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 mb-2 font-bold">Bl</div>
                <span className="text-xs text-zinc-500 font-mono">Blender</span>
              </div>
               <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 mb-2 font-bold">Py</div>
                <span className="text-xs text-zinc-500 font-mono">Python</span>
              </div>
            </div>
          </div>

          <div className="font-mono text-sm sm:text-base">
            <div className="w-full bg-zinc-900 rounded-lg border border-zinc-800 shadow-2xl overflow-hidden">
              <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2 border-b border-zinc-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-zinc-400 text-xs flex items-center justify-center gap-2">
                   <TerminalIcon size={12} /> mozi@workstation:~
                </div>
              </div>
              <div className="p-6 text-zinc-300 space-y-4">
                <div>
                  <span className="text-green-500">mozi@fedora</span>:<span className="text-blue-500">~</span>$ neofetch
                </div>
                <div className="flex gap-4">
                  <div className="hidden sm:block text-fedora pt-1">
<pre className="leading-tight">
{`      ,´-.
     / ,  . 
    |  |  | 
    |  |  |
    |  |  |
     \ '  /
      \`-_'  `}
</pre>
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-fedora font-bold">OS</span>: Fedora Linux 41 (Workstation)</p>
                    <p><span className="text-fedora font-bold">Host</span>: Custom Rig</p>
                    <p><span className="text-fedora font-bold">Kernel</span>: 6.8.9-200.fc41.x86_64</p>
                    <p><span className="text-fedora font-bold">Uptime</span>: 14 days, 3 hours</p>
                    <p><span className="text-fedora font-bold">Shell</span>: zsh 5.9</p>
                    <p><span className="text-fedora font-bold">DE</span>: GNOME 46 (Wayland)</p>
                    <p><span className="text-fedora font-bold">GPU</span>: NVIDIA RTX 4090</p>
                    <p><span className="text-fedora font-bold">Memory</span>: 64GiB</p>
                  </div>
                </div>
                <div>
                  <span className="text-green-500">mozi@fedora</span>:<span className="text-blue-500">~</span>$ cat education.txt
                </div>
                <div className="text-zinc-400 pl-4 border-l-2 border-zinc-700">
                  Bachelor of Science in Computer Science<br/>
                  Focus: Computer Graphics & Systems Architecture
                </div>
                <div className="animate-pulse">
                  <span className="text-green-500">mozi@fedora</span>:<span className="text-blue-500">~</span>$ _
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTerminal;