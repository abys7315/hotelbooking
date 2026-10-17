import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const LobbyScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current && imgRef.current) {
        // Slow depth scrub
        gsap.fromTo(
          imgRef.current,
          { scale: 1.12, yPercent: -4 },
          {
            scale: 1.0,
            yPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );

        if (textRef.current) {
          gsap.from(textRef.current, {
            opacity: 0,
            y: 35,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 75%'
            }
          });
        }

        if (statsRef.current) {
          gsap.from(statsRef.current.children, {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 85%'
            }
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-lobby"
      ref={containerRef}
      className="scene-section scene-pinned"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
      }}
    >
      <img
        ref={imgRef}
        src="/images/grand_lobby.jpg"
        alt="The Aurora Grand Cathedral Lobby and Ocean View Lounge"
        className="scene-bg"
      />

      <div className="scene-overlay-vignette" />
      <div className="scene-overlay-top" />
      <div className="scene-overlay-bottom" />

      {/* Content Placed Right Side for Editorial Rhythm */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 60px',
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <div
          ref={textRef}
          className="glass-card"
          style={{
            maxWidth: '580px',
            padding: '46px 42px',
            borderRight: '2px solid var(--gold-primary)',
            background: 'rgba(6, 14, 16, 0.8)',
            backdropFilter: 'blur(20px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
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
              03 &bull; Sanctuary Lounge
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.9rem)',
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '0.06em',
              marginBottom: '16px'
            }}
          >
            ARCHITECTURE IN HARMONY WITH TIDES
          </h2>

          <p
            className="font-editorial"
            style={{
              fontSize: '1.2rem',
              color: 'var(--gold-light)',
              fontStyle: 'italic',
              marginBottom: '18px'
            }}
          >
            A soaring tribute to coastal grandeur, sculpted with indigenous teak and natural stone.
          </p>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '32px'
            }}
          >
            Step beneath towering 35-foot timber trusses that echo the hulls of ancient seafaring vessels.
            With floor-to-ceiling panoramic glass, the line between internal sanctuary and the limitless
            sapphire ocean dissolves into pure tranquility.
          </p>

          {/* Editorial Specs Bar */}
          <div
            ref={statsRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div>
              <span className="font-display" style={{ fontSize: '1.4rem', color: 'var(--gold-primary)', display: 'block', fontWeight: 600 }}>
                35ft
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Cathedral Height
              </span>
            </div>

            <div>
              <span className="font-display" style={{ fontSize: '1.4rem', color: 'var(--gold-primary)', display: 'block', fontWeight: 600 }}>
                180&deg;
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Ocean Panorama
              </span>
            </div>

            <div>
              <span className="font-display" style={{ fontSize: '1.4rem', color: 'var(--gold-primary)', display: 'block', fontWeight: 600 }}>
                100%
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Reclaimed Teak
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
