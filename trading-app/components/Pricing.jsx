import React, { useState } from "react";

function Pricing() {

    const [accountSize, setAccountSize] = useState("$2k");
    const [accountType, setAccountType] = useState("Mini");
    const [platf, setPlatform] = useState("MetaTrader 5");

    const sizes = ["$2k", "$5k", "$10k", "$20k", "$50k", "$100k"];
    const types = ["Standard", "Instant", "Mini"];
    const platforms = ["MetaTrader 5", "Match Trader"];

    return (
        <section id="testimonials" style={{ padding: '5rem 0', background: 'var(--maven-bg-secondary)' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--maven-text-primary)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Empower your trading with <br/> <span style={{ color: 'var(--maven-cyan)' }}> CoolPay </span> 
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', color: 'var(--maven-text-secondary)' }}>
                        We have the industry's best pricing. Choose your <br/>funded account and begin your trading journey.
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

                <div style={{ textAlign: 'center', marginTop: '2rem', width:'full' }}>
                        <h2 style={{fontSize: '1rem', maxWidth: '42rem', margin: '0 auto', marginBottom:'1rem', marginTop:'1rem', color: 'var(--maven-text-primary)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                            Choose your account size.
                        </h2>


                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 items-center justify-center bg-gray-100 rounded-xl p-2">
                        {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setAccountSize(size)}
                            className={`py-3 justify-between rounded-lg max-w-2xl text-sm h-10 font-semibold transition-all duration-200
                            ${
                            accountSize === size
                                ? "bg-gray-600 text-white shadow-md scale-105"
                                : "text-gray-600 hover:bg-white hover:shadow-sm"
                            }`}
                        >
                            {size}
                        </button>
                        ))}
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center align-center items-center max-w-6xl gap-8">
    
                        <div>
                            <h2 style={{ fontSize: '1rem', maxWidth: '42rem', margin: '0 auto', marginBottom: '2rem', marginTop: '1rem',
                                    color: 'var(--maven-text-primary)', fontWeight: 600, lineHeight: 1.2, letterSpacing: '-0.02em'}}
                            >
                                Choose your account type
                            </h2>

                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 bg-gray-100 rounded-xl p-2">
                                {types.map((type) => (
                                    <button
                                        key={type} onClick={() => setAccountType(type)}
                                        className={`py-3 rounded-lg text-sm h-10 font-semibold transition-all duration-200
                                        ${
                                            accountType === type
                                                ? "bg-gray-600 text-white shadow-md scale-105"
                                                : "text-gray-600 hover:bg-white hover:shadow-sm"
                                        }`}
                                    >
                                        {type}
                                    </button>
                                ))}
                            </div>
                        </div>


                        <div>
                            <h2 style={{ fontSize: '1rem', maxWidth: '42rem', margin: '0 auto', marginBottom: '2rem', marginTop: '1rem',
                                    color: 'var(--maven-text-primary)', fontWeight:600, lineHeight: 1.2,letterSpacing: '-0.02em'}}
                            >
                                Choose your favorite platform to trade
                            </h2>

                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 bg-gray-100 rounded-xl p-2">
                                {platforms.map((platform) => (
                                    <button
                                        key={platform}
                                        onClick={() => setPlatform(platform)}
                                        className={`py-3 rounded-lg h-10 text-sm font-semibold transition-all duration-200
                                        ${
                                            platf === platform
                                                ? "bg-gray-600 text-white shadow-md scale-105"
                                                : "text-gray-600 hover:bg-white hover:shadow-sm"
                                        }`}
                                    >
                                        {platform}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>


                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <a
                            href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, transition: 'color 0.3s',
                                color: 'var(--maven-cyan-dark)', textDecoration: 'none' }}
                        >
                            Join our community
                            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Pricing;
