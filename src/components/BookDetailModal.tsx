import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight, ShieldCheck, BookOpen, AlertCircle } from 'lucide-react';
import { Book } from '../data/books';

interface BookDetailModalProps {
  book: Book | null;
  onClose: () => void;
  animationsEnabled: boolean;
}

export const BookDetailModal: React.FC<BookDetailModalProps> = ({
  book,
  onClose,
  animationsEnabled,
}) => {
  if (!book) return null;

  const getToneBg = (tone: Book['tone']) => {
    switch (tone) {
      case 'terra':
        return 'bg-[#f1e1d8]';
      case 'cream':
        return 'bg-[#f0ede5]';
      case 'sage2':
        return 'bg-[#dce4df]';
      case 'sage':
      default:
        return 'bg-[#e6ece6]';
    }
  };

  return (
    <AnimatePresence>
      {book && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2B2B2B]/40 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={animationsEnabled ? { opacity: 0, scale: 0.94, y: 20 } : false}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={animationsEnabled ? { opacity: 0, scale: 0.94, y: 15 } : {}}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative z-10 w-full max-w-xl bg-[#FAF8F5] border border-[#e6e1da] shadow-2xl rounded-sm overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 hover:bg-[#536c60] hover:text-white flex items-center justify-center text-[#2B2B2B] transition-colors shadow-sm"
              aria-label="Modal schließen"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Stylized Cover Header */}
            <div
              className={`h-48 sm:h-56 ${getToneBg(
                book.tone
              )} flex items-center justify-center relative overflow-hidden border-b border-[#2B2B2B]/5`}
            >
              {/* Concentric Decorative Rings */}
              <div className="absolute w-44 h-44 rounded-full border border-[#536c60]/20 pointer-events-none" />
              <div className="absolute w-32 h-32 rounded-full border border-[#536c60]/15 pointer-events-none" />

              <div className="text-center z-10 px-6 max-w-md">
                <span className="block text-[9px] font-bold tracking-[1.8px] text-[#536c60] uppercase mb-2">
                  Karin Ingrid · Digitaler Ratgeber
                </span>
                <h2 className="font-serif text-[24px] sm:text-[28px] font-medium leading-tight text-[#2B2B2B] m-0">
                  {book.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-bold tracking-[1.3px] text-[#536c60] uppercase bg-[#536c60]/10 px-2.5 py-1 rounded">
                  {book.category}
                </span>
                {book.pending && (
                  <span className="text-[10px] font-bold tracking-[1.3px] text-[#845642] bg-[#D9A58B]/20 px-2.5 py-1 rounded">
                    Zu bestätigen
                  </span>
                )}
              </div>

              <p className="text-[14px] sm:text-[15px] text-[#2B2B2B] leading-relaxed mb-4 font-normal">
                {book.desc}
              </p>

              {book.pending && (
                <div className="flex items-start gap-2.5 p-3.5 bg-[#FAF3EE] border border-[#e8d5cb] rounded text-[12px] text-[#845642] mb-5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    <strong>Hinweis:</strong> Das genaue Thema und der endgültige Produkttitel
                    dieses Links müssen vor der Veröffentlichung noch bestätigt werden.
                  </span>
                </div>
              )}

              <div className="p-4 bg-[#eeeee7]/60 border border-[#e6e1da] rounded mb-6 text-[12px] text-[#5d605a] leading-relaxed flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#536c60] shrink-0 mt-0.5" />
                <span>
                  Dieser digitale Ratgeber gehört zum Themenangebot von Karin Ingrid. Bitte
                  beachten Sie, dass allgemeine Gesundheitsinformationen keine individuelle
                  medizinische Diagnose oder Behandlung ersetzen.
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 border border-[#c8c6bd] hover:bg-white text-[12px] font-medium text-[#2B2B2B] rounded transition-colors"
                >
                  Zurück zur Übersicht
                </button>

                <a
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#536c60] hover:bg-[#40574c] text-white px-5 py-2.5 rounded text-[12px] font-semibold tracking-wide transition-colors shadow-sm"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Zum E-Book</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
