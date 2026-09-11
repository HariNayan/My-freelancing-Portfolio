import React, { useState } from 'react';
import { Mail, Instagram, Linkedin, CheckCircle, CalendarDays, Clock, ChevronRight } from 'lucide-react';
import { Reveal, Eyebrow } from './Reveal';
import { BOOKING_URL, TURNAROUND } from '../constants';

const EMAIL = 'harinayan.work@gmail.com';

const HELPS = [
  'What you’re making — a demo, a launch film, an ad set',
  'When it needs to be live',
  'Where it runs — site, paid social, Product Hunt, a pitch',
];

const fieldClass =
  'w-full bg-ground border border-hairline rounded-[8px] px-4 py-3 text-ink placeholder:text-faint ' +
  'focus:outline-none focus:border-ink focus:bg-surface transition-colors';

const labelClass = 'block font-mono text-[10px] uppercase tracking-[0.14em] text-faint mb-2';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formspree.io/f/mlgvbyjk', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-ground px-4 md:px-6 py-12 md:py-[72px]">
      <div className="container mx-auto max-w-6xl">
        <div className="panel p-7 md:p-12 xl:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 xl:gap-20">
            {/* ── Pitch ── */}
            <Reveal>
              <Eyebrow index="06" label="Contact" />
              <h2 className="text-3xl md:text-[2.5rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mt-5 mb-5 text-balance">
                Start a project
              </h2>
              <p className="text-muted leading-relaxed max-w-md">
                Tell me what you&rsquo;re shipping and when it needs to be out. I reply within 24
                hours, and I&rsquo;ll say so early if it isn&rsquo;t a fit.
              </p>

              {BOOKING_URL && (
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex items-center gap-2.5 px-6 py-3.5 btn btn-primary"
                >
                  <CalendarDays size={17} />
                  Book a 15-min call
                  <ChevronRight size={17} className="btn-chevron" strokeWidth={2.5} />
                </a>
              )}

              <div className="mt-9 pt-7 border-t border-hairline">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint mb-4">
                  Worth including
                </p>
                <ul className="space-y-2.5">
                  {HELPS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span aria-hidden className="text-hairline-strong mt-0.5 shrink-0">
                        &rarr;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-9 pt-7 border-t border-hairline flex flex-wrap items-center gap-x-8 gap-y-5">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-center gap-2.5 text-sm text-ink hover:text-muted transition-colors"
                >
                  <Mail size={16} className="text-faint" />
                  <span className="break-all">{EMAIL}</span>
                </a>

                <div className="flex items-center gap-2.5">
                  <a
                    href="https://www.instagram.com/creo.mov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-muted hover:text-ink hover:border-hairline-strong transition-colors"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/harinayanrajpattun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-9 h-9 rounded-full border border-hairline flex items-center justify-center text-muted hover:text-ink hover:border-hairline-strong transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>

              {TURNAROUND && (
                <p className="mt-8 inline-flex items-center gap-2 text-xs text-faint">
                  <Clock size={13} />
                  {TURNAROUND}
                </p>
              )}
            </Reveal>

            {/* ── Form ── */}
            <Reveal delay={0.1}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input type="text" id="name" name="name" required className={fieldClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input type="email" id="email" name="email" required className={fieldClass} placeholder="you@company.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className={labelClass}>
                    Company <span className="text-hairline-strong">(optional)</span>
                  </label>
                  <input type="text" id="company" name="company" className={fieldClass} placeholder="Company or product name" />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    className={`${fieldClass} resize-none`}
                    placeholder="What you're making, when it ships, and where it runs."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full sm:w-auto px-7 py-3.5 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>

                <div aria-live="polite" className="min-h-[1.25rem]">
                  {status === 'success' && (
                    <p className="flex items-center gap-2 text-green-700 text-sm">
                      <CheckCircle size={16} /> Sent. I&rsquo;ll get back to you within 24 hours.
                    </p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-700 text-sm">
                      Something went wrong. Email me directly at{' '}
                      <a href={`mailto:${EMAIL}`} className="underline hover:text-red-800">
                        {EMAIL}
                      </a>
                      .
                    </p>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
