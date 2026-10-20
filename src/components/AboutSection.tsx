import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  animationsEnabled: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ animationsEnabled }) => {
  return (
    <section id="ueber-mich" className="bg-[#f0ebe4] py-20 sm:py-28 relative overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait presentation */}
          <motion.div
            initial={animationsEnabled ? { opacity: 0, x: -30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative pb-6 pr-4 max-w-[420px] mx-auto lg:mx-0">
              {/* Back border accent */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-[#D9A58B]/70 pointer-events-none" />

              {/* Image Frame */}
              <div className="relative z-10 h-[420px] sm:h-[480px] bg-[#e5dfd5] overflow-hidden shadow-md">
                <motion.img
                  src="assets/karin-ingrid.png"
                  alt="Karin Ingrid in weißem Kittel"
                  whileHover={animationsEnabled ? { scale: 1.04 } : {}}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover object-[center_30%]"
                  loading="lazy"
                />
              </div>

              {/* Floating Image Tag */}
              <motion.div
                initial={animationsEnabled ? { opacity: 0, y: 15 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute bottom-0 left-4 z-20 bg-[#FAF8F5] py-3 px-4 shadow-md text-[9px] font-bold tracking-[1.3px] text-[#2B2B2B] flex items-center gap-1.5"
              >
                <span>KARIN INGRID</span>
                <span className="text-[#D9A58B]">·</span>
                <span className="text-[#536c60]">GESUNDHEIT & ERNÄHRUNG</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Copy */}
          <motion.div
            initial={animationsEnabled ? { opacity: 0, x: 30 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[2px] text-[#536c60] uppercase mb-4">
              Über Karin Ingrid
            </p>

            <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[48px] leading-[1.12] tracking-[-1.2px] text-[#2B2B2B] font-normal mb-6">
              Gesundheit verständlich <em className="italic text-[#536c60]">machen.</em>
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#2B2B2B] leading-[1.85] font-normal mb-4">
              Gesundheit wirft viele Fragen auf. Verständliche Informationen können helfen,
              den eigenen Alltag bewusster zu gestalten.
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#5d605a] leading-[1.9] mb-4">
              Im Mittelpunkt dieser Website stehen klare Informationen, praktische
              Orientierung und ein verantwortungsvoller Umgang mit Gesundheit und
              Wohlbefinden.
            </p>

            <p className="text-[13px] sm:text-[14px] text-[#5d605a] leading-[1.9] mb-8">
              Entdecken Sie ausgewählte Themen rund um Ernährung, Verdauung, Prävention und
              Herzgesundheit – in Ihrem eigenen Tempo.
            </p>

            <motion.a
              href="#kontakt"
              whileHover={animationsEnabled ? { y: -2, backgroundColor: '#ffffff' } : {}}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 border border-[#c8c6bd] bg-transparent text-[#2B2B2B] px-6 py-3 rounded-sm text-[12px] font-semibold tracking-wide hover:border-[#536c60] hover:text-[#536c60] transition-all group"
            >
              <span>Kontakt aufnehmen</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
