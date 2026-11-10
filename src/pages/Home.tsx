import { useState, useRef } from 'react';
import { InternDetails, CertificateData, DocumentTab } from '@/types';
import { buildCertificateData } from '@/lib/documentUtils';
import Header from '@/components/layout/Header';
import InternForm from '@/components/forms/InternForm';
import Certificate from '@/components/features/Certificate';
import OfferLetter from '@/components/features/OfferLetter';
import DocumentTabs from '@/components/features/DocumentTabs';
import DownloadButtons from '@/components/features/DownloadButtons';
import { Award, FileText, Sparkles, ShieldCheck, QrCode } from 'lucide-react';

const PLACEHOLDER_DATA: CertificateData = {
  name: 'Priya Sharma',
  domain: 'Web Development',
  role: 'Web Development Intern',
  internship: 'Full Stack Web Development Internship',
  startDate: '2026-01-06',
  endDate: '2026-04-06',
  certificateId: 'MC-2026-1025',
  issueDate: 'May 30, 2026',
  skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'],
  qrUrl: 'https://maximcode.in/verify/MC-2026-1025',
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<DocumentTab>('certificate');
  const [certData, setCertData] = useState<CertificateData | null>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (details: InternDetails) => {
    const data = buildCertificateData(details);
    setCertData(data);
  };

  const displayData = certData ?? PLACEHOLDER_DATA;
  const isGenerated = certData !== null;

  return (
    <div className="min-h-screen bg-[hsl(var(--background))] flex flex-col">
      <Header />

      {/* Hero strip */}
      <div className="bg-navy-900 border-b border-navy-800 py-3 overflow-hidden">
        <div className="flex gap-8 animate-none">
          <div className="flex items-center gap-8 px-6 justify-center flex-wrap w-full">
            {[
              { icon: <Award size={14} />, text: 'Completion Certificate' },
              { icon: <FileText size={14} />, text: 'Offer Letter' },
              { icon: <QrCode size={14} />, text: 'QR Verification' },
              { icon: <ShieldCheck size={14} />, text: 'MSME Aligned' },
              { icon: <Sparkles size={14} />, text: 'Instant Download' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gold-300 text-xs font-semibold font-inter whitespace-nowrap">
                {icon} {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex-1 flex flex-col lg:flex-row gap-0 max-w-screen-2xl mx-auto w-full">
        {/* Left: Form Panel */}
        <div className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0 p-5 border-r border-navy-100 bg-white/60 overflow-y-auto">
          <InternForm onGenerate={handleGenerate} isGenerated={isGenerated} />

          {/* Status */}
          {isGenerated && certData && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-800 text-xs font-bold font-inter uppercase tracking-widest">Documents Generated</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-green-700 font-medium">Certificate ID</span>
                  <span className="text-green-900 font-bold">{certData.certificateId}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-green-700 font-medium">Issue Date</span>
                  <span className="text-green-900 font-bold">{certData.issueDate}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-green-700 font-medium">QR Verification</span>
                  <a
                    href={certData.qrUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-navy-700 font-semibold hover:underline truncate max-w-[140px]"
                  >
                    maximcode.in/verify
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Info card */}
          <div className="mt-4 bg-navy-50 border border-navy-100 rounded-xl p-3">
            <div className="text-navy-800 text-xs font-bold font-inter uppercase tracking-widest mb-2">How It Works</div>
            <ol className="space-y-1.5">
              {['Fill in the intern details', 'Click Generate Documents', 'Switch between Certificate & Offer Letter', 'Download as PDF, PNG, or JPG'].map((step, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-navy-700 font-inter">
                  <span className="w-4 h-4 rounded-full bg-navy-900 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Right: Preview Panel */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#eef2f8]">
          {/* Preview toolbar */}
          <div className="bg-white border-b border-navy-100 px-5 py-3 flex items-center justify-between gap-3 flex-wrap">
            <DocumentTabs active={activeTab} onChange={setActiveTab} />
            {isGenerated ? (
              <DownloadButtons activeTab={activeTab} />
            ) : (
              <div className="text-xs text-muted-foreground font-inter italic">Fill the form to enable downloads</div>
            )}
          </div>

          {/* Preview area */}
          <div className="flex-1 overflow-auto p-6 flex items-start justify-center">
            {!isGenerated && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 hidden lg:flex flex-col items-center gap-2">
                <div className="bg-navy-900/80 text-gold-300 rounded-xl px-5 py-3 text-sm font-inter font-semibold text-center backdrop-blur-sm">
                  Preview showing sample data<br />
                  <span className="text-white/60 text-xs font-normal">Fill form and click Generate to personalize</span>
                </div>
              </div>
            )}

            {activeTab === 'certificate' && (
              <div className="relative">
                <div
                  className={`rounded-xl overflow-hidden shadow-certificate transition-all duration-300 ${!isGenerated ? 'opacity-60 blur-[0.5px]' : ''}`}
                  style={{ maxWidth: '100%', overflowX: 'auto' }}
                >
                  <div style={{ transformOrigin: 'top left', minWidth: '1122px' }}>
                    <Certificate ref={certRef} data={displayData} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'offer-letter' && (
              <div className="relative">
                <div
                  className={`rounded-xl overflow-hidden shadow-certificate transition-all duration-300 ${!isGenerated ? 'opacity-60 blur-[0.5px]' : ''}`}
                  style={{ maxWidth: '100%', overflowX: 'auto' }}
                >
                  <div style={{ minWidth: '794px' }}>
                    <OfferLetter ref={letterRef} data={displayData} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
