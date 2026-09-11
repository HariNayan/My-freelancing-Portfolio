import type React from 'react';

/* YouTube thumbnail variants.

   `hqdefault` is always 480x360 — 4:3 — regardless of how the video was
   shot. Dropping that into a 9:16 tile with object-cover takes a narrow
   slice out of a landscape frame and drags YouTube's own letterbox bars in
   with it, which is why vertical tiles looked mis-cropped.

   `oar2` is the original-aspect-ratio still: 1080x1920 for every Short on
   this site. It fills a 9:16 tile exactly, no crop, no bars.

   It isn't guaranteed to exist on every upload, so `onThumbError` steps back
   to hqdefault rather than leaving a broken image. */

const OAR = (id: string) => `https://i.ytimg.com/vi/${id}/oar2.jpg`;
const HQ = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const MAXRES = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

/** Native 9:16 still for vertical work. */
export const verticalThumb = OAR;

/** 16:9 still for landscape work. maxresdefault 404s on some uploads. */
export const wideThumb = MAXRES;

/** Small, always-present 4:3 still. */
export const fallbackThumb = HQ;

/** Steps a thumbnail down through the variants instead of breaking. */
export function onThumbError(id: string) {
  return (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget;
    if (!img.src.includes('hqdefault')) img.src = HQ(id);
  };
}
