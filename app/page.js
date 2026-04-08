import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />

        <Image
          src="/broadcast-bg.jpg"
          alt="Broadcast Studio"
          fill
          priority
          className="hero-image"
        />

        <div className="hero-content">
          <h1>
            Engineering support for systems that{" "}
            <span>cannot fail</span>
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
    </main>
  );
}