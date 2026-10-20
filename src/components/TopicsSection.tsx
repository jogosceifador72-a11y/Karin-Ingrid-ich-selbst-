import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Asterisk, Circle, Heart } from 'lucide-react';
import { Category } from '../data/books';

interface TopicsSectionProps {
  animationsEnabled: boolean;
  onSelectCategory: (cat: Category) => void;
}

export const TopicsSection: React.FC<TopicsSectionProps> = ({
  animationsEnabled,
  onSelectCategory,
}) => {
  const topics = [
    {
      no: '01 / PRÄVENTION',
      title: 'Medizin &\nPrävention',
      desc: 'Gesundheitliche Zusammenhänge besser verstehen.',
      category: 'Herz & Prävention' as Category,
      bg: 'bg-[#e2e9e2]',
      border: 'border-[#c8d4c8]',
      icon: Asterisk,
      iconColor: 'text-[#536c60]',
    },
    {
      no: '02 / ERNÄHRUNG',
      title: 'Ernährung &\nAlltag',
      desc: 'Praktische Orientierung für bewusste Entscheidungen.',
      category: 'Ernährung' as Category,
      bg: 'bg-[#f0ebe2]',
      border: 'border-[#e0d7cb]',
      icon: Circle,
      iconColor: 'text-[#536c60]',
    },
    {
      no: '03 / WOHLBEFINDEN',
      title: 'Gesundheit\nab 50',
      desc: 'Impulse für die zweite Lebenshälfte.',
      category: 'Magen & Darm' as Category,
      bg: 'bg-[#eeddd3]',
      border: 'border-[#dfc6b9]',
      icon: Heart,
      iconColor: 'text-[#845642]',
    },
  ];

  const handleCardClick = (cat: Category) => {
    onSelectCategory(cat);
    const catalogEl = document.getElementById('ebooks');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="themen" className="py-20 sm:py-28 relative">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 25 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[2px] text-[#536c60] uppercase mb-3">
              Themenwelten
            </p>
            <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[48px] leading-[1.12] tracking-[-1.2px] text-[#2B2B2B] font-normal m-0">
              Impulse für Ihren <em className="italic text-[#536c60]">Alltag.</em>
            </h2>
          </div>
          <p className="text-[13px] sm:text-[14px] text-[#6f716c] max-w-[340px] leading-relaxed m-0">
            Entdecken Sie Themen, die Sie interessieren – klar erklärt und alltagsnah
            aufbereitet.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {topics.map((t, idx) => {
            const IconComponent = t.icon;
            return (
              <motion.div
                key={t.no}
                initial={animationsEnabled ? { opacity: 0, y: 30 } : false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={
                  animationsEnabled
                    ? { y: -6, scale: 1.015, transition: { duration: 0.25 } }
                    : {}
                }
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardClick(t.category)}
                className={`${t.bg} border ${t.border} p-7 sm:p-8 min-h-[300px] flex flex-col justify-between relative cursor-pointer group shadow-sm hover:shadow-md transition-shadow`}
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={animationsEnabled ? { rotate: 20, scale: 1.15 } : {}}
                      className={`${t.iconColor} transition-transform`}
                    >
                      <IconComponent className="w-6 h-6 stroke-[1.8]" />
                    </motion.div>
                    <span className="text-[9px] font-bold tracking-[1.5px] text-[#69746c] uppercase">
                      {t.no}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-[26px] sm:text-[28px] leading-tight text-[#2B2B2B] font-normal mb-3 whitespace-pre-line group-hover:text-[#536c60] transition-colors">
                    {t.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] sm:text-[13px] text-[#5d605a] leading-relaxed max-w-[220px]">
                    {t.desc}
                  </p>
                </div>

                {/* Bottom Row with Arrow */}
                <div className="pt-6 flex justify-between items-center">
                  <span className="text-[11px] font-semibold text-[#536c60] opacity-0 group-hover:opacity-100 transition-opacity">
                    E-Books ansehen
                  </span>

                  <motion.div
                    whileHover={animationsEnabled ? { scale: 1.1 } : {}}
                    className="w-9 h-9 rounded-full border border-[#2B2B2B]/20 bg-white/40 group-hover:bg-[#536c60] group-hover:text-white group-hover:border-[#536c60] flex items-center justify-center transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
