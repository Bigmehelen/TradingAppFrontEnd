'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function TalkToAgentPage() {
    const [messages, setMessages] = useState([
        { id: 1, type: 'agent', text: 'Hello! Welcome to CoolPay Trading. I am your personal trading consultant. How can I help you today?' },
        { id: 2, type: 'agent', text: 'I see you were looking at our trading plans. Would you like me to explain how they work or help you get started with a specific one?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage = { id: Date.now(), type: 'user', text: inputValue };
        setMessages(prev => [...prev, newMessage]);
        setInputValue('');
        
        // Simulate agent typing
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const agentResponse = { 
                id: Date.now() + 1, 
                type: 'agent', 
                text: "That's great! To better assist you, could you tell me a bit about your trading experience and which account size you're interested in exploring?" 
            };
            setMessages(prev => [...prev, agentResponse]);
        }, 2000);
    };

    return (
        <div style={{ minHeight: '100vh', background: 'var(--maven-bg-secondary)', display: 'flex', flexDirection: 'column' }}>
            {/* Simple Header */}
            <header className="glass-dark" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, background: 'linear-gradient(135deg, var(--maven-cyan) 0%, var(--maven-purple) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
                    CoolPay
                </Link>
                <Link href="/" style={{ color: 'var(--maven-text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                    Back to Home
                </Link>
            </header>

            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
                <div className="glass-card" style={{ width: '100%', maxWidth: '600px', height: '600px', display: 'flex', flexDirection: 'column', borderRadius: '1.5rem', overflow: 'hidden' }}>
                    {/* Chat Header */}
                    <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--maven-border)', background: 'rgba(255, 255, 255, 0.5)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--maven-cyan), var(--maven-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
                            A
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.125rem', margin: 0, color: 'var(--maven-text-primary)' }}>Agent Sarah</h2>
                            <p style={{ fontSize: '0.75rem', margin: 0, color: 'var(--maven-success)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor' }}></span>
                                Online | Trading Specialist
                            </p>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {messages.map((msg) => (
                            <div key={msg.id} style={{ alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
                                <div style={{ 
                                    padding: '1rem', 
                                    borderRadius: msg.type === 'user' ? '1.25rem 1.25rem 0 1.25rem' : '0 1.25rem 1.25rem 1.25rem',
                                    background: msg.type === 'user' ? 'var(--maven-cyan)' : '#fff',
                                    color: msg.type === 'user' ? '#fff' : 'var(--maven-text-primary)',
                                    boxShadow: msg.type === 'user' ? '0 4px 12px rgba(0, 212, 255, 0.2)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
                                    border: msg.type === 'agent' ? '1px solid var(--maven-border)' : 'none',
                                    fontSize: '0.9375rem',
                                    lineHeight: 1.5
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '0.75rem 1rem', borderRadius: '0 1.25rem 1.25rem 1.25rem', border: '1px solid var(--maven-border)', display: 'flex', gap: '4px' }}>
                                <span className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--maven-text-muted)', borderRadius: '50%' }}></span>
                                <span className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--maven-text-muted)', borderRadius: '50%' }}></span>
                                <span className="typing-dot" style={{ width: '6px', height: '6px', background: 'var(--maven-text-muted)', borderRadius: '50%' }}></span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input */}
                    <form onSubmit={handleSendMessage} style={{ padding: '1.5rem', borderTop: '1px solid var(--maven-border)', background: 'rgba(255, 255, 255, 0.5)', display: 'flex', gap: '0.75rem' }}>
                        <input 
                            type="text" 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..." 
                            style={{ 
                                flex: 1, 
                                padding: '0.75rem 1.25rem', 
                                borderRadius: '9999px', 
                                border: '1px solid var(--maven-border)', 
                                outline: 'none', 
                                fontSize: '0.9375rem',
                                transition: 'border-color 0.2s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--maven-cyan)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--maven-border)'}
                        />
                        <button 
                            type="submit" 
                            className="btn-primary"
                            style={{ padding: '0.75rem 1.5rem', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </main>

            <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--maven-text-muted)', fontSize: '0.75rem' }}>
                &copy; {new Date().getFullYear()} CoolPay Trading. All rights reserved.
            </footer>

            <style jsx>{`
                .typing-dot {
                    animation: blink 1.4s infinite both;
                }
                .typing-dot:nth-child(2) { animation-delay: 0.2s; }
                .typing-dot:nth-child(3) { animation-delay: 0.4s; }

                @keyframes blink {
                    0% { opacity: 0.2; }
                    20% { opacity: 1; }
                    100% { opacity: 0.2; }
                }
            `}</style>
        </div>
    );
}
