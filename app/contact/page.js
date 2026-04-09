export default function ContactPage() {
  return (
    <>
      <main className="contact-page">
        <section className="contact-container">
          <p className="contact-eyebrow">Contact</p>

          <h1 className="contact-title">
            Need engineering support? Reach out and we’ll respond quickly.
          </h1>

          <p className="contact-intro">
            Whether you need diagnostics, technical support, system recovery, or
            engineering consultation, Precision Broadcast Engineering is ready to
            help.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <h2 className="contact-card-title">Direct Contact</h2>

              <div className="contact-info-list">
                <div>
                  <span className="contact-label">Email:</span>{" "}
                  <a href="mailto:lmart828@gmail.com" className="contact-link">
                    lmart828@gmail.com
                  </a>
                </div>

                <div>
                  <span className="contact-label">Phone:</span>{" "}
                  <a href="tel:+17866088650" className="contact-link">
                    +1 (786) 608-8650
                  </a>
                </div>

                <div>
                  <span className="contact-label">Location:</span> Miami, FL
                </div>
              </div>

              <div className="contact-emergency-box">
                <h3 className="contact-emergency-title">Emergency Support</h3>

                <p className="contact-emergency-text">
                  For urgent broadcast issues, include{" "}
                  <strong>URGENT</strong> in your message to prioritize
                  response.
                </p>
              </div>
            </div>

            <div className="contact-card">
              <h2 className="contact-card-title">Send a Message</h2>

              <form className="contact-form">
                <input
                  type="text"
                  placeholder="Name"
                  className="contact-input"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="contact-input"
                />

                <textarea
                  placeholder="Describe your issue..."
                  rows={6}
                  className="contact-textarea"
                />

                <button type="submit" className="contact-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .contact-page {
          background-color: #000;
          color: #fff;
          min-height: 100vh;
          padding: 140px 48px 100px;
        }

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-eyebrow {
          color: #23c4ff;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 18px 0;
        }

        .contact-title {
          font-size: clamp(3rem, 6vw, 5rem);
          line-height: 1.02;
          font-weight: 800;
          margin: 0;
          max-width: 900px;
        }

        .contact-intro {
          margin-top: 28px;
          font-size: 1.35rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.78);
          max-width: 960px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 60px;
          align-items: start;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 30px;
          box-sizing: border-box;
          min-width: 0;
        }

        .contact-card-title {
          margin: 0 0 18px 0;
          font-size: 2rem;
          font-weight: 700;
        }

        .contact-info-list {
          display: grid;
          gap: 16px;
          color: rgba(255, 255, 255, 0.82);
          font-size: 1.12rem;
          line-height: 1.7;
          word-break: break-word;
        }

        .contact-label {
          color: #23c4ff;
          font-weight: 600;
        }

        .contact-link {
          color: #fff;
          text-decoration: none;
        }

        .contact-link:hover {
          text-decoration: underline;
        }

        .contact-emergency-box {
          margin-top: 28px;
          padding: 24px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            rgba(35, 196, 255, 0.08),
            rgba(255, 255, 255, 0.02)
          );
          border: 1px solid rgba(35, 196, 255, 0.18);
        }

        .contact-emergency-title {
          margin: 0 0 12px 0;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .contact-emergency-text {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.05rem;
          line-height: 1.8;
        }

        .contact-form {
          display: grid;
          gap: 16px;
        }

        .contact-input,
        .contact-textarea {
          width: 100%;
          padding: 16px 18px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background-color: rgba(255, 255, 255, 0.04);
          color: #fff;
          font-size: 16px;
          outline: none;
          box-sizing: border-box;
          -webkit-appearance: none;
          appearance: none;
        }

        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }

        .contact-textarea {
          resize: vertical;
          min-height: 160px;
        }

        .contact-input:focus,
        .contact-textarea:focus {
          border-color: rgba(70, 165, 255, 0.6);
          box-shadow: 0 0 0 2px rgba(70, 165, 255, 0.15);
        }

        .contact-button {
          width: fit-content;
          background: linear-gradient(90deg, #2f7df6, #46a5ff);
          color: #fff;
          border: none;
          padding: 16px 28px;
          border-radius: 14px;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(70, 165, 255, 0.22);
        }

        .contact-button:hover {
          opacity: 0.96;
        }

        @media (max-width: 1024px) {
          .contact-page {
            padding: 130px 40px 90px 40px;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-page {
            padding: 120px 20px 70px 20px;
          }

          .contact-title {
            font-size: clamp(2.2rem, 10vw, 3.2rem);
            line-height: 1.08;
          }

          .contact-intro {
            margin-top: 20px;
            font-size: 1rem;
            line-height: 1.75;
          }

          .contact-grid {
            gap: 20px;
            margin-top: 36px;
          }

          .contact-card {
            padding: 22px;
            border-radius: 20px;
          }

          .contact-card-title {
            font-size: 1.55rem;
          }

          .contact-info-list {
            font-size: 1rem;
          }

          .contact-emergency-box {
            padding: 18px;
            border-radius: 16px;
          }

          .contact-emergency-title {
            font-size: 1.2rem;
          }

          .contact-emergency-text {
            font-size: 0.98rem;
            line-height: 1.7;
          }

          .contact-button {
            width: 100%;
            justify-self: stretch;
          }
        }

        @media (max-width: 480px) {
          .contact-page {
            padding: 110px 16px 60px 16px;
          }

          .contact-eyebrow {
            font-size: 0.88rem;
          }

          .contact-title {
            font-size: 2rem;
          }

          .contact-card {
            padding: 18px;
          }
        }
      `}</style>
    </>
  );
}