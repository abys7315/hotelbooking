import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenStory: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenStory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioNodes, setAudioNodes] = useState<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Synthesize relaxing ocean ambient white noise / gentle harmonic resonance
  const toggleAmbientSound = () => {
    if (isAudioPlaying) {
      if (audioNodes) {
        audioNodes.gain.gain.exponentialRampToValueAtTime(0.0001, (audioContext?.currentTime || 0) + 0.8);
        setTimeout(() => {
          audioNodes.osc1.stop();
          audioNodes.osc2.stop();
          setAudioNodes(null);
        }, 800);
      }
      setIsAudioPlaying(false);
    } else {
      try {
        const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        // Relaxing deep marine resonance (A2 / D3 harmonic interval)
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, ctx.currentTime);
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(164.81, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 1.5);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        setAudioContext(ctx);
        setAudioNodes({ osc1, osc2, gain });
        setIsAudioPlaying(true);
      } catch {
        setIsAudioPlaying(false);
      }
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? '16px 40px' : '28px 50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          background: isScrolled ? 'rgba(6, 14, 16, 0.88)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent'
        }}
      >
        {/* Brand Logo */}
        <div
          onClick={() => scrollToSection('scene-hero')}
          style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
        >
          <span
            className="font-display"
            style={{
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '0.24em',
              color: '#ffffff',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            THE AURORA
          </span>
          <span
            style={{
              fontSize: '0.62rem',
              letterSpacing: '0.35em',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              marginTop: '1px'
            }}
          >
            RESORT &amp; SPA
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '34px',
            textTransform: 'uppercase'
          }}
          className="desktop-nav"
        >
          {[
            { label: 'Home', id: 'scene-hero' },
            { label: 'Stay', id: 'scene-stay' },
            { label: 'Experiences', id: 'scene-experiences' },
            { label: 'Dining', id: 'scene-dining' },
            { label: 'Gallery', id: 'scene-gallery' },
            { label: 'Contact', id: 'scene-booking' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-ivory)',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'color 0.3s ease, transform 0.3s ease',
                position: 'relative',
                padding: '4px 0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--gold-primary)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-ivory)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          {/* Watch Story Pill */}
          <button
            onClick={onOpenStory}
            className="story-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '24px',
              padding: '8px 16px',
              color: 'var(--text-ivory)',
              fontSize: '0.72rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
              e.currentTarget.style.color = 'var(--gold-light)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
              e.currentTarget.style.color = 'var(--text-ivory)';
            }}
          >
            <Sparkles size={13} color="var(--gold-primary)" />
            <span>Story</span>
          </button>

          {/* Ambient Audio Toggle */}
          <button
            onClick={toggleAmbientSound}
            aria-label={isAudioPlaying ? 'Mute ambient sound' : 'Enable ambient sound'}
            title={isAudioPlaying ? 'Mute Ocean Breeze Audio' : 'Play Ocean Breeze Audio'}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: isAudioPlaying ? 'var(--gold-primary)' : 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              transition: 'all 0.3s ease',
              padding: '6px'
            }}
          >
            {isAudioPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* Book Your Stay CTA */}
          <button
            onClick={onOpenBooking}
            className="btn-outline-gold"
            style={{
              padding: '10px 22px',
              fontSize: '0.72rem',
              letterSpacing: '0.16em'
            }}
          >
            Book Your Stay
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '6px'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(6, 14, 16, 0.98)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '28px',
            padding: '40px'
          }}
        >
          <span className="font-display" style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', letterSpacing: '0.3em' }}>
            THE AURORA RESORT &amp; SPA
          </span>

          {[
            { label: 'Aerial Arrival', id: 'scene-hero' },
            { label: 'Resort Entrance', id: 'scene-entrance' },
            { label: 'The Sanctuary Lounge', id: 'scene-lobby' },
            { label: 'Luxury Suites & Villas', id: 'scene-stay' },
            { label: 'Experiences & Activities', id: 'scene-experiences' },
            { label: 'Fine Gastronomy', id: 'scene-dining' },
            { label: 'Curated Gallery', id: 'scene-gallery' },
            { label: 'Reservations & Concierge', id: 'scene-booking' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-display"
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-ivory)',
                fontSize: '1.25rem',
                letterSpacing: '0.18em',
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="btn-gold"
            style={{ marginTop: '20px', width: '220px' }}
          >
            Book Your Stay
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .story-pill {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};
