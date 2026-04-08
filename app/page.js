import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="topbar-overlay" />
        <div className="container navbar">
          <Link href="/" className="logo-wrap">
            <Image
              src="/logo.png"
              alt="Precision Broadcast Engineering"
              width={320}
              height={110}
              priority
              className="logo-img"
            />
          </Link>

          <nav className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
        </div>
      </header>

      <section
        className="hero"
        style={{ backgroundImage: "url('/broadcast-bg.jpg')" }}
      >
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Mission-Critical Broadcast Support</p>
          <h1>We restore what keeps you on-air.</h1>
          <p className="hero-text">
            Precision Broadcast Engineering delivers expert troubleshooting,
            repair, and support for professional television production systems,
            helping broadcasters maintain reliability when every second matters.
          </p>

          <div className="hero-actions">
            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link href="/services" className="btn btn-secondary">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="container grid-two">
          <div className="card">
            <h2>Specialized Technical Support</h2>
            <p>
              We provide high-level engineering support for broadcast systems,
              signal flow, hardware diagnostics, media workflows, and live
              production environments.
            </p>
          </div>

          <div className="card">
            <h2>Built for Broadcast Reliability</h2>
            <p>
              From control rooms to graphics, routing, servers, monitoring,
              playout, and infrastructure, our focus is fast recovery and stable
              operation for on-air confidence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}