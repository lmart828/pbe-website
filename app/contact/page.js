export default function ContactPage() {
  return (
    <main
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "60px 80px 100px 80px",
      }}
    >
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#23c4ff",
            fontSize: "1rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "18px",
          }}
        >
          Contact
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 1.02,
            fontWeight: 800,
            margin: 0,
            maxWidth: "900px",
          }}
        >
          Need engineering support? Reach out and we’ll respond quickly.
        </h1>

        <p
          style={{
            marginTop: "28px",
            fontSize: "1.35rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.78)",
            maxWidth: "960px",
          }}
        >
          Whether you need diagnostics, technical support, system recovery, or
          engineering consultation, Precision Broadcast Engineering is ready to
          help.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginTop: "60px",
            alignItems: "start",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "30px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "18px",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Direct Contact
            </h2>

            <div
              style={{
                display: "grid",
                gap: "16px",
                color: "rgba(255,255,255,0.82)",
                fontSize: "1.12rem",
                lineHeight: 1.7,
              }}
            >
              <div>
                <span style={{ color: "#23c4ff", fontWeight: 600 }}>Email:</span>{" "}
                lmart828@gmail.com
              </div>

              <div>
                <span style={{ color: "#23c4ff", fontWeight: 600 }}>Phone:</span>{" "}
                +1 (786) 608-8650
              </div>

              <div>
                <span style={{ color: "#23c4ff", fontWeight: 600 }}>Location:</span>{" "}
                Miami, FL
              </div>
            </div>

            <div
              style={{
                marginTop: "28px",
                padding: "24px",
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg, rgba(35,196,255,0.08), rgba(255,255,255,0.02))",
                border: "1px solid rgba(35,196,255,0.18)",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                }}
              >
                Emergency Support
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                }}
              >
                For urgent broadcast issues, include{" "}
                <strong style={{ color: "#fff" }}>"URGENT"</strong> in your
                message to prioritize response.
              </p>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "30px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "18px",
                fontSize: "2rem",
                fontWeight: 700,
              }}
            >
              Send a Message
            </h2>

            <form
              style={{
                display: "grid",
                gap: "16px",
              }}
            >
              <input
                type="text"
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "16px 18px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />

              <input
                type="email"
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "16px 18px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                }}
              />

              <textarea
                placeholder="Describe your issue..."
                rows={6}
                style={{
                  width: "100%",
                  padding: "16px 18px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backgroundColor: "rgba(255,255,255,0.04)",
                  color: "#fff",
                  fontSize: "1rem",
                  outline: "none",
                  resize: "vertical",
                }}
              />

              <button
                type="submit"
                style={{
                  width: "fit-content",
                  background: "linear-gradient(90deg, #2f7df6, #46a5ff)",
                  color: "#fff",
                  border: "none",
                  padding: "16px 28px",
                  borderRadius: "14px",
                  fontWeight: 600,
                  fontSize: "1rem",
                  cursor: "pointer",
                  boxShadow: "0 0 30px rgba(70,165,255,0.22)",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}