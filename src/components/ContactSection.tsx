import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  animationsEnabled: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  animationsEnabled,
}) => {
  const socials = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
      handle: '@karinzeit',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1c8J76URqe/',
      handle: 'Karin Ingrid',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@karinzeit',
      handle: '@karinzeit',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
      handle: '@karinzeit',
    },
    {
      name: 'Threads',
      url: 'https://www.threads.com/@karinzeit',
      handle: '@karinzeit',
    },
    {
      name: 'Kwai',
      url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
      handle: '@kariningrid673',
    },
    {
      name: 'Facebook-Seite',
      url: 'https://www.facebook.com/share/1DzZyfFWRL/',
      handle: 'Karin Ingrid Offiziell',
    },
  ];

  return (
    <section id="kontakt" className="py-20 sm:py-28 relative">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 30 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#eeebe3] border border-[#e0dcce] p-8 sm:p-14 rounded-xs shadow-2xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-5">
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[2px] text-[#536c60] uppercase mb-3">
                Bleiben wir in Verbindung
              </p>
              <h2 className="font-serif text-[32px] sm:text-[42px] leading-[1.15] tracking-[-1.2px] text-[#2B2B2B] font-normal mb-4">
                Mehr Impulse für
                <br />
                Ihren <em className="italic text-[#536c60]">Alltag.</em>
              </h2>
              <p className="text-[13px] sm:text-[14px] text-[#6f716c] leading-relaxed max-w-[380px] m-0">
                Folgen Sie Karin Ingrid für aktuelle Videos, verständliche Erklärungen und
                wertvolle Impulse rund um Gesundheit, Ernährung und Wohlbefinden.
              </p>
            </div>

            {/* Right Column: Social Links Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {socials.map((s, idx) => (
                  <motion.a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={animationsEnabled ? { opacity: 0, x: 10 } : false}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={
                      animationsEnabled
                        ? { x: 4, transition: { duration: 0.15 } }
                        : {}
                    }
                    className="flex items-center justify-between py-3.5 border-b border-[#d8d5cd] text-[12px] font-semibold text-[#2B2B2B] hover:text-[#536c60] group transition-colors"
                  >
                    <div className="flex flex-col">
                      <span>{s.name}</span>
                      <span className="text-[10px] text-[#898a83] font-normal group-hover:text-[#536c60]/80">
                        {s.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#8FA89B] group-hover:text-[#536c60] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
