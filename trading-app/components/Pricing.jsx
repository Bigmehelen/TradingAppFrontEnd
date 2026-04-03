"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function Pricing() {
    const router = useRouter();
    const [showAuthModal, setShowAuthModal] = useState(false);

    const sizes = ["$5", "$20", "$50", "$100", "$5k", "up to ", "$100k"];

    const handleTalkToAgent = async () => {
        const token = localStorage.getItem("authToken");
        if (token) {
            router.push('/talk-to-agent');
        } else {
            setShowAuthModal(true);
        }
    };

    return (
        <>
        <section id="testimonials" style={{ padding: '5rem 0', background: 'var(--maven-bg-secondary)' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--maven-text-primary)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Empower your trading with <br /> <span style={{ color: 'var(--maven-cyan)' }}> CoolPay </span>
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', color: 'var(--maven-text-secondary)' }}>
                        We have the industry's best pricing. Choose your <br />funded account and begin your trading journey.
                    </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '7rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--maven-text-primary)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Choose your challenge
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', color: 'var(--maven-text-secondary)' }}>
                        You can trade as much as you want, we have no time limits.
                    </p>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <p style={{ fontSize: '0.8rem', maxWidth: '42rem', margin: '0 auto', marginBottom: '0.75rem', marginTop: '1rem',
                        color: 'var(--maven-text-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>
                        Our price ranges from as low as
                    </p>

                    <div className="flex flex-wrap justify-center gap-3">
                        {sizes.map((size) => (
                            <span
                                key={size}
                                style={{
                                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                                    padding: '0.4rem 1.25rem', borderRadius: '9999px',
                                    fontSize: '0.9rem', fontWeight: 700,
                                    background: 'var(--maven-bg-secondary)',
                                    color: 'var(--maven-cyan)',
                                    border: '1.5px solid var(--maven-cyan)',
                                    letterSpacing: '0.02em',
                                    boxShadow: '0 0 10px rgba(0,212,255,0.08)'
                                }}
                            >
                                {size}
                            </span>
                        ))}
                    </div>


                    <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                        <div className="glass-card" style={{ padding: '2.5rem', borderRadius: '1.5rem', maxWidth: '50rem', margin: '0 auto', border: '2px solid var(--maven-cyan)' }}>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--maven-text-primary)' }}>
                                Ready to scale your trading?
                            </h3>
                            <p style={{ marginBottom: '2rem', color: 'var(--maven-text-secondary)', fontSize: '1.125rem' }}>
                                Our pricing options above are for your reference to see the scale of trading we support.
                                To officially begin, connect with one of our agents to discuss your strategy and get set up.
                            </p>
                            <button
                                onClick={handleTalkToAgent}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    padding: '1.25rem 1.5rem',
                                    fontSize: '1.125rem',
                                    fontWeight: 700,
                                    borderRadius: '9999px',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    cursor: 'pointer',
                                    border: 'none',
                                    whiteSpace: 'nowrap',
                                    background: 'var(--maven-cyan)',
                                    color: '#ffffff',
                                    boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)'
                                }}
                                className="btn-primary"
                            >
                                Talk to an Agent to Start Trading
                                <svg style={{ width: '1.5rem', height: '1.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>

                            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                                <a
                                    href="#" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, transition: 'color 0.3s',
                                        color: 'var(--maven-cyan-dark)', textDecoration: 'none'
                                    }}
                                >
                                    Join our community
                                    <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            {/* Auth Guard Modal */}
            {showAuthModal && (
                <div style={{
                    position: 'fixed', inset: 0, zIndex: 1000,
                    background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem'
                }}
                    onClick={() => setShowAuthModal(false)}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'var(--maven-bg-secondary)', borderRadius: '1.5rem',
                            padding: '2.5rem', maxWidth: '26rem', width: '100%',
                            border: '1.5px solid var(--maven-cyan)',
                            boxShadow: '0 25px 60px rgba(0,212,255,0.15)',
                            textAlign: 'center'
                        }}
                    >
                        {/* Lock icon */}
                        <div style={{
                            width: '3.5rem', height: '3.5rem', borderRadius: '50%',
                            background: 'rgba(0,212,255,0.1)', border: '1.5px solid var(--maven-cyan)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.25rem'
                        }}>
                            <svg width="24" height="24" fill="none" stroke="var(--maven-cyan)" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>

                        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', color: 'var(--maven-text-primary)' }}>
                            Account Required
                        </h3>
                        <p style={{ color: 'var(--maven-text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                            You need to be logged in to talk to an agent and start trading. Please sign in or create a free account.
                        </p>

                        <div style={{ display: 'flex', gap: '0.75rem', flexDirection: 'column' }}>
                            <a href="/auth/login"
                                style={{
                                    display: 'block', padding: '0.9rem 1.5rem', borderRadius: '9999px',
                                    background: 'var(--maven-cyan)', color: '#fff',
                                    fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                                    boxShadow: '0 4px 15px rgba(0,212,255,0.35)'
                                }}
                            >
                                Log In
                            </a>
                            <a href="/auth/register"
                                style={{
                                    display: 'block', padding: '0.9rem 1.5rem', borderRadius: '9999px',
                                    background: 'transparent', color: 'var(--maven-cyan)',
                                    fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
                                    border: '1.5px solid var(--maven-cyan)'
                                }}
                            >
                                Create Account
                            </a>
                            <button
                                onClick={() => setShowAuthModal(false)}
                                style={{
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    color: 'var(--maven-text-secondary)', fontSize: '0.9rem',
                                    marginTop: '0.25rem'
                                }}
                            >
                                Maybe later
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Pricing;
