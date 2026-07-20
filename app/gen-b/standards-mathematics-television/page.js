import Link from "next/link";
import ArticleFigure from "../../components/ArticleFigure";
import styles from "./page.module.css";

export const metadata = {
  title:
    "When the Visible Image Depends on Invisible Mathematics | PBE",
  description:
    "Standards, history, algorithms, and the engineering logic behind professional test-pattern generation.",
};

const imageBase =
  "/images/gen-b/engineering-notes/standards-mathematics-television";

const figures = {
  evolutionElectromechanical: {
    src: `${imageBase}/01-television-evolution-electromechanical-analog-digital.svg`,
    alt: "Television evolution from electromechanical to analog electronic and digital",
    width: 1600,
    height: 900,
    caption:
      "Television evolution from electromechanical to analog electronic and digital",
  },
  analogStandards: {
    src: `${imageBase}/02-analog-tv-standards-carriers-and-modulation.svg`,
    alt: "Analog television standards and carrier modulation",
    width: 1600,
    height: 900,
    caption: "Analog television standards and carrier modulation",
  },
  overTheAir: {
    src: `${imageBase}/03-basic-over-the-air-television-system.svg`,
    alt: "Basic over-the-air television chain",
    width: 1600,
    height: 900,
    caption: "Basic over-the-air television chain",
  },
  analogToDigital: {
    src: `${imageBase}/04-television-evolution-analog-to-digital.svg`,
    alt: "Evolution from analog television to digital workflows",
    width: 1600,
    height: 900,
    caption: "Evolution from analog television to digital workflows",
  },
  smpte75: {
    src: `${imageBase}/smpte-color-bars-75.png`,
    alt: "SMPTE Color Bars 75%",
    width: 3840,
    height: 2160,
    caption: "SMPTE Color Bars 75%",
  },
  smpte100: {
    src: `${imageBase}/smpte-color-bars-100.png`,
    alt: "SMPTE Color Bars 100%",
    width: 3840,
    height: 2160,
    caption: "SMPTE Color Bars 100%",
  },
  modernSmpte: {
    src: `${imageBase}/05-modern-smpte-fiber-camera-to-st2110.svg`,
    alt: "Modern SMPTE hybrid fiber camera path to ST 2110",
    width: 1600,
    height: 900,
    caption: "Modern SMPTE hybrid fiber camera path to ST 2110",
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

export default function StandardsMathematicsTelevisionPage() {
  return (
    <main className={styles.ebuPage}>
      <section className={styles.ebuHero}>
        <div className={styles.ebuHeroInner}>
          <div className={styles.ebuHeroCopy}>
            <p className="genb-kicker">GEN-B Engineering Note</p>
            <h1>When the Visible Image Depends on Invisible Mathematics</h1>
            <p className={styles.ebuSubtitle}>
              Standards, history, algorithms, and the engineering logic behind
              professional test-pattern generation.
            </p>
            <p className={styles.ebuMeta}>
              <span>Precision Broadcast Engineering</span>
              <span aria-hidden="true"> · </span>
              <time dateTime="2026-07-20">2026-07-20</time>
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
          <h2>
            Standards, History, Algorithms, and the Engineering Logic Behind
            GEN-B
          </h2>
          <p className={styles.ebuLede}>
            Television looks visual, but it was never only visual. From its
            earliest experiments, television was a negotiation between optics,
            electricity, timing, bandwidth, human perception, and mathematics. A
            viewer sees a picture. An engineer sees scanning, synchronization,
            modulation, levels, colorimetry, signal paths, and tolerances.
          </p>
          <p>
            That difference matters. In professional communications, an image is
            not considered correct simply because it looks pleasant. It is
            correct when it follows a standard, can be measured, can be
            reproduced, and can be understood by every compliant device in the
            chain.
          </p>
          <p>This is the world GEN-B was designed for.</p>
        </section>

        <section className={styles.ebuSection}>
          <h2>
            A Brief History: From Mechanical Scanning to Electronic Television
          </h2>
          <p>
            Early television began as an electromechanical idea. Systems based
            on rotating scanning discs, often associated with the Nipkow disc
            principle and later public demonstrations by pioneers such as John
            Logie Baird, converted light into sequential electrical information.
            The image was not captured all at once. It was scanned point by
            point, line by line, through physical motion.
          </p>
          <p>
            That was the first essential lesson of television: an image could
            become a time-based signal.
          </p>
          <p>
            Electronic television removed the rotating mechanics and replaced
            them with controlled electron beams, camera tubes, cathode-ray
            tubes, synchronization pulses, and continuous analog waveforms. The
            raster became the discipline of the system. The camera scanned an
            image; the receiver reconstructed it in the same order. If timing
            failed, the picture failed.
          </p>
          <ArticleFigure
            figure={figures.evolutionElectromechanical}
            priority
            classNames={ebuFigureClasses}
          />
          <p>
            As television spread around the world, countries did not all adopt
            the same technical norms. The United States and several other
            regions used NTSC. Much of Europe and many other countries adopted
            PAL. France, parts of Eastern Europe, and other territories used
            SECAM. Brazil developed PAL-M, combining PAL-style color treatment
            with NTSC-like 525-line, 60-field timing. There were also
            intermediate regional variants shaped by power-line frequency, RF
            channel width, regulatory decisions, and compatibility requirements.
          </p>
          <p>
            To the public, it was all simply television. To engineers, NTSC,
            PAL, PAL-M, and SECAM were different technical languages.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>Why Standards Became Necessary</h2>
          <p>
            Analog television had to carry several kinds of information through
            limited bandwidth: luminance, chrominance, synchronization, and
            audio. In many systems, the picture information used amplitude
            modulation with vestigial sideband transmission, while audio used
            frequency modulation on a separate carrier. Color had to be added
            without making millions of black-and-white receivers obsolete.
          </p>
          <p>
            NTSC and PAL encoded color using a chroma subcarrier where phase and
            amplitude represented color information. PAL reversed phase on
            alternate lines to reduce hue errors. SECAM took a different path,
            transmitting color-difference information sequentially using
            frequency modulation. These were not arbitrary choices. They were
            engineering tradeoffs among bandwidth, receiver complexity,
            transmission robustness, human vision, and backward compatibility.
          </p>
          <ArticleFigure
            figure={figures.analogStandards}
            classNames={ebuFigureClasses}
          />
          <p>
            A basic over-the-air television chain required every part of the
            system to agree: camera scanning, synchronization, production
            switching, modulation, RF transmission, antenna reception,
            demodulation, and display reconstruction. Without standards, one
            device could generate a signal another device could not interpret
            correctly.
          </p>
          <ArticleFigure
            figure={figures.overTheAir}
            classNames={ebuFigureClasses}
          />
          <p>
            That is why standards are not bureaucracy. Standards are the reason
            the system works.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>From Analog Waveforms to Digital Code Values</h2>
          <p>
            The transition to digital television did not remove the need for
            standards. It made standards even more important.
          </p>
          <p>
            Analog video was continuous. Digital video is sampled. A voltage
            becomes a number. A color becomes a code value. A frame becomes
            pixels. Audio becomes samples. Metadata becomes structured
            information. In modern facilities, signals move through SDI, HDMI,
            files, compressed streams, IP networks, and SMPTE ST 2110 flows.
          </p>
          <ArticleFigure
            figure={figures.analogToDigital}
            classNames={ebuFigureClasses}
          />
          <p>
            The digital system can be more precise than analog, but only when
            the values are generated and interpreted correctly. Rec.709,
            Rec.2020, HDR transfer functions, legal range, full range, YCbCr
            encoding, RGB conversion, SDI timing, HDMI output behavior, and IP
            packet timing all matter.
          </p>
          <p>
            This is where the visual and the mathematical separate.
          </p>
          <p>
            The eye sees a color bar. The system sees code values.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>
            SMPTE Color Bars: What Looks Simple Is Actually a Reference
            Instrument
          </h2>
          <p>
            SMPTE color bars are one of the most recognizable test patterns in
            broadcast engineering. They are not decorative. They are a
            controlled reference for evaluating luminance, chrominance, black
            level, clipping, color decoding, and signal path integrity.
          </p>
          <ArticleFigure
            figure={figures.smpte75}
            classNames={ebuFigureClasses}
          />
          <p>
            In Rec.709 legal-range 8-bit video, black is not zero. Legal black
            is code value 16. Legal white is code value 235. Therefore, a 75%
            bar is not chosen by eye; it is calculated inside the legal video
            range:
          </p>
          <pre className={styles.ebuCode}>
            <code>{`let black: UInt8 = 16
let level75: UInt8 = 180`}</code>
          </pre>
          <p>The level comes from:</p>
          <pre className={styles.ebuCode}>
            <code>{`16 + 0.75 * (235 - 16) ≈ 180`}</code>
          </pre>
          <p>
            A 100% SMPTE bar pattern uses the full legal active level:
          </p>
          <ArticleFigure
            figure={figures.smpte100}
            classNames={ebuFigureClasses}
          />
          <pre className={styles.ebuCode}>
            <code>{`let black: UInt8 = 16
let level100: UInt8 = 235`}</code>
          </pre>
          <p>
            Visually, SMPTE 75% and SMPTE 100% look related. Mathematically,
            they are different states of the same reference system. That
            difference matters when checking peak levels, saturation, clipping,
            display behavior, or the response of a video chain.
          </p>
          <p>
            For example, the yellow bar in SMPTE 75% is not simply
            &quot;yellow.&quot; In algorithmic form:
          </p>
          <pre className={styles.ebuCode}>
            <code>{`let yellow = UIColor.rgb(level75, level75, black)`}</code>
          </pre>
          <p>In SMPTE 100%, it becomes:</p>
          <pre className={styles.ebuCode}>
            <code>{`let yellow = UIColor.rgb(level100, level100, black)`}</code>
          </pre>
          <p>
            The visual difference is brightness and saturation. The engineering
            difference is code-value precision.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>
            Modern Camera Paths: SMPTE Hybrid Fiber and ST 2110
          </h2>
          <p>
            Modern broadcast production still depends on the same discipline:
            every signal must have a defined path, a defined meaning, and a
            defined timing reference.
          </p>
          <p>
            A SMPTE hybrid fiber camera cable can carry optical signals, copper
            power, intercom, tally, return video, and camera-control data
            between a camera head and its base station or CCU ecosystem. In a
            contemporary plant or truck, that camera signal may pass through an
            HDX or base station, optical routing such as a Glimmerglass matrix,
            a CCU, RCP control, SDI or fiber/electrical conversion, and
            eventually an IP gateway.
          </p>
          <p>
            Once the workflow becomes SMPTE ST 2110, the single &quot;video
            signal&quot; is no longer treated as one monolithic stream. Video,
            audio, and ancillary data become separate RTP-based essences
            synchronized by PTP. That is a major conceptual shift from analog
            and SDI-era thinking.
          </p>
          <ArticleFigure
            figure={figures.modernSmpte}
            classNames={ebuFigureClasses}
          />
          <p>
            This evolution does not weaken the role of standards. It proves
            their value. A modern facility may include optical routing, SDI, IP
            fabric, PTP grandmasters, NMOS control, UHD, HDR, embedded audio,
            de-embedded audio, captions, timecode, tally, intercom, and camera
            paint control. The only way such a system remains predictable is
            through rigorous technical definitions.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>
            Mathematics: The Invisible Structure Behind the Image
          </h2>
          <p>
            The history of engineering is, in many ways, the history of
            mathematics becoming practical.
          </p>
          <p>
            Pythagoras showed that geometry could be described with exact
            relationships. Maxwell expressed electricity, magnetism, and light
            through equations. Kirchhoff gave engineers laws to analyze current
            and voltage in circuits. Nikola Tesla explored alternating current,
            resonance, fields, motors, transformers, and power distribution with
            a mind deeply tied to mathematical structure and physical intuition.
          </p>
          <p>Television belongs to that same lineage.</p>
          <p>
            A raster is geometry over time. A carrier is a waveform. A color
            subcarrier is phase, amplitude, and frequency. A digital pixel is a
            numerical sample. A waveform monitor is applied mathematics. A
            vectorscope is trigonometry made visible. A calibrated pattern is an
            agreement between human vision and code values.
          </p>
          <p>
            GEN-B follows that principle. It is not enough for a pattern to
            resemble a known image. A professional pattern must be generated
            from the correct values, with the correct range, the correct
            colorimetry, the correct order, and the correct intent.
          </p>
          <p>
            That is why an iPhone application, when designed with rigor, can
            stand beside dedicated professional instruments in meaningful
            workflows. The form factor is modern, but the engineering foundation
            is old, deep, and mathematical.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>Why GEN-B Matters</h2>
          <p>
            GEN-B brings professional video test patterns into a portable,
            software-defined environment. Its value is not only that it displays
            patterns. Its value is that the patterns are built from engineering
            logic: Rec.709 code values, legal range awareness, SMPTE/EBU pattern
            structures, HDR test intent, and practical field usability.
          </p>
          <p>
            The modern engineer needs tools that are fast, accurate, and
            available at the point of work. A test pattern generator does not
            have to be physically large to be technically serious. Precision is
            not a function of weight. Precision is a function of standards, math,
            implementation, and verification.
          </p>
          <p>In engineering, seeing is not enough.</p>
          <p>We measure.</p>
          <p>We calculate.</p>
          <p>We compare against standards.</p>
          <p>
            And when the calculation is correct, the image finally tells the
            truth.
          </p>
        </section>

        <section className={styles.ebuSection}>
          <h2>References</h2>
          <ol className={styles.ebuReferences}>
            <li>
              <a
                href="https://www.itu.int/rec/R-REC-BT.709/en"
                target="_blank"
                rel="noopener noreferrer"
              >
                ITU-R BT.709-6 — Parameter values for the HDTV standards for
                production and international programme exchange
              </a>
            </li>
            <li>
              <a
                href="https://www.smpte.org/standards/st2110"
                target="_blank"
                rel="noopener noreferrer"
              >
                Society of Motion Picture and Television Engineers — SMPTE ST
                2110 Standards Suite
              </a>
            </li>
            <li>
              <a
                href="https://www.smpte.org/top-standards"
                target="_blank"
                rel="noopener noreferrer"
              >
                Society of Motion Picture and Television Engineers — Top
                Standards: SMPTE Color Bars and SDI
              </a>
            </li>
            <li>
              <a
                href="https://www.archives.gov/publications/prologue/2013/fall-winter/color-tv"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Archives — The Following Program... How the FCC decided
                who got the nod to put color into our TV sets
              </a>
            </li>
            <li>
              <a
                href="https://text-message.blogs.archives.gov/2025/03/25/standardizing-color-television-systems/"
                target="_blank"
                rel="noopener noreferrer"
              >
                National Archives — Standardizing Color Television Systems
              </a>
            </li>
            <li>
              <a
                href="https://journal.smpte.org/periodicals/SMPTE%20Journal/86/11/7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                D. H. Pritchard — U.S. Color Television Fundamentals: A Review,
                SMPTE Journal, 1977
              </a>
            </li>
            <li>
              <a
                href="https://www.aja.com/support/item/5772"
                target="_blank"
                rel="noopener noreferrer"
              >
                AJA Video Systems — What is SMPTE ST 2110?
              </a>
            </li>
            <li>
              <a
                href="https://www.belden.com/products/cable/broadcast-cable/smpte-camera-cable/7825p"
                target="_blank"
                rel="noopener noreferrer"
              >
                Belden — SMPTE Camera Cable 7825P product information
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
              When the Visible Image Depends on Invisible Mathematics
            </h2>
            <p>
              Standards, history, algorithms, and the engineering logic behind
              professional test-pattern generation.
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
