import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { subject: 'Modeling', A: 90, fullMark: 100 },
  { subject: 'Rigging', A: 85, fullMark: 100 },
  { subject: 'Python API', A: 95, fullMark: 100 },
  { subject: 'Geo Nodes', A: 80, fullMark: 100 },
  { subject: 'Linux SysAdmin', A: 90, fullMark: 100 },
  { subject: 'Texturing', A: 75, fullMark: 100 },
];

const SkillChart: React.FC = () => {
  return (
    <div className="h-[400px] w-full bg-zinc-900/50 rounded-xl border border-zinc-800 p-4">
      <h3 className="text-xl font-mono text-zinc-300 mb-4 text-center">Technical Competency Matrix</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#333" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'monospace' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Mozi A."
            dataKey="A"
            stroke="#3c6eb4"
            strokeWidth={2}
            fill="#3c6eb4"
            fillOpacity={0.3}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', color: '#fff' }}
            itemStyle={{ color: '#3c6eb4' }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;