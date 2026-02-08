'use client';
import React from "react";
import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <header className="glass-dark" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <nav style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5rem' }}>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href="#hero"
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, var(--maven-cyan) 0%, var(--maven-purple) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none'
              }}
            >
              Maven
            </a>
          </div>


          <div style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            <a href="#pricing" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>
              Pricing
            </a>
            <a href="#aboutSection" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>
              About Us
            </a>
            <a href="#talkToExperts" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>
              FAQ
            </a>
            <a href="#Contact" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}>
              Contact
            </a>
          </div>


          <div style={{ display: 'none', alignItems: 'center', gap: '1rem' }} className="desktop-cta">
            <a href="#login" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', border: '1px solid var(--maven-text-secondary)', borderRadius: '8px', transition: 'color 0.3s' }}>
              Login
            </a>
            <a
              href="#get-started"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                borderRadius: '8px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.4)'
              }}
              className="btn-primary"
            >
              Get Started
            </a>
          </div>


          <button
            style={{ padding: '0.5rem', color: 'var(--maven-text-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
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


        {mobileMenuOpen && (
          <div style={{ paddingTop: '1rem', paddingBottom: '1rem', borderTop: '1px solid var(--maven-border)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a
                href="#challenges"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Challenges
              </a>
              <a
                href="#how-it-works"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#about"
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', transition: 'color 0.3s' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <a
                  href="#login"
                  style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)', textDecoration: 'none', border: '1px solid var(--maven-text-secondary)', borderRadius: '8px', padding: '0.5rem 1rem', transition: 'color 0.3s' }}
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
                    padding: '0.5rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    border: 'none',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    flex: 1,
                    boxShadow: '0 4px 20px rgba(0, 212, 255, 0.4)'
                  }}
                  className="btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </a>
              </div>
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
    </header >
  );
}
export default Header;