import Link from "next/link";
import { legalIndexItems } from "./legalDocuments";

export default function LegalIndexPage() {
  return (
    <section className="legal-page">
      <div className="legal-document">
        <p className="legal-kicker">GEN-B Legal & Privacy Information</p>
        <h1>Legal & Privacy Information</h1>
        <p className="legal-updated">Last Updated: May 2026</p>
        <p className="legal-intro">
          These documents are provided for informational and operational
          purposes related to GEN-B and Precision Broadcast Engineering LLC.
        </p>

        <div className="legal-index-grid">
          {legalIndexItems.map((item) => (
            <Link href={item.href} className="legal-index-card" key={item.href}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
