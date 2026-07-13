import Link from "next/link";
import ArticleFigure from "../../components/ArticleFigure";

export const metadata = {
  title:
    "GEN-B SWEEP: When iOS Doesn't Give You EDID, You Build with Geometry | PBE",
  description:
    "A technical look at GEN-B SWEEP, a geometry-driven autonomous reference layer for display and raster analysis on iOS without reading raw EDID.",
};

const articleImages = {
  hero: {
    src: "/gen-b/sweep/genb-sweep-hero-architecture.png",
    alt: "GEN-B SWEEP architecture diagram showing iOS output boundaries and geometry-driven analysis",
    width: 1600,
    height: 900,
    caption:
      "SWEEP is not an EDID reader. It is a geometry-driven reference layer built within the boundaries of what an iOS app is allowed to render and calculate.",
  },
  movingOverlay: {
    src: "/gen-b/sweep/swift-public-moving-overlay.png",
    alt: "Public-safe Swift excerpt showing the autonomous SWEEP moving overlay",
    width: 1600,
    height: 1120,
    caption:
      "Public-safe Swift excerpt from GEN-B: time and output geometry drive the autonomous SWEEP overlay. Internal constants and proprietary analysis logic are intentionally omitted.",
  },
  triangleWave: {
    src: "/gen-b/sweep/swift-public-triangle-wave.png",
    alt: "Public-safe Swift excerpt showing a normalized triangle wave traversal",
    width: 1600,
    height: 620,
    caption:
      "The mathematical heart of the traversal is intentionally small: a normalized 0→1→0 curve that can be scaled to any output geometry.",
  },
  geometryDiagram: {
    src: "/gen-b/sweep/genb-sweep-geometry-active-area.png",
    alt: "GEN-B SWEEP geometry diagram showing active area and matte regions",
    width: 1600,
    height: 900,
    caption:
      "When 16:9 is not the standard, SWEEP treats the raster as geometry — not as an assumption.",
  },
  geometryMapping: {
    src: "/gen-b/sweep/swift-public-geometry-mapping.png",
    alt: "Public-safe Swift excerpt showing geometry mapping from source raster to display area",
    width: 1600,
    height: 1080,
    caption:
      "Public-safe Swift excerpt from the geometry mapping layer: source raster and display geometry become active area, matte regions and utilization.",
  },
};

const sweepFigureClasses = {
  figure: "sweep-figure",
  imageButton: "sweep-image-button",
  image: "sweep-image",
  lightbox: "sweep-lightbox",
  lightboxPanel: "sweep-lightbox-panel",
  lightboxTitle: "sweep-lightbox-title",
  lightboxClose: "sweep-lightbox-close",
  lightboxImage: "sweep-lightbox-image",
};

export default function GenBSweepPage() {
  return (
    <main className="sweep-page">
      <section className="sweep-hero">
        <div className="sweep-hero-inner">
          <div className="sweep-hero-copy">
            <p className="genb-kicker">GEN-B Engineering Article</p>
            <h1>When iOS Doesn&apos;t Give You EDID, You Build with Geometry</h1>
            <p className="sweep-subtitle">
              GEN-B SWEEP is a geometry-driven autonomous reference layer for
              understanding how a generated signal is presented on an external
              display path. It works within the information iOS makes available,
              using known source geometry and output metrics instead of raw EDID.
            </p>
            <div className="sweep-actions">
              <Link href="/gen-b" className="btn-secondary">
                Back to GEN-B
              </Link>
              <Link href="/contact" className="btn-primary">
                Contact PBE
              </Link>
            </div>
          </div>

          <ArticleFigure
            figure={articleImages.hero}
            priority
            classNames={sweepFigureClasses}
          />
        </div>
      </section>

      <article className="sweep-article">
        <section className="sweep-section">
          <p className="sweep-lede">
            Professional display testing usually starts with a simple question:
            what signal did we generate, and what did the display path do with
            it? On a desktop engineering bench, the answer might involve EDID,
            DDC, direct hardware interfaces, and external measurement tools. On
            iOS, the app lives inside a much more controlled environment.
          </p>
          <p>
            That constraint shapes the design. GEN-B does not claim to read raw
            EDID, bypass platform security, or inspect emitted display pixels.
            Instead, SWEEP treats the problem as geometry. If the app knows the
            generated signal dimensions and has access to available output
            metrics, it can build a repeatable reference model around active
            area, aspect relationship, matte regions, and raster utilization.
          </p>
        </section>

        <section className="sweep-section sweep-grid-section">
          <div>
            <p className="genb-kicker">Autonomous Reference Layer</p>
            <h2>A moving reference that is separate from the source.</h2>
            <p>
              SWEEP is implemented as a controlled overlay, not as a mutation of
              the test pattern or video. The selected reference source remains
              the signal under test. The RasterScope box travels independently
              above it, giving the user a visible reference object whose position
              is derived from time and output geometry.
            </p>
            <p>
              This keeps the workflow practical: the app can display a generated
              pattern or reference clip while the autonomous layer traverses the
              same output area. The moving box becomes a repeatable visual
              reference for display behavior, active boundaries, scaling, and
              matte conditions.
            </p>
          </div>
          <ArticleFigure
            figure={articleImages.movingOverlay}
            classNames={sweepFigureClasses}
          />
        </section>

        <section className="sweep-section">
          <h2>Why the traversal is deliberately simple.</h2>
          <p>
            A reliable engineering reference does not need theatrical motion. It
            needs predictable motion. SWEEP uses normalized movement that can be
            scaled to the available output rectangle. The box travels forward,
            reflects, and travels back, which keeps it inside the calculated
            boundaries without requiring object tracking inside the video.
          </p>
          <ArticleFigure
            figure={articleImages.triangleWave}
            classNames={sweepFigureClasses}
          />
          <p>
            The important idea is not animation for its own sake. The important
            idea is that time becomes a deterministic input, geometry defines the
            allowed travel area, and the reference layer stays independent from
            whatever pattern or video is currently selected.
          </p>
        </section>

        <section className="sweep-section sweep-grid-section sweep-grid-reverse">
          <ArticleFigure
            figure={articleImages.geometryDiagram}
            classNames={sweepFigureClasses}
          />
          <div>
            <p className="genb-kicker">Raster Geometry</p>
            <h2>Non-16:9 workflows need measurements, not assumptions.</h2>
            <p>
              Broadcast and display workflows do not always behave like a clean
              16:9 diagram. External displays may report ultrawide dimensions,
              adapters may negotiate different modes, and signal paths can
              introduce aspect adaptation. SWEEP approaches that condition by
              comparing the known generated source raster with the available
              display geometry.
            </p>
            <p>
              From that comparison, GEN-B can describe the active sweep area,
              side matte regions, edge reach, and utilization in engineering
              language. It is not reading raw EDID. It is using the metrics
              available to the app and the known signal geometry that GEN-B
              generates.
            </p>
          </div>
        </section>

        <section className="sweep-section">
          <h2>Turning source and display metrics into useful feedback.</h2>
          <p>
            The mapping layer starts with two pieces of public-safe information:
            the generated source raster and the display/output size reported to
            the app. The source is fit into the display geometry, and the
            resulting rectangle becomes the basis for active area, pillarbox or
            matte estimates, coverage, and aspect relationship feedback.
          </p>
          <ArticleFigure
            figure={articleImages.geometryMapping}
            classNames={sweepFigureClasses}
          />
          <p>
            That is the core of SWEEP&apos;s engineering posture: use known
            signal geometry, respect the platform boundary, and present the
            result clearly enough for a field engineer to make a better decision
            at the display, converter, or signal path.
          </p>
        </section>

        <section className="sweep-callout">
          <p className="genb-kicker">Technical Note</p>
          <p>
            This article describes SWEEP as a geometry-driven engineering
            reference layer. It should not be interpreted as a claim that GEN-B
            reads raw EDID, bypasses iOS security boundaries, captures emitted
            display pixels, or performs object tracking inside the video.
          </p>
        </section>

        <section className="sweep-final-cta">
          <div>
            <p className="genb-kicker">GEN-B SWEEP</p>
            <h2>Built for practical display-path decisions.</h2>
            <p>
              For PBE, the engineering value is not pretending iOS exposes
              everything. The value is building a clear, repeatable reference
              layer from the geometry the app can know.
            </p>
          </div>
          <div className="sweep-actions">
            <Link href="/gen-b" className="btn-secondary">
              Back to GEN-B
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact PBE
            </Link>
          </div>
        </section>
      </article>

      <style>{`
        .sweep-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top right, rgba(0, 207, 255, 0.16), transparent 30rem),
            linear-gradient(180deg, #030812 0%, #07111f 42%, #030812 100%);
          color: #ffffff;
        }

        .sweep-hero {
          padding: 76px 48px 54px;
          border-bottom: 1px solid rgba(0, 207, 255, 0.16);
        }

        .sweep-hero-inner {
          width: min(1240px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(420px, 1.14fr);
          gap: 42px;
          align-items: center;
        }

        .sweep-hero-copy h1 {
          max-width: 820px;
          font-size: clamp(3rem, 6.8vw, 6.4rem);
          line-height: 0.98;
          letter-spacing: -0.045em;
          font-weight: 900;
        }

        .sweep-subtitle,
        .sweep-lede,
        .sweep-section p,
        .sweep-final-cta p,
        .sweep-callout p {
          color: #d5dce8;
          font-size: 1.08rem;
          line-height: 1.75;
        }

        .sweep-subtitle {
          margin-top: 24px;
          max-width: 760px;
        }

        .sweep-actions {
          margin-top: 30px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          align-items: center;
        }

        .sweep-article {
          width: min(1120px, calc(100% - 96px));
          margin: 0 auto;
          padding: 56px 0 88px;
        }

        .sweep-section {
          padding: 44px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .sweep-section:first-child {
          padding-top: 0;
        }

        .sweep-section h2,
        .sweep-final-cta h2 {
          max-width: 820px;
          margin-bottom: 18px;
          font-size: clamp(2rem, 4.2vw, 4rem);
          line-height: 1.05;
          letter-spacing: -0.035em;
          font-weight: 900;
        }

        .sweep-section p + p {
          margin-top: 18px;
        }

        .sweep-grid-section {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
          gap: 34px;
          align-items: center;
        }

        .sweep-grid-reverse {
          grid-template-columns: minmax(360px, 1.1fr) minmax(0, 0.9fr);
        }

        .sweep-figure {
          margin: 0;
          padding: 14px;
          border: 1px solid rgba(0, 207, 255, 0.2);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 28px 70px rgba(0, 0, 0, 0.34);
        }

        .sweep-image-button {
          position: relative;
          display: block;
          width: 100%;
          padding: 0;
          border: 0;
          border-radius: 14px;
          background: transparent;
          cursor: zoom-in;
        }

        .sweep-image-button::after {
          content: "Click to enlarge";
          position: absolute;
          right: 12px;
          bottom: 12px;
          padding: 6px 10px;
          border: 1px solid rgba(0, 207, 255, 0.28);
          border-radius: 999px;
          background: rgba(2, 6, 13, 0.78);
          color: rgba(255, 255, 255, 0.86);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.02em;
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 180ms ease, transform 180ms ease;
        }

        .sweep-image-button:hover::after,
        .sweep-image-button:focus-visible::after {
          opacity: 1;
          transform: translateY(0);
        }

        .sweep-image-button:focus-visible {
          outline: 2px solid #00cfff;
          outline-offset: 4px;
        }

        .sweep-image {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 14px;
          background: #02060d;
        }

        .sweep-figure figcaption {
          margin-top: 12px;
          color: rgba(213, 220, 232, 0.78);
          font-size: 0.92rem;
          line-height: 1.55;
        }

        .sweep-lightbox {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(0, 0, 0, 0.88);
        }

        .sweep-lightbox-panel {
          position: relative;
          display: flex;
          max-width: calc(100vw - 48px);
          max-height: calc(100vh - 48px);
          align-items: center;
          justify-content: center;
        }

        .sweep-lightbox-title {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
        }

        .sweep-lightbox-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 1;
          padding: 9px 13px;
          border: 1px solid rgba(0, 207, 255, 0.36);
          border-radius: 999px;
          background: rgba(2, 6, 13, 0.88);
          color: #ffffff;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 800;
        }

        .sweep-lightbox-close:focus-visible {
          outline: 2px solid #00cfff;
          outline-offset: 3px;
        }

        .sweep-lightbox-image {
          display: block;
          width: auto;
          max-width: calc(100vw - 48px);
          max-height: calc(100vh - 48px);
          border: 1px solid rgba(0, 207, 255, 0.24);
          border-radius: 16px;
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.62);
          object-fit: contain;
        }

        .sweep-callout,
        .sweep-final-cta {
          margin-top: 46px;
          padding: 34px;
          border: 1px solid rgba(0, 207, 255, 0.24);
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            rgba(0, 207, 255, 0.12),
            rgba(255, 255, 255, 0.04)
          );
        }

        .sweep-callout {
          border-left: 5px solid #00cfff;
        }

        .sweep-callout p:last-child {
          color: #ffffff;
          font-weight: 800;
        }

        .sweep-final-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .sweep-final-cta .sweep-actions {
          margin-top: 0;
          flex: 0 0 auto;
        }

        @media (max-width: 980px) {
          .sweep-hero {
            padding: 64px 32px 44px;
          }

          .sweep-hero-inner,
          .sweep-grid-section,
          .sweep-grid-reverse {
            grid-template-columns: 1fr;
          }

          .sweep-article {
            width: min(100% - 64px, 1120px);
          }

          .sweep-final-cta {
            flex-direction: column;
            align-items: flex-start;
          }

          .sweep-final-cta .sweep-actions {
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .sweep-hero {
            padding: 56px 22px 34px;
          }

          .sweep-article {
            width: min(100% - 44px, 1120px);
            padding: 42px 0 68px;
          }

          .sweep-section {
            padding: 34px 0;
          }

          .sweep-subtitle,
          .sweep-lede,
          .sweep-section p,
          .sweep-final-cta p,
          .sweep-callout p {
            font-size: 1rem;
          }

          .sweep-figure {
            padding: 10px;
            border-radius: 16px;
          }

          .sweep-image {
            border-radius: 10px;
          }

          .sweep-image-button {
            border-radius: 10px;
          }

          .sweep-image-button::after {
            right: 8px;
            bottom: 8px;
            font-size: 0.72rem;
          }

          .sweep-lightbox {
            padding: 14px;
          }

          .sweep-lightbox-panel,
          .sweep-lightbox-image {
            max-width: calc(100vw - 28px);
            max-height: calc(100vh - 28px);
          }

          .sweep-callout,
          .sweep-final-cta {
            padding: 24px;
            border-radius: 18px;
          }

          .sweep-actions {
            align-items: stretch;
          }
        }
      `}</style>
    </main>
  );
}
