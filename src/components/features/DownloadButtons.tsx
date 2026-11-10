import { Download, FileImage, Printer, FileText } from 'lucide-react';
import { useDownload } from '@/hooks/useDownload';
import { DocumentTab } from '@/types';

interface Props {
  activeTab: DocumentTab;
}

export default function DownloadButtons({ activeTab }: Props) {
  const { downloadPDF, downloadImage, printDocument } = useDownload();

  const isCert = activeTab === 'certificate';
  const elementId = isCert ? 'certificate-doc' : 'offer-letter-doc';
  const filename = isCert ? 'MaximCode_Certificate' : 'MaximCode_OfferLetter';

  const buttons = [
    {
      label: 'PDF',
      icon: <FileText size={14} />,
      action: () => downloadPDF(elementId, filename),
      className: 'bg-navy-900 hover:bg-navy-800 text-white border border-gold-700/40',
    },
    {
      label: 'PNG',
      icon: <FileImage size={14} />,
      action: () => downloadImage(elementId, filename, 'png'),
      className: 'bg-gold-700 hover:bg-gold-600 text-white border border-gold-600',
    },
    {
      label: 'JPG',
      icon: <Download size={14} />,
      action: () => downloadImage(elementId, filename, 'jpg'),
      className: 'bg-white hover:bg-navy-50 text-navy-900 border border-navy-200',
    },
    {
      label: 'Print',
      icon: <Printer size={14} />,
      action: () => printDocument(elementId),
      className: 'bg-white hover:bg-navy-50 text-navy-900 border border-navy-200',
    },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {buttons.map(({ label, icon, action, className }) => (
        <button
          key={label}
          onClick={action}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold font-inter transition-all duration-150 active:scale-95 shadow-sm ${className}`}
        >
          {icon}
          {label}
        </button>
      ))}
    </div>
  );
}
