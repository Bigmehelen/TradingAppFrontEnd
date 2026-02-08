export default function Testimonials() {
    const testimonials = [
        {
            quote: "Everything goes smooth, from passing your challenge to getting your funded account.",
            author: "Jennifer H.",
            role: "Funded Trader",
            rating: 5,
        },
        {
            quote: "Without a doubt, a very simple, reliable prop firm without hidden rules.",
            author: "James S.",
            role: "Professional Trader",
            rating: 5,
        },
        {
            quote: "The speed between requesting the payout until it was approved was incredible.",
            author: "Nzewuihe A.",
            role: "Funded Trader",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="mb-4">Don't Just Take Our Word for It</h2>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                        Hear from our traders around the world why they chose TradePro
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl p-8 animate-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-warning"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-lg font-medium mb-6 text-neutral-700 dark:text-neutral-300">
                                "{testimonial.quote}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-semibold text-neutral-900 dark:text-white">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-sm text-neutral-500 dark:text-neutral-400">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="inline-flex items-center gap-2 text-accent-blue hover:text-accent-purple transition-colors font-medium">
                        Join our community
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
