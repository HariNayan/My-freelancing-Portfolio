import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '../lib/router';

const NotFound: React.FC = () => {
  return (
    <main className="bg-ground px-4 md:px-6 pt-32 md:pt-40 pb-20">
      <div className="container mx-auto max-w-6xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint mb-5">404</p>
        <h1 className="text-3xl md:text-[2.75rem] font-display font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mb-4 text-balance">
          That page doesn&rsquo;t exist
        </h1>
        <p className="text-muted md:text-lg max-w-md mb-8">
          The link may be out of date. The work is all still here.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/work"
            className="group px-6 py-3.5 btn btn-primary"
          >
            See the work
            <ChevronRight size={17} className="btn-chevron" strokeWidth={2.5} />
          </Link>
          <Link
            to="/"
            className="px-6 py-3.5 btn btn-secondary"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
