export interface InternDetails {
  name: string;
  domain: string;
  role: string;
  internship: string;
  startDate: string;
  endDate: string;
}

export interface CertificateData extends InternDetails {
  certificateId: string;
  issueDate: string;
  skills: string[];
  qrUrl: string;
}

export type DocumentTab = 'certificate' | 'offer-letter';
