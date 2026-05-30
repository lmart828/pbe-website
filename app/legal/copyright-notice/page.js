import LegalDocumentPage from "../LegalDocumentPage";
import { legalDocuments } from "../legalDocuments";

export default function CopyrightNoticePage() {
  return <LegalDocumentPage document={legalDocuments.copyrightNotice} />;
}
