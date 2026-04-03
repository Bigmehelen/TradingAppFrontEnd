'use client';
import React, { useState } from "react";

function TalkToExperts() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What is CoolPay Trading?",
            answer: "CoolPay Trading is a premier proprietary trading firm. We provide simulated funding up to $100k to talented traders. If you can prove your trading skills by passing our evaluation, you keep up to 80% of the simulated profits you generate."
        },
        {
            question: "How do I get started?",
            answer: "Getting started is easy! First, create a free account. its take you to your profile you can see the different price ranges and choose one that fits your strategy. Once you're ready, talk to one of our expert agents to get officially set up."
        },
        {
            question: "What platforms do you support?",
            answer: "We currently support the industry-standard MetaTrader 5, as well as Match Trader. Both platforms provide lightning-fast execution, advanced charting, and support for over 400+ trading pairs including forex, metals, and crypto."
        },
        {
            question: "Are there any time limits on challenges?",
            answer: "No! We believe traders perform best without unnecessary pressure. Take as much time as you need to hit the profit targets, as long as you respect the daily and maximum drawdown limits."
        },
        {
            question: "What is the profit split?",
            answer: "Once you become a funded trader, you are entitled to keep up to 80% of the profits you generate on your funded account, processed through fast and reliable payouts."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" style={{ padding: '6rem 0', background: 'var(--maven-bg-secondary)' }}>
            <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: 'var(--maven-text-primary)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Frequently Asked Questions
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', color: 'var(--maven-text-secondary)' }}>
                        Everything you need to know about the product and how we work. Can't find the answer you're looking for? Reach out to our team.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div 
                            key={index} 
                            style={{ 
                                background: 'rgba(255, 255, 255, 0.03)',
                                border: `1px solid ${openIndex === index ? 'var(--maven-cyan)' : 'rgba(255, 255, 255, 0.1)'}`,
                                borderRadius: '1rem',
                                transition: 'all 0.3s ease',
                                overflow: 'hidden'
                            }}
                        >
                            <button
                                onClick={() => toggleFaq(index)}
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--maven-text-primary)',
                                    fontWeight: 600,
                                    fontSize: '1.125rem',
                                    textAlign: 'left'
                                }}
                            >
                                {faq.question}
                                <svg 
                                    style={{ 
                                        width: '1.5rem', 
                                        height: '1.5rem', 
                                        color: openIndex === index ? 'var(--maven-cyan)' : 'var(--maven-text-secondary)',
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s ease'
                                    }} 
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div 
                                style={{ 
                                    maxHeight: openIndex === index ? '300px' : '0',
                                    opacity: openIndex === index ? 1 : 0,
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease-in-out',
                                    padding: openIndex === index ? '0 1.5rem 1.5rem 1.5rem' : '0 1.5rem',
                                    color: 'var(--maven-text-secondary)',
                                    lineHeight: '1.6'
                                }}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '5rem', textAlign: 'center' }}>
                    <div className="glass-card" style={{ borderRadius: '1.5rem', padding: '3rem', maxWidth: '48rem', margin: '0 auto', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--maven-text-primary)' }}>
                            Still have questions?
                        </h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--maven-text-secondary)', fontSize: '1.125rem' }}>
                            Our team is here to help you understand our challenges and find the perfect path for your trading goals.
                        </p>
                        <a
                            href="/talk-to-agent"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                padding: '1rem 2.5rem',
                                fontSize: '1.125rem',
                                fontWeight: 700,
                                borderRadius: '9999px',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                border: '2px solid var(--maven-cyan)',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                                background: 'transparent',
                                color: 'var(--maven-text-primary)',
                                boxShadow: '0 4px 15px rgba(0, 212, 255, 0.15)'
                            }}
                            className="hover:bg-cyan-500 hover:border-transparent transition-colors"
                        >
                            Talk to an Expert
                            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TalkToExperts;

