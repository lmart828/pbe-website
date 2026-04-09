import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <div className="about-hero-text">
          <p className="about-kicker">About Precision Broadcast Engineering</p>
          <h1>Engineering expertise for broadcast systems that must remain on-air</h1>
          <p className="about-intro">
            Precision Broadcast Engineering provides advanced diagnostics,
            repair, troubleshooting, and technical support for complex
            television production environments. We focus on reliability,
            continuity, and fast recovery for systems that support live
            broadcast operations.
          </p>
        </div>

        <div className="about-hero-image-wrap">
          <Image
            src="/about-engineering.jpg"
            alt="Broadcast engineering workspace"
            width={900}
            height={700}
            className="about-hero-image"
            priority
          />
        </div>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h2>What We Do</h2>
          <p>
            We support mission-critical broadcast infrastructure with a
            practical engineering approach that combines technical depth,
            operational awareness, and fast problem resolution.
          </p>
          <ul className="about-list">
            <li>Diagnostics and troubleshooting</li>
            <li>Component-level repair</li>
            <li>Signal flow and routing support</li>
            <li>Graphics and automation integration</li>
            <li>Control room reliability support</li>
          </ul>
        </article>

        <article className="about-card">
          <h2>Who We Serve</h2>
          <p>
            Our services are designed for facilities and teams that depend on
            stable technical performance every day.
          </p>
          <ul className="about-list">
            <li>Television networks</li>
            <li>News studios</li>
            <li>Production control rooms</li>
            <li>Live operations teams</li>
            <li>Broadcast engineering departments</li>
          </ul>
        </article>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver precision engineering support that keeps
            broadcast systems stable, reliable, and ready for air. We are
            committed to helping clients protect mission-critical operations
            through expert diagnostics, practical solutions, and fast technical
            response in environments where failure is not an option.
          </p>
        </article>

        <article className="about-card">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become a trusted engineering partner for broadcast
            organizations that demand excellence, reliability, and technical
            confidence. We aim to be recognized for solving complex challenges,
            strengthening operational continuity, and supporting the future of
            high-performance broadcast systems.
          </p>
        </article>
      </div>

      <div className="about-statement">
        <div className="about-statement-content">
          <h3>Built around reliability</h3>
          <p>
            Broadcast systems are not ordinary systems. They operate under
            time pressure, live deadlines, and zero-margin expectations. Our
            engineering support is built around one principle: keep critical
            systems stable, recover quickly, and reduce the risk of on-air
            failure.
          </p>
        </div>
      </div>

      <div className="about-cta">
        <h3>Need engineering support for a critical broadcast environment?</h3>
        <p>
          We help diagnose, stabilize, and support the systems that keep your
          operation moving.
        </p>

        <div className="about-cta-buttons">
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