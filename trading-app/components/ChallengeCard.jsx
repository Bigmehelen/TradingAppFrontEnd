import React from "react";

function ChallengeCard({ type, badge, accountSizes, features, popular }) {
    const cardStyle = {
        background: 'var(--maven-bg-card)',
        borderRadius: '1rem',
        padding: '2rem',
        border: popular ? '2px solid transparent' : '1px solid var(--maven-border)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        backgroundImage: popular ? 'linear-gradient(var(--maven-bg-card), var(--maven-bg-card)), linear-gradient(135deg, var(--maven-cyan), var(--maven-purple))' : 'none',
        backgroundOrigin: popular ? 'border-box' : 'initial',
        backgroundClip: popular ? 'padding-box, border-box' : 'initial',
        boxShadow: popular ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none'
    };

    return (
        <div style={cardStyle}>
            {popular && (
                <div style={{ position: 'absolute', top: '-1rem', left: '50%', transform: 'translateX(-50%)' }}>
                    <span style={{ padding: '0.25rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, background: 'var(--maven-cyan)', color: '#ffffff' }}>
                        MOST POPULAR
                    </span>
                </div>
            )}

            {badge && !popular && (
                <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '9999px', marginBottom: '1rem', fontSize: '0.875rem', fontWeight: 600, background: 'var(--maven-purple)', color: '#ffffff' }}>
                    {badge}
                </div>
            )}

            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--maven-text-primary)' }}>{type}</h3>

            <div style={{ marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: 'var(--maven-text-muted)', margin: '0 0 0.75rem 0' }}>Account Sizes:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {accountSizes.map((size, index) => (
                        <span
                            key={index}
                            style={{ fontSize: '0.75rem', fontWeight: 500, padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'var(--maven-bg-secondary)', color: 'var(--maven-text-secondary)' }}
                        >
                            {size}
                        </span>
                    ))}
                </div>
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                {features.map((feature, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <svg style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0, marginTop: '0.125rem', color: 'var(--maven-success)' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span style={{ fontSize: '0.875rem', color: 'var(--maven-text-secondary)' }}>{feature}</span>
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
                    border: popular ? 'none' : '2px solid var(--maven-border)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    boxShadow: popular ? '0 4px 20px rgba(0, 212, 255, 0.3)' : 'none'
                }}
                className={popular ? "btn-primary" : "btn-secondary"}
            >
                Choose Plan
            </a>
        </div>
    );
}

export default ChallengeCard;
