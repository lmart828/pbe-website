import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <div className="nav-inner">
          <Link href="/" className="logo-wrap">
            <Image
              src="/logo.png"
              alt="Precision Broadcast Engineering"
              width={220}
              height={90}
              priority
              className="logo-img"
            />
          </Link>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="hero">
        <Image
          src="/broadcast-bg.jpg"
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
    </main>
  );
}