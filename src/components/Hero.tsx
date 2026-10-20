import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowRight, Asterisk } from 'lucide-react';

interface HeroProps {
  animationsEnabled: boolean;
}

export const Hero: React.FC<HeroProps> = ({ animationsEnabled }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 md:py-24">
      {/* Ambient background glows */}
      <div
        className={`absolute -top-24 -left-20 w-96 h-96 rounded-full bg-[#8FA89B]/15 blur-3xl pointer-events-none transition-all ${
          animationsEnabled ? 'animate-ambient' : ''
        }`}
      />
      <div
        className={`absolute top-1/3 -right-20 w-[420px] h-[420px] rounded-full bg-[#D9A58B]/12 blur-3xl pointer-events-none transition-all ${
          animationsEnabled ? 'animate-ambient' : ''
        }`}
        style={{ animationDelay: '-5s' }}
      />

      {/* Giant Typography Ornament "KI" */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -bottom-16 sm:-bottom-24 left-1/4 sm:left-1/3 font-serif text-[180px] sm:text-[260px] md:text-[320px] font-normal text-[#8FA89B]/8 select-none pointer-events-none leading-none z-0"
      >
        KI
      </motion.div>

      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={animationsEnabled ? { opacity: 0, x: -15 } : false}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2.5 mb-6 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-[#536c60] uppercase"
            >
              <motion.span
                initial={animationsEnabled ? { width: 0 } : false}
                animate={{ width: 24 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-[1.5px] bg-[#D9A58B]"
              />
              <span>Gesundheit · Medizin · Ernährung</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              initial={animationsEnabled ? { opacity: 0, y: 25 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[42px] sm:text-[54px] lg:text-[66px] leading-[1.08] tracking-[-1.5px] text-[#2B2B2B] font-normal mb-6"
            >
              Gesundheit verstehen.
              <br />
              <motion.em
                initial={animationsEnabled ? { opacity: 0, y: 15 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="font-normal italic text-[#536c60]"
              >
                Bewusst leben.
              </motion.em>
            </motion.h1>

            {/* Lead Description */}
            <motion.p
              initial={animationsEnabled ? { opacity: 0, y: 15 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#5d605a] text-[15px] sm:text-[16px] leading-[1.85] max-w-[530px] mb-8"
            >
              Entdecken Sie verständliche Informationen rund um Gesundheit, Ernährung und
              Wohlbefinden – mit besonderen Impulsen für die zweite Lebenshälfte.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={animationsEnabled ? { opacity: 0, y: 15 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-5 sm:gap-7 mb-10"
            >
              <motion.a
                href="#ebooks"
                whileHover={animationsEnabled ? { y: -2, scale: 1.01 } : {}}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-[#536c60] text-white px-6 py-3.5 rounded-sm text-[12px] font-semibold tracking-wide hover:bg-[#40574c] transition-all shadow-sm hover:shadow-md group"
              >
                <span>E-Books entdecken</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>

              <motion.a
                href="#ueber-mich"
                whileHover={animationsEnabled ? { x: 3 } : {}}
                className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#2B2B2B] hover:text-[#536c60] transition-colors group"
              >
                <span>Mehr über Karin</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            {/* Trust Note */}
            <motion.div
              initial={animationsEnabled ? { opacity: 0, y: 10 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-3.5 pt-4 text-[12px] font-semibold text-[#2B2B2B]"
            >
              <div className="w-9 h-9 rounded-full border border-[#c8d2cb] bg-white/70 flex items-center justify-center text-[#536c60] shrink-0">
                <motion.div
                  animate={animationsEnabled ? { rotate: 360 } : {}}
                  transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
                >
                  <Asterisk className="w-5 h-5" />
                </motion.div>
              </div>
              <div className="leading-snug">
                <span>Wissen, das Orientierung gibt.</span>
                <br />
                <span className="font-normal text-[#6f716c] text-[11px]">
                  Für einen bewussten Umgang mit Gesundheit.
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={animationsEnabled ? { opacity: 0, scale: 0.95, y: 25 } : false}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[440px] w-full pt-4 pr-4 pb-8 pl-2"
            >
              {/* Outer Decorative Terra Frame with hover parallax */}
              <motion.div
                whileHover={animationsEnabled ? { scale: 1.02, rotate: 0.5 } : {}}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="relative"
              >
                {/* Background Offset Line */}
                <div className="absolute inset-0 translate-x-3.5 translate-y-3.5 border border-[#D9A58B] pointer-events-none z-0" />

                {/* Image Container */}
                <div className="relative z-10 h-[460px] sm:h-[510px] overflow-hidden bg-[#e5dfd5] shadow-lg">
                  <motion.img
                    src="assets/karin-ingrid.png"
                    alt="Porträt von Karin Ingrid mit weißem Arztkittel und Brille"
                    initial={animationsEnabled ? { scale: 1.05 } : false}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    whileHover={animationsEnabled ? { scale: 1.03 } : {}}
                    className="w-full h-full object-cover object-[center_32%] transition-transform duration-500"
                    loading="eager"
                  />
                </div>

                {/* Floating Seal Stamp */}
                <motion.div
                  initial={animationsEnabled ? { scale: 0, rotate: -20 } : false}
                  animate={{ scale: 1, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.7 }}
                  className={`absolute -top-3 -right-3 sm:-right-4 z-30 w-[78px] h-[78px] rounded-full bg-[#536c60] text-white flex flex-col items-center justify-center text-center text-[9px] font-semibold tracking-[1.4px] leading-tight shadow-md border-2 border-white/20 select-none ${
                    animationsEnabled ? 'animate-stamp' : ''
                  }`}
                >
                  <span>WISSEN</span>
                  <span className="text-[8px] opacity-90">MIT HERZ</span>
                </motion.div>

                {/* Portrait Caption */}
                <motion.div
                  initial={animationsEnabled ? { opacity: 0, y: 15, x: -10 } : false}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-4 left-[-16px] sm:left-[-32px] z-20 bg-[#FAF8F5] py-3 px-5 sm:py-3.5 sm:px-6 shadow-md border border-[#2B2B2B]/8 flex items-center gap-3"
                >
                  <span className="h-[1.5px] w-6 bg-[#D9A58B]" />
                  <div>
                    <div className="font-serif text-[14px] text-[#2B2B2B] font-medium leading-tight">
                      Karin Ingrid
                    </div>
                    <div className="font-sans text-[10px] text-[#6f716c] font-normal">
                      Gesundheit verständlich machen
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
