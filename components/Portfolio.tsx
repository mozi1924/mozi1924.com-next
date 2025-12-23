import React, { useState } from 'react';
import { Project, ProjectType } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Cyberpunk Protagonist',
    type: ProjectType.MODELING,
    image: 'https://picsum.photos/800/600?random=1',
    description: 'High-poly character sculpt with retopology for game engines.',
    tags: ['Blender', 'Substance', 'Hard Surface']
  },
  {
    id: '2',
    title: 'Automated City Generator',
    type: ProjectType.ADDON,
    image: 'https://picsum.photos/800/600?random=2',
    description: 'Python-based Blender add-on to generate procedural city blocks.',
    tags: ['Python', 'BPY', 'Algorithm']
  },
  {
    id: '3',
    title: 'Mecha Rig v4',
    type: ProjectType.RIGGING,
    image: 'https://picsum.photos/800/600?random=3',
    description: 'Complex mechanical rigging with inverse kinematics and drivers.',
    tags: ['Rigging', 'Drivers', 'Animation']
  },
  {
    id: '4',
    title: 'Server Rack Visualization',
    type: ProjectType.NODES,
    image: 'https://picsum.photos/800/600?random=4',
    description: 'Procedural cables and blinking lights using Geometry Nodes.',
    tags: ['Geo Nodes', 'Cycles', 'Abstract']
  },
  {
    id: '5',
    title: 'Debian Workstation Setup',
    type: ProjectType.SERVER,
    image: 'https://picsum.photos/800/600?random=5',
    description: 'Custom headless render farm configuration using Debian Stable.',
    tags: ['Bash', 'SSH', 'Networking']
  },
  {
    id: '6',
    title: 'Organic Shader Pack',
    type: ProjectType.NODES,
    image: 'https://picsum.photos/800/600?random=6',
    description: 'Node-based procedural materials for organic skin and tissue.',
    tags: ['Shader Nodes', 'Eevee', 'Texture']
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectType | 'All'>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.type === filter);

  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Works</h2>
            <p className="text-zinc-400 max-w-xl">
              A collection of technical art, automation scripts, and system configurations.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {['All', ...Object.values(ProjectType)].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type as ProjectType | 'All')}
                className={`px-4 py-2 text-sm font-mono rounded-full border transition-all ${
                  filter === type 
                    ? 'bg-white text-zinc-950 border-white' 
                    : 'bg-transparent text-zinc-400 border-zinc-800 hover:border-zinc-500'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-fedora transition-colors duration-300">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-fedora uppercase tracking-wider">{project.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;