import React from "react";
import ChallengeCard from './ChallengeCard';

function TalkToExperts() {
    const challenges = [
        {
            type: '1-Step Challenge',
            badge: 'FASTEST',
            accountSizes: ['$5K', '$10K', '$25K', '$50K', '$100K', '$200K'],
            features: [
                'Single evaluation phase',
                '8% profit target',
                '5% max daily loss',
                '10% max total loss',
                'Keep 80% of profits',
                'Unlimited trading days',
            ],
        },
        {
            type: '2-Step Challenge',
            popular: true,
            accountSizes: ['$5K', '$10K', '$25K', '$50K', '$100K', '$200K'],
            features: [
                'Two evaluation phases',
                'Phase 1: 8% profit target',
                'Phase 2: 5% profit target',
                '5% max daily loss',
                '10% max total loss',
                'Keep 80% of profits',
            ],
        },
        {
            type: '3-Step Challenge',
            accountSizes: ['$5K', '$10K', '$25K', '$50K', '$100K'],
            features: [
                'Three evaluation phases',
                'Easier profit targets',
                '5% max daily loss',
                '10% max total loss',
                'Keep 80% of profits',
                'More time to prove skills',
            ],
        },
        {
            type: 'Instant Funding',
            badge: 'NO CHALLENGE',
            accountSizes: ['$5K', '$10K', '$25K', '$50K'],
            features: [
                'Skip the evaluation',
                'Start trading immediately',
                '5% max daily loss',
                '10% max total loss',
                'Keep 80% of profits',
                'Perfect for experienced traders',
            ],
        },
    ];

    return (
        <section id="challenges" style={{ padding: '5rem 0', background: 'var(--maven-bg-secondary)' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--maven-text-primary)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Choose Your Challenge
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', color: 'var(--maven-text-secondary)' }}>
                        Choose your account size to begin your trading journey with us. All challenges include access to 400+ trading pairs.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {challenges.map((challenge, index) => (
                        <div key={index} style={{ animation: 'fadeIn 0.6s ease-out forwards', animationDelay: `${index * 0.1}s`, opacity: 0 }}>
                            <ChallengeCard {...challenge} />
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <div className="glass-card" style={{ borderRadius: '1.5rem', padding: '2rem', maxWidth: '48rem', margin: '0 auto' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--maven-text-primary)' }}>
                            Not sure which challenge to choose?
                        </h3>
                        <p style={{ marginBottom: '1.5rem', color: 'var(--maven-text-secondary)', margin: '0 0 1.5rem 0' }}>
                            Our team is here to help you find the perfect challenge based on your trading experience and goals.
                        </p>
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
                                border: '2px solid var(--maven-border)',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                                background: 'transparent',
                                color: 'var(--maven-text-primary)'
                            }}
                            className="btn-secondary"
                        >
                            Talk to an Expert
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TalkToExperts;

