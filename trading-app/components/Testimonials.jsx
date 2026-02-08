import React from "react";

function Testimonials() {
    const testimonials = [
        {
            quote: "Everything goes smooth, from passing your challenge to getting your funded account.",
            author: "Jennifer H.",
            role: "Funded Trader",
            rating: 5,
        },
        {
            quote: "Without a doubt, a very simple, reliable prop firm without hidden rules.",
            author: "James S.",
            role: "Professional Trader",
            rating: 5,
        },
        {
            quote: "The speed between requesting the payout until it was approved was incredible.",
            author: "Nzewuihe A.",
            role: "Funded Trader",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" style={{ padding: '5rem 0', background: '#0a0a0a' }}>
            <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem', color: '#ffffff', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                        Don't Just Take Our Word for It
                    </h2>
                    <p style={{ fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', color: '#a3a3a3' }}>
                        Hear from our traders around the world why they chose Maven
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgba(20, 20, 20, 0.4)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                                borderRadius: '1.5rem',
                                padding: '2rem',
                                animation: 'fadeIn 0.6s ease-out forwards',
                                animationDelay: `${index * 0.1}s`,
                                opacity: 0
                            }}
                        >
                            {/* Stars */}
                            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        style={{ width: '1.25rem', height: '1.25rem', color: '#f59e0b' }}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '1.5rem', color: '#ffffff', margin: '0 0 1.5rem 0' }}>
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{
                                    width: '3rem',
                                    height: '3rem',
                                    borderRadius: '9999px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.125rem',
                                    fontWeight: 700,
                                    background: 'linear-gradient(135deg, #00d4ff, #7c3aed)',
                                    color: '#000'
                                }}>
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600, color: '#ffffff' }}>
                                        {testimonial.author}
                                    </div>
                                    <div style={{ fontSize: '0.875rem', color: '#737373' }}>
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <a
                        href="#"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontWeight: 500,
                            transition: 'color 0.3s',
                            color: '#00d4ff',
                            textDecoration: 'none'
                        }}
                    >
                        Join our community
                        <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
export default Testimonials;
