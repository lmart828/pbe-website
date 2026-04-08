export default function ServicesPage() {
  const services = [
    {
      title: "EVS Systems",
      text: "XS Servers, IP Director, MOS integration, playlist recovery, and database troubleshooting.",
    },
    {
      title: "Vizrt / Flowics",
      text: "MOS gateways, graphics pipelines, real-time rendering, and integration issue resolution.",
    },
    {
      title: "Chyron / Camio",
      text: "CG engines, template workflows, Luci integration, playout failures, and graphics troubleshooting.",
    },
    {
      title: "Routing & SDI/IP",
      text: "Evertz environments, SMPTE standards, signal integrity, jitter, timing, and synchronization analysis.",
    },
    {
      title: "Control Rooms (PCR)",
      text: "Switcher workflows, automation systems, intercom, tally paths, and end-to-end operational diagnostics.",
    },
    {
      title: "Teleprompter Systems",
      text: "WinPlus-IP, VAP, controllers, redundancy setup, device communication, and failure recovery.",
    },
  ];

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
          Services
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
          Engineering services for mission-critical broadcast operations
        </h1>

        <p
          style={{
            marginTop: "28px",
            fontSize: "1.4rem",
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.78)",
            maxWidth: "980px",
          }}
        >
          High-level diagnostics, repair, troubleshooting, and operational
          support for systems that must remain reliable on-air.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          {services.map((item) => (
            <div
              key={item.title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "30px",
                boxShadow: "0 0 30px rgba(0,120,255,0.05)",
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: "14px",
                  fontSize: "2rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {item.title}
              </h2>

              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.76)",
                  fontSize: "1.08rem",
                  lineHeight: 1.8,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "60px",
            background:
              "linear-gradient(135deg, rgba(35,196,255,0.08), rgba(255,255,255,0.02))",
            border: "1px solid rgba(35,196,255,0.18)",
            borderRadius: "24px",
            padding: "34px",
            maxWidth: "1100px",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: "16px",
              fontSize: "2rem",
              fontWeight: 700,
            }}
          >
            Emergency Support
          </h2>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.82)",
              fontSize: "1.12rem",
              lineHeight: 1.8,
              maxWidth: "900px",
            }}
          >
            When your system is down, every second matters. We provide rapid
            diagnostics and recovery support for live broadcast environments
            where operational continuity cannot wait.
          </p>

          <div
            style={{
              marginTop: "24px",
            }}
          >
            <a
              href="/contact"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #2f7df6, #46a5ff)",
                padding: "16px 28px",
                borderRadius: "14px",
                color: "#fff",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(70,165,255,0.22)",
              }}
            >
              Request Immediate Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}