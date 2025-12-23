import React from 'react';
import { Box, Server, Code, Workflow } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: '3D Production',
    icon: <Box className="w-8 h-8 text-blender" />,
    description: 'Full-pipeline 3D asset creation including modeling, UV unwrapping, texturing, and rigging ready for animation or game engines.',
    skills: ['Hard Surface', 'Character Rigging', 'Retopology']
  },
  {
    title: 'Python Automation',
    icon: <Code className="w-8 h-8 text-yellow-500" />,
    description: 'Custom Blender add-on development to automate repetitive tasks and optimize your studio\'s production pipeline.',
    skills: ['BPY API', 'Pipeline Tools', 'Batch Processing']
  },
  {
    title: 'Procedural Design',
    icon: <Workflow className="w-8 h-8 text-purple-500" />,
    description: 'Advanced Geometry Nodes and Shader Nodes setups for parametric modeling and dynamic visual effects.',
    skills: ['Geometry Nodes', 'Shader Nodes', 'Parametric Models']
  },
  {
    title: 'Linux Systems',
    icon: <Server className="w-8 h-8 text-fedora" />,
    description: 'Server configuration, render farm setup, and Linux workstation optimization. Experienced with Fedora, Debian, and RHEL.',
    skills: ['Server Config', 'Bash Scripting', 'Render Farms']
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-900 border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-zinc-400">Available for freelance and contract work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-zinc-950 border border-zinc-800 rounded-xl hover:border-zinc-600 transition-colors">
              <div className="mb-6 bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center border border-zinc-800">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm font-mono text-zinc-500">
                    <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;