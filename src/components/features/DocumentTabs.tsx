import { Award, FileText } from 'lucide-react';
import { DocumentTab } from '@/types';

interface Props {
  active: DocumentTab;
  onChange: (tab: DocumentTab) => void;
}

export default function DocumentTabs({ active, onChange }: Props) {
  const tabs: { id: DocumentTab; label: string; icon: React.ReactNode }[] = [
    { id: 'certificate', label: 'Certificate', icon: <Award size={15} /> },
    { id: 'offer-letter', label: 'Offer Letter', icon: <FileText size={15} /> },
  ];

  return (
    <div className="flex gap-1 bg-navy-50 border border-navy-100 rounded-xl p-1">
      {tabs.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold font-inter transition-all duration-200 min-w-[130px] justify-center ${
            active === id
              ? 'bg-navy-900 text-white shadow-md'
              : 'text-navy-600 hover:bg-navy-100 hover:text-navy-900'
          }`}
        >
          {icon}
          {label}
          {active === id && (
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 ml-0.5" />
          )}
        </button>
      ))}
    </div>
  );
}
