export default function SupportPage() {
  return (
    <section className="services-page">
      <div className="services-hero">
        <p className="services-kicker">GEN-B Support</p>
        <h1>GEN-B Support</h1>
        <p className="services-intro">
          Support for GEN-B by Precision Broadcast Engineering.
        </p>
      </div>

      <div className="services-grid">
        <article className="service-card">
          <h2>Contact Support</h2>
          <p>
            Users can contact us at{" "}
            <a
              href="mailto:support@pbe-engineering.com"
              className="text-cyan-400 hover:text-cyan-300 hover:underline cursor-pointer transition-colors duration-200"
            >
              support@pbe-engineering.com
            </a>{" "}
            for technical support, app questions, bug reports, or general
            assistance.
          </p>
        </article>

        <article className="service-card">
          <h2>What to Include When Reporting an Issue</h2>
          <p>
            Please include your iPhone model, iOS version, GEN-B app version,
            video adapter, display, or converter used, a short description of the issue, and
            screenshots or photos if available.
          </p>
        </article>

        <article className="service-card">
          <h2>Basic Troubleshooting</h2>
          <p>
            Check the USB-C video connection, restart the app, confirm the
            external display is powered on, and make sure iOS is updated.
          </p>
        </article>

        <article className="service-card">
          <h2>Legal and Privacy</h2>
          <p>
            Privacy, terms of use, and support information are provided for
            GEN-B users.
          </p>
        </article>
      </div>
    </section>
  );
}
