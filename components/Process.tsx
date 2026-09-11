import React from 'react';
import { FileText, Lightbulb, Scissors, Rocket } from 'lucide-react';
import { Reveal, Stagger, Item, Eyebrow } from './Reveal';

const steps = [
  {
    number: '01',
    title: 'Brief',
    description:
      'We work out what the video has to achieve, who it has to land with, and the date it ships.',
    icon: FileText,
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'You see direction and a storyboard before I touch the footage, so the first cut is never a surprise.',
    icon: Lightbulb,
  },
  {
    number: '03',
    title: 'Edit',
    description:
      'I cut, you review, we iterate. Progress updates throughout and unlimited revision rounds.',
    icon: Scissors,
  },
  {
    number: '04',
    title: 'Deliver',
    description:
      'Final files in every format and aspect ratio you need, ready to upload the day you get them.',
    icon: Rocket,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="bg-ground px-4 md:px-6 py-12 md:py-[72px]">
      <div className="container mx-auto max-w-6xl">
        <Reveal className="mb-10 md:mb-14 max-w-2xl">
          <Eyebrow index="04" label="How it works" />
          <h2 className="text-3xl md:text-[2.75rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mt-5 mb-4 text-balance">
            Process
          </h2>
          <p className="text-muted md:text-lg">
            Four steps, no account managers, no surprises in the first cut.
          </p>
        </Reveal>

        {/* One panel, four columns divided by hairlines — nesting a card per
            step inside a section panel would double the surfaces up. The
            dividers switch axis with the grid: stacked on mobile, a 2x2 at
            sm, a single row at lg. */}
        <Stagger className="panel grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const divides = [
              index > 0 ? 'border-t' : '',
              index % 2 === 1 ? 'sm:border-l' : '',
              index >= 2 ? 'sm:border-t' : 'sm:border-t-0',
              'lg:border-t-0',
              index > 0 ? 'lg:border-l' : '',
            ]
              .filter(Boolean)
              .join(' ');

            return (
              <Item key={step.number} className="h-full">
                <div
                  className={`h-full p-6 md:p-7 border-hairline transition-colors duration-200 hover:bg-ground/50 ${divides}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[11px] font-medium text-muted bg-sunken rounded-md px-2 py-1 tabular-nums">
                      {step.number}
                    </span>
                    <Icon size={17} strokeWidth={1.75} className="text-hairline-strong" />
                  </div>

                  <h3 className="text-lg md:text-xl font-display font-bold text-ink mb-2.5 tracking-[-0.015em]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                </div>
              </Item>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Process;
