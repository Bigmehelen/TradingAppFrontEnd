"use client";
import React, { useState, useEffect } from 'react';

const Contact = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  const [focusedField, setFocusedField] = useState(null);

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
    <div className="fixed inset-0 z-50 bg-white animate-fade-in w-full h-full overflow-y-auto overscroll-contain">

      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white backdrop-blur-md rounded-full transition-all duration-200 hover:scale-110 text-gray-800 shadow-sm border border-gray-100"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex flex-col lg:flex-row h-full w-full overflow-y-auto">

        <div className="relative w-full lg:w-5/12 p-10 md:p-16 lg:p-24 flex flex-col justify-center items-center text-center gap-12 overflow-hidden bg-gray-50 border-r border-gray-100">


          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 animate-gradient-shift"></div>
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full blur-[80px] animate-float" style={{ background: 'linear-gradient(135deg, var(--maven-cyan) 0%, var(--maven-purple) 100%)', opacity: 0.2 }}></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-pink-400/10 rounded-full blur-[80px] animate-float-delayed"></div>

          <div className="relative z-10 space-y-12 lg:space-y-16 mt-12 lg:mt-0 w-full flex flex-col items-center">

            <div className="space-y-6 max-w-lg mx-auto">
              <span className="inline-block py-1.5 px-8 rounded-full bg-purple-100 border border-purple-200 text-lg font-bold uppercase tracking-wider text-purple-700">
                Contact Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.05]">
                We're always <br />
                <span className="text-transparent bg-clip-text" style={{backgroundImage: 'linear-gradient(135deg, var(--maven-cyan) 0%, var(--maven-purple) 100%)' }}>
                  here to help.
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mx-auto">
                Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
              </p>
            </div>


            <div className="bg-white/80 backdrop-blur-md border border-purple-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 max-w-md mx-auto w-full">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors"> Join the Community </h3>
              <p className="text-base text-gray-600 mb-6"> Get the fastest support and connect with fellow traders on our exclusive Discord server.</p>
              <a
                href="#"
                className="inline-flex items-center gap-3 text-base font-bold text-white bg-[#5865F2] hover:bg-[#4752C4] py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
                Join Discord Server
              </a>
            </div>


            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors duration-300 max-w-sm mx-auto text-left">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shrink-0 shadow-sm text-purple-600">📍</div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg"> Coolpay Headquarters </h4>
                <p className="text-gray-500 leading-relaxed mt-1">
                  DSO-IFZA, IFZA Properties<br />
                  Silicon Oasis, Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="relative w-full lg:w-7/12 bg-white flex flex-col justify-center items-center p-15 md:p-20 lg:p-24 overflow-y-auto overscroll-contain">

          <div className="w-full max-w-xl space-y-8 animate-fade-in-up">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <p className="text-xs text-gray-500"> Fill out the form below and we'll get back to you shortly. </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
             
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-900 ml-1"> Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gray-50 h-15 border-2 rounded-xl px-5 py-4 outline-none transition-all duration-300 font-medium ${focusedField === 'name' ? 'border-purple-500 shadow-lg shadow-purple-100' : 'border-gray-100 hover:border-purple-200'}`}
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-900 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-gray-50 h-15 border-2 rounded-xl px-5 py-4 outline-none transition-all duration-300 font-medium ${focusedField === 'email' ? 'border-purple-500 shadow-lg shadow-purple-100' : 'border-gray-100 hover:border-purple-200'}`}
                  />
                </div>
              

              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-900 ml-1">Subject</label>
                <div className="relative">
                  <select
                    name="subject"
                    className="w-full appearance-none bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 outline-none focus:border-purple-500 focus:shadow-lg focus:shadow-purple-100 transition-all cursor-pointer hover:border-purple-200 text-gray-700 font-medium"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Technical Support</option>
                    <option value="Billing">Billing & Account</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-900 ml-1">Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  required
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-4 outline-none transition-all duration-300 resize-none font-medium ${focusedField === 'message' ? 'border-purple-500 shadow-lg shadow-purple-100' : 'border-gray-100 hover:border-purple-200'}`}
                />
              </div>

              <button
                type="submit"
                className="group relative h-15 w-full py-5 bg-gray-900 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 active:scale-[0.98] mt-4"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, var(--maven-cyan) 0%, var(--maven-purple) 100%)' }}></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </span>
              </button>

              {result && (
                <div className={`text-center p-4 rounded-xl font-bold text-base animate-fade-in ${result.includes('✓') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
