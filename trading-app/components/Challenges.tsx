import ChallengeCard from './ChallengeCard';

export default function Challenges() {
    const challenges = [
        {
            type: '1-Step Challenge',
            badge: 'FASTEST',
            accountSizes: ['$5K', '$10K', '$25K', '$50K', '$100K', '$200K'],
            features: [
                'Single evaluation phase',
                '8% profit target',
                '5% max daily loss',
                '10% max total loss',
                'Keep 80% of profits',
                'Unlimited trading days',
            ],
        },
        {
            type: '2-Step Challenge',
            popular: true,
            accountSizes: ['$5K', '$10K', '$25K', '$50K', '$100K', '$200K'],
            features: [
                'Two evaluation phases',
                'Phase 1: 8% profit target',
                'Phase 2: 5% profit target',
                '5% max daily loss',
                '10% max total loss',
                'Keep 80% of profits',
            ],
        },
        {
            type: '3-Step Challenge',
            accountSizes: ['$5K', '$10K', '$25K', '$50K', '$100K'],
            features: [
                'Three evaluation phases',
                'Easier profit targets',
                '5% max daily loss',
                '10% max total loss',
                'Keep 80% of profits',
                'More time to prove skills',
            ],
        },
        {
            type: 'Instant Funding',
            badge: 'NO CHALLENGE',
            accountSizes: ['$5K', '$10K', '$25K', '$50K'],
            features: [
                'Skip the evaluation',
                'Start trading immediately',
                '5% max daily loss',
                '10% max total loss',
                'Keep 80% of profits',
                'Perfect for experienced traders',
            ],
        },
    ];

    return (
        <section id="challenges" className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="mb-4">Choose Your Challenge</h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Choose your account size to begin your trading journey with us. All challenges include access to 400+ trading pairs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <ChallengeCard {...challenge} />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Not sure which challenge to choose?</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                            Our team is here to help you find the perfect challenge based on your trading experience and goals.
                        </p>
                        <a href="#" className="btn btn-secondary">
                            Talk to an Expert
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
