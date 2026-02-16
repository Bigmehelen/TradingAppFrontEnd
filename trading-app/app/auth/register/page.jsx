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
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 8) newErrors.password = 'Min 8 characters';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        if (!formData.agreeToTerms) newErrors.agreeToTerms = 'Required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        console.log('Registration submitted:', formData);
        alert('Registration simulated');
    };

    return (
        <div className="min-h-screen w-full flex bg-white overflow-hidden">

            <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 bg-gray-900 overflow-hidden items-center text-center">

                <div className="absolute inset-0 bg-gray-900">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-indigo-900/40 via-purple-900/40 to-[#00a8cc] opacity-60"></div>

                    <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] animate-float-delayed"
                        style={{ background: '#00d4ff', opacity: 0.15 }}></div>
                </div>

                <div className="relative z-10">
                    <h2 className="text-3xl mt-20 font-bold text-white tracking-tight">Maven Trading</h2>
                </div>

                <div className="relative z-10 max-w-lg">
                    <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                        Start your journey <br />
                        <span className="text-[#00d4ff]">
                            with confidence.
                        </span>
                    </h1>
                    <div className="space-y-4 text-gray-400 text-lg text-left inline-block">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500/20 text-green-400">✓</div>
                            <span>Instant account access</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500/20 text-green-400">✓</div>
                            <span>Zero hidden fees</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-500/20 text-green-400">✓</div>
                            <span>24/7 dedicated support</span>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 text-sm text-gray-500">
                    © {new Date().getFullYear()} Maven Trading. All rights reserved.
                </div>
            </div>


            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative">

                <div className="lg:hidden absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full blur-[100px]"
                    style={{ background: '#00d4ff', opacity: 0.1 }}></div>

                <div className="w-full max-w-xl space-y-8 relative z-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-5xl font-bold text-gray-900 mb-3">Create Account</h2>
                        <p className="text-gray-500 text-2xl">Join us and start trading today.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-3">
                            <label className="text-base font-bold text-gray-900 ml-1"> Your name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                placeholder="John Doe"
                                className={`w-full h-16 bg-white border-2 rounded-xl px-6 py-5 outline-none transition-all duration-300 font-medium text-xl ${errors.name
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-[#00d4ff] focus:shadow-lg focus:shadow-cyan-100 hover:border-cyan-200'
                                    }`}
                            />
                            {errors.name && <p className="text-red-500 text-sm ml-1">{errors.name}</p>}
                        </div>

                        <div className="space-y-3">
                            <label className="text-base font-bold text-gray-900 ml-1">Email Address</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                placeholder="name@company.com"
                                className={`w-full bg-white h-16 border-2 rounded-xl px-6 py-5 outline-none transition-all duration-300 font-medium text-xl ${errors.email
                                    ? 'border-red-500'
                                    : 'border-gray-300 focus:border-[#00d4ff] focus:shadow-lg focus:shadow-cyan-100 hover:border-cyan-200'
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm ml-1">{errors.email}</p>}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <label className="text-base font-bold text-gray-900 ml-1">Password</label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    placeholder="••••••••"
                                    className={`w-full h-16 bg-white border-2 rounded-xl px-6 py-5 outline-none transition-all duration-300 font-medium text-xl ${errors.password
                                        ? 'border-red-500'
                                        : 'border-gray-300 focus:border-[#00d4ff] focus:shadow-lg focus:shadow-cyan-100 hover:border-cyan-200'
                                        }`}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-base font-bold text-gray-900 ml-1">Confirm</label>
                                <input
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                                    placeholder="••••••••"
                                    className={`w-full h-16 bg-white border-2 rounded-xl px-6 py-5 outline-none transition-all duration-300 font-medium text-xl ${errors.confirmPassword
                                        ? 'border-red-500'
                                        : 'border-gray-300 focus:border-[#00d4ff] focus:shadow-lg focus:shadow-cyan-100 hover:border-cyan-200'
                                        }`}
                                />
                            </div>
                        </div>


                        {formData.password && (
                            <div className="space-y-1">
                                <div className="flex gap-1 h-1.5">
                                    {[1, 2, 3, 4].map((level) => (
                                        <div key={level} className={`flex-1 rounded-full transition-all duration-300 ${level <= passwordStrength.strength ? passwordStrength.color : 'bg-gray-100'}`} />
                                    ))}
                                </div>
                                <p className="text-xs text-gray-400 text-right">Strength: <span className="font-bold text-gray-600">{passwordStrength.label}</span></p>
                            </div>
                        )}
                        {(errors.password || errors.confirmPassword) && (
                            <p className="text-red-500 text-sm ml-1">{errors.password || errors.confirmPassword}</p>
                        )}


                        <div className="space-y-2">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <div className="relative flex items-center mt-4">
                                    <input
                                        type="checkbox"
                                        checked={formData.agreeToTerms}
                                        onChange={(e) => handleChange('agreeToTerms', e.target.checked)}
                                        className="peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-300 transition-all checked:border-purple-600 checked:bg-purple-600 hover:border-purple-400"
                                    />
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white pointer-events-none">
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                                    </div>
                                </div>
                                <span className="text-gray-500 text-sm mt-4 leading-relaxed">
                                    I agree to the <Link href="#" className="font-bold text-purple-600 hover:underline">Terms</Link> and <Link href="#" className="font-bold text-purple-600 hover:underline">Privacy Policy</Link>
                                </span>
                            </label>
                            {errors.agreeToTerms && <p className="text-red-500 text-sm ml-1">{errors.agreeToTerms}</p>}
                        </div>

                        <button
                            type="submit"
                            className="group relative w-full py-5 bg-gray-900 text-white text-xl font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-[0.98] mt-8"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: '#00d4ff' }}></div>
                            <span className="relative z-10 flex items-center h-16 justify-center gap-2">
                                Create Account
                            </span>
                        </button>
                    </form>

                    <div className="text-center mt-8">
                        <p className="text-gray-500 font-medium">
                            Already have an account?{' '}
                            <Link href="/auth/login"
                                className="font-bold text-[#00d4ff] hover:opacity-80 transition-opacity">
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default RegisterPage;
