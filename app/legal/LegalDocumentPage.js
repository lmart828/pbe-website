import Link from "next/link";

function renderParagraph(paragraph) {
  const email = "support@pbe-engineering.com";

  if (!paragraph.includes(email)) {
    return paragraph;
  }

  const [before, after] = paragraph.split(email);

  return (
    <>
      {before}
      <a href={`mailto:${email}`}>{email}</a>
      {after}
    </>
  );
}

export default function LegalDocumentPage({ document }) {
  return (
    <section className="legal-page">
      <div className="legal-document">
        <Link href="/legal" className="legal-back-link">
          Legal & Privacy Information
        </Link>

        <p className="legal-kicker">GEN-B Legal Document</p>
        <h1>{document.title}</h1>
        <p className="legal-updated">Last Updated: May 2026</p>
        <p className="legal-intro">{document.intro}</p>

        <div className="legal-section-list">
          {document.sections.map((section) => (
            <section className="legal-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{renderParagraph(paragraph)}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
