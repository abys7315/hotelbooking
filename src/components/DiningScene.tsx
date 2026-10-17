import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Utensils, Wine, Award, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface DiningSceneProps {
  onOpenMenu: () => void;
}

export const DiningScene: React.FC<DiningSceneProps> = ({ onOpenMenu }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current && imgRef.current) {
        gsap.fromTo(
          imgRef.current,
          { scale: 1.15, yPercent: -5 },
          {
            scale: 1.0,
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

        if (cardRef.current) {
          gsap.from(cardRef.current, {
            opacity: 0,
            x: -40,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardRef.current,
              start: 'top 80%'
            }
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="scene-dining"
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
      <img
        ref={imgRef}
        src="/images/fine_dining.jpg"
        alt="The Aurora World-Class Gourmet Dining Experience"
        className="scene-bg"
      />

      <div className="scene-overlay-vignette" />
      <div className="scene-overlay-top" />
      <div className="scene-overlay-bottom" />

      {/* Main Content */}
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
            background: 'rgba(6, 14, 16, 0.82)',
            backdropFilter: 'blur(22px)'
          }}
        >
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
              06 &bull; Haute Gastronomy
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '0.06em',
              marginBottom: '14px'
            }}
          >
            WORLD-CLASS DINING
          </h2>

          <h3
            className="font-editorial"
            style={{
              fontSize: '1.3rem',
              color: 'var(--gold-light)',
              fontStyle: 'italic',
              fontWeight: 400,
              marginBottom: '18px'
            }}
          >
            A culinary symphony inspired by ocean currents and organic terroir.
          </h3>

          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '28px'
            }}
          >
            Led by Executive Chef Julian Mercier, restaurant <em>L&apos;Azur</em> celebrates the untamed
            abundance of the coast. Fresh deep-sea catches brought daily by local fishermen meet botanical
            herbs cultivated in our organic cliffside greenhouses, paired with grand cru vintages from our
            subterranean cellar.
          </p>

          {/* Culinary Accreditations */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '14px',
              padding: '16px 0',
              marginBottom: '28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Award size={18} color="var(--gold-primary)" />
              <span style={{ fontSize: '0.74rem', color: 'var(--text-ivory)', fontWeight: 500 }}>
                Two Michelin Stars
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Wine size={18} color="var(--gold-primary)" />
              <span style={{ fontSize: '0.74rem', color: 'var(--text-ivory)', fontWeight: 500 }}>
                1,200+ Rare Vintages
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Utensils size={18} color="var(--gold-primary)" />
              <span style={{ fontSize: '0.74rem', color: 'var(--text-ivory)', fontWeight: 500 }}>
                Daily Tasting Menus
              </span>
            </div>
          </div>

          {/* Action */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={onOpenMenu}
              className="btn-gold"
              style={{ padding: '14px 30px' }}
            >
              <span>Explore Tasting Menu</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
