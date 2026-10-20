import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldAlert, FileText, Scale } from 'lucide-react';
import { legalDocs, LegalDoc } from '../data/legal';

interface LegalModalProps {
  activeDocId: 'impressum' | 'datenschutz' | 'haftungsausschluss' | null;
  onClose: () => void;
  animationsEnabled: boolean;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  activeDocId,
  onClose,
  animationsEnabled,
}) => {
  const [currentTab, setCurrentTab] = useState<'impressum' | 'datenschutz' | 'haftungsausschluss'>('impressum');

  useEffect(() => {
    if (activeDocId) {
      setCurrentTab(activeDocId);
    }
  }, [activeDocId]);

  if (!activeDocId) return null;

  const currentDoc: LegalDoc = legalDocs[currentTab] || legalDocs.impressum;

  const tabs = [
    { id: 'impressum', label: 'Impressum', icon: FileText },
    { id: 'datenschutz', label: 'Datenschutz', icon: Scale },
    { id: 'haftungsausschluss', label: 'Haftungsausschluss', icon: ShieldAlert },
  ] as const;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#2B2B2B]/45 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={animationsEnabled ? { opacity: 0, scale: 0.95, y: 15 } : false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={animationsEnabled ? { opacity: 0, scale: 0.95, y: 10 } : {}}
          transition={{ type: 'spring', stiffness: 350, damping: 26 }}
          className="relative z-10 w-full max-w-2xl bg-[#FAF8F5] border border-[#e6e1da] shadow-2xl rounded-sm overflow-hidden flex flex-col max-h-[85vh]"
        >
          {/* Header & Tabs */}
          <div className="p-5 sm:p-6 border-b border-[#e6e1da] bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[9px] font-bold tracking-[1.6px] text-[#536c60] uppercase block mb-1">
                {currentDoc.eyebrow}
              </span>
              <h2 className="font-serif text-[24px] sm:text-[26px] font-medium text-[#2B2B2B] m-0">
                {currentDoc.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab Selector */}
              <div className="flex bg-[#FAF8F5] p-1 rounded-sm border border-[#e6e1da] text-[11px]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setCurrentTab(tab.id)}
                    className={`px-3 py-1.5 rounded-xs font-medium transition-colors ${
                      currentTab === tab.id
                        ? 'bg-[#536c60] text-white shadow-2xs'
                        : 'text-[#6f716c] hover:text-[#2B2B2B]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#536c60] hover:text-white flex items-center justify-center text-[#2B2B2B] transition-colors border border-[#e6e1da] ml-2"
                aria-label="Schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-[13px] sm:text-[14px] text-[#5d605a] leading-[1.85]">
            {currentDoc.note && (
              <div className="p-3.5 bg-[#FAF3EE] border border-[#e8d5cb] rounded text-[12px] text-[#845642]">
                <strong>Hinweis:</strong> {currentDoc.note}
              </div>
            )}

            {currentDoc.content.map((paragraph, idx) => (
              <p key={idx} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-[#FAF8F5] border-t border-[#e6e1da] flex items-center justify-between text-[11px] text-[#898a83]">
            <span>Karin Ingrid · Digitale Ratgeber</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-[#2B2B2B] hover:bg-[#536c60] text-white rounded-xs font-medium transition-colors"
            >
              Schließen
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
