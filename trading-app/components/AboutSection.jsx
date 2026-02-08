export default function AboutSection() {
    return (
        <section id="about" style={{ padding: '5rem 0', background: '#1a1a1a' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ marginBottom: '1.5rem', color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                            A Little About Us
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: '#a3a3a3' }}>
                            <p style={{ margin: 0 }}>
                                Our team is dedicated to driving innovation and becoming the leading prop firm in the trading community.
                            </p>
                            <p style={{ margin: 0 }}>
                                At Maven, our mission is to empower traders by providing them with the resources they need to succeed.
                            </p>
                            <p style={{ margin: 0 }}>
                                We prioritize transparency and risk management, ensuring a supportive environment for long-term growth.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <a
                            href="#"
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
                                border: '2px solid #3a3a3a',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                                background: 'transparent',
                                color: '#ffffff'
                            }}
                        >
                            Learn More About Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
