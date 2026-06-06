"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const AUTO_DISMISS_MS = 20000;

const hotspots = [
  {
    number: 1,
    title: "Menu",
    text: "Provides access to About GEN-B, User Guide, Company Information, Legal Notices, Privacy Policy, and Copyright Information.",
    x: 17.6,
    y: 8.6,
  },
  {
    number: 2,
    title: "Patterns",
    text: "Opens the test pattern library containing SMPTE, EBU, ARIB, grayscale, geometry, gamma, luma, color, and reference patterns.",
    x: 30.2,
    y: 8.6,
  },
  {
    number: 3,
    title: "Videos",
    text: "Opens the reference video library used for display evaluation and motion analysis.",
    x: 75.9,
    y: 8.6,
  },
  {
    number: 4,
    title: "Tone Generator",
    text: "Generates a precision 1 kHz stereo reference tone for audio testing and system alignment.",
    x: 49.4,
    y: 8.6,
  },
  {
    number: 5,
    title: "RasterScope Box",
    text: "Enables the RasterScope Box overlay used for display analysis and SWEEP measurements.",
    x: 95.1,
    y: 41.9,
  },
  {
    number: 6,
    title: "Screen",
    text: "Returns directly to the active signal output screen.",
    x: 17.3,
    y: 92.5,
  },
  {
    number: 7,
    title: "Output",
    text: "Indicates external display connection status. Green confirms an active wired display output.",
    x: 45.3,
    y: 92.5,
  },
  {
    number: 8,
    title: "Raster Scope Analysis",
    text: "Runs display analysis using the RasterScope Box and reports measurement results.",
    x: 65.6,
    y: 92.5,
  },
  {
    number: 9,
    title: "SWEEP",
    text: "Performs advanced display geometry and active raster analysis using the RasterScope Box overlay.",
    x: 94.6,
    y: 72.8,
  },
  {
    number: 10,
    title: "Scope Box Speed",
    text: "Controls RasterScope Box movement speed: Slow, Medium, or Fast.",
    x: 94.6,
    y: 57.8,
  },
  {
    number: 11,
    title: "RasterScope Box ON/OFF",
    text: "Enables or disables the RasterScope Box overlay.",
    x: 94.6,
    y: 24.8,
  },
  {
    number: 12,
    title: "Scope Box Color",
    text: "Selects the RasterScope Box color used during display analysis.",
    x: 90.6,
    y: 8.6,
  },
  {
    number: 13,
    title: "Tone Generator ON/OFF",
    text: "Turns the 1 kHz stereo reference tone generator on or off.",
    x: 52.4,
    y: 92.5,
  },
  {
    number: 14,
    title: "Lock Manual Audio Control",
    text: "Press and hold for approximately 3 seconds to lock or unlock manual audio level adjustment.",
    x: 4.4,
    y: 45.5,
  },
  {
    number: 15,
    title: "Activate Manual Audio Control",
    text: "Enables manual audio level adjustment mode.",
    x: 4.4,
    y: 58.7,
  },
  {
    number: 16,
    title: "Audio Manual Control",
    text: "Adjusts the audio output level manually in dBu when Manual Mode is enabled.",
    x: 4.4,
    y: 72.8,
  },
  {
    number: 17,
    title: "Stereo Audio Meter",
    text: "Displays real-time left and right channel audio levels using 40 LEDs per channel.",
    x: 7.9,
    y: 92.5,
  },
  {
    number: 18,
    title: "Manual Audio Display",
    text: "Shows the currently selected manual audio output level in dBu.",
    x: 4.4,
    y: 29.4,
  },
];

export default function InteractiveGenBDiagram() {
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [stageMetrics, setStageMetrics] = useState({
    width: 0,
    height: 0,
    hotspotHalf: 28,
  });
  const diagramRef = useRef(null);
  const stageRef = useRef(null);
  const timerRef = useRef(null);

  const clearActiveHotspot = () => {
    setActiveHotspot(null);
  };

  const startDismissTimer = () => {
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(clearActiveHotspot, AUTO_DISMISS_MS);
  };

  const handleHotspotClick = (number) => {
    setActiveHotspot(number);
    startDismissTimer();
  };

  useEffect(() => {
    const handleOutsidePointer = (event) => {
      if (!diagramRef.current?.contains(event.target)) {
        clearActiveHotspot();
      }
    };

    document.addEventListener("pointerdown", handleOutsidePointer);

    return () => {
      document.removeEventListener("pointerdown", handleOutsidePointer);
      window.clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!stageRef.current) {
      return undefined;
    }

    const updateStageSize = () => {
      const rect = stageRef.current.getBoundingClientRect();
      const hotspot = stageRef.current.querySelector(".genb-diagram-hotspot");
      const hotspotWidth = hotspot
        ? Number.parseFloat(window.getComputedStyle(hotspot).width)
        : 56;

      setStageMetrics({
        width: rect.width,
        height: rect.height,
        hotspotHalf: hotspotWidth / 2,
      });
    };

    updateStageSize();

    const resizeObserver = new ResizeObserver(updateStageSize);
    resizeObserver.observe(stageRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const selectedHotspot = hotspots.find(
    (hotspot) => hotspot.number === activeHotspot
  );

  return (
    <div
      className="genb-interactive-diagram"
      ref={diagramRef}
      aria-label="Interactive GEN-B menu diagram"
    >
      <div className="genb-diagram-stage" ref={stageRef}>
        <Image
          src="/gen-b/menu-interactive-diagram.png"
          alt="Numbered GEN-B interface menu diagram"
          width={3300}
          height={1800}
          priority
          className="genb-diagram-image"
        />

        {hotspots.map((hotspot) => (
          <button
            type="button"
            key={hotspot.number}
            className={`genb-diagram-hotspot${
              activeHotspot === hotspot.number ? " is-active" : ""
            }`}
            style={{
              left: `${hotspot.x}%`,
              top: `${hotspot.y}%`,
              "--stage-width": `${stageMetrics.width}px`,
              "--stage-height": `${stageMetrics.height}px`,
              "--hotspot-bg-x": `${
                stageMetrics.hotspotHalf -
                (stageMetrics.width * hotspot.x) / 100
              }px`,
              "--hotspot-bg-y": `${
                stageMetrics.hotspotHalf -
                (stageMetrics.height * hotspot.y) / 100
              }px`,
            }}
            aria-label={`${hotspot.number}, ${hotspot.title}`}
            aria-pressed={activeHotspot === hotspot.number}
            onClick={(event) => {
              event.stopPropagation();
              handleHotspotClick(hotspot.number);
            }}
          >
            <span>{hotspot.number}</span>
          </button>
        ))}
      </div>

      {selectedHotspot && (
        <div className="genb-diagram-description" role="status">
          <span>{selectedHotspot.number}</span>
          <div>
            <h3>{selectedHotspot.title}</h3>
            <p>{selectedHotspot.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
