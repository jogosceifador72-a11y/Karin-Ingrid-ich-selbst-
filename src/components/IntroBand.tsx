import React from 'react';
import { motion } from 'motion/react';

interface IntroBandProps {
  animationsEnabled: boolean;
}

export const IntroBand: React.FC<IntroBandProps> = ({ animationsEnabled }) => {
  return (
    <section className="bg-[#eeeee7] py-16 sm:py-20 border-y border-[#2B2B2B]/5 relative overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center"
        >
          <div className="md:col-span-3">
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[2px] text-[#536c60] uppercase mb-0">
              Was Sie hier finden
            </p>
          </div>

          <div className="md:col-span-5">
            <h2 className="font-serif text-[30px] sm:text-[38px] leading-[1.15] tracking-[-1px] text-[#2B2B2B] font-normal m-0">
              Gesundheit beginnt
              <br />
              mit <em className="italic text-[#536c60]">Verständnis.</em>
            </h2>
          </div>

          <div className="md:col-span-4">
            <p className="text-[13px] sm:text-[14px] text-[#5d605a] leading-[1.85] m-0">
              Gute Gesundheitsinformationen helfen dabei, Zusammenhänge besser zu verstehen
              und informierte Fragen zu stellen. Hier finden Sie verständlich aufbereitete
              Inhalte zu Ernährung, Prävention und Wohlbefinden.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
