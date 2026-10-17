import React from 'react';
import { X, Sparkles, MapPin } from 'lucide-react';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookNow: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onBookNow }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '840px', padding: 0, overflow: 'hidden' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon-circle"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 30,
            background: 'rgba(0,0,0,0.6)'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Video Reel / Cinematic Cover */}
        <div style={{ position: 'relative', width: '100%', height: '360px', overflow: 'hidden' }}>
          <img
            src="/images/hero_aerial.jpg"
            alt="The Aurora Sanctuary Story"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--bg-secondary) 0%, rgba(6, 14, 16, 0.4) 60%, rgba(6, 14, 16, 0.8) 100%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '40px',
              right: '40px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Sparkles size={16} color="var(--gold-primary)" />
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.22em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 700 }}>
                A Cinematic Chronicle
              </span>
            </div>
            <h3
              className="font-display"
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                color: '#ffffff',
                letterSpacing: '0.06em'
              }}
            >
              WHERE NATURE MEETS LUXURY
            </h3>
          </div>
        </div>

        {/* Story Text Content */}
        <div style={{ padding: '36px 40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px', color: 'var(--text-muted)', fontSize: '0.84rem' }}>
            <MapPin size={16} color="var(--gold-primary)" />
            <span>Paradise Cove, Goa &bull; Conceived in 2021 by Studio Vayu Architecture</span>
          </div>

          <p
            className="font-editorial"
            style={{
              fontSize: '1.25rem',
              color: 'var(--gold-light)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              marginBottom: '20px'
            }}
          >
            &ldquo;We did not build on the cliff; we wove architecture into the cliffside so that the
            waves and stars remain the true protagonists of your journey.&rdquo;
          </p>

          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px' }}>
            The Aurora was born from a vision of radical serenity. By respecting the natural volcanic
            contour of the coastline, every pavilion, terrace, and infinity bath has been oriented to capture
            the solar trajectory and ocean trade winds. We invite you to slow down, breathe the sea salt, and
            rediscover the quiet luxury of time.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
                Principal Architect
              </span>
              <span className="font-display" style={{ fontSize: '0.95rem', color: '#ffffff' }}>
                Aarav Mehta &bull; Studio Vayu
              </span>
            </div>

            <div style={{ display: 'flex', gap: '14px' }}>
              <button onClick={onClose} className="btn-outline-gold" style={{ padding: '10px 22px' }}>
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBookNow();
                }}
                className="btn-gold"
                style={{ padding: '10px 24px' }}
              >
                Reserve Your Stay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
