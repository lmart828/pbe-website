import Link from "next/link";
import ArticleFigure from "../../components/ArticleFigure";
import styles from "./page.module.css";

export const metadata = {
  title:
    "EBU Color Bars: The Hidden Mathematics Behind 75% and 100% | PBE",
  description:
    "How a vectorscope discrepancy led PBE to replace a fixed normalization value with pattern-aware Rec.709 calibration",
};

const imageBase =
  "/images/gen-b/engineering-notes/ebu-color-bars-75-100";

const figures = {
  hero: {
    src: `${imageBase}/ebu-color-bars-hero.png`,
    alt: "EBU 75% and 100% color bars represented on a vectorscope",
    width: 3200,
    height: 1800,
    caption:
      "EBU 75% and 100% color bars represented on a vectorscope",
  },
  nomenclature: {
    src: `${imageBase}/ebu-nomenclature-100-0-75-0.png`,
    alt: "The four-number EBU color-bar nomenclature",
    width: 3200,
    height: 2000,
    caption: "The four-number EBU color-bar nomenclature",
  },
  vectorscopeCompare: {
    src: `${imageBase}/ebu-vectorscope-75-vs-100.png`,
    alt: "Ideal vectorscope relationship between EBU 75% and EBU 100%",
    width: 1672,
    height: 941,
    caption:
      "Ideal vectorscope relationship between EBU 75% and EBU 100%",
  },
  codingRange: {
    src: `${imageBase}/ebu-coding-range-mathematics.png`,
    alt: "Full-range and studio-legal chroma scaling",
    width: 3200,
    height: 1800,
    caption: "Full-range and studio-legal chroma scaling",
  },
  algorithm: {
    src: `${imageBase}/ebu-pattern-aware-algorithm.png`,
    alt: "Pattern-aware Rec.709 vectorscope normalization",
    width: 3200,
    height: 1800,
    caption: "Pattern-aware Rec.709 vectorscope normalization",
  },
  beforeAfter: {
    src: `${imageBase}/ebu-vectorscope-before-after.png`,
    alt: "Vectorscope result before and after pattern-aware calibration",
    width: 1672,
    height: 941,
    caption:
      "Vectorscope result before and after pattern-aware calibration",
  },
};

const ebuFigureClasses = {
  figure: styles.ebuFigure,
  imageButton: styles.ebuImageButton,
  image: styles.ebuImage,
  lightbox: styles.ebuLightbox,
  lightboxPanel: styles.ebuLightboxPanel,
  lightboxTitle: styles.ebuLightboxTitle,
  lightboxClose: styles.ebuLightboxClose,
  lightboxImage: styles.ebuLightboxImage,
};

export default function EbuColorBarsEngineeringNotePage() {
  return (
    <main className={styles.ebuPage}>
      <section className={styles.ebuHero}>
        <div className={styles.ebuHeroInner}>
          <div className={styles.ebuHeroCopy}>
            <p className="genb-kicker">GEN-B Engineering Note</p>
            <h1>
              EBU Color Bars: The Hidden Mathematics Behind 75% and 100%
            </h1>
            <p className={styles.ebuSubtitle}>
              How a vectorscope discrepancy led PBE to replace a fixed
              normalization value with pattern-aware Rec.709 calibration
            </p>
            <p className={styles.ebuMeta}>
              <span>Precision Broadcast Engineering</span>
              <span aria-hidden="true"> · </span>
              <time dateTime="2026-07-14">2026-07-14</time>
            </p>
            <div className={styles.ebuActions}>
              <Link href="/gen-b" className="btn-secondary">
                Back to GEN-B
              </Link>
              <Link href="/contact" className="btn-primary">
                Contact PBE
              </Link>
            </div>
          </div>
        </div>
      </section>

      <article className={styles.ebuArticle}>
        <section className={styles.ebuSection}>
          <ArticleFigure
            figure={figures.hero}
            priority
            classNames={ebuFigureClasses}
          />
          <p className={styles.ebuLede}>
            Color bars are among the most recognizable images in television
            engineering. Their apparent simplicity, however, can conceal
            important differences in amplitude, coding range, colorimetry, and
            intended use.
          </p>
          <p>
            While developing GEN-B as a professional test-signal generator and
            display-analysis platform, Precision Broadcast Engineering
            encountered one of those differences in the EBU color-bar family. A
            small discrepancy between the 75% and 100% patterns appeared in the
            vectorscope: the angular positions required close examination, while
            several color vectors did not reach the expected target boxes.
          </p>
          <p>
            What initially looked like a minor display-calibration issue led to
            a deeper investigation of EBU nomenclature, Rec.709 component
            mathematics, studio-legal code values, and vectorscope gain
            normalization. The result was not a visual approximation or a
            manually selected correction. It was a pattern-aware mathematical
            calibration derived from the signal itself.
          </p>
          <p>This Engineering Note documents that investigation.</p>
        </section>

        <section className={styles.ebuSection}>
          <h2>A familiar pattern from a different engineering tradition</h2>
          <p>
            Engineers working primarily in the United States are naturally more
            familiar with SMPTE color bars and the 525/60 engineering tradition
            from which they evolved. EBU color bars are historically associated
            with European 625/50 television practice. Their formal nomenclature
            is defined by ITU-R BT.471, while ITU-T J.65 recommended a 100/0/75/0
            signal as the conventional loading test signal for 625/50 analogue
            television channels.
          </p>
          <p>
            That historical purpose matters. The pattern was not created merely
            to put recognizable colors on a monitor. It was intended to exercise
            luminance and chrominance through a television chain with a
            standardized and representative signal.
          </p>
          <p>
            In modern digital systems, the familiar EBU names remain in use, but
            the pattern must be interpreted within a defined colorimetry and
            coding range. For HD work, that normally means Rec.709 coefficients
            and studio-legal digital levels.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>Reading the four-number nomenclature</h2>
          <p>
            The expression <strong>100/0/75/0</strong> is frequently described
            too casually as “75% saturation bars.” That description is
            incomplete and can be misleading.
          </p>
          <p>
            ITU-R BT.471 defines the four values as R′G′B′ component levels,
            expressed relative to reference white:
          </p>
          <ol>
            <li>The primary-component level in the white bar.</li>
            <li>The primary-component level in the black bar.</li>
            <li>
              The maximum primary-component level in the colored bars.
            </li>
            <li>
              The minimum primary-component level in the colored bars.
            </li>
          </ol>
          <ArticleFigure
            figure={figures.nomenclature}
            classNames={ebuFigureClasses}
          />
          <p>Therefore:</p>
          <ul>
            <li>
              <strong>EBU 75%:</strong> 100/0/75/0
            </li>
            <li>
              <strong>EBU 100%:</strong> 100/0/100/0
            </li>
          </ul>
          <p>
            The white bar remains at 100% in both patterns. In the 75% pattern,
            the active R′, G′, or B′ components of the colored bars are reduced
            to 75%, while the inactive components remain at black.
          </p>
          <p>
            This is why “75% saturation” is not the best mathematical
            description. A yellow bar constructed with R′ and G′ active and B′
            at black remains on the fully saturated yellow axis. Its component
            amplitude—and therefore its chroma-vector length—is reduced.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>The vectorscope question</h2>
          <p>
            A vectorscope presents two related but different properties:
          </p>
          <ul>
            <li>
              <strong>Angle represents hue or chroma phase.</strong>
            </li>
            <li>
              <strong>
                Distance from the center represents chroma magnitude.
              </strong>
            </li>
          </ul>
          <p>
            Under ideal continuous Rec.709 mathematics, reducing a color bar
            from 100% to 75% scales both chroma components by the same factor.
            The vector becomes shorter but should remain on the same radial hue
            axis.
          </p>
          <p>For Rec.709:</p>
          <p className={styles.ebuEquation}>
            Y′ = 0.2126R′ + 0.7152G′ + 0.0722B′
          </p>
          <p className={styles.ebuEquation}>
            C<sub>b</sub> = (B′ − Y′) / 1.8556
          </p>
          <p className={styles.ebuEquation}>
            C<sub>r</sub> = (R′ − Y′) / 1.5748
          </p>
          <p>The vector magnitude and angle are:</p>
          <p className={styles.ebuEquation}>
            |C| = √(C<sub>b</sub>² + C<sub>r</sub>²)
          </p>
          <p className={styles.ebuEquation}>
            θ = atan2(C<sub>b</sub>, C<sub>r</sub>)
          </p>
          <p>
            If both chroma components are multiplied by the same factor, the
            magnitude changes but the angle does not. Small angular differences
            can still appear after integer quantization, code-value rounding,
            image conversion, or measurement from decoded assets. Those
            differences are typically fractions of a degree; they are not an
            intentional EBU hue rotation.
          </p>
          <ArticleFigure
            figure={figures.vectorscopeCompare}
            classNames={ebuFigureClasses}
          />
          <p>
            The systematic discrepancy GEN-B revealed was radial: four vectors
            in the EBU 100% pattern appeared slightly inside the graticule
            targets even though the Rec.709 coefficients, phase remapping, PNG
            sampling, RGB Parade, and waveform processing were correct.
          </p>
          <p>
            That observation redirected the investigation from phase to gain.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>The hidden assumption inside a single constant</h2>
          <p>
            The vectorscope pipeline originally used a fixed reference magnitude
            of approximately <strong>0.502</strong>. That number was not
            arbitrary, but it was not universal either.
          </p>
          <p>For full-range Rec.709 yellow:</p>
          <p className={styles.ebuEquation}>(R′, G′, B′) = (1, 1, 0)</p>
          <p className={styles.ebuEquation}>
            Y′ = 0.9278, &nbsp; C<sub>b</sub> = −0.5000, &nbsp; C<sub>r</sub> =
            +0.045847
          </p>
          <p className={styles.ebuEquation}>
            |C|<sub>yellow, full, 100</sub> = 0.502098
          </p>
          <p>
            The original <code>0.502</code> value was therefore the chroma
            magnitude of a <strong>full-range 100% yellow bar</strong>. In
            software, it acted as the denominator of the vectorscope’s XY gain.
          </p>
          <p>
            That calibration was correct for a full-range pattern. It was not
            correct for an EBU pattern encoded with studio-legal RGB values.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>Full range and studio legal are not interchangeable</h2>
          <p>
            In 8-bit representation, full-range RGB uses the interval 0–255.
            Studio-legal RGB uses nominal black at code 16 and nominal white at
            code 235. The active excursion is therefore:
          </p>
          <p className={styles.ebuEquation}>235 − 16 = 219 code values</p>
          <p>Compared with full range:</p>
          <p className={styles.ebuEquation}>219 / 255 = 0.858824</p>
          <p>The same scale factor appears in the Rec.709 chroma magnitude:</p>
          <p className={styles.ebuEquation}>
            0.502098 × (219 / 255) = 0.431213
          </p>
          <ArticleFigure
            figure={figures.codingRange}
            classNames={ebuFigureClasses}
          />
          <p>
            The nominal yellow references used in the investigation were:
          </p>
          <div className={styles.ebuTableWrap}>
            <table className={styles.ebuTable}>
              <thead>
                <tr>
                  <th>Pattern construction</th>
                  <th>Nominal 8-bit R′G′B′ yellow</th>
                  <th>Rec.709 chroma magnitude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Full-range 100%</td>
                  <td>255, 255, 0</td>
                  <td>
                    <strong>0.502098</strong>
                  </td>
                </tr>
                <tr>
                  <td>Studio-legal EBU 100%</td>
                  <td>235, 235, 16</td>
                  <td>
                    <strong>0.431213</strong>
                  </td>
                </tr>
                <tr>
                  <td>Studio-legal EBU 75%</td>
                  <td>180, 180, 16</td>
                  <td>
                    <strong>0.322918</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Using <code>0.502098</code> to normalize EBU 100% under-gained its
            vectors by approximately 14%. The error was not in the pattern and
            not in the Rec.709 matrix. The gain reference belonged to a
            different coding range.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>Why EBU 75% is close to—but not exactly—0.7500</h2>
          <p>There was a second important detail.</p>
          <p>
            If the EBU 75% pattern were represented by infinitely precise
            floating-point values, its active excursion would be exactly 75% of
            the 100% excursion. But a digital pattern is constructed from
            integer code values.
          </p>
          <p>Using the nominal 8-bit studio values:</p>
          <p className={styles.ebuEquation}>
            (180 − 16) / (235 − 16) = 164 / 219 = 0.748858…
          </p>
          <p>Consequently:</p>
          <p className={styles.ebuEquation}>
            0.322918 / 0.431213 ≈ 0.7489
          </p>
          <p>
            The difference is small, but a professional measuring instrument
            should not assume that “75%” always means multiplying a previously
            quantized value by exactly 0.75. The correct reference should be
            derived from the actual nominal RGB values of the active pattern.
          </p>
          <p>
            This also explains why small phase differences may appear when
            independently quantized Cb and Cr code values are measured.
            Quantization can move the calculated point by a fraction of a
            degree, even though the ideal hue axis has not changed.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>The engineering correction in GEN-B</h2>
          <p>
            GEN-B’s EBU bars were generated mathematically from defined
            component values. After validation, the algorithmic images were
            converted into PNG assets to reduce runtime memory and processing
            requirements. That optimization did not remove the need for exact
            mathematics; it made it even more important that the analysis
            pipeline understand the coding range and bar percentage represented
            by each asset.
          </p>
          <p>
            The fixed reference was replaced with a Rec.709-derived,
            pattern-aware computation:
          </p>
          <ol>
            <li>Identify the active coding range: full or studio legal.</li>
            <li>Identify the bar percentage: 75% or 100%.</li>
            <li>
              Construct the nominal yellow R′G′B′ values for that pattern.
            </li>
            <li>Calculate Y′ using the Rec.709 coefficients.</li>
            <li>Calculate Cb and Cr.</li>
            <li>
              Calculate the reference magnitude using √(C<sub>b</sub>² + C
              <sub>r</sub>²).
            </li>
            <li>
              Normalize the measured vectors using the matching reference.
            </li>
          </ol>
          <ArticleFigure
            figure={figures.algorithm}
            classNames={ebuFigureClasses}
          />
          <p>Conceptually:</p>
          <pre className={styles.ebuCode}>
            <code>{`referenceMagnitude = yellowChromaReference(
    codingRange: full | studioLegal,
    percentage: 75 | 100
)`}</code>
          </pre>
          <p>
            No manually selected correction factor is required. The same Rec.709
            equations generate both the signal reference and the vectorscope
            normalization.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>Validation</h2>
          <p>After the correction:</p>
          <ul>
            <li>
              EBU 100% vectors aligned with the appropriate graticule targets.
            </li>
            <li>EBU 75% vectors aligned with the 75% targets.</li>
            <li>The expected hue axes were preserved.</li>
            <li>SMPTE behavior remained unchanged.</li>
            <li>RGB Parade and waveform results were unaffected.</li>
            <li>The PNG-based analysis path remained intact.</li>
            <li>
              No fixed empirical constant remained in the EBU calibration path.
            </li>
          </ul>
          <ArticleFigure
            figure={figures.beforeAfter}
            classNames={ebuFigureClasses}
          />
          <p>
            The important engineering result was not simply that the dots moved
            into their boxes. It was that the correction came from the signal
            definition itself and remained valid across both percentage and
            coding-range changes.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>What this investigation taught us</h2>
          <p>
            Professional test signals cannot be validated by appearance alone.
            Two patterns may look correct on a display and still require
            different measurement references. Conversely, two vectors may appear
            to indicate different colors when the real problem is a gain
            normalization inherited from another coding range.
          </p>
          <p>The investigation also reinforced several principles:</p>
          <ul>
            <li>
              A familiar decimal constant may contain an undocumented
              assumption.
            </li>
            <li>
              Percentage, saturation, component amplitude, coding range, and
              vectorscope gain are not interchangeable concepts.
            </li>
            <li>
              Phase and magnitude must be investigated independently.
            </li>
            <li>
              Integer code values matter when building reference signals.
            </li>
            <li>
              A stored PNG can be a precise professional test asset when its
              generation and analysis paths are mathematically controlled.
            </li>
            <li>
              A professional generator must reproduce and measure the intended
              electrical signal—not merely display a recognizable image.
            </li>
          </ul>
          <p>
            For engineers accustomed primarily to SMPTE practice, the EBU
            patterns provide an instructive example of how regional broadcast
            history remains embedded in modern digital test signals. Building
            GEN-B required us to study those details beyond their visual form.
            The vectorscope discrepancy was not an inconvenience; it was the
            observation that exposed the hidden assumption and ultimately
            produced a more accurate instrument.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>References</h2>
          <ol className={styles.ebuReferences}>
            <li>
              <a
                href="https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.471-1-198607-I%21%21PDF-E.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ITU-R BT.471-1 — Nomenclature and description of colour bar
                signals
              </a>
            </li>
            <li>
              <a
                href="https://www.itu.int/rec/dologin_pub.asp?id=T-REC-J.65-197802-I%21%21PDF-E&lang=e&type=items"
                target="_blank"
                rel="noopener noreferrer"
              >
                ITU-T J.65 — Standard test signal for conventional loading of a
                television channel
              </a>
            </li>
            <li>
              <a
                href="https://www.itu.int/dms_pubrec/itu-r/rec/bt/r-rec-bt.709-6-201506-i%21%21pdf-e.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ITU-R BT.709-6 — Parameter values for HDTV standards
              </a>
            </li>
            <li>
              <a
                href="https://www.itu.int/dms_pubrec/itu-r/rec/bt/R-REC-BT.1729-0-200504-I%21%21PDF-E.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                ITU-R BT.1729 — Common digital television reference test pattern
              </a>
            </li>
            <li>
              <a
                href="https://tech.ebu.ch/docs/tech/tech3325.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                EBU Tech 3325 — Performance Measurement of Studio Monitors
              </a>
            </li>
          </ol>
          <p className={styles.ebuClosing}>
            <em>
              GEN-B is a professional Full HD test-signal generator and
              display-analysis platform developed by Precision Broadcast
              Engineering.
            </em>
          </p>
        </section>

        <section className={styles.ebuCallout}>
          <p className="genb-kicker">
            Precision Broadcast Engineering Engineering Notes
          </p>
          <p>
            Precision Broadcast Engineering Engineering Notes document the
            engineering principles, design decisions, and technologies behind
            PBE products and professional broadcast workflows.
          </p>
        </section>

        <section className={styles.ebuFinalCta}>
          <div>
            <p className="genb-kicker">GEN-B Engineering Note</p>
            <h2>
              EBU Color Bars: The Hidden Mathematics Behind 75% and 100%
            </h2>
            <p>
              How a vectorscope discrepancy led PBE to replace a fixed
              normalization value with pattern-aware Rec.709 calibration
            </p>
          </div>
          <div className={styles.ebuActions}>
            <Link href="/gen-b" className="btn-secondary">
              Back to GEN-B
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact PBE
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
