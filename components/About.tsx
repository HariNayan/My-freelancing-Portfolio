import React from 'react';
import { PROJECT_STATS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Reveal, Eyebrow, CountUp } from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 xl:py-32 bg-neutral-950 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <Reveal>
            <Eyebrow index="04" label="About" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-4 mb-6">The Studio</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-base xl:text-xl">
              <p>
                NAYAN is a creative studio founded by Hari Nayan, working where video meets design. For over four years we've produced short-form edits, motion graphics, and brand visuals for creators and startups.
              </p>
              <p>
                Everything we make has a job to do: an edit holds viewers to the end, a thumbnail earns the click, a brand gets remembered. If it doesn't move a number, it doesn't ship.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 xl:gap-12 mt-12 border-t border-neutral-800 pt-8">
              <div>
                <CountUp to={4} suffix="+" className="block text-2xl md:text-3xl font-bold text-white mb-1" />
                <span className="text-sm text-gray-500">Years Exp.</span>
              </div>
              <div>
                <CountUp to={999} suffix="+" className="block text-2xl md:text-3xl font-bold text-white mb-1" />
                <span className="text-sm text-gray-500">Projects</span>
              </div>
              <div>
                <CountUp to={20} suffix="+" className="block text-2xl md:text-3xl font-bold text-white mb-1" />
                <span className="text-sm text-gray-500">Happy Clients</span>
              </div>
            </div>
          </Reveal>

          {/* Chart Visualization */}
          <Reveal delay={0.15} className="bg-neutral-900 p-6 md:p-8 rounded-2xl border border-neutral-800">
             <h3 className="text-white font-semibold mb-6">Project Distribution (%)</h3>
             <div className="h-[300px] md:h-[350px] xl:h-[400px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                 <BarChart
                   data={PROJECT_STATS}
                   layout="vertical"
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                 >
                   <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
                   <XAxis type="number" hide />
                   <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fill: '#9ca3af', fontSize: 12 }} 
                      width={80}
                   />
                   <Tooltip 
                      contentStyle={{ backgroundColor: '#171717', borderColor: '#404040', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      cursor={{fill: 'transparent'}}
                   />
                   <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                      {PROJECT_STATS.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#fff' : '#525252'} />
                      ))}
                   </Bar>
                 </BarChart>
               </ResponsiveContainer>
             </div>
             <p className="text-xs text-center text-gray-600 mt-4">Data representing project volume over the last fiscal year.</p>
          </Reveal>

        </div>
      </div>
    </section>
  );
};


export default About;