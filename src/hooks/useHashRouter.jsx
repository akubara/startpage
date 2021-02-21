import { h } from 'preact';
import { useState, useEffect, useCallback } from 'preact/hooks';

const currentLoc = () => window.location.hash.replace('#', '') || '/';

export default function useHashLocation() {
  const [loc, setLoc] = useState(currentLoc());

  useEffect(() => {
    const handler = () => setLoc(currentLoc());

    handler();
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = useCallback((to) => {
    window.location.hash = to;
  }, []);
  return [loc, navigate];
}
