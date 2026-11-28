"use client";

import { useState } from "react";
import { buttonBase } from "./ui";
import type { TalkVideo } from "@/lib/services";

/**
 * Βίντεο χωρίς τρίτους πριν το κλικ: δεν φορτώνει τίποτα από YouTube μέχρι να πατηθεί το κουμπί
 * (καμία μικρογραφία, κανένα cookie πριν τη συγκατάθεση του επισκέπτη).
 */
export function VideoEmbed({ video }: { video: TalkVideo }) {
  const [play, setPlay] = useState(false);

  if (video.src) {
    return (
      <figure>
        <video controls preload="none" className="aspect-video w-full bg-ink" aria-label={video.title}>
          <source src={video.src} type="video/mp4" />
        </video>
        <figcaption className="mt-2 font-display text-xl font-bold text-ink">{video.title}</figcaption>
      </figure>
    );
  }

  return (
    <figure>
      {play && video.youtubeId ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
          title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="flex aspect-video w-full flex-col items-start justify-end gap-3 border-2 border-ink bg-white p-5">
          <p className="max-w-sm text-sm text-pencil">Το βίντεο φορτώνει από το YouTube μόλις πατήσεις το κουμπί.</p>
          <button type="button" onClick={() => setPlay(true)} className={`${buttonBase} bg-dot text-white hover:bg-dot-dark`}>
            Δες το βίντεο
          </button>
        </div>
      )}
      <figcaption className="mt-2 font-display text-xl font-bold text-ink">{video.title}</figcaption>
    </figure>
  );
}
