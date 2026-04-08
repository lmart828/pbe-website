export default function AboutPage() {
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
          About Us
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
          Precision engineering for broadcast systems that must stay on-air
        </h1>

        <p
          style={{
            marginTop: "28px",
            fontSize: "1.45rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.78)",
            maxWidth: "980px",
          }}
        >
          Precision Broadcast Engineering provides advanced diagnostics, repair,
          maintenance, and technical support for critical television and media
          infrastructure. Our focus is simple: restore reliability, reduce
          downtime, and keep operations running when failure is not an option.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "36px",
            marginTop: "70px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "32px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                fontSize: "1.8rem",
                fontWeight: 700,
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                marginBottom: 0,
                color: "rgba(255,255,255,0.75)",
                fontSize: "1.08rem",
                lineHeight: 1.8,
              }}
            >
              To deliver dependable, engineering-level support for
              mission-critical broadcast systems through expert troubleshooting,
              repair, and technical execution.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              padding: "32px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                fontSize: "1.8rem",
                fontWeight: 700,
              }}
            >
              Our Vision
            </h2>
            <p
              style={{
                marginBottom: 0,
                color: "rgba(255,255,255,0.75)",
                fontSize: "1.08rem",
                lineHeight: 1.8,
              }}
            >
              To become a trusted engineering partner for broadcasters,
              production facilities, and media organizations that require
              technical excellence, responsiveness, and operational continuity.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            maxWidth: "1100px",
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              position: "relative",
              minHeight: "340px",
              borderRadius: "24px",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.38)), url('/about-engineering1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 0 40px rgba(0,150,255,0.14)",
              animation: "slowZoom 12s ease-in-out infinite alternate"
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 20% 20%, rgba(0,212,255,0.10), transparent 35%)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "24px",
                right: "24px",
                bottom: "22px",
                color: "rgba(255,255,255,0.9)",
                fontSize: "1rem",
                lineHeight: 1.6,
                textShadow: "0 2px 16px rgba(0,0,0,0.6)",
              }}
            >
              Engineering-focused support for real-world broadcast environments.
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(35,196,255,0.08), rgba(255,255,255,0.02))",
              border: "1px solid rgba(35,196,255,0.18)",
              borderRadius: "24px",
              padding: "32px 34px",
            }}
          >
            <h2
              style={{
                marginTop: 0,
                marginBottom: "22px",
                fontSize: "1.9rem",
                fontWeight: 700,
              }}
            >
              What sets us apart
            </h2>

            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              {[
                "Hands-on troubleshooting with engineering discipline",
                "Support for SDI, IP, control room, and production workflows",
                "Repair-oriented mindset, not just part replacement",
                "Fast response for operational and on-air critical systems",
                "Professional communication and dependable execution",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "12px",
                    color: "rgba(255,255,255,0.82)",
                    fontSize: "1.05rem",
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      width: "7px",
                      height: "7px",
                      marginTop: "10px",
                      borderRadius: "999px",
                      background: "linear-gradient(90deg, #3aa0ff, #00d4ff)",
                      flexShrink: 0,
                    }}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}