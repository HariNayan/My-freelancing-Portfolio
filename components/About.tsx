import React from 'react';
import { Reveal, Eyebrow } from './Reveal';

/* Tools are context, not a selling point — they live here rather than
   in a carousel near the top of the page. */
const TOOLS = [
  'Premiere Pro',
  'After Effects',
  'DaVinci Resolve',
  'Photoshop',
  'Illustrator',
  'Figma',
  'Blender',
  'Lightroom',
  'InDesign',
  'CapCut',
];

const About: React.FC = () => {
  return (
    <section id="about" className="bg-ground px-4 md:px-6 py-12 md:py-[72px]">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow index="05" label="About" />
            <h2 className="text-3xl md:text-[2.5rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mt-5 mb-7 text-balance">
              Who you&rsquo;d be working with
            </h2>

            <div className="space-y-5 text-[15px] md:text-lg text-muted leading-relaxed">
              <p>
                I&rsquo;m Hari Nayan. I work where video meets design &mdash; four years of
                short-form edits, motion graphics and brand visuals, first for creators,
                increasingly for startups and the people building them.
              </p>
              <p>
                You deal with me directly. There&rsquo;s no account manager between the brief and
                the person cutting the footage, which is usually why the second draft is closer than
                it has any right to be.
              </p>
              <p className="text-ink">
                Everything I make has a job to do: a demo has to make the product make sense, an ad
                has to survive the scroll, a brand has to still look like itself on the tenth video.
                If it doesn&rsquo;t do the job, it doesn&rsquo;t ship.
              </p>
            </div>
          </div>

          <div className="mt-10 md:mt-12 pt-8 border-t border-hairline">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-4">
              Working in
            </p>
            <ul className="flex flex-wrap gap-2">
              {TOOLS.map((tool) => (
                <li key={tool} className="text-xs text-muted bg-sunken rounded-full px-3 py-1.5">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
