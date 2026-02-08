'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <nav className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold gradient-text">
              TradePro
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#challenges" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              Challenges
            </a>
            <a href="#how-it-works" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
              Login
            </a>
            <a href="#get-started" className="btn btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-4">
              <a
                href="#challenges"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Challenges
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#login"
                className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="#get-started"
                className="btn btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
