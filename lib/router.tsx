import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

/* A minimal History API router.

   Four routes and one parameter did not justify a dependency. What this
   does need to get right is link behaviour, because that is where
   hand-rolled routers usually break: modifier-clicks and middle-clicks
   must still open a new tab, and external links, downloads, mailto and
   tel must be left entirely alone. <Link> handles all of that below.

   Hash links (#work, #contact) deliberately stay plain <a> elements —
   they're in-page anchors, not navigation, and routing them would break
   scrolling on the home page. */

export type Route =
  | { name: 'home' }
  | { name: 'work' }
  | { name: 'case'; slug: string }
  | { name: 'notFound' };

export function matchRoute(pathname: string): Route {
  const path = pathname.replace(/\/+$/, '') || '/';
  if (path === '/') return { name: 'home' };
  if (path === '/work') return { name: 'work' };

  const caseMatch = path.match(/^\/work\/([a-z0-9][a-z0-9-]*)$/);
  if (caseMatch) return { name: 'case', slug: caseMatch[1] };

  return { name: 'notFound' };
}

interface RouterValue {
  path: string;
  route: Route;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterValue>({
  path: '/',
  route: { name: 'home' },
  navigate: () => {},
});

export const useRouter = (): RouterValue => useContext(RouterContext);

export const Router: React.FC<{ children: React.ReactNode; initialPath?: string }> = ({
  children,
  initialPath,
}) => {
  /* `initialPath` is supplied by the build-time prerender, which has no
     window to read the location from. */
  const [path, setPath] = useState(
    () => initialPath ?? (typeof window === 'undefined' ? '/' : window.location.pathname)
  );

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((to: string) => {
    if (to === window.location.pathname) return;
    window.history.pushState({}, '', to);
    setPath(to);
    // Land at the top of the new page, not wherever the old one was scrolled.
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <RouterContext.Provider value={{ path, route: matchRoute(path), navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };

export const Link: React.FC<LinkProps> = ({ to, children, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    // Anything that isn't a plain left-click is the browser's to handle:
    // middle-click and modifier-clicks open new tabs, and taking that away
    // is the single most irritating thing a custom router can do.
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (rest.target && rest.target !== '_self') return;

    e.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
