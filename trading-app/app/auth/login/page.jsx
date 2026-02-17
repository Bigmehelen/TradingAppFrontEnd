'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);
        setTimeout(() => {
            console.log('Login submitted:', { email, password, rememberMe });
            setIsLoading(false);
            router.push('/');
        }, 1500);
    };

    return (
        <div className="min-h-screen w-full flex bg-white overflow-hidden">

            <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-12 bg-gray-900 overflow-hidden items-center text-center">

                <div className="absolute inset-0 bg-gray-900">
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-tr from-indigo-900/40 via-purple-900/40 to-[#00a8cc] opacity-60"></div>

                    <div className="absolute bottom-[-10%] left-[-10%] w-200 h-200 rounded-full blur-[120px] animate-float-delayed"
                        style={{ background: '#00d4ff', opacity: 0.15 }}>
                    </div>
                </div>

                <div className="relative mt-20 z-10">
                    <h2 className="text-3xl font-bold mt-20 text-white tracking-tight"> CoolPay Trading</h2>
                </div>

                <div className="relative z-10 max-w-lg">
                    <h1 className="text-3xl font-bold text-white mb-6 leading-tight">
                        Unlock your full <br />
                        <span className="text-[#00d4ff]">
                            trading potential.
                        </span>
                    </h1>
                    <p className="text-gray-500 drop-shadow-lg text-lg mt-10 leading-relaxed">
                        Join thousands of traders who have trusted CoolPay Trading to take their career to the next level. Experience superior execution and premium support.
                    </p>
                </div>

                <div className="relative z-10 text-sm m-50 text-gray-500">
                    © {new Date().getFullYear()} CoolPay Trading. All rights reserved.
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative">

                <div className="lg:hidden absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full blur-[100px]"
                    style={{ background: '#00d4ff', opacity: 0.1 }}></div>

                <div className="w-full max-w-xl space-y-10 relative z-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-5xl font-bold text-gray-900 mb-3"> Welcome Back </h2>
                        <p className="text-gray-500 text-3xl"> Please enter your details to sign in.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="space-y-4">
                            <label className="text-base font-bold text-gray-900 ml-1">Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setErrors({ ...errors, email: '' }); }}
                                placeholder="name@company.com"
                                className={`w-full h-14 bg-white border-2 rounded-xl px-6 py-5 outline-none transition-all duration-300 font-medium text-xl ${errors.email
                                    ? 'border-red-500 focus:shadow-lg focus:shadow-red-100'
                                    : 'border-gray-300 focus:border-[#00d4ff] focus:shadow-lg focus:shadow-cyan-100 hover:border-cyan-200'
                                    }`}
                            />
                            {errors.email && <p className="text-red-500 text-sm ml-1 font-medium">{errors.email}</p>}
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-base font-bold text-gray-900 ml-1">Password</label>
                            </div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); setErrors({ ...errors, password: '' }); }}
                                placeholder="••••••••"
                                className={`w-full h-14 bg-white border-2 rounded-xl px-6 py-5 outline-none transition-all duration-300 font-medium text-xl ${errors.password
                                    ? 'border-red-500 focus:shadow-lg focus:shadow-red-100'
                                    : 'border-gray-300 focus:border-[#00d4ff] focus:shadow-lg focus:shadow-cyan-100 hover:border-cyan-200'
                                    }`}
                            />
                            {errors.password && <p className="text-red-500 text-sm ml-1 font-medium">{errors.password}</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                        className="peer w-5 cursor-pointer appearance-none rounded border-2 border-gray-300 transition-all checked:border-purple-600 checked:bg-purple-600 hover:border-purple-400"
                                    />
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-white pointer-events-none">
                                        <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <span className="text-gray-600 font-medium text-base group-hover:text-gray-900 transition-colors">Remember me</span>
                            </label>
                            <Link href="/forgot-password"
                                className="font-bold text-[#00d4ff]">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full h-14 bg-gray-900 text-white text-xl font-bold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: '#00d4ff' }}></div>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isLoading ? 'Signing in...' : 'Sign in to account'}
                            </span>
                        </button>
                    </form>

                    <div className="text-center mt-8">
                        <p className="text-gray-500 font-medium">
                            Don't have an account?{' '}
                            <Link href="/auth/register"
                                className="font-bold text-[#00d4ff] hover:opacity-80 transition-opacity">
                                Create free account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
