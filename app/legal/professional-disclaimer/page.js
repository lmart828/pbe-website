import LegalDocumentPage from "../LegalDocumentPage";
import { legalDocuments } from "../legalDocuments";

export default function ProfessionalDisclaimerPage() {
  return (
    <LegalDocumentPage document={legalDocuments.professionalDisclaimer} />
  );
}
