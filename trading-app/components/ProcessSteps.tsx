export default function ProcessSteps() {
    const steps = [
        {
            number: '01',
            title: 'Complete a Challenge',
            description: 'Prove your trading powers and complete a challenge or go straight to funded with Instant Funding. Choose any of our 400+ pair options.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Get Verified',
            description: 'If you\'re on the 2-step challenge, redo it with easier rules so we know the first trial wasn\'t just luck.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Become a Funded Trader',
            description: 'Congratulations! You\'ve got a simulated funded trading account and you can keep 80% of the profits you make.',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            number: '04',
            title: 'Get Paid',
            description: 'Set your payout preferences and withdraw at any time. Our payout frequency is every 10 business days!',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="how-it-works" className="section bg-neutral-50 dark:bg-neutral-900">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="mb-4">Real Trading Experience, Without the Risk</h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        You're four steps away from harnessing your trading skills. It's simple. Here's how it works:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Connecting Line (hidden on last item and mobile) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent-blue to-transparent -translate-x-1/2 z-0"></div>
                            )}

                            {/* Step Card */}
                            <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:border-accent-blue transition-all hover:shadow-xl h-full">
                                {/* Step Number */}
                                <div className="text-6xl font-bold gradient-text opacity-20 absolute top-4 right-4">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-white mb-4 relative z-10">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 relative z-10">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#challenges" className="btn btn-primary">
                        Start Your Journey
                    </a>
                </div>
            </div>
        </section>
    );
}
