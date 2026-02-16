"use client";
import React, { useState, useEffect } from 'react';

const Contact = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  // Handle ESC key press and body scroll lock
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "✓ Successfully Sent!" : "✗ Error. Try again.");
    event.target.reset();
    setTimeout(() => {
      setResult("");
      if (data.success) onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }}
    >
      <div
        className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <section className="relative w-full py-12 lg:py-16 px-6 lg:px-12 overflow-hidden rounded-3xl">

          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-gradient-shift"></div>

          {/* Floating Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-float-delayed"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

              {/* Left Content */}
              <div className="space-y-10 lg:space-y-12">
                <div className="space-y-6 animate-fade-in-up">
                  <div className="inline-block">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Get in Touch
                    </span>
                  </div>

                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent">
                      Let's Create
                    </span>
                    <br />
                    <span className="italic font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Something Amazing
                    </span>
                  </h2>
                </div>

                <div className="space-y-8 max-w-md animate-fade-in-up animation-delay-200">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Have a project in mind? We'd love to hear from you.
                    Send us a message and we'll respond as soon as possible.
                  </p>

                  {/* Contact Info Cards */}
                  <div className="space-y-4">
                    <div className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:shadow-purple-100">
                      <h5 className="text-xs uppercase tracking-widest font-bold text-purple-600 mb-2">Email Us</h5>
                      <a
                        href="mailto:Folorunsho891@gmail.com"
                        className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors flex items-center gap-2"
                      >
                        <span>📧</span>
                        <span>Folorunsho891@gmail.com</span>
                      </a>
                    </div>

                    <div className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-pink-100">
                      <h5 className="text-xs uppercase tracking-widest font-bold text-pink-600 mb-2">Response Time</h5>
                      <p className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <span>⚡</span>
                        <span>Within 24 hours</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form - Glassmorphic Card */}
              <div className="animate-fade-in-up animation-delay-400">
                <div className="relative group">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Form Card */}
                  <div className="relative bg-white/80 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border border-white/20 shadow-2xl">
                    <form onSubmit={onSubmit} className="space-y-8">

                      {/* Name & Email Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gray-700">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="John Doe"
                            required
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-white/50 border-2 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 ${focusedField === 'name'
                              ? 'border-purple-500 shadow-lg shadow-purple-100'
                              : 'border-gray-200 hover:border-purple-300'
                              }`}
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-gray-700">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full bg-white/50 border-2 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 ${focusedField === 'email'
                              ? 'border-purple-500 shadow-lg shadow-purple-100'
                              : 'border-gray-200 hover:border-purple-300'
                              }`}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-gray-700">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows="5"
                          placeholder="Tell us about your project..."
                          required
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full bg-white/50 border-2 rounded-xl px-4 py-3.5 outline-none transition-all duration-300 resize-none ${focusedField === 'message'
                            ? 'border-purple-500 shadow-lg shadow-purple-100'
                            : 'border-gray-200 hover:border-purple-300'
                            }`}
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="group relative w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold uppercase tracking-widest text-sm rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-300 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <span>Send Message</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>

                      {/* Result Message */}
                      {result && (
                        <div className={`text-center p-4 rounded-xl font-semibold text-sm animate-fade-in ${result.includes('✓')
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : result.includes('✗')
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}>
                          {result}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Custom Animations */}
          <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in-up 0.5s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
        }
      `}</style>
        </section>
      </div>
    </div>
  );
};

export default Contact;
