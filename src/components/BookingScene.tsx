import React, { useState } from 'react';
import { RESORT_ROOMS } from '../data/resortData';
import type { BookingState } from '../types/resort';
import { Calendar, Users, Home, MapPin, Phone, Mail, Globe, Compass, Share2, Sparkles, Send } from 'lucide-react';

interface BookingSceneProps {
  initialSuiteId?: string;
  onSubmitBooking: (booking: BookingState) => void;
}

export const BookingScene: React.FC<BookingSceneProps> = ({
  initialSuiteId = 'ocean-suite',
  onSubmitBooking
}) => {
  // Tomorrow's date for check-in, +3 days for check-out default
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const checkoutDefault = new Date(today);
  checkoutDefault.setDate(checkoutDefault.getDate() + 4);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(checkoutDefault));
  const [guests, setGuests] = useState(2);
  const [suiteId, setSuiteId] = useState(initialSuiteId);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const selectedRoom = RESORT_ROOMS.find((r) => r.id === suiteId) || RESORT_ROOMS[0];

  // Calculate nights
  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
    ) || 1
  );

  const estimatedTotal = nights * selectedRoom.pricePerNight;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitBooking({
      checkIn,
      checkOut,
      guests,
      suiteId
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  return (
    <section
      id="scene-booking"
      className="scene-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#050c0e',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: '100px',
        overflow: 'hidden'
      }}
    >
      {/* Cinematic Sunset Background Image */}
      <img
        src="/images/booking_sunset.jpg"
        alt="The Aurora Resort Dramatic Sunset Horizon"
        className="scene-bg"
        style={{
          height: '70%',
          opacity: 0.85
        }}
      />

      <div className="scene-overlay-vignette" />
      <div className="scene-overlay-bottom" style={{ height: '70%' }} />

      {/* Booking Form Area */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 40px',
          textAlign: 'center'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.74rem',
            letterSpacing: '0.24em',
            color: 'var(--gold-primary)',
            fontWeight: 700,
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px'
          }}
        >
          08 &bull; Reservations
        </span>

        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '0.08em',
            marginBottom: '12px'
          }}
        >
          YOUR NEXT ESCAPE BEGINS HERE
        </h2>

        <p
          className="font-editorial"
          style={{
            fontSize: '1.3rem',
            color: 'var(--gold-light)',
            fontStyle: 'italic',
            marginBottom: '46px'
          }}
        >
          Immerse yourself in serenity. Let our dedicated concierges prepare your sanctuary.
        </p>

        {/* The Luxury Booking Bar */}
        <form
          onSubmit={handleSubmit}
          className="glass-card"
          style={{
            padding: '28px 36px',
            background: 'rgba(7, 16, 18, 0.88)',
            backdropFilter: 'blur(24px)',
            border: '1px solid var(--gold-border)',
            borderRadius: '4px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            alignItems: 'center',
            textAlign: 'left',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 35px var(--gold-glow)'
          }}
        >
          {/* Check-In */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              <Calendar size={14} />
              Check-In Date
            </label>
            <input
              type="date"
              value={checkIn}
              min={formatDate(today)}
              onChange={(e) => setCheckIn(e.target.value)}
              required
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '10px 14px',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none'
              }}
            />
          </div>

          {/* Check-Out */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              <Calendar size={14} />
              Check-Out Date
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              required
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '10px 14px',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none'
              }}
            />
          </div>

          {/* Guests */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              <Users size={14} />
              Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '10px 14px',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value={1} style={{ background: '#0a1719', color: '#fff' }}>1 Guest</option>
              <option value={2} style={{ background: '#0a1719', color: '#fff' }}>2 Guests</option>
              <option value={3} style={{ background: '#0a1719', color: '#fff' }}>3 Guests</option>
              <option value={4} style={{ background: '#0a1719', color: '#fff' }}>4 Guests</option>
              <option value={6} style={{ background: '#0a1719', color: '#fff' }}>6 Guests (Penthouse)</option>
            </select>
          </div>

          {/* Suite Selection */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                color: 'var(--gold-primary)',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              <Home size={14} />
              Suite Tier
            </label>
            <select
              value={suiteId}
              onChange={(e) => setSuiteId(e.target.value)}
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                padding: '10px 14px',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-sans)',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {RESORT_ROOMS.map((r) => (
                <option key={r.id} value={r.id} style={{ background: '#0a1719', color: '#fff' }}>
                  {r.name} (${r.pricePerNight}/nt)
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button & Price Preview */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <button
              type="submit"
              className="btn-gold"
              style={{ height: '44px', width: '100%' }}
            >
              <Sparkles size={15} />
              <span>Book Your Stay</span>
            </button>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              Est. ${estimatedTotal.toLocaleString()} for {nights} {nights === 1 ? 'night' : 'nights'}
            </span>
          </div>
        </form>
      </div>

      {/* Luxury Footer & Resort Coordinates */}
      <footer
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          background: 'rgba(5, 11, 13, 0.96)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '70px 60px 40px',
          marginTop: '90px'
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Brand Info */}
          <div>
            <span className="font-display" style={{ fontSize: '1.3rem', letterSpacing: '0.2em', color: '#ffffff', display: 'block', marginBottom: '4px' }}>
              THE AURORA
            </span>
            <span style={{ fontSize: '0.66rem', letterSpacing: '0.3em', color: 'var(--gold-primary)', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              RESORT &amp; SPA &bull; GOA
            </span>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '320px' }}>
              Perched above the sapphire waters of Paradise Cove. A peaceful sanctuary dedicated to
              architectural purity, mindful hospitality, and timeless coastal beauty.
            </p>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="font-display" style={{ fontSize: '0.9rem', color: 'var(--gold-primary)', letterSpacing: '0.15em', marginBottom: '18px' }}>
              Location &amp; Concierge
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={17} color="var(--gold-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Paradise Cove, Cliffside Bluff, Goa 403515, India<br />15.5491&deg; N, 73.7535&deg; E</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={17} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <span>+91 (832) 800-AURORA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={17} color="var(--gold-primary)" style={{ flexShrink: 0 }} />
                <span>concierge@theauroraresort.com</span>
              </div>
            </div>
          </div>

          {/* Map Preview & Coordinates */}
          <div>
            <h4 className="font-display" style={{ fontSize: '0.9rem', color: 'var(--gold-primary)', letterSpacing: '0.15em', marginBottom: '18px' }}>
              Sanctuary Map
            </h4>
            <div
              style={{
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                position: 'relative',
                height: '130px'
              }}
            >
              <img
                src="/images/location_map.jpg"
                alt="The Aurora Resort Location Map"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(5, 12, 14, 0.45)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <MapPin size={22} color="var(--gold-light)" />
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: '#ffffff', textTransform: 'uppercase', fontWeight: 600 }}>
                  Paradise Cove, Goa
                </span>
              </div>
            </div>
          </div>

          {/* Gazette Newsletter */}
          <div>
            <h4 className="font-display" style={{ fontSize: '0.9rem', color: 'var(--gold-primary)', letterSpacing: '0.15em', marginBottom: '18px' }}>
              The Aurora Gazette
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              Receive seasonal invites, private villa openings, and curated gastronomy chronicles.
            </p>
            <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  padding: '10px 14px',
                  borderRadius: '3px',
                  fontSize: '0.82rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn-icon-circle" style={{ width: '40px', height: '40px' }} aria-label="Subscribe to newsletter">
                <Send size={15} />
              </button>
            </form>
            {newsletterSubscribed && (
              <span style={{ fontSize: '0.75rem', color: 'var(--gold-light)', display: 'block', marginTop: '8px' }}>
                Thank you. You have been added to our private ledger.
              </span>
            )}
          </div>
        </div>

        {/* Bottom Rights & Socials */}
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.74rem',
            color: 'var(--text-faint)'
          }}
        >
          <span>&copy; {new Date().getFullYear()} The Aurora Resort &amp; Spa. All rights reserved. Built with pride.</span>

          <div style={{ display: 'flex', gap: '18px' }}>
            <a href="#scene-hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#scene-hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Terms of Stay</a>
            <a href="#scene-hero" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Sustainability</a>
          </div>

          <div style={{ display: 'flex', gap: '14px' }}>
            <span style={{ cursor: 'pointer', color: 'var(--text-muted)' }} title="Global Concierge"><Globe size={17} /></span>
            <span style={{ cursor: 'pointer', color: 'var(--text-muted)' }} title="Sanctuary Journal"><Compass size={17} /></span>
            <span style={{ cursor: 'pointer', color: 'var(--text-muted)' }} title="Share Destination"><Share2 size={17} /></span>
          </div>
        </div>
      </footer>
    </section>
  );
};
