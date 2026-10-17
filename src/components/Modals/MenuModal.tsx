import React from 'react';
import { TASTING_MENU } from '../../data/resortData';
import { X, Wine, Award } from 'lucide-react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDining: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, onBookDining }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '800px', padding: '40px' }}
      >
        <button
          onClick={onClose}
          className="btn-icon-circle"
          style={{ position: 'absolute', top: '24px', right: '24px', zIndex: 30 }}
          aria-label="Close menu"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.24em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 700 }}>
            Restaurant L&apos;Azur &bull; Haute Gastronomy
          </span>
          <h3 className="font-display" style={{ fontSize: '2.2rem', color: '#ffffff', letterSpacing: '0.08em', marginTop: '6px' }}>
            SEVEN-COURSE COASTAL DEGUSTATION
          </h3>
          <p className="font-editorial" style={{ fontSize: '1.15rem', color: 'var(--gold-light)', fontStyle: 'italic', marginTop: '6px' }}>
            Curated daily by Executive Chef Julian Mercier
          </p>
        </div>

        {/* Menu Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', marginBottom: '36px' }}>
          {TASTING_MENU.map((item, idx) => (
            <div
              key={item.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                paddingBottom: '20px',
                borderBottom: idx === TASTING_MENU.length - 1 ? 'none' : '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="font-display" style={{ fontSize: '1.05rem', color: '#ffffff', letterSpacing: '0.04em' }}>
                    {item.name}
                  </span>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      color: 'var(--gold-primary)',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      background: 'rgba(203, 168, 124, 0.1)',
                      border: '1px solid rgba(203, 168, 124, 0.25)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.tag}
                  </span>
                </div>
                <span className="font-display" style={{ fontSize: '1.1rem', color: 'var(--gold-light)', fontWeight: 600 }}>
                  {item.price}
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sommelier Pairing Note */}
        <div
          style={{
            padding: '18px 24px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <Wine size={26} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 600, display: 'block' }}>
              Sommelier Grand Cru Reserve Pairing
            </span>
            <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
              Optional 7-glass vintage wine pairing curated from French, Italian, and boutique Indian biodynamic vineyards &bull; $160 per guest
            </span>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Award size={16} color="var(--gold-primary)" />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Dietary requests accommodated with 24h notice
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={onClose} className="btn-outline-gold" style={{ padding: '10px 20px' }}>
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onBookDining();
              }}
              className="btn-gold"
              style={{ padding: '10px 24px' }}
            >
              Reserve Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
