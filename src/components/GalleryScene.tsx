import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/resortData';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export const GalleryScene: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeItem = GALLERY_ITEMS[activeItemIndex];

  const handlePrev = () => {
    setActiveItemIndex((prev) => (prev === 0 ? GALLERY_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveItemIndex((prev) => (prev === GALLERY_ITEMS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="scene-gallery"
      className="scene-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#050c0e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '100px 0',
        overflow: 'hidden'
      }}
    >
      {/* Background Ambience */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 40%, rgba(35, 85, 92, 0.18) 0%, rgba(5, 12, 14, 0.95) 75%)',
          pointerEvents: 'none'
        }}
      />

      {/* Main Container */}
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
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
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
                07 &bull; Visual Sanctuary
              </span>
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                color: '#ffffff',
                lineHeight: 1.05,
                letterSpacing: '0.06em'
              }}
            >
              CURATED MOMENTS
            </h2>
            <p className="font-editorial" style={{ fontSize: '1.25rem', color: 'var(--gold-light)', fontStyle: 'italic', marginTop: '6px' }}>
              Moments that speak louder than words.
            </p>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span className="font-display" style={{ fontSize: '1.1rem', color: 'var(--gold-primary)', letterSpacing: '0.2em' }}>
              0{activeItemIndex + 1} / 0{GALLERY_ITEMS.length}
            </span>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={handlePrev}
                className="btn-icon-circle"
                aria-label="Previous gallery image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="btn-icon-circle"
                aria-label="Next gallery image"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Perspective Card Fan */}
        <div
          className="gallery-cards-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            perspective: '1200px',
            minHeight: '440px',
            margin: '20px 0'
          }}
        >
          {GALLERY_ITEMS.map((item, idx) => {
            const offset = idx - activeItemIndex;
            const isCenter = offset === 0;

            // Perspective transform values
            let rotateY = offset * -14;
            let scale = isCenter ? 1.08 : 0.88;
            let opacity = isCenter ? 1 : Math.max(0.4, 0.9 - Math.abs(offset) * 0.25);
            let zIndex = 20 - Math.abs(offset);

            // Hide cards too far out on smaller screens
            if (Math.abs(offset) > 2) return null;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isCenter) {
                    setLightboxOpen(true);
                  } else {
                    setActiveItemIndex(idx);
                  }
                }}
                style={{
                  position: 'relative',
                  width: isCenter ? '380px' : '300px',
                  height: '480px',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transform: `rotateY(${rotateY}deg) scale(${scale})`,
                  transformStyle: 'preserve-3d',
                  opacity,
                  zIndex,
                  boxShadow: isCenter
                    ? '0 25px 60px rgba(0,0,0,0.8), 0 0 35px var(--gold-glow)'
                    : '0 15px 35px rgba(0,0,0,0.5)',
                  border: isCenter ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
                className="gallery-perspective-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (isCenter) e.currentTarget.style.transform = 'scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    if (isCenter) e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Card Info Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '28px 24px',
                    background: 'linear-gradient(to top, rgba(6, 14, 16, 0.95) 0%, rgba(6, 14, 16, 0.5) 70%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.68rem',
                      letterSpacing: '0.2em',
                      color: 'var(--gold-primary)',
                      textTransform: 'uppercase',
                      fontWeight: 600
                    }}
                  >
                    {item.category}
                  </span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: '1.2rem',
                        color: '#ffffff',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {item.title}
                    </h3>
                    {isCenter && <Maximize2 size={16} color="var(--gold-light)" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Caption */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '30px auto 0' }}>
          <p className="font-editorial" style={{ fontSize: '1.2rem', color: 'var(--text-ivory)', fontStyle: 'italic' }}>
            &ldquo;{activeItem.caption}&rdquo;
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: '1100px',
              width: '90%',
              maxHeight: '85vh',
              borderRadius: '4px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.9), 0 0 50px var(--gold-glow)',
              border: '1px solid var(--gold-primary)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="btn-icon-circle"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 30,
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.2)'
              }}
            >
              <X size={20} />
            </button>

            <img
              src={activeItem.image}
              alt={activeItem.title}
              style={{
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                backgroundColor: '#04090b',
                display: 'block'
              }}
            />

            <div
              style={{
                padding: '24px 32px',
                background: 'var(--bg-secondary)',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: 'var(--gold-primary)', textTransform: 'uppercase', display: 'block' }}>
                  {activeItem.category}
                </span>
                <h4 className="font-display" style={{ fontSize: '1.4rem', color: '#ffffff', letterSpacing: '0.06em' }}>
                  {activeItem.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {activeItem.caption}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handlePrev} className="btn-icon-circle">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={handleNext} className="btn-icon-circle">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
