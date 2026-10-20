import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz' | 'haftungsausschluss') => void;
  animationsEnabled: boolean;
  onToggleAnimations: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  animationsEnabled,
  onToggleAnimations,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledRatio);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Über mich', href: '#ueber-mich' },
    { name: 'Themen', href: '#themen' },
    { name: 'E-Books', href: '#ebooks' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#2B2B2B]/8 py-3'
          : 'bg-[#FAF8F5]/80 backdrop-blur-sm border-b border-[#2B2B2B]/5 py-4'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent overflow-hidden">
        <motion.div
          className="h-full bg-[#536c60]"
          style={{ width: `${scrollProgress}%` }}
          transition={{ ease: 'easeOut', duration: 0.1 }}
        />
      </div>

      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Zone */}
        <a
          href="#start"
          className="group flex flex-col items-start focus:outline-none"
          aria-label="Karin Ingrid Startseite"
        >
          <motion.span
            whileHover={{ scale: 1.02, x: 2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="font-serif text-[24px] sm:text-[26px] leading-tight tracking-[-0.7px] text-[#2B2B2B] font-medium"
          >
            Karin Ingrid
          </motion.span>
          <span className="font-sans font-semibold text-[8px] tracking-[1.8px] text-[#536c60] mt-1 uppercase">
            Gesundheit · Ernährung
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-[13px] font-medium text-[#2B2B2B]/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#536c60] group"
            >
              <span>{link.name}</span>
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#536c60] transition-all duration-200 group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3">
          {/* Animation Toggle Pill */}
          <button
            onClick={onToggleAnimations}
            title={animationsEnabled ? 'Animações ativadas (clique para suavizar)' : 'Animações suaves'}
            aria-label="Animações toggle"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-medium text-[#536c60] bg-[#8FA89B]/15 hover:bg-[#8FA89B]/25 rounded-md transition-colors"
          >
            <motion.div
              animate={animationsEnabled ? { rotate: [0, 15, -15, 0] } : {}}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            >
              <Sparkles className="w-3.5 h-3.5" />
            </motion.div>
            <span className="hidden lg:inline">{animationsEnabled ? 'Animações ativas' : 'Modo suave'}</span>
          </button>

          {/* Primary CTA */}
          <motion.a
            href="#ebooks"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-flex items-center gap-2 bg-[#2B2B2B] text-white px-4 py-2.5 rounded-sm text-[12px] font-semibold tracking-wide hover:bg-[#536c60] transition-colors shadow-sm"
          >
            <span>E-Books entdecken</span>
            <motion.span
              animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.span>
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#2B2B2B] hover:text-[#536c60] focus:outline-none"
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden border-b border-[#e6e1da] bg-[#FAF8F5] overflow-hidden"
          >
            <div className="max-w-[1160px] mx-auto px-6 py-5 flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06 }}
                  onClick={() => setMenuOpen(false)}
                  className="text-[15px] font-medium text-[#2B2B2B] hover:text-[#536c60] py-2 border-b border-[#2B2B2B]/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8FA89B]" />
                </motion.a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#ebooks"
                  onClick={() => setMenuOpen(false)}
                  className="w-full text-center bg-[#536c60] text-white py-3 rounded text-[13px] font-semibold tracking-wide flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>E-Books entdecken</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => {
                    onToggleAnimations();
                    setMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-xs text-[#536c60] bg-[#8FA89B]/10 rounded flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{animationsEnabled ? 'Animações ativadas' : 'Modo suave'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
