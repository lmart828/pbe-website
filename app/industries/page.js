import Link from "next/link";

export default function IndustriesPage() {
  return (
    <section className="industries-page">
      <div className="industries-hero">
        <p className="industries-kicker">Industries We Support</p>
        <h1>Broadcast engineering support across critical media environments</h1>
        <p className="industries-intro">
          We provide specialized engineering services for organizations that
          depend on stable, high-performance broadcast systems and live
          production workflows.
        </p>
      </div>

      <div className="industries-grid">
        <article className="industry-card">
          <h2>Television Networks</h2>
          <p>
            Full support for large-scale broadcast environments, including
            control rooms, playout systems, routing infrastructure, and
            live production operations.
          </p>
        </article>

        <article className="industry-card">
          <h2>News Studios</h2>
          <p>
            Reliable engineering support for fast-paced news environments
            where system stability and rapid issue resolution are critical.
          </p>
        </article>

        <article className="industry-card">
          <h2>Production Control Rooms (PCR)</h2>
          <p>
            Support for switchers, EVS, graphics, prompters, and automation
            systems that drive live broadcast execution.
          </p>
        </article>

        <article className="industry-card">
          <h2>Live Event Production</h2>
          <p>
            Engineering support for live shows, remote productions, and
            special events requiring seamless system coordination.
          </p>
        </article>

        <article className="industry-card">
          <h2>Broadcast Engineering Teams</h2>
          <p>
            Supplemental expertise for internal engineering teams needing
            advanced troubleshooting, diagnostics, or system recovery.
          </p>
        </article>

        <article className="industry-card">
          <h2>Media & Content Facilities</h2>
          <p>
            Support for facilities handling ingest, editing, playout, and
            content distribution workflows.
          </p>
        </article>
      </div>

      <div className="industries-cta">
        <h3>Supporting the environments where failure is not an option</h3>
        <p>
          From live control rooms to broadcast infrastructure, we help ensure
          continuity, reliability, and fast recovery.
        </p>

        <div className="industries-cta-buttons">
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
          <Link href="/services" className="btn-secondary">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}