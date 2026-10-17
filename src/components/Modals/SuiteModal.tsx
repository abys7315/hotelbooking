import React from 'react';
import { RESORT_ROOMS } from '../../data/resortData';
import { X, CheckCircle2, Bed, Maximize, Users, Compass } from 'lucide-react';

interface SuiteModalProps {
  suiteId: string | null;
  onClose: () => void;
  onSelectForBooking: (suiteId: string) => void;
}

export const SuiteModal: React.FC<SuiteModalProps> = ({ suiteId, onClose, onSelectForBooking }) => {
  if (!suiteId) return null;

  const room = RESORT_ROOMS.find((r) => r.id === suiteId) || RESORT_ROOMS[0];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '880px', padding: 0, overflow: 'hidden' }}
      >
        <button
          onClick={onClose}
          className="btn-icon-circle"
          style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 30, background: 'rgba(0,0,0,0.6)' }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Gallery Preview Images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', height: '280px' }}>
          <img src={room.image} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <img src={room.balconyImage} alt={`${room.name} Balcony`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Details Content */}
        <div style={{ padding: '36px 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <span style={{ fontSize: '0.72rem', letterSpacing: '0.22em', color: 'var(--gold-primary)', textTransform: 'uppercase', fontWeight: 700 }}>
                Residence &bull; Sanctuary Collection
              </span>
              <h3 className="font-display" style={{ fontSize: '2.1rem', color: '#ffffff', letterSpacing: '0.06em', marginTop: '4px' }}>
                {room.name}
              </h3>
              <p className="font-editorial" style={{ fontSize: '1.18rem', color: 'var(--gold-light)', fontStyle: 'italic', marginTop: '4px' }}>
                {room.tagline}
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span className="font-display" style={{ fontSize: '1.8rem', color: 'var(--gold-primary)', fontWeight: 700 }}>
                ${room.pricePerNight}
              </span>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'block' }}>
                USD per night + taxes
              </span>
            </div>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '28px' }}>
            {room.description}
          </p>

          {/* Key Specs */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              padding: '20px',
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '4px',
              marginBottom: '28px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Maximize size={18} color="var(--gold-primary)" />
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Dimensions</span>
                <span style={{ fontSize: '0.84rem', color: '#fff', fontWeight: 600, display: 'block' }}>{room.size}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Users size={18} color="var(--gold-primary)" />
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Capacity</span>
                <span style={{ fontSize: '0.84rem', color: '#fff', fontWeight: 600, display: 'block' }}>{room.guests}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Bed size={18} color="var(--gold-primary)" />
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bedding</span>
                <span style={{ fontSize: '0.84rem', color: '#fff', fontWeight: 600, display: 'block' }}>{room.bed}</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Compass size={18} color="var(--gold-primary)" />
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Orientation</span>
                <span style={{ fontSize: '0.84rem', color: '#fff', fontWeight: 600, display: 'block' }}>{room.view}</span>
              </div>
            </div>
          </div>

          {/* Full Amenities */}
          <h4 className="font-display" style={{ fontSize: '0.85rem', color: 'var(--gold-primary)', letterSpacing: '0.15em', marginBottom: '14px' }}>
            INCLUDED RESIDENCE PRIVILEGES
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px', marginBottom: '32px' }}>
            {room.amenities.map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={15} color="var(--gold-primary)" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-ivory)' }}>{item}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px' }}>
            <button onClick={onClose} className="btn-outline-gold" style={{ padding: '10px 22px' }}>
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForBooking(room.id);
              }}
              className="btn-gold"
              style={{ padding: '10px 28px' }}
            >
              Select &amp; Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
