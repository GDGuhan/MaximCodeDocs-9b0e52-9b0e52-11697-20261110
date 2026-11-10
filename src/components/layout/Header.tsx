import maximLogo from '@/assets/maxim-logo.png';

export default function Header() {
  return (
    <header className="bg-navy-900 border-b-2 border-gold-700 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={maximLogo}
            alt="Maxim Code"
            className="h-10 w-auto object-contain"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div>
            <div className="text-white font-playfair font-bold text-lg leading-tight tracking-wide">MAXIM CODE</div>
            <div className="text-gold-400 text-xs font-inter font-medium tracking-widest uppercase">Building Future Innovators</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-gold-300 font-inter text-sm font-medium bg-navy-800 border border-gold-700/40 px-3 py-1.5 rounded-full">
            Document Generator
          </span>
          <span className="inline-flex items-center gap-1.5 bg-green-600/20 text-green-400 border border-green-500/30 text-xs font-inter font-semibold px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Live
          </span>
        </div>
      </div>
    </header>
  );
}
