"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

export default function ArticleFigure({ figure, priority = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogTitleId = useId();
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    closeButtonRef.current?.focus();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <figure className="tone-figure">
        <button
          type="button"
          className="tone-image-button"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-label={`Open full-size image: ${figure.caption}`}
        >
          <Image
            src={figure.src}
            alt={figure.alt}
            width={figure.width}
            height={figure.height}
            priority={priority}
            className="tone-image"
          />
        </button>
        <figcaption>{figure.caption}</figcaption>
      </figure>

      {isOpen && (
        <div
          className="tone-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div className="tone-lightbox-panel">
            <h2 id={dialogTitleId} className="tone-lightbox-title">
              {figure.caption}
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              className="tone-lightbox-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close enlarged image"
            >
              Close
            </button>
            <Image
              src={figure.src}
              alt={figure.alt}
              width={figure.width}
              height={figure.height}
              unoptimized
              className="tone-lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
