'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const WS_URL = process.env.NEXT_PUBLIC_WS_URL || 'wss://your-backend.com/ws/chat';

export default function TalkToAgentPage() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [isAgentTyping, setIsAgentTyping] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const messagesEndRef = useRef(null);
    const wsRef = useRef(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isAgentTyping]);

    const connect = useCallback(() => {
        const ws = new WebSocket(WS_URL);
        wsRef.current = ws;

        ws.onopen = () => {
            setIsConnected(true);
            setMessages([{
                id: Date.now(),
                type: 'agent',
                text: 'Hello! Welcome to CoolPay Trading. I am your personal trading consultant. How can I help you today?'
            }]);
        };

        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data.type === 'typing') {
                    setIsAgentTyping(true);
                } else if (data.type === 'message') {
                    setIsAgentTyping(false);
                    setMessages(prev => [...prev, {
                        id: Date.now(),
                        type: 'agent',
                        text: data.text,
                        image: data.image ?? null
                    }]);
                }
            } catch {
                setIsAgentTyping(false);
                setMessages(prev => [...prev, { id: Date.now(), type: 'agent', text: event.data }]);
            }
        };

        ws.onclose = () => {
            setIsConnected(false);
            setTimeout(connect, 3000);
        };

        ws.onerror = () => ws.close();
    }, []);

    useEffect(() => {
        connect();
        return () => {
            wsRef.current?.close();
        };
    }, [connect]);

    const handleSend = (e) => {
        e.preventDefault();
        const hasText = inputValue.trim().length > 0;
        const hasImage = imagePreview !== null;
        if (!hasText && !hasImage) return;

        const userMsg = {
            id: Date.now(),
            type: 'user',
            text: inputValue.trim() || null,
            image: imagePreview?.url ?? null
        };
        setMessages(prev => [...prev, userMsg]);

        if (wsRef.current?.readyState === WebSocket.OPEN) {
            if (hasImage) {

                const reader = new FileReader();
                reader.onload = () => {
                    wsRef.current.send(JSON.stringify({
                        type: 'message',
                        text: inputValue.trim() || null,
                        image: reader.result
                    }));
                };
                reader.readAsDataURL(imagePreview.file);
            } else {
                wsRef.current.send(JSON.stringify({ type: 'message', text: inputValue.trim() }));
            }
        }

        setInputValue('');
        setImagePreview(null);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setImagePreview({ file, url });
        e.target.value = '';
    };

    const removeImage = () => {
        if (imagePreview) URL.revokeObjectURL(imagePreview.url);
        setImagePreview(null);
    };


    return (
        <div style={{ minHeight: '100vh', background: 'var(--maven-bg-secondary)', display: 'flex', flexDirection: 'column' }}>

            <header className="glass-dark" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 700, background: 'linear-gradient(135deg, var(--maven-cyan) 0%, var(--maven-purple) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', textDecoration: 'none' }}>
                    CoolPay
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 500, color: isConnected ? 'var(--maven-success)' : 'var(--maven-error)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
                        {isConnected ? 'Connected' : 'Reconnecting…'}
                    </span>
                    <Link href="/" style={{ color: 'var(--maven-text-secondary)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>
                        Back to Home
                    </Link>
                </div>
            </header>

            <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
                <div className="glass-card" style={{ width: '100%', maxWidth: '640px', height: '680px', display: 'flex', flexDirection: 'column', borderRadius: '1.5rem', overflow: 'hidden' }}>

                    {/* Agent Info Bar */}
                    <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--maven-border)', background: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--maven-cyan), var(--maven-purple))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.125rem', flexShrink: 0 }}>
                            A
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1rem', margin: 0, color: 'var(--maven-text-primary)', fontWeight: 700 }}>Agent Sarah</h2>
                            <p style={{ fontSize: '0.75rem', margin: 0, color: 'var(--maven-success)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'currentColor' }} />
                                Online · Trading Specialist
                            </p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {messages.length === 0 && !isConnected && (
                            <div style={{ margin: 'auto', textAlign: 'center', color: 'var(--maven-text-muted)', fontSize: '0.875rem' }}>
                                Connecting to your agent…
                            </div>
                        )}
                        {messages.map((msg) => (
                            <div key={msg.id} style={{ alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                                {/* Image bubble */}
                                {msg.image && (
                                    <img
                                        src={msg.image}
                                        alt="shared"
                                        style={{
                                            maxWidth: '100%',
                                            borderRadius: msg.type === 'user' ? '1.25rem 1.25rem 0 1.25rem' : '0 1.25rem 1.25rem 1.25rem',
                                            border: '1px solid var(--maven-border)',
                                            display: 'block',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => window.open(msg.image, '_blank')}
                                    />
                                )}
                                {/* Text bubble */}
                                {msg.text && (
                                    <div style={{
                                        padding: '0.875rem 1.125rem',
                                        borderRadius: msg.type === 'user' ? '1.25rem 1.25rem 0 1.25rem' : '0 1.25rem 1.25rem 1.25rem',
                                        background: msg.type === 'user' ? 'var(--maven-cyan)' : '#fff',
                                        color: msg.type === 'user' ? '#fff' : 'var(--maven-text-primary)',
                                        boxShadow: msg.type === 'user' ? '0 4px 12px rgba(0,212,255,0.2)' : '0 2px 8px rgba(0,0,0,0.05)',
                                        border: msg.type === 'agent' ? '1px solid var(--maven-border)' : 'none',
                                        fontSize: '0.9375rem',
                                        lineHeight: 1.55,
                                        wordBreak: 'break-word'
                                    }}>
                                        {msg.text}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Agent typing indicator */}
                        {isAgentTyping && (
                            <div style={{ alignSelf: 'flex-start', background: '#fff', padding: '0.875rem 1.125rem', borderRadius: '0 1.25rem 1.25rem 1.25rem', border: '1px solid var(--maven-border)', display: 'flex', gap: '5px', alignItems: 'center' }}>
                                <span className="typing-dot" />
                                <span className="typing-dot" />
                                <span className="typing-dot" />
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Image Preview Strip */}
                    {imagePreview && (
                        <div style={{ padding: '0.75rem 1.5rem 0', background: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{ position: 'relative', display: 'inline-block' }}>
                                <img src={imagePreview.url} alt="preview" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '0.75rem', border: '2px solid var(--maven-cyan)' }} />
                                <button
                                    onClick={removeImage}
                                    style={{ position: 'absolute', top: '-6px', right: '-6px', width: '20px', height: '20px', borderRadius: '50%', background: 'var(--maven-error)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '0.75rem', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}
                                >
                                    ×
                                </button>
                            </div>
                            <span style={{ fontSize: '0.75rem', color: 'var(--maven-text-muted)' }}>Image ready to send</span>
                        </div>
                    )}

                    {/* Input Bar */}
                    <form onSubmit={handleSend} style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--maven-border)', background: 'rgba(255,255,255,0.5)', display: 'flex', gap: '0.625rem', alignItems: 'center' }}>
                        {/* Hidden file input */}
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />

                        {/* Image upload button */}
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            title="Upload an image"
                            style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%', border: '1.5px solid var(--maven-border)', background: imagePreview ? 'var(--maven-cyan)' : 'transparent', color: imagePreview ? '#fff' : 'var(--maven-text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>

                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message…"
                            style={{ flex: 1, padding: '0.75rem 1.125rem', borderRadius: '9999px', border: '1px solid var(--maven-border)', outline: 'none', fontSize: '0.9375rem', transition: 'border-color 0.2s', background: '#fff' }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--maven-cyan)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--maven-border)'}
                        />

                        <button
                            type="submit"
                            disabled={!inputValue.trim() && !imagePreview}
                            className="btn-primary"
                            style={{ flexShrink: 0, width: '42px', height: '42px', borderRadius: '50%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: (!inputValue.trim() && !imagePreview) ? 0.4 : 1, cursor: (!inputValue.trim() && !imagePreview) ? 'not-allowed' : 'pointer', transition: 'opacity 0.2s' }}
                        >
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </main>

            <footer style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--maven-text-muted)', fontSize: '0.75rem' }}>
                &copy; {new Date().getFullYear()} CoolPay Trading. All rights reserved.
            </footer>

            <style jsx>{`
                .typing-dot {
                    width: 7px;
                    height: 7px;
                    background: var(--maven-text-muted);
                    border-radius: 50%;
                    animation: blink 1.4s infinite both;
                }
                .typing-dot:nth-child(2) { animation-delay: 0.2s; }
                .typing-dot:nth-child(3) { animation-delay: 0.4s; }

                @keyframes blink {
                    0%   { opacity: 0.2; }
                    20%  { opacity: 1; }
                    100% { opacity: 0.2; }
                }
            `}</style>
        </div>
    );
}
