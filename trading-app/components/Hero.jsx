'use client';
import React from "react";

function Hero() {
    const gradientTextStyle = {
        background: 'linear-gradient(135deg, var(--maven-cyan) 0%, var(--maven-purple) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    return (
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--maven-bg-secondary) 0%, var(--maven-bg-primary) 100%)' }}>

                <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
                    <div style={{ position: 'absolute', top: '25%', left: '25%', width: '24rem', height: '24rem', borderRadius: '9999px', mixBlendMode: 'multiply', filter: 'blur(3rem)', background: 'var(--maven-cyan)', animation: 'float 3s ease-in-out infinite', opacity: 0.1 }}></div>
                    <div style={{ position: 'absolute', top: '33.333%', right: '25%', width: '24rem', height: '24rem', borderRadius: '9999px', mixBlendMode: 'multiply', filter: 'blur(3rem)', background: 'var(--maven-purple)', animation: 'float 3s ease-in-out infinite', animationDelay: '1s', opacity: 0.1 }}></div>
                    <div style={{ position: 'absolute', bottom: '25%', left: '33.333%', width: '24rem', height: '24rem', borderRadius: '9999px', mixBlendMode: 'multiply', filter: 'blur(3rem)', background: 'var(--maven-cyan)', animation: 'float 3s ease-in-out infinite', animationDelay: '2s', opacity: 0.1 }}></div>
                </div>
            </div>

            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10, paddingTop: '5rem' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>

                    <div className="glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', borderRadius: '9999px', marginBottom: '2rem', animation: 'fadeIn 0.6s ease-out forwards' }}>
                        <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: 'var(--maven-success)', animation: 'pulse-glow 2s ease-in-out infinite' }}></span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--maven-text-secondary)' }}>
                            Trusted by over 220,000 traders worldwide
                        </span>
                    </div>


                    <h1 style={{ marginBottom: '1.5rem', color: 'var(--maven-text-primary)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: '0.1s', opacity: 0 }}>
                        Your Trading Journey <br />
                        <span style={gradientTextStyle}> Begins with CoolPay </span>
                    </h1>


                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '48rem', margin: '0 auto 3rem auto', color: 'var(--maven-text-secondary)', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: '0.2s', opacity: 0 }}>
                        Start trading in a fully simulated environment and keep 80% of your rewards.
                        Join the community with no hassle, just results.
                    </p>


                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '5rem', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: '0.3s', opacity: 0 }}>
                        <a
                            href="/auth/register"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1.5rem',
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                borderRadius: '8px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                border: 'none',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                                whiteSpace: 'nowrap',
                                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3)'
                            }}
                            className="btn-primary"
                        >
                            Get Started
                            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="#aboutsection"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '0.5rem 1.5rem',
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                border: '2px solid var(--maven-border)',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                                background: 'transparent',
                                color: 'var(--maven-text-primary)'
                            }}
                            className="btn-secondary"
                        >
                            Learn More
                        </a>
                    </div>


                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: '0.4s', opacity: 0 }}>
                        <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', ...gradientTextStyle }}>$2M+</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--maven-text-secondary)' }}>Paid to Traders</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', ...gradientTextStyle }}>220K+</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--maven-text-secondary)' }}>Active Traders</div>
                        </div>
                        <div className="glass-card" style={{ padding: '2rem', borderRadius: '1.5rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', ...gradientTextStyle }}>10 Days</div>
                            <div style={{ fontSize: '0.875rem', color: 'var(--maven-text-secondary)' }}>Payout Frequency</div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 1s infinite' }}>
                <svg style={{ width: '1.5rem', height: '1.5rem', opacity: 0.5 }} fill="none" stroke="var(--maven-text-primary)" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

        </section>
    );
}
export default Hero;
