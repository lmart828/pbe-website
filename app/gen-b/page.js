import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Broadcast Test Patterns",
    text: "Professional HD patterns for fast video troubleshooting, calibration checks, and signal verification.",
  },
  {
    title: "HDMI Signal Output",
    text: "Designed for iPhone USB-C to HDMI output, giving engineers a portable broadcast test source anywhere.",
  },
  {
    title: "Tone Generator",
    text: "Built-in 1 kHz stereo tone with selectable broadcast reference levels for audio testing.",
  },
  {
    title: "RasterScope & Sweep",
    text: "Advanced screen-area analysis tools to verify aspect ratio, active video area, and display behavior.",
  },
];

const highlights = [
  "Full HD broadcast test patterns",
  "Reference video clips",
  "1 kHz stereo tone generator",
  "HDMI output status monitoring",
  "RasterScope active-area tools",
  "Sweep display analysis",
  "Broadcast workflow support",
  "Designed for iPhone",
];

const showcaseCards = [
  {
    title: "Portable Broadcast Testing",
    text: "GEN-B turns your iPhone into a professional HDMI test signal source for quick field verification, troubleshooting, and setup checks.",
  },
  {
    title: "Patterns, Video & Audio",
    text: "Access HD test patterns, ProRes reference videos, and a built-in 1 kHz tone generator with broadcast-level presets.",
  },
  {
    title: "Designed for Engineers",
    text: "Built for broadcast workflows, GEN-B helps verify signal output, display behavior, active video area, and audio reference levels with confidence.",
  },
];

const analysisHighlights = [
  {
    title: "Oscilloscope Analysis",
    text: "Monitor generated video levels and waveform characteristics before HDMI transmission.",
  },
  {
    title: "Vectorscope Monitoring",
    text: "Verify chroma positioning, color balance, and Rec.709 compliance.",
  },
  {
    title: "Broadcast Workflow Integration",
    text: "Built specifically for engineering, troubleshooting, and field verification tasks.",
  },
];

export default function GenBPage() {
  return (
    <section className="genb-page">
      <section className="genb-hero">
        <Image
          src="/gen-b/genb-hero-bars.png"
          alt="GEN-B broadcast color bars"
          fill
          priority
          className="genb-hero-bg"
        />
        <div className="genb-hero-overlay" />

        <div className="genb-hero-inner">
          <div className="genb-hero-copy">
            <p className="genb-kicker">Professional iPhone Test Generator</p>
            <h1>GEN-B</h1>
            <h2>
              Full High Definition Broadcast Signals Generator. Right from your
              iPhone.
            </h2>
            <p>
              GEN-B is a professional HDMI test pattern generator designed for
              broadcast engineers, control rooms, production teams, and field
              troubleshooting. It provides reliable video patterns, reference
              clips, tone generation, and signal analysis tools to help validate
              displays, converters, signal paths, and real-world broadcast
              workflows.
            </p>

            <div className="genb-hero-actions">
              <a href="#" className="genb-store-link" aria-label="Download GEN-B on the App Store">
                <Image
                  src="/gen-b/genb-app-store-badge.png"
                  alt="Download on the App Store"
                  width={194}
                  height={75}
                  className="genb-store-badge"
                />
              </a>
              <Link href="/support" className="btn-secondary">
                Contact Support
              </Link>
            </div>
          </div>

          <div className="genb-hero-visual">
            <Image
              src="/gen-b/genb-app-interface.png"
              alt="GEN-B app interface"
              width={1398}
              height={645}
              priority
              className="genb-interface-image"
            />
            <Image
              src="/gen-b/genb-app-icon.png"
              alt="GEN-B app icon"
              width={96}
              height={96}
              className="genb-icon-accent"
            />
          </div>
        </div>
      </section>

      <section className="genb-section">
        <div className="genb-section-heading">
          <p className="genb-kicker">Field-Ready Tools</p>
          <h2>GEN-B Features</h2>
        </div>

        <div className="genb-feature-grid">
          {features.map((feature) => (
            <article className="genb-feature-card" key={feature.title}>
              <span className="genb-feature-mark" />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="genb-about-section">
        <div className="genb-about-copy">
          <p className="genb-kicker">Built for Broadcast Workflows</p>
          <h2>Professional signal testing in your pocket.</h2>
          <p>
            GEN-B combines HD test patterns, reference video clips, tone
            generation, HDMI output monitoring, RasterScope tools, and Sweep
            analysis in a simple field-ready app built for professional
            broadcast workflows.
          </p>
        </div>

        <div className="genb-about-panel">
          <Image
            src="/gen-b/genb-app-icon.png"
            alt="GEN-B app icon"
            width={118}
            height={118}
            className="genb-about-icon"
          />
          <p>
            Designed to help engineers validate the real chain: source, adapter,
            converter, router, display, and room.
          </p>
        </div>
      </section>

      <section className="genb-section genb-highlights-section">
        <div className="genb-section-heading">
          <p className="genb-kicker">Technical Highlights</p>
          <h2>Broadcast tools for practical signal checks.</h2>
        </div>

        <div className="genb-highlight-grid">
          {highlights.map((highlight) => (
            <div className="genb-highlight-item" key={highlight}>
              <span />
              <p>{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="genb-section">
        <div className="genb-section-heading">
          <p className="genb-kicker">Showcase</p>
          <h2>Purpose-built screens for fast technical decisions.</h2>
        </div>

        <div className="genb-showcase-grid">
          {showcaseCards.map((card) => (
            <article className="genb-showcase-card" key={card.title}>
              <span className="genb-showcase-rule" />
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="genb-analysis-section">
        <div className="genb-analysis-heading">
          <p className="genb-kicker">Signal Intelligence</p>
          <h2>Professional Signal Analysis</h2>
          <p>
            Integrated waveform and vectorscope-style analysis tools designed to
            help engineers validate video signals before transmission.
          </p>
        </div>

        <div className="genb-analysis-image-wrap">
          <Image
            src="/gen-b/genb-instruments-screen.png"
            alt="GEN-B professional signal analysis instruments screen"
            width={2796}
            height={1290}
            className="genb-analysis-image"
          />
        </div>

        <div className="genb-analysis-grid">
          {analysisHighlights.map((highlight) => (
            <article className="genb-analysis-card" key={highlight.title}>
              <span className="genb-showcase-rule" />
              <h3>{highlight.title}</h3>
              <p>{highlight.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="genb-action-section">
        <div className="genb-action-heading">
          <p className="genb-kicker">Workflow Preview</p>
          <h2>GEN-B in Action</h2>
          <p>
            See GEN-B in operation as it navigates through test patterns, video
            references, audio tone generation, RasterScope tools, and signal
            analysis features.
          </p>
          <p>
            Designed by broadcast engineers, GEN-B supports professional display
            testing workflows across HDMI, USB-C video output, DisplayPort
            adapters, and compatible external displays.
          </p>
        </div>

        <div className="genb-action-video-wrap">
          <video
            className="genb-action-video"
            controls
            preload="metadata"
            aria-label="GEN-B in operation"
          >
            <source src="/gen-b/genb-in-action.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="genb-final-cta">
        <div>
          <p className="genb-kicker">Download GEN-B</p>
          <h2>Ready to test your signal chain?</h2>
          <p>
            Download GEN-B and carry a professional broadcast test generator in
            your pocket.
          </p>
        </div>

        <a href="#" className="genb-store-link" aria-label="Download GEN-B on the App Store">
          <Image
            src="/gen-b/genb-app-store-badge.png"
            alt="Download on the App Store"
            width={194}
            height={75}
            className="genb-store-badge"
          />
        </a>
      </section>
    </section>
  );
}
