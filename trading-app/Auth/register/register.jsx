'use client';

import React, { useState } from 'react';
import Link from 'next/link';

function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
        setErrors({ ...errors, [field]: '' });
    };

    const getPasswordStrength = (password) => {
        if (!password) return { strength: 0, label: '', color: '' };

        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;

        const levels = [
            { strength: 1, label: 'Weak', color: 'bg-red-500' },
            { strength: 2, label: 'Fair', color: 'bg-orange-500' },
            { strength: 3, label: 'Good', color: 'bg-yellow-500' },
            { strength: 4, label: 'Strong', color: 'bg-green-500' }
        ];

        return levels[strength - 1] || { strength: 0, label: '', color: '' };
    };

    const passwordStrength = getPasswordStrength(formData.password);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.name) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms and conditions';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        console.log('Registration submitted:', formData);
        alert('Registration functionality will be implemented with backend integration');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-gray-50">

            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-gradient-shift"></div>

            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-[100px] animate-float"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-[100px] animate-float-delayed"></div>

            <div className="relative w-full max-w-md animate-fade-in-up z-10">
                <div className="relative group">

                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative bg-white/70 backdrop-blur-xl p-8 sm:p-10 rounded-2xl border border-white/50 shadow-2xl">

                        <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold mb-2">
                                <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                                    Get Started
                                </span>
                            </h1>
                            <p className="text-gray-500 text-sm">Create your account</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-gray-700 ml-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    placeholder="John Doe"
                                    className={`w-full bg-white/50 border rounded-xl px-4 py-3 outline-none transition-all duration-300 ${errors.name
                                        ? 'border-red-500'
                                        : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 hover:border-purple-300'
                                        }`}
                                />
                                {errors.name && <p className="text-red-500 text-xs ml-1">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-gray-700 ml-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="you@example.com"
                                    className={`w-full bg-white/50 border rounded-xl px-4 py-3 outline-none transition-all duration-300 ${errors.email
                                        ? 'border-red-500'
                                        : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 hover:border-purple-300'
                                        }`}
                                />
                                {errors.email && <p className="text-red-500 text-xs ml-1">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-gray-700 ml-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    placeholder="••••••••"
                                    className={`w-full bg-white/50 border rounded-xl px-4 py-3 outline-none transition-all duration-300 ${errors.password
                                        ? 'border-red-500'
                                        : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 hover:border-purple-300'
                                        }`}
                                />

                                {formData.password && (
                                    <div className="space-y-1 mt-2">
                                        <div className="flex gap-1 h-1">
                                            {[1, 2, 3, 4].map((level) => (
                                                <div
                                                    key={level}
                                                    className={`flex-1 rounded-full transition-all duration-300 ${level <= passwordStrength.strength ? passwordStrength.color : 'bg-gray-200'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                        {passwordStrength.label && (
                                            <p className="text-xs text-gray-500 text-right">
                                                Strength: <span className={`font-semibold ${passwordStrength.color.replace('bg-', 'text-')}`}>{passwordStrength.label}</span>
                                            </p>
                                        )}
                                    </div>
                                )}
                                {errors.password && <p className="text-red-500 text-xs ml-1">{errors.password}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-gray-700 ml-1">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                    placeholder="••••••••"
                                    className={`w-full bg-white/50 border rounded-xl px-4 py-3 outline-none transition-all duration-300 ${errors.confirmPassword
                                        ? 'border-red-500'
                                        : 'border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 hover:border-purple-300'
                                        }`}
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-xs ml-1">{errors.confirmPassword}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-start gap-2 cursor-pointer group/checkbox">
                                    <div className="relative flex items-center mt-0.5">
                                        <input
                                            type="checkbox"
                                            checked={formData.agreeToTerms}
                                            onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
                                            className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-gray-300 shadow transition-all checked:border-purple-600 checked:bg-purple-600 hover:shadow-md"
                                        />
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white pointer-events-none">
                                            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        I agree to the{' '}
                                        <Link href="#" className="text-purple-600 hover:text-pink-600 transition-colors hover:underline">
                                            Terms and Conditions
                                        </Link>
                                        {' '}and{' '}
                                        <Link href="#" className="text-purple-600 hover:text-pink-600 transition-colors hover:underline">
                                            Privacy Policy
                                        </Link>
                                    </span>
                                </label>
                                {errors.agreeToTerms && <p className="text-red-500 text-xs ml-1">{errors.agreeToTerms}</p>}
                            </div>

                            <button
                                type="submit"
                                className="group relative w-full py-3.5 bg-gray-900 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 active:scale-[0.98]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    <span>Create Account</span>
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-gray-600 text-sm">
                                Already have an account?{' '}
                                <Link href="/login" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all">
                                    Login
                                </Link>
                            </p>
                        </div>

                        <div className="mt-4 text-center">
                            <Link href="/" className="text-xs text-gray-500 hover:text-gray-700 transition-colors flex items-center justify-center gap-1">
                                <span>←</span> Back to home
                            </Link>
                        </div>
                    </div>
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
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
          animation: fade-in-up 0.6s ease-out forwards;
        }
      `}</style>
        </div>
    );
}
export default RegisterPage;
