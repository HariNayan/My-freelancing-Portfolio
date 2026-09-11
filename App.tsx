import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudyPage from './pages/CaseStudyPage';
import NotFound from './pages/NotFound';
import { Router, useRouter } from './lib/router';
import { metaForPath } from './lib/routeMeta';
import { useHead } from './lib/seo';
import { getCaseStudy } from './constants';

/* Scrolling is native.

   This used to run Lenis, which intercepts the wheel, accumulates your
   input into a target position and eases toward it every frame. That
   glide is the entire point of the library, and it's also why the page
   kept moving for seconds after you stopped — no lerp value removes it,
   it only shortens it. Native scroll stops when you stop, costs nothing,
   never drops a frame, and keeps working when JavaScript doesn't.

   Anchor links still animate: `scroll-behavior: smooth` in style.css
   handles those, and only those. */
const Routes: React.FC = () => {
  const { route, path } = useRouter();

  /* Driven once here rather than per page, so the head always comes from
     metaForPath — the same function the prerender script uses. */
  useHead(metaForPath(path));

  switch (route.name) {
    case 'home':
      return <Home />;
    case 'work':
      return <Work />;
    case 'case':
      // Resolve here so an unknown slug is a real 404 rather than an
      // empty case-study shell.
      return getCaseStudy(route.slug) ? <CaseStudyPage slug={route.slug} /> : <NotFound />;
    default:
      return <NotFound />;
  }
};

function App({ initialPath }: { initialPath?: string } = {}) {
  return (
    <Router initialPath={initialPath}>
      <div className="min-h-screen bg-ground text-ink font-sans">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
