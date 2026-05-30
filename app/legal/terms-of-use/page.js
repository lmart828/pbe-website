import LegalDocumentPage from "../LegalDocumentPage";
import { legalDocuments } from "../legalDocuments";

export default function TermsOfUsePage() {
  return <LegalDocumentPage document={legalDocuments.termsOfUse} />;
}
