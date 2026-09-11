import React, { useEffect, useRef, useState } from 'react';

/* ─────────────────────────────────────────────────────────────
   Scroll reveals are CSS transitions triggered by an
   IntersectionObserver, not JavaScript-driven animations.

   Why: the previous implementation set every revealed element to
   opacity 0 as its initial React state and animated it back with
   requestAnimationFrame. Anywhere rAF is throttled or the bundle
   is slow, that leaves the entire page invisible. Here the resting
   state is visible, the hidden state is only applied once JS has
   proved it can run, and the animation itself is CSS.
   ───────────────────────────────────────────────────────────── */

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

/* ── Safety net ───────────────────────────────────────────────
   IntersectionObserver callbacks are delivered as a step of the
   browser's rendering lifecycle — the same loop that drives rAF.
   If that loop stalls (throttled tab, embedded webview, machine
   under load) observations never arrive and, without this, every
   revealed element would stay hidden forever.

   So: the first observer to receive ANY callback marks the API
   healthy. If nothing has been delivered shortly after mount, we
   assume it never will be and show everything.
   ─────────────────────────────────────────────────────────── */
const FALLBACK_MS = 1500;

/* Set by the first observer callback that ever arrives. Once IntersectionObserver
   has proved it works, no element needs the fallback again. */
let observerHealthy = false;

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver at all — just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const show = () => setVisible(true);

    /* Each element arms its own timer. This was previously one module-level
       one-shot timer shared by every element, which meant that once it had
       fired, anything mounted later — i.e. every element on every subsequent
       route — was left with no safety net at all. */
    const timer = window.setTimeout(() => {
      if (!observerHealthy) show();
    }, FALLBACK_MS);

    const io = new IntersectionObserver(
      ([entry]) => {
        // Any delivered callback proves the lifecycle is running.
        observerHealthy = true;
        if (entry.isIntersecting) {
          show();
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -60px 0px' }
    );

    io.observe(el);
    return () => {
      window.clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  return { ref, visible };
}

/** Fade-up + blur-in when the element enters the viewport. Runs once. */
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className }) => {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}s` } as CSSVars}
    >
      {children}
    </div>
  );
};

/** Container that staggers its <Item> children as they enter the viewport. */
export const Stagger: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${visible ? 'is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}s` } as CSSVars}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement<{ index?: number }>(child)
          ? React.cloneElement(child, { index })
          : child
      )}
    </div>
  );
};

export const Item: React.FC<{
  children: React.ReactNode;
  className?: string;
  /** Injected by <Stagger>. */
  index?: number;
}> = ({ children, className, index = 0 }) => (
  <div
    className={`reveal-item${className ? ` ${className}` : ''}`}
    style={{ '--stagger-index': index } as CSSVars}
  >
    {children}
  </div>
);

/** Section label: a numbered pill plus the section name. */
export const Eyebrow: React.FC<{ index: string; label: string; center?: boolean }> = ({
  index,
  label,
  center,
}) => (
  <span className={`inline-flex items-center gap-2.5 ${center ? 'justify-center' : ''}`}>
    <span className="font-mono text-[10px] font-medium text-muted bg-sunken rounded-md px-1.5 py-1 tabular-nums">
      {index}
    </span>
    <span className="text-[11px] font-semibold text-muted uppercase tracking-[0.14em]">{label}</span>
  </span>
);

/* CountUp, ScrubScale and Magnetic used to live here. Every one of their
   call sites went away in the light rebuild, and each was the last thing
   importing `motion/react` — a ~100 kB dependency kept alive by three
   components nothing rendered. Removed rather than left dead. */
