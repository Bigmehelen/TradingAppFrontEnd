interface ChallengeCardProps {
    type: string;
    badge?: string;
    accountSizes: string[];
    features: string[];
    popular?: boolean;
}

export default function ChallengeCard({ type, badge, accountSizes, features, popular }: ChallengeCardProps) {
    return (
        <div className={`card relative ${popular ? 'gradient-border' : ''}`}>
            {popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="gradient-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                    </span>
                </div>
            )}

            {badge && (
                <div className="inline-block gradient-secondary text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {badge}
                </div>
            )}

            <h3 className="text-2xl font-bold mb-4">{type}</h3>

            <div className="mb-6">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Account Sizes:</p>
                <div className="flex flex-wrap gap-2">
                    {accountSizes.map((size, index) => (
                        <span
                            key={index}
                            className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                            {size}
                        </span>
                    ))}
                </div>
            </div>

            <ul className="space-y-3 mb-8">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-success flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">{feature}</span>
                    </li>
                ))}
            </ul>

            <a href="#get-started" className={`btn ${popular ? 'btn-primary' : 'btn-secondary'} w-full`}>
                Choose Plan
            </a>
        </div>
    );
}
