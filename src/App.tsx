import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { HeroScene } from './components/HeroScene';
import { EntranceScene } from './components/EntranceScene';
import { LobbyScene } from './components/LobbyScene';
import { StayScene } from './components/StayScene';
import { ExperiencesScene } from './components/ExperiencesScene';
import { DiningScene } from './components/DiningScene';
import { GalleryScene } from './components/GalleryScene';
import { BookingScene } from './components/BookingScene';

import { StoryModal } from './components/Modals/StoryModal';
import { MenuModal } from './components/Modals/MenuModal';
import { SuiteModal } from './components/Modals/SuiteModal';
import { BookingModal } from './components/Modals/BookingModal';
import type { BookingState } from './types/resort';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [storyOpen, setStoryOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSuiteId, setActiveSuiteId] = useState<string | null>(null);
  const [confirmedBooking, setConfirmedBooking] = useState<BookingState | null>(null);
  const [prefilledSuiteId, setPrefilledSuiteId] = useState('ocean-suite');

  const lenisRef = useRef<Lenis | null>(null);

  // Synchronize Lenis Smooth Scroll with GSAP ScrollTrigger
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95
    });

    lenisRef.current = lenis;

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, { duration: 1.4 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookingSubmit = (booking: BookingState) => {
    setConfirmedBooking(booking);
  };

  const handleSelectSuiteForBooking = (suiteId: string) => {
    setPrefilledSuiteId(suiteId);
    scrollToSection('scene-booking');
  };

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Subtle Cinematic Film Grain Overlay */}
      <div className="film-grain" />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Luxury Navigation Bar */}
      <Navbar
        onOpenBooking={() => scrollToSection('scene-booking')}
        onOpenStory={() => setStoryOpen(true)}
      />

      {/* Left Vertical Scene Progress Bar */}
      <ScrollProgress />

      {/* Scene 01: Aerial Arrival */}
      <HeroScene
        onOpenStory={() => setStoryOpen(true)}
        onExplore={() => scrollToSection('scene-entrance')}
      />

      {/* Scene 02: Resort Entrance Transition */}
      <EntranceScene />

      {/* Scene 03: The Lobby Experience */}
      <LobbyScene />

      {/* Scene 04: Stay & Accommodations */}
      <StayScene
        onOpenSuiteModal={(id) => setActiveSuiteId(id)}
        onSelectSuiteForBooking={handleSelectSuiteForBooking}
      />

      {/* Scene 05: Amenities & Experiences */}
      <ExperiencesScene />

      {/* Scene 06: Haute Gastronomy Dining */}
      <DiningScene onOpenMenu={() => setMenuOpen(true)} />

      {/* Scene 07: Curated 3D Perspective Gallery */}
      <GalleryScene />

      {/* Scene 08: Booking Finale & Location Footer */}
      <BookingScene
        initialSuiteId={prefilledSuiteId}
        onSubmitBooking={handleBookingSubmit}
      />

      {/* Modals */}
      <StoryModal
        isOpen={storyOpen}
        onClose={() => setStoryOpen(false)}
        onBookNow={() => scrollToSection('scene-booking')}
      />

      <MenuModal
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBookDining={() => scrollToSection('scene-booking')}
      />

      <SuiteModal
        suiteId={activeSuiteId}
        onClose={() => setActiveSuiteId(null)}
        onSelectForBooking={handleSelectSuiteForBooking}
      />

      <BookingModal
        booking={confirmedBooking}
        onClose={() => setConfirmedBooking(null)}
      />
    </div>
  );
};

export default App;
