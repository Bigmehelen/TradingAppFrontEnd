'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: 'rgba(20, 20, 20, 0.6)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <nav style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5rem' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href="#"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none'
              }}
            >
              Maven
            </a>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            <a href="#challenges" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}>
              Challenges
            </a>
            <a href="#how-it-works" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}>
              How It Works
            </a>
            <a href="#testimonials" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}>
              Testimonials
            </a>
            <a href="#about" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}>
              About
            </a>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
            <a href="#login" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}>
              Login
            </a>
            <a
              href="#get-started"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '9999px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                border: 'none',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                background: '#00d4ff',
                color: '#000',
                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.4)'
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{ padding: '0.5rem', color: '#ffffff', background: 'none', border: 'none', cursor: 'pointer' }}
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              style={{ width: '1.5rem', height: '1.5rem' }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{ paddingTop: '1rem', paddingBottom: '1rem', borderTop: '1px solid #2a2a2a' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="#challenges"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Challenges
              </a>
              <a
                href="#how-it-works"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#about"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#login"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="#get-started"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2.5rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  borderRadius: '9999px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: 'none',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  background: '#00d4ff',
                  color: '#000',
                  boxShadow: '0 4px 20px rgba(0, 212, 255, 0.4)'
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav,
          .desktop-cta {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
