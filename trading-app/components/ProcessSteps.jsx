export default function ProcessSteps() {
    const steps = [
        {
            number: '01',
            title: 'Complete a Challenge',
            description: 'Prove your trading powers and complete a challenge or go straight to funded with Instant Funding. Choose any of our 400+ pair options.',
            icon: (
                <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Get Verified',
            description: 'If you\'re on the 2-step challenge, redo it with easier rules so we know the first trial wasn\'t just luck.',
            icon: (
                <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Become a Funded Trader',
            description: 'Congratulations! You\'ve got a simulated funded trading account and you can keep 80% of the profits you make.',
            icon: (
                <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            number: '04',
            title: 'Get Paid',
            description: 'Set your payout preferences and withdraw at any time. Our payout frequency is every 10 business days!',
            icon: (
                <svg style={{ width: '2rem', height: '2rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    const gradientTextStyle = {
        background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
    };

    return (
        <section id="how-it-works" style={{ padding: '5rem 0', background: '#1a1a1a' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Real Trading Experience, Without the Risk
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', color: '#a3a3a3' }}>
                        You're four steps away from harnessing your trading skills. It's simple. Here's how it works:
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            style={{ position: 'relative', animation: 'fadeIn 0.6s ease-out forwards', animationDelay: `${index * 0.1}s`, opacity: 0 }}
                        >
                            {/* Connecting Line (hidden on last item and mobile) */}
                            {index < steps.length - 1 && (
                                <div style={{ display: 'none', position: 'absolute', top: '4rem', left: '100%', width: '100%', height: '2px', transform: 'translateX(-50%)', zIndex: 0, background: 'linear-gradient(to right, #00d4ff, transparent)' }} className="connecting-line"></div>
                            )}

                            {/* Step Card */}
                            <div style={{ position: 'relative', borderRadius: '1.5rem', padding: '1.5rem', border: '1px solid #2a2a2a', transition: 'all 0.3s', height: '100%', background: '#141414' }}>
                                {/* Step Number */}
                                <div style={{ fontSize: '3.75rem', fontWeight: 700, opacity: 0.2, position: 'absolute', top: '1rem', right: '1rem', ...gradientTextStyle }}>
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div style={{ width: '4rem', height: '4rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', position: 'relative', zIndex: 10, background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)', color: '#000' }}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', position: 'relative', zIndex: 10, color: '#ffffff' }}>
                                    {step.title}
                                </h3>
                                <p style={{ fontSize: '0.875rem', position: 'relative', zIndex: 10, color: '#a3a3a3', margin: 0 }}>
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a
                        href="#challenges"
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
                        Start Your Journey
                    </a>
                </div>
            </div>

            <style jsx>{`
        @media (min-width: 1024px) {
          .connecting-line {
            display: block !important;
          }
        }
      `}</style>
        </section>
    );
}
