import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface EntranceSceneProps {
  onLearnMore?: () => void;
}

export const EntranceScene: React.FC<EntranceSceneProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current && imgRef.current) {
        // Scrubbed parallax zoom and depth reveal
        gsap.fromTo(
          imgRef.current,
          { scale: 1.18, yPercent: -5 },
          {
            scale: 1.02,
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );

        // Card reveal animation
        if (cardRef.current) {
          gsap.from(cardRef.current, {
            opacity: 0,
            x: -50,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 80%',
              toggleActions: 'play reverse play reverse'
            }
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-entrance"
      ref={containerRef}
      className="scene-section scene-pinned"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* High-res Entrance Background Image */}
      <img
        ref={imgRef}
        src="/images/resort_entrance.jpg"
        alt="The Aurora Grand Porte-Cochère and Reflecting Pool"
        className="scene-bg"
        style={{
          transformOrigin: 'center center'
        }}
      />

      <div className="scene-overlay-vignette" />
      <div className="scene-overlay-top" />
      <div className="scene-overlay-bottom" />

      {/* Main Content Layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 60px'
        }}
      >
        <div
          ref={cardRef}
          className="glass-card"
          style={{
            maxWidth: '620px',
            padding: '48px 44px',
            borderLeft: '2px solid var(--gold-primary)',
            background: 'rgba(6, 14, 16, 0.78)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {/* Section Marker */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.74rem',
                letterSpacing: '0.24em',
                color: 'var(--gold-primary)',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}
            >
              02 &bull; Entrance Reveal
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)',
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '0.06em',
              marginBottom: '16px'
            }}
          >
            A WARM WELCOME
          </h2>

          <h3
            className="font-editorial"
            style={{
              fontSize: '1.35rem',
              color: 'var(--gold-light)',
              fontStyle: 'italic',
              fontWeight: 400,
              marginBottom: '20px'
            }}
          >
            &ldquo;More than a stay, a profound feeling of belonging.&rdquo;
          </h3>

          <p
            style={{
              fontSize: '0.92rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '32px'
            }}
          >
            Arriving at The Aurora is an ethereal sensory transition. Cross our serene stepping-stone
            reflecting pool flanked by volcanic stone monoliths and illuminated evening torches, where the
            gentle whisper of the coastal breeze welcomes you to your private sanctuary.
          </p>

          {/* Key Architectural Highlights */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Compass size={18} color="var(--gold-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 600, display: 'block' }}>
                  Open-Air Atrium
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Continuous sea breeze</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <Sparkles size={18} color="var(--gold-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 600, display: 'block' }}>
                  Reflecting Waters
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Handcrafted volcanic tiles</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <ShieldCheck size={18} color="var(--gold-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
              <div>
                <span style={{ fontSize: '0.78rem', color: '#ffffff', fontWeight: 600, display: 'block' }}>
                  Private Concierge
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>24/7 bespoke escort</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
