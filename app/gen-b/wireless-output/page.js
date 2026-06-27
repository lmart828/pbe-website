import Link from "next/link";

const bestUses = [
  "Quick demonstrations",
  "Classroom or training environments",
  "Visual review of patterns and video content",
  "Situations where cables are not available",
  "Large-screen previewing",
];

const wiredOutputItems = [
  "Supports USB-C video output",
  "Supports USB-C to USB-C displays",
  "Supports USB-C to DisplayPort",
  "Required for RasterScope Analysis",
  "Required for SWEEP",
  "Best for professional signal testing and display analysis",
];

const wirelessOutputItems = [
  "Uses iPhone Screen Mirroring",
  "Works with compatible wireless receivers",
  "Good for visual monitoring and demonstrations",
  "Supports patterns, videos, and stereo audio when available",
  "Does not support RasterScope Analysis",
  "Does not support SWEEP",
];

export const metadata = {
  title: "Wireless Output | GEN-B",
  description:
    "Learn how GEN-B supports wireless screen mirroring for demonstrations, training, and visual monitoring, and how it differs from direct wired output.",
};

export default function WirelessOutputPage() {
  return (
    <section className="genb-page wireless-output-page">
      <section className="wireless-hero">
        <div className="wireless-hero-inner">
          <div className="wireless-hero-copy">
            <p className="genb-kicker">GEN-B Output Options</p>
            <h1>Wireless Output</h1>
            <p>
              Use GEN-B with compatible wireless displays for quick
              demonstrations, training, and visual monitoring through iPhone
              Screen Mirroring.
            </p>
          </div>

          <button className="wireless-mirroring-button" type="button">
            MIRRORING
          </button>
        </div>
      </section>

      <section className="wireless-section">
        <div className="wireless-section-heading">
          <p className="genb-kicker">What Wireless Output Does</p>
          <h2>Screen Mirroring for practical viewing workflows.</h2>
        </div>

        <div className="wireless-panel">
          <p>
            Wireless Output allows GEN-B to mirror the iPhone screen to
            compatible wireless receivers such as AirPlay-compatible TVs, Apple
            TV, or supported smart displays. This is useful for quick
            demonstrations, training, visual checks, and situations where a
            cable connection is not practical.
          </p>
          <p>
            Wireless Output works through iPhone Screen Mirroring. It can
            display GEN-B patterns, videos, and stereo audio with excellent
            visual quality when supported by the receiving device, but it is not
            the same as a direct wired display connection.
          </p>
        </div>
      </section>

      <section className="wireless-section wireless-uses-section">
        <div className="wireless-section-heading">
          <p className="genb-kicker">Best Uses</p>
          <h2>Useful when fast viewing matters.</h2>
        </div>

        <div className="wireless-card-grid">
          {bestUses.map((use) => (
            <article className="wireless-card" key={use}>
              <span className="genb-showcase-rule" />
              <h3>{use}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="wireless-section wireless-compare-section">
        <div className="wireless-section-heading">
          <p className="genb-kicker">Output Comparison</p>
          <h2>Direct wired output vs wireless output.</h2>
        </div>

        <div className="wireless-comparison-grid">
          <article className="wireless-comparison-card">
            <h3>Direct Wired Output</h3>
            <ul>
              {wiredOutputItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="wireless-comparison-card wireless-comparison-card-cyan">
            <h3>Wireless Output</h3>
            <ul>
              {wirelessOutputItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="wireless-section">
        <div className="wireless-note">
          <p>
            “RasterScope Analysis and SWEEP are not supported when using Screen
            Mirroring. These features require a direct wired display
            connection.”
          </p>
        </div>
      </section>

      <section className="genb-final-cta wireless-final-cta">
        <div>
          <p className="genb-kicker">Engineering Note</p>
          <h2>Choose the output path for the task.</h2>
          <p>
            Wireless Output is a useful way to view GEN-B on compatible displays
            for demonstrations, training, and quick signal reference. For
            professional signal testing, RasterScope Analysis, and SWEEP, use a
            direct wired connection such as USB-C video adapters, USB-C to USB-C,
            USB-C to DisplayPort, or compatible external display adapters.
          </p>
        </div>

        <Link href="/gen-b" className="btn-secondary">
          Back to GEN-B
        </Link>
      </section>
    </section>
  );
}
