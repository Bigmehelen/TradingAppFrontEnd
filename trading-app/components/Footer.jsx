'use client';
import React from "react";

function Footer() {
    const gradientTextStyle = {
        background: 'linear-gradient(135deg, var(--maven-cyan) 0%, var(--maven-purple) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    return (
        <footer style={{ background: 'var(--maven-bg-primary)', borderTop: '1px solid var(--maven-border)', color: 'var(--maven-text-secondary)' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', ...gradientTextStyle }}>
                            CoolPay
                        </h3>
                        <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem', color: 'var(--maven-text-secondary)', margin: '0 0 1.5rem 0' }}>
                            Your trusted partner in prop trading. Start your journey to becoming a funded trader today.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a
                                href="#"
                                style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'colors 0.3s', background: 'var(--maven-bg-secondary)', textDecoration: 'none' }}
                                aria-label="Discord"
                            >
                                <svg style={{ width: '1.25rem', height: '1.25rem', color: 'var(--maven-text-muted)' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'colors 0.3s', background: 'var(--maven-bg-secondary)', textDecoration: 'none' }}
                                aria-label="Twitter"
                            >
                                <svg style={{ width: '1.25rem', height: '1.25rem', color: 'var(--maven-text-muted)' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                style={{ width: '2.5rem', height: '2.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'colors 0.3s', background: 'var(--maven-bg-secondary)', textDecoration: 'none' }}
                                aria-label="LinkedIn"
                            >
                                <svg style={{ width: '1.25rem', height: '1.25rem', color: 'var(--maven-text-muted)' }} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>


                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--maven-text-primary)' }}>Quick Links</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li>
                                <a href="#contact" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#challenges" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#aboutsection" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--maven-text-primary)' }}>Resources</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li>
                                <a href="#" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Trading Rules
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Community
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ fontWeight: 600, marginBottom: '1rem', color: 'var(--maven-text-primary)' }}>Legal</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyle: 'none', padding: 0, margin: 0 }}>
                            <li>
                                <a href="#" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" style={{ fontSize: '0.875rem', transition: 'color 0.3s', textDecoration: 'none', color: 'var(--maven-text-secondary)' }}>
                                    Risk Disclosure
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--maven-border)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                        <p style={{ fontSize: '0.875rem', color: 'var(--maven-text-muted)', margin: 0 }}>
                            © {new Date().getFullYear()} CoolPay. All rights reserved.
                        </p>
                        <p style={{ fontSize: '0.75rem', maxWidth: '42rem', textAlign: 'center', color: 'var(--maven-text-muted)', margin: 0 }}>
                            Trade smarter, Learn deeper, Grow consistently. <br />
                             Practice risk-free, Learn with purpose.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 768px) {
          div[style*="flexDirection: 'column'"] {
            flex-direction: row !important;
          }
          p[style*="textAlign: 'center'"] {
            text-align: right !important;
          }
        }
      `}</style>
        </footer>
    );
}
export default Footer;