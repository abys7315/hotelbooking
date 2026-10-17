import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import type { BookingState } from '../../types/resort';
import { RESORT_ROOMS } from '../../data/resortData';
import { X, Sparkles } from 'lucide-react';

interface BookingModalProps {
  booking: BookingState | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ booking, onClose }) => {
  useEffect(() => {
    if (booking) {
      // Trigger subtle luxury gold confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#cba87c', '#e6cead', '#ffffff', '#23555c']
        });
      } catch {
        // ignore if not supported
      }
    }
  }, [booking]);

  if (!booking) return null;

  const room = RESORT_ROOMS.find((r) => r.id === booking.suiteId) || RESORT_ROOMS[0];
  const nights = Math.max(
    1,
    Math.round(
      (new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    ) || 1
  );
  const total = nights * room.pricePerNight;
  const referenceCode = 'AUR-' + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '640px', padding: '44px 40px', textAlign: 'center' }}
      >
        <button
          onClick={onClose}
          className="btn-icon-circle"
          style={{ position: 'absolute', top: '20px', right: '20px' }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Success Icon */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(203, 168, 124, 0.15)',
            border: '1px solid var(--gold-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            color: 'var(--gold-primary)'
          }}
        >
          <Sparkles size={32} />
        </div>

        <span
          style={{
            fontSize: '0.74rem',
            letterSpacing: '0.24em',
            color: 'var(--gold-primary)',
            textTransform: 'uppercase',
            fontWeight: 700,
            display: 'block',
            marginBottom: '6px'
          }}
        >
          Reservation Inquiry Registered (Demo)
        </span>

        <h3
          className="font-display"
          style={{
            fontSize: '2rem',
            color: '#ffffff',
            letterSpacing: '0.06em',
            marginBottom: '10px'
          }}
        >
          SANCTUARY AWAITS
        </h3>

        <p
          className="font-editorial"
          style={{
            fontSize: '1.2rem',
            color: 'var(--gold-light)',
            fontStyle: 'italic',
            marginBottom: '26px'
          }}
        >
          Reference Code: <strong style={{ color: '#ffffff' }}>{referenceCode}</strong>
        </p>

        {/* Reservation Breakdown Card */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '4px',
            padding: '22px',
            textAlign: 'left',
            marginBottom: '26px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Suite Selected</span>
            <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>{room.name}</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Stay Dates</span>
            <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
              {booking.checkIn} to {booking.checkOut} ({nights} {nights === 1 ? 'night' : 'nights'})
            </span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Guests</span>
            <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>{booking.guests} Guests</span>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--gold-primary)', fontWeight: 600 }}>Estimated Total</span>
            <span className="font-display" style={{ fontSize: '1.1rem', color: 'var(--gold-light)', fontWeight: 700 }}>
              ${total.toLocaleString()} USD
            </span>
          </div>
        </div>

        {/* Demo Disclaimer required by master prompt */}
        <div
          style={{
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '28px',
            background: 'rgba(35, 85, 92, 0.15)',
            padding: '12px 16px',
            borderRadius: '3px',
            border: '1px solid rgba(35, 85, 92, 0.3)'
          }}
        >
          <em>
            Note: This is a front-end demonstration inquiry. No credit card was charged, and your
            preferences have been staged for the Concierge management team.
          </em>
        </div>

        <button onClick={onClose} className="btn-gold" style={{ width: '100%', padding: '14px' }}>
          Return to Sanctuary
        </button>
      </div>
    </div>
  );
};
