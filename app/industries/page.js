export default function IndustriesPage() {
  const industries = [
    {
      title: "Television Networks",
      text: "Support for live production, studio infrastructure, graphics workflows, playout paths, and operational continuity in network environments.",
    },
    {
      title: "News Production",
      text: "Engineering support for rundown-driven operations where speed, reliability, and rapid issue recovery are essential.",
    },
    {
      title: "Sports & Live Events",
      text: "Technical support for high-pressure live productions that require real-time problem solving and dependable signal paths.",
    },
    {
      title: "Broadcast Facilities",
      text: "Support for media facilities, engineering rooms, racks, routing systems, timing environments, and production control spaces.",
    },
    {
      title: "Control Rooms & PCRs",
      text: "Workflow diagnostics and support for switchers, automation, intercom, tally, graphics integration, and teleprompter paths.",
    },
    {
      title: "Media Technology Integrators",
      text: "Technical collaboration and troubleshooting support for teams deploying or maintaining complex broadcast systems.",
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
          Industries
        </p>

        <h1
          style={{
            fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 1.02,
            fontWeight: 800,
            margin: 0,
            maxWidth: "920px",
          }}
        >
          Built for the environments where broadcast reliability matters most
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
          Precision Broadcast Engineering supports media and production
          environments that depend on uptime, signal integrity, and fast
          technical recovery when systems fail.
        </p>

        <div
          style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "30px",
          }}
        >
          {industries.map((item) => (
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
                  fontSize: "1.9rem",
                  fontWeight: 700,
                  lineHeight: 1.15,
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
            maxWidth: "1100px",
            background:
              "linear-gradient(135deg, rgba(35,196,255,0.08), rgba(255,255,255,0.02))",
            border: "1px solid rgba(35,196,255,0.18)",
            borderRadius: "24px",
            padding: "34px",
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
            Why these industries trust us
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
            We understand the technical pressure of live operations, system
            dependencies, and the need for fast, engineering-level response in
            environments where delays and downtime directly impact production.
          </p>
        </div>
      </section>
    </main>
  );
}