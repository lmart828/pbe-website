import LegalDocumentPage from "../LegalDocumentPage";
import { legalDocuments } from "../legalDocuments";

export default function PrivacyPolicyPage() {
  return <LegalDocumentPage document={legalDocuments.privacyPolicy} />;
}
