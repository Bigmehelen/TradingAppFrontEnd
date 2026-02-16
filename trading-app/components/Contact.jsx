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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-7xl min-h-[85vh] lg:min-h-[800px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scale-in flex flex-col lg:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full transition-all duration-200 hover:scale-110 text-gray-800"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* LEFT SIDE - Info & Context */}
        <div className="relative w-full lg:w-5/12 p-8 lg:p-12 flex flex-col justify-between overflow-hidden bg-gray-50">
          {/* Background Decorations */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-gradient-shift opacity-70"></div>
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-400/20 rounded-full blur-[80px] animate-float"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-pink-400/20 rounded-full blur-[80px] animate-float-delayed"></div>

          <div className="relative z-10 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-purple-100/50 border border-purple-200 text-xs font-bold uppercase tracking-wider text-purple-700">
                Contact Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                We're always <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  here to help.
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-sm">
                Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>

            {/* Discord CTA */}
            <div className="bg-white/60 backdrop-blur-md border border-purple-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">Join the Community</h3>
              <p className="text-sm text-gray-600 mb-4">Get the fastest support and connect with fellow traders on our exclusive Discord server.</p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#5865F2] hover:bg-[#4752C4] py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-indigo-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                Join Discord
              </a>
            </div>
          </div>

          {/* Footer Info */}
          <div className="relative z-10 pt-12 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-xl shrink-0">📍</div>
              <div>
                <h4 className="font-bold text-gray-900">Maven Headquarters</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  DSO-IFZA, IFZA Properties<br />
                  Silicon Oasis, Dubai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Form */}
        <div className="relative w-full lg:w-7/12 bg-white/50 backdrop-blur-xl p-8 lg:p-12 xl:p-16 flex flex-col justify-center">

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
            <p className="text-gray-500">Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-700 ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-300 ${focusedField === 'name' ? 'border-purple-500 ring-4 ring-purple-500/10' : 'border-gray-200 hover:border-purple-300'}`}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-gray-700 ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-300 ${focusedField === 'email' ? 'border-purple-500 ring-4 ring-purple-500/10' : 'border-gray-200 hover:border-purple-300'}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-gray-700 ml-1">Subject</label>
              <select
                name="subject"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all cursor-pointer hover:border-purple-300 text-gray-600"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Technical Support</option>
                <option value="Billing">Billing & Account</option>
                <option value="Partnership">Partnership</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-gray-700 ml-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us how we can help..."
                required
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-gray-50 border rounded-xl px-4 py-3.5 outline-none transition-all duration-300 resize-none ${focusedField === 'message' ? 'border-purple-500 ring-4 ring-purple-500/10' : 'border-gray-200 hover:border-purple-300'}`}
              />
            </div>

            <button
              type="submit"
              className="group relative w-full py-4 bg-gray-900 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Send Message</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </span>
            </button>

            {result && (
              <div className={`text-center p-3 rounded-xl font-medium text-sm animate-fade-in ${result.includes('✓') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {result}
              </div>
            )}
          </form>
        </div>
      </div>

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
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-gradient-shift { background-size: 200% 200%; animation: gradient-shift 15s ease infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
};

export default Contact;
