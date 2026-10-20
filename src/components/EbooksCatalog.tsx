import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowUpRight, BookOpen, Layers } from 'lucide-react';
import { booksData, categories, Book, Category } from '../data/books';
import { BookDetailModal } from './BookDetailModal';

interface EbooksCatalogProps {
  animationsEnabled: boolean;
  selectedCategory: Category;
  onSelectCategory: (cat: Category) => void;
}

export const EbooksCatalog: React.FC<EbooksCatalogProps> = ({
  animationsEnabled,
  selectedCategory,
  onSelectCategory,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBook, setActiveBook] = useState<Book | null>(null);

  // Filtered books
  const filteredBooks = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return booksData.filter((b) => {
      const matchesCategory =
        selectedCategory === 'Alle Themen' || b.category === selectedCategory;
      const matchesSearch =
        q === '' ||
        b.title.toLowerCase().includes(q) ||
        b.desc.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const getToneStyle = (tone: Book['tone']) => {
    switch (tone) {
      case 'terra':
        return {
          bg: 'bg-[#f1e1d8]',
          ringColor: 'border-[#845642]/20',
          textColor: 'text-[#845642]',
        };
      case 'cream':
        return {
          bg: 'bg-[#f0ede5]',
          ringColor: 'border-[#536c60]/20',
          textColor: 'text-[#536c60]',
        };
      case 'sage2':
        return {
          bg: 'bg-[#dce4df]',
          ringColor: 'border-[#536c60]/20',
          textColor: 'text-[#536c60]',
        };
      case 'sage':
      default:
        return {
          bg: 'bg-[#e6ece6]',
          ringColor: 'border-[#536c60]/25',
          textColor: 'text-[#536c60]',
        };
    }
  };

  return (
    <section id="ebooks" className="py-20 sm:py-28 relative">
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <motion.div
          initial={animationsEnabled ? { opacity: 0, y: 25 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[2px] text-[#536c60] uppercase mb-3">
              Digitale Ratgeber
            </p>
            <h2 className="font-serif text-[34px] sm:text-[44px] md:text-[48px] leading-[1.12] tracking-[-1.2px] text-[#2B2B2B] font-normal m-0">
              Wissen, das Sie <em className="italic text-[#536c60]">begleitet.</em>
            </h2>
          </div>
          <p className="text-[13px] sm:text-[14px] text-[#6f716c] max-w-[340px] leading-relaxed m-0">
            Finden Sie Ihren Themenbereich und öffnen Sie den passenden digitalen
            Ratgeber.
          </p>
        </motion.div>

        {/* Catalog Filter & Search Toolbar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#2B2B2B]/8">
          {/* Search Box */}
          <div className="relative w-full lg:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#536c60]">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="E-Book oder Thema suchen …"
              aria-label="E-Books suchen"
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-[#e6e1da] rounded-sm text-[13px] text-[#2B2B2B] placeholder-[#6f716c]/70 focus:outline-none focus:border-[#536c60] focus:ring-1 focus:ring-[#536c60]/30 transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6f716c] hover:text-[#2B2B2B]"
                aria-label="Suche löschen"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Tabs with Sliding Active Pill */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`relative px-3.5 py-2 rounded-sm text-[11px] font-medium tracking-wide whitespace-nowrap transition-colors z-10 ${
                    isActive ? 'text-white font-semibold' : 'text-[#5d605a] hover:text-[#2B2B2B] hover:bg-black/5'
                  }`}
                >
                  {/* Sliding Pill Background Animation */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-[#536c60] rounded-sm shadow-2xs -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-[11px] text-[#6f716c] mb-6">
          <span className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#536c60]" />
            <span>
              {filteredBooks.length} {filteredBooks.length === 1 ? 'E-Book' : 'E-Books'} gefunden
            </span>
          </span>
          {(searchTerm || selectedCategory !== 'Alle Themen') && (
            <button
              onClick={() => {
                setSearchTerm('');
                onSelectCategory('Alle Themen');
              }}
              className="text-[#536c60] hover:underline font-medium"
            >
              Filter zurücksetzen
            </button>
          )}
        </div>

        {/* Book Cards Grid with Layout Animations */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => {
              const tone = getToneStyle(book.tone);
              return (
                <motion.article
                  key={book.id}
                  layout
                  initial={
                    animationsEnabled
                      ? { opacity: 0, scale: 0.95, y: 15 }
                      : false
                  }
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={
                    animationsEnabled
                      ? { opacity: 0, scale: 0.95, y: -10 }
                      : {}
                  }
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  whileHover={
                    animationsEnabled
                      ? { y: -4, transition: { duration: 0.2 } }
                      : {}
                  }
                  className="bg-white border border-[#eee9e2] flex flex-col min-w-0 shadow-2xs hover:shadow-md transition-shadow group rounded-xs overflow-hidden"
                >
                  {/* Book Cover Header with Concentric Circles */}
                  <div
                    onClick={() => setActiveBook(book)}
                    className={`h-[180px] p-5 flex items-center justify-center ${tone.bg} relative overflow-hidden cursor-pointer select-none`}
                  >
                    {/* Concentric Decorative Rings with hover rotation */}
                    <motion.div
                      animate={animationsEnabled ? { rotate: [0, 360] } : {}}
                      transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
                      className={`absolute w-[165px] h-[165px] border ${tone.ringColor} rounded-full pointer-events-none`}
                    />
                    <motion.div
                      animate={animationsEnabled ? { rotate: [360, 0] } : {}}
                      transition={{ repeat: Infinity, duration: 32, ease: 'linear' }}
                      className={`absolute w-[120px] h-[120px] border ${tone.ringColor} rounded-full pointer-events-none`}
                    />

                    <div className="relative z-10 text-center max-w-[220px]">
                      <small className="block text-[8px] tracking-[1.5px] font-bold text-[#536c60] uppercase mb-2">
                        Karin Ingrid · E-Book
                      </small>
                      <strong className="block font-serif text-[20px] sm:text-[21px] font-medium leading-[1.2] text-[#2B2B2B]">
                        {book.cover}
                        <br />
                        <em className="font-normal italic text-[#536c60] text-[18px]">
                          {book.short}
                        </em>
                      </strong>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] font-bold tracking-[1.1px] text-[#536c60] uppercase">
                        {book.category}
                      </span>
                      {book.pending && (
                        <span className="text-[8px] font-bold tracking-[1px] text-[#845642] bg-[#D9A58B]/20 px-1.5 py-0.5 rounded">
                          Zu bestätigen
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif text-[19px] sm:text-[21px] font-medium leading-tight text-[#2B2B2B] mb-2.5 group-hover:text-[#536c60] transition-colors">
                      {book.title}
                    </h3>

                    <p className="text-[12px] leading-relaxed text-[#6f716c] mb-6 flex-1">
                      {book.desc}
                    </p>

                    {/* Book Actions */}
                    <div className="mt-auto pt-2 flex items-center gap-2.5">
                      <button
                        onClick={() => setActiveBook(book)}
                        className="flex-1 text-center py-2 px-3 border border-[#e6e1da] hover:bg-[#FAF8F5] text-[11px] font-semibold text-[#2B2B2B] rounded-xs transition-colors"
                      >
                        Details ansehen
                      </button>

                      <a
                        href={book.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#536c60] hover:bg-[#40574c] text-white text-[11px] font-semibold tracking-wide rounded-xs transition-colors shadow-2xs group/btn"
                      >
                        <span>Zum E-Book</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredBooks.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-16 text-center bg-white border border-[#eee9e2] rounded-xs px-6"
          >
            <BookOpen className="w-8 h-8 text-[#8FA89B] mx-auto mb-3" />
            <h3 className="font-serif text-[20px] text-[#2B2B2B] font-medium mb-1">
              Keine passenden E-Books gefunden
            </h3>
            <p className="text-[13px] text-[#6f716c] max-w-md mx-auto mb-5">
              Ändern Sie Ihre Suche oder wählen Sie eine andere Kategorie.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                onSelectCategory('Alle Themen');
              }}
              className="px-4 py-2 bg-[#536c60] text-white text-[12px] font-semibold rounded-xs hover:bg-[#40574c] transition-colors"
            >
              Alle E-Books anzeigen
            </button>
          </motion.div>
        )}

        {/* Catalog Note */}
        <p className="text-[11px] text-[#898a83] mt-8 text-center sm:text-left leading-relaxed">
          Die Schaltfläche „Zum E-Book“ öffnet die jeweilige externe Zielseite. Bitte
          prüfen Sie vor der Veröffentlichung alle Links und Produktzuordnungen.
        </p>
      </div>

      {/* Book Detail Modal */}
      <BookDetailModal
        book={activeBook}
        onClose={() => setActiveBook(null)}
        animationsEnabled={animationsEnabled}
      />
    </section>
  );
};
