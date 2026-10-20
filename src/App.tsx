/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroBand } from './components/IntroBand';
import { TopicsSection } from './components/TopicsSection';
import { AboutSection } from './components/AboutSection';
import { EbooksCatalog } from './components/EbooksCatalog';
import { QuoteBand } from './components/QuoteBand';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { Category } from './data/books';

export default function App() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<Category>('Alle Themen');
  const [activeLegalDoc, setActiveLegalDoc] = useState<'impressum' | 'datenschutz' | 'haftungsausschluss' | null>(null);

  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#8FA89B]/20 selection:text-[#536c60]">
      {/* Sticky Header with Scroll Progress and Animation Controls */}
      <Header
        onOpenLegal={setActiveLegalDoc}
        animationsEnabled={animationsEnabled}
        onToggleAnimations={toggleAnimations}
      />

      {/* Main Content Sections */}
      <main id="start" className="flex-1">
        <Hero animationsEnabled={animationsEnabled} />
        <IntroBand animationsEnabled={animationsEnabled} />
        <TopicsSection
          animationsEnabled={animationsEnabled}
          onSelectCategory={setSelectedCategory}
        />
        <AboutSection animationsEnabled={animationsEnabled} />
        <EbooksCatalog
          animationsEnabled={animationsEnabled}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <QuoteBand animationsEnabled={animationsEnabled} />
        <ContactSection animationsEnabled={animationsEnabled} />
      </main>

      {/* Footer */}
      <Footer
        onOpenLegal={setActiveLegalDoc}
        animationsEnabled={animationsEnabled}
      />

      {/* Floating Back to Top Button */}
      <ScrollToTopButton animationsEnabled={animationsEnabled} />

      {/* Legal Disclosures Modal */}
      <LegalModal
        activeDocId={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
        animationsEnabled={animationsEnabled}
      />
    </div>
  );
}
