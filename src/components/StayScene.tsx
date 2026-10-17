import React, { useState } from 'react';
import { RESORT_ROOMS } from '../data/resortData';
import { Eye, EyeOff, CheckCircle2, ArrowRight } from 'lucide-react';

interface StaySceneProps {
  onOpenSuiteModal: (suiteId: string) => void;
  onSelectSuiteForBooking: (suiteId: string) => void;
}

export const StayScene: React.FC<StaySceneProps> = ({
  onOpenSuiteModal,
  onSelectSuiteForBooking
}) => {
  const [selectedSuiteIndex, setSelectedSuiteIndex] = useState(0);
  const [curtainsOpen, setCurtainsOpen] = useState(true);

  const currentSuite = RESORT_ROOMS[selectedSuiteIndex];

  return (
    <section
      id="scene-stay"
      className="scene-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0'
      }}
    >
      {/* Background Room Image */}
      <img
        src={currentSuite.image}
        alt={currentSuite.name}
        className="scene-bg"
        style={{
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      />

      {/* Interactive Billowing Sheer Curtains Overlay */}
      <div
        className="curtain-left"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 80%, transparent 100%)',
          backdropFilter: curtainsOpen ? 'none' : 'blur(14px)',
          WebkitBackdropFilter: curtainsOpen ? 'none' : 'blur(14px)',
          transform: curtainsOpen ? 'translateX(-85%)' : 'translateX(0)',
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: 'none',
          zIndex: 5
        }}
      />
      <div
        className="curtain-right"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(-90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 80%, transparent 100%)',
          backdropFilter: curtainsOpen ? 'none' : 'blur(14px)',
          WebkitBackdropFilter: curtainsOpen ? 'none' : 'blur(14px)',
          transform: curtainsOpen ? 'translateX(85%)' : 'translateX(0)',
          transition: 'all 1.2s cubic-bezier(0.22, 1, 0.36, 1)',
          pointerEvents: 'none',
          zIndex: 5
        }}
      />

      <div className="scene-overlay-vignette" />
      <div className="scene-overlay-top" />
      <div className="scene-overlay-bottom" />

      {/* Main Suite Showcase Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 60px',
          display: 'flex',
          flexDirection: 'column',
          gap: '30px'
        }}
      >
        {/* Top Header & Curtain Control */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
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
                04 &bull; Sanctuary Accommodations
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
              SUITES &amp; VILLAS
            </h2>
          </div>

          {/* Curtains Toggle & Suite Index */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={() => setCurtainsOpen(!curtainsOpen)}
              className="btn-outline-gold"
              style={{ padding: '8px 18px', fontSize: '0.72rem' }}
              title="Toggle sheer balcony curtains"
            >
              {curtainsOpen ? <EyeOff size={15} /> : <Eye size={15} />}
              <span>Curtains: {curtainsOpen ? 'Open (Ocean View)' : 'Drawn (Privacy)'}</span>
            </button>

            <span className="font-display" style={{ color: 'var(--gold-primary)', fontSize: '1rem', letterSpacing: '0.2em' }}>
              0{selectedSuiteIndex + 1} / 0{RESORT_ROOMS.length}
            </span>
          </div>
        </div>

        {/* Content Card & Room Selector Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '30px',
            alignItems: 'center'
          }}
        >
          {/* Left Details Card */}
          <div
            className="glass-card"
            style={{
              padding: '40px',
              borderLeft: '2px solid var(--gold-primary)',
              background: 'rgba(6, 14, 16, 0.82)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <h3
              className="font-display"
              style={{
                fontSize: '1.8rem',
                color: '#ffffff',
                letterSpacing: '0.08em',
                marginBottom: '10px'
              }}
            >
              {currentSuite.name}
            </h3>

            <p
              className="font-editorial"
              style={{
                fontSize: '1.2rem',
                color: 'var(--gold-light)',
                fontStyle: 'italic',
                marginBottom: '18px'
              }}
            >
              {currentSuite.tagline}
            </p>

            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}
            >
              {currentSuite.description}
            </p>

            {/* Room Features */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '28px',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '4px'
              }}
            >
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Floor Area
                </span>
                <span style={{ fontSize: '0.84rem', color: '#ffffff', fontWeight: 600, display: 'block' }}>
                  {currentSuite.size}
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Occupancy
                </span>
                <span style={{ fontSize: '0.84rem', color: '#ffffff', fontWeight: 600, display: 'block' }}>
                  {currentSuite.guests}
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Bed Type
                </span>
                <span style={{ fontSize: '0.84rem', color: '#ffffff', fontWeight: 600, display: 'block' }}>
                  {currentSuite.bed}
                </span>
              </div>
              <div>
                <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Starting From
                </span>
                <span style={{ fontSize: '0.94rem', color: 'var(--gold-primary)', fontWeight: 700, display: 'block' }}>
                  ${currentSuite.pricePerNight} <small style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>/ night</small>
                </span>
              </div>
            </div>

            {/* Included Amenities List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
              {currentSuite.amenities.slice(0, 3).map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={15} color="var(--gold-primary)" />
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-ivory)' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => onOpenSuiteModal(currentSuite.id)}
                className="btn-gold"
                style={{ flex: 1, minWidth: '160px' }}
              >
                <span>Explore Details</span>
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => onSelectSuiteForBooking(currentSuite.id)}
                className="btn-outline-gold"
                style={{ flex: 1, minWidth: '160px' }}
              >
                <span>Reserve Suite</span>
              </button>
            </div>
          </div>

          {/* Right Suite Selector Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {RESORT_ROOMS.map((room, idx) => (
              <div
                key={room.id}
                onClick={() => setSelectedSuiteIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '16px 20px',
                  borderRadius: '4px',
                  background: selectedSuiteIndex === idx ? 'rgba(203, 168, 124, 0.15)' : 'rgba(12, 24, 27, 0.6)',
                  border: selectedSuiteIndex === idx ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedSuiteIndex !== idx) {
                    e.currentTarget.style.borderColor = 'rgba(203, 168, 124, 0.5)';
                    e.currentTarget.style.transform = 'translateX(6px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedSuiteIndex !== idx) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }
                }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '60px',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}
                >
                  <img src={room.image} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <span
                    className="font-display"
                    style={{
                      fontSize: '0.95rem',
                      color: selectedSuiteIndex === idx ? 'var(--gold-light)' : '#ffffff',
                      display: 'block',
                      marginBottom: '4px'
                    }}
                  >
                    {room.name}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {room.view} &bull; ${room.pricePerNight}/night
                  </span>
                </div>
                <div
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: selectedSuiteIndex === idx ? 'var(--gold-primary)' : 'transparent',
                    border: '1px solid var(--gold-primary)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
