import React from "react";

function ChallengeCard({ type, badge, accountSizes, features, popular }) {
    const cardStyle = {
        background: '#141414',
        borderRadius: '1rem',
        padding: '2rem',
        border: popular ? '2px solid transparent' : '1px solid #2a2a2a',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        backgroundImage: popular ? 'linear-gradient(#141414, #141414), linear-gradient(135deg, #00d4ff, #7c3aed)' : 'none',
        backgroundOrigin: popular ? 'border-box' : 'initial',
        backgroundClip: popular ? 'padding-box, border-box' : 'initial'
    };

    return (
        <div style={cardStyle}>
            {popular && (
                <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)' }}>
                    <span style={{ padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: '#00d4ff', color: '#000' }}>
                        MOST POPULAR
                    </span>
                </div>
            )}

            {badge && !popular && (
                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '9999px', marginBottom: '1rem', fontSize: '0.875rem', fontWeight: 600, background: '#7c3aed', color: '#fff' }}>
                    {badge}
                </div>
            )}

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#ffffff' }}>{type}</h3>

            <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: '#737373', margin: '0 0 0.75rem 0' }}>Account Sizes:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {accountSizes.map((size, index) => (
                        <span
                            key={index}
                            style={{ fontSize: '0.75rem', fontWeight: 500, padding: '0.25rem 0.75rem', borderRadius: '9999px', background: '#1a1a1a', color: '#a3a3a3' }}
                        >
                            {size}
                        </span>
                    ))}
                </div>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                {features.map((feature, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <svg style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0, marginTop: '0.125rem', color: '#10b981' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span style={{ fontSize: '0.875rem', color: '#a3a3a3' }}>{feature}</span>
                    </li>
                ))}
            </ul>

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
                    border: popular ? 'none' : '2px solid #3a3a3a',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    background: popular ? '#00d4ff' : 'transparent',
                    color: popular ? '#000' : '#ffffff',
                    boxShadow: popular ? '0 4px 20px rgba(0, 212, 255, 0.4)' : 'none'
                }}
            >
                Choose Plan
            </a>
        </div>
    );
}

export default ChallengeCard;
