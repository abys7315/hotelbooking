import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroSceneProps {
  onOpenStory: () => void;
  onExplore: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({ onOpenStory, onExplore }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance reveal animation
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.6,
        ease: 'power3.out',
        delay: 0.2
      });

      // Scroll scrubbed parallax and scale effect
      if (containerRef.current && bgRef.current) {
        gsap.to(bgRef.current, {
          scale: 1.15,
          yPercent: 12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });

        gsap.to(titlesRef.current, {
          yPercent: -20,
          opacity: 0.3,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="scene-hero"
      ref={containerRef}
      className="scene-section scene-pinned"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden'
      }}
    >
      {/* Background Image with Scrubbed Scale */}
      <img
        ref={bgRef}
        src="/images/hero_aerial.jpg"
        alt="The Aurora Resort & Spa Aerial Panorama"
        className="scene-bg"
        style={{
          transform: 'scale(1.04)',
          transformOrigin: 'center center'
        }}
      />

      {/* Atmospheric Overlays */}
      <div className="scene-overlay-vignette" />
      <div className="scene-overlay-top" />
      <div className="scene-overlay-bottom" />

      {/* Right-Hand Quick Navigation Strip (from Reference Board 03) */}
      <div
        className="hero-quick-bookmarks"
        style={{
          position: 'absolute',
          right: '50px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}
      >
        {[
          { label: 'The Resort', img: '/images/01_aerial_resort.jpg', target: 'scene-entrance' },
          { label: 'The Rooms', img: '/images/04_room_bedroom.jpg', target: 'scene-stay' },
          { label: 'The Dining', img: '/images/07_dining_food.jpg', target: 'scene-dining' },
          { label: 'Experiences', img: '/images/06_infinity_pool.jpg', target: 'scene-experiences' },
          { label: 'The View', img: '/images/booking_sunset.jpg', target: 'scene-booking' }
        ].map((item) => (
          <div
            key={item.label}
            onClick={() => scrollToSection(item.target)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              opacity: 0.8,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateX(-6px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '3px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
              }}
            >
              <img src={item.img} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.68rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-ivory)',
                fontWeight: 600,
                textShadow: '0 2px 6px rgba(0,0,0,0.8)'
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1440px',
          height: '100%',
          margin: '0 auto',
          padding: '0 60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <div ref={titlesRef} style={{ maxWidth: '780px' }}>
          {/* Watch Story Action */}
          <div
            onClick={onOpenStory}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              cursor: 'pointer',
              marginBottom: '28px',
              transition: 'transform 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-primary)'
              }}
            >
              <Play size={16} fill="var(--gold-primary)" />
            </div>
            <span
              style={{
                fontSize: '0.74rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-ivory)',
                fontWeight: 600
              }}
            >
              Watch Our Story
            </span>
          </div>

          {/* Subtitle Accent */}
          <p
            style={{
              fontSize: '0.82rem',
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              marginBottom: '10px',
              fontWeight: 500
            }}
          >
            Welcome To
          </p>

          {/* Big Editorial Title */}
          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(3rem, 6.5vw, 5.8rem)',
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: '0.08em',
              color: '#ffffff',
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.7)',
              marginBottom: '20px'
            }}
          >
            THE AURORA
          </h1>

          {/* Tagline */}
          <p
            className="font-editorial"
            style={{
              fontSize: 'clamp(1.2rem, 2.2vw, 1.85rem)',
              fontStyle: 'italic',
              color: 'var(--text-ivory)',
              letterSpacing: '0.06em',
              textShadow: '0 2px 14px rgba(0, 0, 0, 0.8)',
              marginBottom: '38px',
              maxWidth: '620px'
            }}
          >
            A breathtaking escape where raw nature meets transcendent luxury.
          </p>

          {/* Call to action */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button
              onClick={onExplore}
              className="btn-outline-gold"
              style={{
                padding: '14px 34px',
                fontSize: '0.8rem',
                letterSpacing: '0.2em'
              }}
            >
              Explore Sanctuary &rarr;
            </button>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div
          onClick={onExplore}
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            opacity: 0.75,
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.75')}
        >
          <div
            style={{
              animation: 'bounceArrow 2s infinite ease-in-out'
            }}
          >
            <ChevronDown size={18} color="var(--gold-primary)" />
          </div>
          <span
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontWeight: 500
            }}
          >
            Scroll to discover
          </span>
        </div>
      </div>

      <style>{`
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 1100px) {
          .hero-quick-bookmarks {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};
