import React from "react";

function FinalCTA() {
    return (
        <section style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden', background: 'var(--maven-bg-secondary)' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '24rem',
                    height: '24rem',
                    borderRadius: '9999px',
                    filter: 'blur(3rem)',
                    background: 'var(--maven-cyan)'
                }}></div>
            </div>

            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '64rem', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1.5rem', color: 'var(--maven-text-primary)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Are You Ready to Start Trading?
                    </h2>
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', color: 'var(--maven-text-secondary)', margin: '0 0 3rem 0' }}>
                        Gain access to elite funding, cutting-edge tools, and the support of a whole community dedicated to your growth.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                        <a
                            href="#challenges"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '1rem 2.5rem',
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                borderRadius: '9999px',
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
                            Choose Your Challenge
                        </a>
                        <a
                            href="#about"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                padding: '1rem 2.5rem',
                                fontSize: '1.125rem',
                                fontWeight: 600,
                                borderRadius: '9999px',
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
                </div>
            </div>
        </section>
    );
}
export default FinalCTA;