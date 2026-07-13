import Link from "next/link";
import ArticleFigure from "../../components/ArticleFigure";

const canonicalUrl =
  "https://pbe-engineering.com/gen-b/algorithmic-tone-generation";

const imageBase =
  "/images/gen-b/engineering-notes/algorithmic-tone-generation";
const absoluteImageBase = `https://pbe-engineering.com${imageBase}`;

export const metadata = {
  title: "Why GEN-B Generates Audio Mathematically Instead of Playing Audio Files",
  description:
    "Discover how GEN-B generates mathematically precise audio signals in real time instead of reproducing prerecorded audio files, providing professional reference tones for broadcast alignment, measurement, and troubleshooting.",
  alternates: {
    canonical: canonicalUrl,
  },
  keywords: [
    "GEN-B",
    "algorithmic tone generator",
    "digital signal generator",
    "broadcast audio",
    "1 kHz reference tone",
    "SMPTE -20 dBFS",
    "EBU -18 dBFS",
    "sine wave",
    "square wave",
    "white noise",
    "pink noise",
    "48 kHz audio",
    "Precision Broadcast Engineering",
  ],
  openGraph: {
    title: "Why GEN-B Generates Audio Mathematically Instead of Playing Audio Files",
    description:
      "Discover how GEN-B generates mathematically precise audio signals in real time instead of reproducing prerecorded audio files, providing professional reference tones for broadcast alignment, measurement, and troubleshooting.",
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: `${absoluteImageBase}/01-real-time-algorithmic-generation.png`,
        width: 1774,
        height: 887,
        alt: "Diagram showing a continuous analog sine wave, 48 kHz digital sampling, and GEN-B real-time mathematical sample generation.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why GEN-B Generates Audio Mathematically Instead of Playing Audio Files",
    description:
      "Discover how GEN-B generates mathematically precise audio signals in real time instead of reproducing prerecorded audio files, providing professional reference tones for broadcast alignment, measurement, and troubleshooting.",
    images: [`${absoluteImageBase}/01-real-time-algorithmic-generation.png`],
  },
};

const figures = {
  realtime: {
    src: `${imageBase}/01-real-time-algorithmic-generation.png`,
    alt: "Diagram showing a continuous analog sine wave, 48 kHz digital sampling, and GEN-B real-time mathematical sample generation.",
    width: 1774,
    height: 887,
    caption: "From analog to digital: real-time algorithmic generation.",
  },
  noFiles: {
    src: `${imageBase}/02-no-audio-files-vs-algorithmic-synthesis.png`,
    alt: "Comparison between prerecorded audio file formats and GEN-B real-time algorithmic audio synthesis.",
    width: 1774,
    height: 887,
    caption: "What GEN-B does not use versus what GEN-B does.",
  },
  waveforms: {
    src: `${imageBase}/03-waveforms-for-accuracy-and-measurement.png`,
    alt: "Sine and square wave diagrams with engineering applications including gain, levels, response, distortion, noise floor, and alignment.",
    width: 1691,
    height: 930,
    caption: "Waveforms designed for accuracy and measurement.",
  },
  standards: {
    src: `${imageBase}/04-standards-levels-and-continents.png`,
    alt: "Comparison of widely used North American minus 20 dBFS and European EBU minus 18 dBFS reference-tone practices.",
    width: 1536,
    height: 1024,
    caption: "Standards, levels, and continents.",
  },
  essential: {
    src: `${imageBase}/05-why-sine-and-square-waves-are-essential.png`,
    alt: "Technical infographic explaining how sine and square waves reveal frequency response, transient behavior, timing, and signal integrity.",
    width: 1686,
    height: 933,
    caption: "Why sine and square waves are essential.",
  },
  future: {
    src: `${imageBase}/06-algorithmic-synthesis-future-signals.png`,
    alt: "Diagram showing how mathematical models can expand GEN-B with sweeps, multitone, impulses, tone bursts, and specialized signals.",
    width: 1774,
    height: 887,
    caption: "Algorithmic synthesis: unlimited possibilities.",
  },
  completeSet: {
    src: `${imageBase}/07-complete-professional-signal-set.png`,
    alt: "Overview of GEN-B professional signal types including sine wave, square wave, white noise, pink noise, and selectable frequencies.",
    width: 1774,
    height: 887,
    caption: "GEN-B tone generator: professional signal set.",
  },
};

const toneFigureClasses = {
  figure: "tone-figure",
  imageButton: "tone-image-button",
  image: "tone-image",
  lightbox: "tone-lightbox",
  lightboxPanel: "tone-lightbox-panel",
  lightboxTitle: "tone-lightbox-title",
  lightboxClose: "tone-lightbox-close",
  lightboxImage: "tone-lightbox-image",
};

export default function AlgorithmicToneGenerationPage() {
  return (
    <main className="tone-page">
      <section className="tone-hero">
        <div className="tone-hero-inner">
          <div className="tone-hero-copy">
            <p className="genb-kicker">GEN-B Engineering Note</p>
            <h1>Why GEN‑B Generates Audio Mathematically Instead of Playing Audio Files</h1>
            <p className="tone-subtitle">
              How GEN-B synthesizes professional audio reference signals sample
              by sample in real time without WAV, AIFF, MP3, or other
              prerecorded audio files.
            </p>
            <div className="tone-actions">
              <Link href="/gen-b" className="btn-secondary">
                Back to GEN-B
              </Link>
              <Link href="/contact" className="btn-primary">
                Contact PBE
              </Link>
            </div>
          </div>

        </div>
      </section>

      <article className="tone-article">
        <section className="tone-section">
          <h2>The Mathematics Are the Signal: Inside GEN-B&apos;s Algorithmic Tone Generator</h2>
          <p className="tone-lede">
            Professional reference signals must be predictable, repeatable, and
            measurable. That principle shaped the audio architecture of GEN-B
            from the beginning.
          </p>
          <p>
            GEN-B does not reproduce prerecorded WAV, AIFF, MP3, FLAC, AAC, M4A,
            or other audio assets. Its tone block is a real-time digital signal
            generator. Every output sample is calculated mathematically,
            assembled into a continuous digital stream, and delivered directly to
            the device audio engine.
          </p>
          <p>
            This distinction matters. GEN-B is not playing a recording of a test
            signal. <strong>GEN-B is creating the test signal.</strong>
          </p>
          <ArticleFigure
            figure={figures.realtime}
            priority
            classNames={toneFigureClasses}
          />
        </section>

        <section className="tone-section">
          <h2>From a Mathematical Model to a 48 kHz Digital Stream</h2>
          <p>
            A continuous sine wave can be described mathematically by its
            amplitude, frequency, and phase. In a digital system, that continuous
            function is evaluated at discrete moments in time.
          </p>
          <p>For a sine wave, a simplified sample equation is:</p>
          <p className="tone-equation">y[n] = A · sin(2πfn/Fs + φ)</p>
          <p>Where:</p>
          <ul>
            <li><code>A</code> is amplitude.</li>
            <li><code>f</code> is frequency in hertz.</li>
            <li><code>Fs</code> is the sample rate.</li>
            <li><code>n</code> is the sample index.</li>
            <li><code>φ</code> is phase.</li>
          </ul>
          <p>
            At a sample rate of 48 kHz, the generator calculates 48,000 samples
            every second. The interval between samples is approximately 20.833
            microseconds. Each calculated value becomes part of the outgoing
            digital waveform.
          </p>
          <p>
            Frequency, amplitude, phase, channel assignment, and waveform type
            can therefore be changed by modifying parameters in the synthesis
            model rather than loading another recording.
          </p>
        </section>

        <section className="tone-section">
          <h2>Why GEN-B Does Not Use Audio Files</h2>
          <p>
            A prerecorded test file can be useful, but it introduces a
            different architecture and a different set of limitations. The
            signal is fixed at the moment the file is created. Long-duration
            playback may require looping. A poorly prepared loop may introduce
            a discontinuity at the splice point. Compressed formats may add
            coding artifacts, while every file-based implementation also
            requires asset storage, version control, loading, and playback
            management.
          </p>
          <p>GEN-B avoids those dependencies.</p>
          <p>Its synthesis engine provides:</p>
          <ul>
            <li>No prerecorded audio.</li>
            <li>No file loading or waveform storage.</li>
            <li>No compression artifacts.</li>
            <li>No loop boundaries or splice points.</li>
            <li>Continuous duration for as long as the generator remains active.</li>
            <li>Immediate parameter changes.</li>
            <li>Repeatable output derived from the same mathematical model.</li>
          </ul>
          <ArticleFigure
            figure={figures.noFiles}
            classNames={toneFigureClasses}
          />
        </section>

        <section className="tone-section">
          <h2>The Sine Wave: The Universal Reference Signal</h2>
          <p>
            The sine wave is the fundamental reference waveform for audio
            measurement because, ideally, its energy is concentrated at one
            frequency. This makes it especially useful when the goal is to
            observe how a system treats a known, controlled input.
          </p>
          <p>In professional workflows, sine waves are used to evaluate or align:</p>
          <ul>
            <li>Gain.</li>
            <li>Audio levels.</li>
            <li>Frequency response.</li>
            <li>Harmonic and intermodulation distortion.</li>
            <li>Noise floor and dynamic range.</li>
            <li>Analog and digital signal paths.</li>
            <li>Channel balance and phase relationships.</li>
          </ul>
          <p>
            A 1 kHz sine wave is particularly common because it lies in the
            midband of the audible spectrum and can pass through most
            professional audio systems without being dominated by low-frequency
            coupling behavior or high-frequency bandwidth limitations.
          </p>
          <p>
            The waveform itself is mathematically simple, but its value as a
            reference is enormous: when the input is known precisely, deviations
            at the output become measurable evidence of system behavior.
          </p>
        </section>

        <section className="tone-section">
          <h2>The Square Wave: Harmonics, Edges, and System Behavior</h2>
          <p>
            A square wave is very different from a sine wave. An ideal
            symmetrical square wave contains a fundamental frequency and a
            predictable series of odd harmonics. Its rapid transitions challenge
            a signal path in ways that a single-frequency sine wave cannot.
          </p>
          <p>Square-wave testing can help reveal:</p>
          <ul>
            <li>Transient response.</li>
            <li>Amplifier behavior.</li>
            <li>Loudspeaker and crossover behavior.</li>
            <li>Digital processing limitations.</li>
            <li>Timing and phase characteristics.</li>
            <li>Ringing, overshoot, and undershoot.</li>
            <li>Bandwidth limitations.</li>
            <li>Signal integrity problems.</li>
          </ul>
          <p>
            No physical audio system can reproduce an infinitely fast transition
            or an unlimited harmonic series. The resulting changes in edge shape,
            settling, symmetry, and ringing can therefore expose bandwidth,
            phase, filtering, or stability problems.
          </p>
          <ArticleFigure
            figure={figures.waveforms}
            classNames={toneFigureClasses}
          />
          <ArticleFigure
            figure={figures.essential}
            classNames={toneFigureClasses}
          />
        </section>

        <section className="tone-section">
          <h2>Reference Levels Across Professional Workflows</h2>
          <p>Professional facilities do not all use the same digital alignment level.</p>
          <p>
            A widely used North American broadcast practice is a 1 kHz
            reference tone at <strong>−20 dBFS</strong>. Many European and
            international workflows use <strong>−18 dBFS</strong>, commonly
            associated with EBU alignment practice.
          </p>
          <p>
            These values are not competing definitions of correctness. They
            are operating conventions that preserve different amounts of
            headroom above the reference level. GEN-B supports both so
            engineers can work with the convention used by the facility,
            broadcaster, production, or distribution chain under test.
          </p>
          <p>
            GEN-B also provides commonly encountered analog and digital
            reference selections, including 0 dBFS and +4 dBu-related
            workflows. Analog dBu and digital dBFS are different measurement
            domains; their relationship depends on the alignment convention
            and equipment calibration used by a particular facility.
          </p>
          <ArticleFigure
            figure={figures.standards}
            classNames={toneFigureClasses}
          />
        </section>

        <section className="tone-section">
          <h2>White Noise: Equal Power per Hertz</h2>
          <p>
            White noise contains energy distributed uniformly per unit of
            bandwidth. In practical terms, equal-width frequency bands contain
            approximately equal power.
          </p>
          <p>Because wide portions of the spectrum are excited simultaneously, white noise is useful for:</p>
          <ul>
            <li>Broadband system verification.</li>
            <li>Filter and equalizer evaluation.</li>
            <li>Electronic noise and measurement tests.</li>
            <li>Loudspeaker and component testing.</li>
            <li>Identifying frequency-dependent behavior.</li>
          </ul>
          <p>
            White noise sounds bright because a linear frequency scale contains
            many more hertz in the upper octaves than in the lower octaves.
          </p>
        </section>

        <section className="tone-section">
          <h2>Pink Noise: Equal Power per Octave</h2>
          <p>
            Pink noise decreases in power density as frequency rises,
            approximately 3 dB per octave. This produces roughly equal energy in
            each octave and better corresponds to octave-based acoustic analysis
            and the way humans perceive frequency distribution.
          </p>
          <p>Pink noise is commonly used for:</p>
          <ul>
            <li>Room tuning.</li>
            <li>Studio and control-room calibration.</li>
            <li>Broadcast monitoring environments.</li>
            <li>Cinema and installed sound systems.</li>
            <li>Loudspeaker optimization.</li>
            <li>Real-time analyzer and equalization work.</li>
          </ul>
          <p>
            White noise and pink noise serve different purposes. White noise is
            uniform per hertz; pink noise is balanced per octave.
          </p>
        </section>

        <section className="tone-section">
          <h2>Frequency Selection Is Part of the Instrument</h2>
          <p>A professional generator must support more than one fixed frequency.</p>
          <p>
            Low-frequency tones help evaluate bass response, coupling,
            resonance, polarity, and mechanical behavior. Midband tones are
            useful for general alignment and gain verification. High-frequency
            tones can reveal bandwidth restrictions, filtering, converter
            behavior, and other upper-spectrum limitations.
          </p>
          <p>
            Because GEN-B generates its output algorithmically, changing
            frequency does not require a different file. The synthesis engine
            simply evaluates the selected mathematical model using a new
            frequency parameter.
          </p>
          <ArticleFigure
            figure={figures.completeSet}
            classNames={toneFigureClasses}
          />
        </section>

        <section className="tone-section">
          <h2>Continuous Generation, Stable Control</h2>
          <p>Real-time synthesis provides several operational advantages:</p>
          <h3>Unlimited signal duration</h3>
          <p>The waveform is not a finite recording. It continues for as long as the generator is active.</p>
          <h3>Immediate level and frequency changes</h3>
          <p>Parameters can be changed directly in the model without searching for or loading another asset.</p>
          <h3>Repeatability</h3>
          <p>Given the same mathematical parameters and operating conditions, the engine produces the same reference waveform consistently.</p>
          <h3>Small asset footprint</h3>
          <p>The application does not need a library of long audio recordings for every combination of waveform, level, frequency, and channel configuration.</p>
          <h3>Expandability</h3>
          <p>New signals can be introduced by adding mathematical models and control logic rather than recording and distributing additional media assets.</p>
        </section>

        <section className="tone-section">
          <h2>A Foundation for Future Test Signals</h2>
          <p>The same architecture can support more advanced measurement signals, including:</p>
          <ul>
            <li>Linear frequency sweeps.</li>
            <li>Logarithmic sweeps.</li>
            <li>Multitone signals.</li>
            <li>Impulse signals.</li>
            <li>Tone bursts.</li>
            <li>Identification tones.</li>
            <li>Channel-specific test sequences.</li>
            <li>Specialized broadcast and audiovisual reference signals.</li>
          </ul>
          <p>The engine remains the same. The mathematical model changes.</p>
          <ArticleFigure
            figure={figures.future}
            classNames={toneFigureClasses}
          />
        </section>

        <section className="tone-section">
          <h2>Engineering Philosophy</h2>
          <p>GEN-B was designed as an engineering instrument, not as a collection of media files.</p>
          <p>
            Its tone generator transforms equations into samples, samples into
            digital waveforms, and digital waveforms into professional reference
            signals. The result is a flexible architecture built for alignment,
            testing, education, troubleshooting, and future expansion.
          </p>
          <p>There are no prerecorded tones pretending to be a signal generator.</p>
          <p><strong>The mathematics are the signal.</strong></p>
        </section>

        <section className="tone-callout">
          <p className="genb-kicker">Precision Broadcast Engineering Engineering Notes</p>
          <p>
            Precision Broadcast Engineering Engineering Notes document the
            engineering principles, design decisions, and technologies behind PBE
            products and professional broadcast workflows.
          </p>
        </section>

        <section className="tone-final-cta">
          <div>
            <p className="genb-kicker">GEN-B Algorithmic Tone Generator</p>
            <h2>Professional references generated from mathematics.</h2>
            <p>
              GEN-B calculates the waveform sample by sample in real time so the
              reference remains parameter-driven, repeatable, and ready for
              professional audio alignment workflows.
            </p>
          </div>
          <div className="tone-actions">
            <Link href="/gen-b" className="btn-secondary">
              Back to GEN-B
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact PBE
            </Link>
          </div>
        </section>
      </article>

      <style>{`
        .tone-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(0, 207, 255, 0.16), transparent 30rem),
            linear-gradient(180deg, #030812 0%, #07111f 42%, #030812 100%);
          color: #ffffff;
        }

        .tone-hero {
          padding: 76px 48px 54px;
          border-bottom: 1px solid rgba(0, 207, 255, 0.16);
        }

        .tone-hero-inner {
          width: min(1240px, 100%);
          margin: 0 auto;
          display: block;
        }

        .tone-hero-copy {
          min-width: 0;
        }

        .tone-hero-copy h1 {
          max-width: 820px;
          font-size: clamp(2.55rem, 4.25vw, 4rem);
          line-height: 0.98;
          letter-spacing: -0.045em;
          font-weight: 900;
        }

        .tone-subtitle,
        .tone-lede,
        .tone-section p,
        .tone-section li,
        .tone-final-cta p,
        .tone-callout p {
          color: #d5dce8;
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .tone-subtitle {
          margin-top: 24px;
          max-width: 760px;
        }

        .tone-actions {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
        }

        .tone-article {
          width: min(1120px, calc(100% - 96px));
          margin: 0 auto;
          padding: 56px 0 88px;
        }

        .tone-section {
          padding: 44px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .tone-section:first-child {
          padding-top: 0;
        }

        .tone-section h2,
        .tone-final-cta h2 {
          max-width: 820px;
          margin-bottom: 18px;
          font-size: clamp(2rem, 4.2vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          font-weight: 900;
        }

        .tone-section h3 {
          margin-top: 28px;
          margin-bottom: 8px;
          color: #00cfff;
          font-size: 1.28rem;
          line-height: 1.3;
        }

        .tone-section p + p,
        .tone-section ul + p,
        .tone-section p + ul {
          margin-top: 18px;
        }

        .tone-section ul {
          display: grid;
          gap: 8px;
          margin-left: 1.2rem;
        }

        .tone-section li::marker {
          color: #00cfff;
        }

        .tone-section code,
        .tone-equation {
          color: #ffffff;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
        }

        .tone-equation {
          width: fit-content;
          padding: 14px 18px;
          border: 1px solid rgba(0, 207, 255, 0.22);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.045);
        }

        .tone-grid-section {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
          gap: 34px;
          align-items: center;
        }

        .tone-grid-reverse {
          grid-template-columns: minmax(360px, 1.1fr) minmax(0, 0.9fr);
        }

        .tone-figure {
          min-width: 0;
          width: 100%;
          margin: 28px 0 0;
          padding: 14px;
          border: 1px solid rgba(0, 207, 255, 0.2);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.34);
        }

        .tone-section > .tone-figure + .tone-figure {
          margin-top: 28px;
        }

        .tone-image-button {
          position: relative;
          display: block;
          width: 100%;
          padding: 0;
          border: 0;
          border-radius: 14px;
          background: transparent;
          cursor: zoom-in;
        }

        .tone-image-button::after {
          content: "Click to enlarge";
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 6px 10px;
          border: 1px solid rgba(0, 207, 255, 0.28);
          border-radius: 999px;
          background: rgba(2, 6, 13, 0.78);
          color: rgba(255, 255, 255, 0.86);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 180ms ease, transform 180ms ease;
        }

        .tone-image-button:hover::after,
        .tone-image-button:focus-visible::after {
          opacity: 1;
          transform: translateY(0);
        }

        .tone-image-button:focus-visible {
          outline: 2px solid #00cfff;
          outline-offset: 4px;
        }

        .tone-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 14px;
          background: #02060d;
        }

        .tone-figure figcaption {
          margin-top: 12px;
          color: rgba(213, 220, 232, 0.78);
          font-size: 0.92rem;
          line-height: 1.55;
        }

        .tone-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(0, 0, 0, 0.88);
        }

        .tone-lightbox-panel {
          position: relative;
          display: flex;
          max-width: calc(100vw - 48px);
          max-height: calc(100vh - 48px);
          align-items: center;
          justify-content: center;
        }

        .tone-lightbox-title {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
        }

        .tone-lightbox-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 1;
          padding: 9px 13px;
          border: 1px solid rgba(0, 207, 255, 0.36);
          border-radius: 999px;
          background: rgba(2, 6, 13, 0.88);
          color: #ffffff;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .tone-lightbox-close:focus-visible {
          outline: 2px solid #00cfff;
          outline-offset: 3px;
        }

        .tone-lightbox-image {
          display: block;
          width: auto;
          max-width: calc(100vw - 48px);
          max-height: calc(100vh - 48px);
          border: 1px solid rgba(0, 207, 255, 0.24);
          border-radius: 16px;
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.62);
          object-fit: contain;
        }

        .tone-callout,
        .tone-final-cta {
          margin-top: 46px;
          padding: 34px;
          border: 1px solid rgba(0, 207, 255, 0.24);
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            rgba(0, 207, 255, 0.12),
            rgba(255, 255, 255, 0.04)
          );
        }

        .tone-callout {
          border-left: 5px solid #00cfff;
        }

        .tone-callout p:last-child {
          color: #ffffff;
          font-weight: 800;
        }

        .tone-final-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .tone-final-cta .tone-actions {
          margin-top: 0;
          flex: 0 0 auto;
        }

        @media (max-width: 980px) {
          .tone-hero {
            padding: 64px 32px 44px;
          }

          .tone-hero-inner,
          .tone-grid-section,
          .tone-grid-reverse {
            grid-template-columns: 1fr;
          }

          .tone-article {
            width: min(100% - 64px, 1120px);
          }

          .tone-final-cta {
            flex-direction: column;
            align-items: flex-start;
          }

          .tone-final-cta .tone-actions {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .tone-hero {
            padding: 56px 22px 34px;
          }

          .tone-article {
            width: min(100% - 44px, 1120px);
            padding: 42px 0 68px;
          }

          .tone-section {
            padding: 34px 0;
          }

          .tone-subtitle,
          .tone-lede,
          .tone-section p,
          .tone-section li,
          .tone-final-cta p,
          .tone-callout p {
            font-size: 1rem;
          }

          .tone-figure {
            padding: 10px;
            border-radius: 16px;
          }

          .tone-image {
            border-radius: 10px;
          }

          .tone-image-button {
            border-radius: 10px;
          }

          .tone-image-button::after {
            right: 8px;
            bottom: 8px;
            font-size: 0.72rem;
          }

          .tone-lightbox {
            padding: 14px;
          }

          .tone-lightbox-panel,
          .tone-lightbox-image {
            max-width: calc(100vw - 28px);
            max-height: calc(100vh - 28px);
          }

          .tone-callout,
          .tone-final-cta {
            padding: 24px;
            border-radius: 18px;
          }

          .tone-actions {
            align-items: stretch;
          }
        }
      `}</style>
    </main>
  );
}
