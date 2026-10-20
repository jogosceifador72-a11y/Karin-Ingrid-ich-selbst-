import React from 'react';
import { motion } from 'motion/react';

interface QuoteBandProps {
  animationsEnabled: boolean;
}

export const QuoteBand: React.FC<QuoteBandProps> = ({ animationsEnabled }) => {
  return (
    <section className="bg-[#536c60] text-white py-20 sm:py-24 relative overflow-hidden text-center">
      {/* Ambient background glow */}
      <div
        className={`absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none ${
          animationsEnabled ? 'animate-ambient' : ''
        }`}
      />

      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, scale: 0.95, y: 20 } : false}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-3xl mx-auto"
        >
          {/* Animated Quote Glyph */}
          <motion.span
            animate={animationsEnabled ? { y: [0, -5, 0] } : {}}
            transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            className="font-serif text-[75px] sm:text-[90px] leading-[0.8] text-[#c3d1c7]/80 select-none block mb-4"
          >
            “
          </motion.span>

          <blockquote className="font-serif text-[28px] sm:text-[38px] md:text-[44px] leading-[1.3] font-normal my-3 text-white">
            Es geht nicht um Perfektion.
            <br />
            <em className="italic font-normal text-[#dce7de]">
              Es geht um nachhaltige Veränderung.
            </em>
          </blockquote>

          <p className="font-sans text-[10px] sm:text-[11px] font-bold tracking-[2.2px] text-[#d0ddd3] uppercase mt-6 mb-0">
            Gesundheit verstehen · Schritt für Schritt
          </p>
        </motion.div>
      </div>
    </section>
  );
};
