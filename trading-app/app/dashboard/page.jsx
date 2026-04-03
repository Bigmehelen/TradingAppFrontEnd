'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function DashboardPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/auth/login');
            return;
        }
        
        const storedImage = localStorage.getItem('profileImage');
        if (storedImage) setProfileImage(storedImage);
        
        setIsLoading(false);
    }, [router]);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setProfileImage(base64String);
                localStorage.setItem('profileImage', base64String);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setProfileImage(null);
        localStorage.removeItem('profileImage');
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('profileImage');
        router.push('/');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900">
                <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">

            <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-cyan-500/20">
                            C
                        </div>
                        <span className="font-bold text-xl tracking-tight">CoolPay Trading</span>
                    </Link>
                    
                    <div className="flex items-center gap-6">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                            Back to Home
                        </Link>
                        <button 
                            onClick={handleLogout}
                            className="px-5 py-2.5 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors text-sm font-medium"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </nav>


            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold mb-2">Welcome Back</h1>
                    <p className="text-gray-400 text-lg">Manage your trading account and personal details.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-1 border border-gray-800 bg-gray-900/50 rounded-2xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                        
                        <h2 className="text-xl font-bold mb-6">Profile Details</h2>
                        
                        <div className="flex flex-col items-center mb-8 relative z-10">
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-800 bg-gray-800 flex items-center justify-center shadow-2xl">
                                    {profileImage ? (
                                        <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <svg className="w-16 h-16 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    )}
                                </div>
                                
                                
                                <div 
                                    className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <span className="text-sm font-semibold text-white">Change icon</span>
                                </div>
                            </div>
                            
                            <input 
                                type="file" 
                                accept="image/*" 
                                className="hidden" 
                                ref={fileInputRef} 
                                onChange={handleImageUpload} 
                            />
                            
                            <div className="flex gap-3 mt-6">
                                <button 
                                    onClick={() => fileInputRef.current.click()}
                                    className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium transition-colors"
                                >
                                    Upload New
                                </button>
                                {profileImage && (
                                    <button 
                                        onClick={handleRemoveImage}
                                        className="px-4 py-2 border border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default DashboardPage;
