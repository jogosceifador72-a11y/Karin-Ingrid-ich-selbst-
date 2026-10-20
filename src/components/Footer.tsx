import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz' | 'haftungsausschluss') => void;
  animationsEnabled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, animationsEnabled }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#292f2b] text-[#f8f6f0] pt-14 pb-8 border-t border-[#454b46]">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-[#454b46] gap-6">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="font-serif text-[24px] tracking-[-0.5px] font-medium text-white">
              Karin Ingrid
            </span>
            <span className="font-sans text-[8px] font-semibold tracking-[1.8px] text-[#b6c8bc] mt-1 uppercase">
              Gesundheit · Ernährung
            </span>
          </div>

          {/* Motto */}
          <div className="text-left md:text-center">
            <p className="font-serif text-[20px] sm:text-[24px] text-white leading-snug m-0">
              Gesundheit verstehen.
              <br />
              <em className="italic text-[#b6c8bc] font-normal">Bewusst leben.</em>
            </p>
          </div>

          {/* Back to top */}
          <div>
            <motion.button
              onClick={scrollToTop}
              whileHover={animationsEnabled ? { y: -2 } : {}}
              className="inline-flex items-center gap-2 text-[11px] font-medium text-[#cbd2cc] hover:text-white transition-colors cursor-pointer"
            >
              <span>Zurück nach oben</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-6 text-[10px] text-[#c0c5bf]">
          <span>© {currentYear} Karin Ingrid. Alle Rechte vorbehalten.</span>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <button
              onClick={() => onOpenLegal('impressum')}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              Impressum
            </button>
            <button
              onClick={() => onOpenLegal('datenschutz')}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              Datenschutz
            </button>
            <button
              onClick={() => onOpenLegal('haftungsausschluss')}
              className="hover:text-white transition-colors cursor-pointer text-left"
            >
              Haftungsausschluss
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-4 border-t border-[#454b46]/50 text-[10px] text-[#aeb6af] leading-relaxed">
          Die Inhalte dieser Website dienen ausschließlich der allgemeinen Information und
          Orientierung und ersetzen keine individuelle medizinische Beratung, Untersuchung
          oder Behandlung. Bei gesundheitlichen Beschwerden wenden Sie sich bitte an
          qualifiziertes medizinisches Fachpersonal.
        </div>
      </div>
    </footer>
  );
};
