import React, { useState } from 'react';
import { RESORT_EXPERIENCES } from '../data/resortData';
import { Clock, Compass, CheckCircle } from 'lucide-react';

export const ExperiencesScene: React.FC = () => {
  const [activeExpIdx, setActiveExpIdx] = useState(0);

  const currentExp = RESORT_EXPERIENCES[activeExpIdx];

  return (
    <section
      id="scene-experiences"
      className="scene-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        padding: '90px 0'
      }}
    >
      {/* Background Image of the active experience */}
      <img
        src={currentExp.image}
        alt={currentExp.title}
        className="scene-bg"
        style={{
          transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      />

      <div className="scene-overlay-vignette" />
      <div className="scene-overlay-top" />
      <div className="scene-overlay-bottom" />

      {/* Main Container */}
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
          gap: '36px'
        }}
      >
        {/* Header */}
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
              05 &bull; Leisure &amp; Renewal
            </span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '0.06em',
              marginBottom: '10px'
            }}
          >
            EXPERIENCES
          </h2>

          <p
            className="font-editorial"
            style={{
              fontSize: '1.25rem',
              color: 'var(--gold-light)',
              fontStyle: 'italic'
            }}
          >
            Unforgettable moments in extraordinary coastal sanctuaries.
          </p>
        </div>

        {/* Content Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '30px',
            alignItems: 'flex-start'
          }}
        >
          {/* Active Experience Card */}
          <div
            className="glass-card"
            style={{
              padding: '42px',
              borderLeft: '2px solid var(--gold-primary)',
              background: 'rgba(6, 14, 16, 0.84)',
              backdropFilter: 'blur(22px)'
            }}
          >
            <span
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                fontWeight: 700,
                display: 'block',
                marginBottom: '10px'
              }}
            >
              {currentExp.category}
            </span>

            <h3
              className="font-display"
              style={{
                fontSize: '1.9rem',
                color: '#ffffff',
                letterSpacing: '0.06em',
                marginBottom: '12px'
              }}
            >
              {currentExp.title}
            </h3>

            <p
              className="font-editorial"
              style={{
                fontSize: '1.18rem',
                color: 'var(--gold-light)',
                fontStyle: 'italic',
                marginBottom: '18px'
              }}
            >
              &ldquo;{currentExp.tagline}&rdquo;
            </p>

            <p
              style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '28px'
              }}
            >
              {currentExp.description}
            </p>

            {/* Highlights Grid */}
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
              {currentExp.highlights.map((h) => (
                <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle size={14} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-ivory)' }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Schedule & Inquiries */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} color="var(--gold-primary)" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{currentExp.timing}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Compass size={16} color="var(--gold-primary)" />
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Included in Residence</span>
              </div>
            </div>
          </div>

          {/* Interactive Experience Selector Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {RESORT_EXPERIENCES.map((exp, idx) => (
              <div
                key={exp.id}
                onClick={() => setActiveExpIdx(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '16px 22px',
                  borderRadius: '4px',
                  background: activeExpIdx === idx ? 'rgba(203, 168, 124, 0.16)' : 'rgba(12, 24, 27, 0.65)',
                  border: activeExpIdx === idx ? '1px solid var(--gold-primary)' : '1px solid rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (activeExpIdx !== idx) {
                    e.currentTarget.style.borderColor = 'rgba(203, 168, 124, 0.4)';
                    e.currentTarget.style.transform = 'translateX(6px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeExpIdx !== idx) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }
                }}
              >
                <div
                  style={{
                    width: '75px',
                    height: '55px',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    flexShrink: 0
                  }}
                >
                  <img src={exp.image} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: 1 }}>
                  <span
                    className="font-display"
                    style={{
                      fontSize: '0.92rem',
                      color: activeExpIdx === idx ? 'var(--gold-light)' : '#ffffff',
                      display: 'block',
                      marginBottom: '3px'
                    }}
                  >
                    {exp.title}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    {exp.category}
                  </span>
                </div>

                <span className="font-display" style={{ fontSize: '0.8rem', color: activeExpIdx === idx ? 'var(--gold-primary)' : 'rgba(255,255,255,0.3)' }}>
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
