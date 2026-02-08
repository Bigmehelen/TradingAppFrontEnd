export default function Hero() {
    const gradientTextStyle = {
        background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    return (
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {/* Dark Background with Gradient Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)' }}>
                {/* Animated Glow Effects */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.2 }}>
                    <div style={{ position: 'absolute', top: '25%', left: '25%', width: '24rem', height: '24rem', borderRadius: '9999px', mixBlendMode: 'screen', filter: 'blur(3rem)', background: '#00d4ff', animation: 'float 3s ease-in-out infinite' }}></div>
                    <div style={{ position: 'absolute', top: '33.333%', right: '25%', width: '24rem', height: '24rem', borderRadius: '9999px', mixBlendMode: 'screen', filter: 'blur(3rem)', background: '#7c3aed', animation: 'float 3s ease-in-out infinite', animationDelay: '1s' }}></div>
                    <div style={{ position: 'absolute', bottom: '25%', left: '33.333%', width: '24rem', height: '24rem', borderRadius: '9999px', mixBlendMode: 'screen', filter: 'blur(3rem)', background: '#00d4ff', animation: 'float 3s ease-in-out infinite', animationDelay: '2s' }}></div>
                </div>
            </div>

            {/* Content */}
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 10, paddingTop: '5rem' }}>
                <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
                    {/* Trust Badge */}
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.625rem 1.25rem', borderRadius: '9999px', background: 'rgba(20, 20, 20, 0.4)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', marginBottom: '2rem', animation: 'fadeIn 0.6s ease-out forwards' }}>
                        <span style={{ width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: '#10b981', animation: 'pulse-glow 2s ease-in-out infinite' }}></span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 500, color: '#a3a3a3' }}>
                            Trusted by over 220,000 traders worldwide
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 style={{ marginBottom: '1.5rem', color: '#ffffff', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: '0.1s', opacity: 0 }}>
                        Your Trading Journey <br />
                        <span style={gradientTextStyle}>Begins with Maven</span>
                    </h1>

                    {/* Subheadline */}
                    <p style={{ fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '48rem', margin: '0 auto 3rem auto', color: '#a3a3a3', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: '0.2s', opacity: 0 }}>
                        Start trading in a fully simulated environment and keep 80% of your rewards.
                        Join the community with no hassle, just results.
                    </p>

                    {/* CTA Buttons */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '5rem', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: '0.3s', opacity: 0 }}>
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
                                background: '#00d4ff',
                                color: '#000',
                                boxShadow: '0 4px 20px rgba(0, 212, 255, 0.4)'
                            }}
                        >
                            Get Started
                            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a
                            href="#how-it-works"
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
                                border: '2px solid #3a3a3a',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                                background: 'transparent',
                                color: '#ffffff'
                            }}
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Stats Cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: '0.4s', opacity: 0 }}>
                        <div style={{ background: 'rgba(20, 20, 20, 0.4)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', borderRadius: '1.5rem', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', ...gradientTextStyle }}>$2M+</div>
                            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Paid to Traders</div>
                        </div>
                        <div style={{ background: 'rgba(20, 20, 20, 0.4)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', borderRadius: '1.5rem', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', ...gradientTextStyle }}>220K+</div>
                            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Active Traders</div>
                        </div>
                        <div style={{ background: 'rgba(20, 20, 20, 0.4)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', borderRadius: '1.5rem', padding: '2rem' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem', ...gradientTextStyle }}>10 Days</div>
                            <div style={{ fontSize: '0.875rem', color: '#737373' }}>Payout Frequency</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 1s infinite' }}>
                <svg style={{ width: '1.5rem', height: '1.5rem', opacity: 0.5 }} fill="none" stroke="#ffffff" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>

            <style jsx>{`
        @media (min-width: 640px) {
          div[style*="flexDirection: 'column'"] {
            flex-direction: row !important;
          }
        }
      `}</style>
        </section>
    );
}
