export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent-pink rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>

            {/* Content */}
            <div className="container relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in">
                        <span className="w-2 h-2 bg-success rounded-full animate-pulse-glow"></span>
                        <span className="text-sm font-medium text-neutral-200">
                            Trusted by over 220,000 traders worldwide
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-white mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        Your Trading Journey Begins Here
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        Start trading in a fully simulated environment and keep 80% of your rewards.
                        Join the community with no hassle, just results.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                        <a href="#challenges" className="btn btn-primary text-lg px-8 py-4">
                            Get Started
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                        <a href="#how-it-works" className="btn btn-secondary text-lg px-8 py-4">
                            Learn More
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        <div className="glass-card rounded-2xl p-6">
                            <div className="text-4xl font-bold gradient-text mb-2">$2M+</div>
                            <div className="text-sm text-neutral-400">Paid to Traders</div>
                        </div>
                        <div className="glass-card rounded-2xl p-6">
                            <div className="text-4xl font-bold gradient-text mb-2">220K+</div>
                            <div className="text-sm text-neutral-400">Active Traders</div>
                        </div>
                        <div className="glass-card rounded-2xl p-6">
                            <div className="text-4xl font-bold gradient-text mb-2">10 Days</div>
                            <div className="text-sm text-neutral-400">Payout Frequency</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
