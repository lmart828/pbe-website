import Link from "next/link";

export default function ServicesPage() {
  return (
    <section className="services-page">
      <div className="services-hero">
        <p className="services-kicker">Mission-Critical Broadcast Support</p>
        <h1>Engineering services for mission-critical broadcast operations</h1>
        <p className="services-intro">
          High-level diagnostics, repair, troubleshooting, and operational
          support for systems that must remain reliable on-air.
        </p>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <h2>EVS Systems</h2>
          <p>
            XS Servers, IP Director, MOS integration, playlist recovery, and
            database troubleshooting.
          </p>
        </article>

        <article className="service-card">
          <h2>Vizrt / Flowics</h2>
          <p>
            MOS gateways, graphics pipelines, real-time rendering, and
            integration issue resolution.
          </p>
        </article>

        <article className="service-card">
          <h2>Chyron / Camio</h2>
          <p>
            Graphics engine diagnostics, Camio connectivity, Luci workflow
            support, and rundown-related troubleshooting.
          </p>
        </article>

        <article className="service-card">
          <h2>Prompter Systems</h2>
          <p>
            WinPlus-IP configuration, VAP support, device mapping, controller
            validation, and operator workflow optimization.
          </p>
        </article>

        <article className="service-card">
          <h2>Signal Flow & Routing</h2>
          <p>
            SDI and IP path verification, router logic, embedders /
            de-embedders, multiviewer integrity, and monitoring chain analysis.
          </p>
        </article>

        <article className="service-card">
          <h2>Control Room Reliability</h2>
          <p>
            Broadcast system validation for PCRs, live environments, failover
            readiness, and continuity-focused engineering support.
          </p>
        </article>
      </div>

      <div className="services-cta">
        <h3>Need support for a system that cannot fail?</h3>
        <p>
          We provide engineering-level troubleshooting and repair support for
          complex broadcast environments.
        </p>

        <div className="services-cta-buttons">
          <Link href="/contact" className="btn-primary">
            Request Service
          </Link>
          <Link href="/about" className="btn-secondary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}