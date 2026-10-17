import React, { useEffect, useState } from 'react';

const SCENES = [
  { id: 'scene-hero', label: '01', title: 'Arrival' },
  { id: 'scene-entrance', label: '02', title: 'Entrance' },
  { id: 'scene-lobby', label: '03', title: 'Lobby' },
  { id: 'scene-stay', label: '04', title: 'Suites' },
  { id: 'scene-experiences', label: '05', title: 'Experiences' },
  { id: 'scene-dining', label: '06', title: 'Dining' },
  { id: 'scene-gallery', label: '07', title: 'Gallery' },
  { id: 'scene-booking', label: '08', title: 'Booking' }
];

export const ScrollProgress: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = SCENES.findIndex((s) => s.id === entry.target.id);
          if (idx !== -1) {
            setActiveIdx(idx);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0.1
    });

    SCENES.forEach((scene) => {
      const el = document.getElementById(scene.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        left: '36px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 900,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        pointerEvents: 'auto'
      }}
      className="scroll-progress-container"
    >
      {/* Top subtle vertical accent line */}
      <div
        style={{
          width: '1px',
          height: '24px',
          background: 'linear-gradient(to bottom, transparent, rgba(203, 168, 124, 0.4))'
        }}
      />

      {SCENES.map((scene, index) => {
        const isActive = activeIdx === index;
        return (
          <div
            key={scene.id}
            onClick={() => scrollTo(scene.id)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '3px 0'
            }}
            title={scene.title}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isActive ? '0.8rem' : '0.68rem',
                fontWeight: isActive ? 700 : 400,
                color: isActive ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.35)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.1em'
              }}
            >
              {scene.label}
            </span>

            {/* Indicator pill/dash */}
            <div
              style={{
                width: isActive ? '18px' : '6px',
                height: '1.5px',
                backgroundColor: isActive ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            />
          </div>
        );
      })}

      {/* Bottom subtle vertical accent line */}
      <div
        style={{
          width: '1px',
          height: '24px',
          background: 'linear-gradient(to bottom, rgba(203, 168, 124, 0.4), transparent)'
        }}
      />

      <style>{`
        @media (max-width: 900px) {
          .scroll-progress-container {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
