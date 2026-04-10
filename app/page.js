import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <Image
          src="/broadcast-bg-v1.png"
          alt="Broadcast Studio"
          fill
          priority
          className="hero-image"
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1>
            Engineering support for systems that <span>cannot fail</span>
          </h1>

          <p>
            Precision Broadcast Engineering delivers high-level diagnostics,
            repair, and technical support for mission-critical broadcast systems.
          </p>

          <div className="hero-buttons">
            <Link href="/contact" className="btn-primary">
              Request Service
            </Link>

            <Link href="/services" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="home-cards">
        <div className="cards-grid">
          <div className="info-card">
            <h2>Diagnostics & Repair</h2>
            <p>
              Component-level troubleshooting, technical analysis, and repair
              support for professional broadcast equipment.
            </p>
          </div>

          <div className="info-card">
            <h2>Mission-Critical Support</h2>
            <p>
              Fast-response engineering assistance for systems that impact live
              production, signal flow, and on-air reliability.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}