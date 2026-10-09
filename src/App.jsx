import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import AmenitiesSection from './components/AmenitiesSection';
import ContactSection from './components/ContactSection';
import PrivacyMoodSection from './components/PrivacyMoodSection';
import BookingSection from './components/BookingSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import BackgroundBlobs from './components/BackgroundBlobs';

export default function App() {
  const [prefilledBooking, setPrefilledBooking] = useState(null);

  useEffect(() => {
    // Force scroll to top on initial mount & page refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const handleQuickSearch = (searchData) => {
    setPrefilledBooking((prev) => ({
      ...prev,
      roomType: searchData.roomType
    }));
  };

  const handleSelectRoom = (roomId) => {
    setPrefilledBooking((prev) => ({
      ...prev,
      roomType: roomId
    }));
  };

  return (
    <div className="animate-pageIn relative min-h-screen bg-[#F8F5F0] text-[#292521] font-sans selection:bg-[#A98567] selection:text-white">
      <BackgroundBlobs />

      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onQuickSearch={handleQuickSearch} />
        <TrustSection />
        <AboutSection />
        <RoomsSection onSelectRoom={handleSelectRoom} />
        <AmenitiesSection />
        <ContactSection />
        <PrivacyMoodSection />
        <BookingSection prefilledData={prefilledBooking} />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Floating Action Bar */}
      <StickyMobileBar />
    </div>
  );
}
