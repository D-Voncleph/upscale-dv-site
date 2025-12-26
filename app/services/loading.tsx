export default function ServicesLoading() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Skeleton */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6 h-9 w-32 animate-pulse" />

                    <div className="h-16 bg-charcoal-800 rounded-xl max-w-2xl mx-auto mb-6 animate-pulse" />

                    <div className="h-6 bg-charcoal-800 rounded-xl max-w-3xl mx-auto mb-12 animate-pulse" style={{ width: "80%" }} />
                </div>
            </section>

            {/* Bento Grid Skeleton */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bento-grid">
                        {/* Large Card */}
                        <div className="glass bento-card col-span-12 md:col-span-8 p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-charcoal-700 animate-pulse" />
                                <div className="h-6 w-20 rounded-full bg-charcoal-700 animate-pulse" />
                            </div>
                            <div className="h-7 w-48 bg-charcoal-700 rounded mb-3 animate-pulse" />
                            <div className="h-4 w-full bg-charcoal-800 rounded mb-2 animate-pulse" />
                            <div className="h-4 w-3/4 bg-charcoal-800 rounded mb-4 animate-pulse" />
                            <div className="h-4 w-24 bg-charcoal-700 rounded animate-pulse" />
                        </div>

                        {/* Small Card 1 */}
                        <div className="glass bento-card col-span-12 md:col-span-4 p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-charcoal-700 animate-pulse" />
                                <div className="h-6 w-20 rounded-full bg-charcoal-700 animate-pulse" />
                            </div>
                            <div className="h-7 w-40 bg-charcoal-700 rounded mb-3 animate-pulse" />
                            <div className="h-4 w-full bg-charcoal-800 rounded mb-2 animate-pulse" />
                            <div className="h-4 w-4/5 bg-charcoal-800 rounded animate-pulse" />
                        </div>

                        {/* Medium Card 1 */}
                        <div className="glass bento-card col-span-12 md:col-span-6 p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-charcoal-700 animate-pulse" />
                                <div className="h-6 w-20 rounded-full bg-charcoal-700 animate-pulse" />
                            </div>
                            <div className="h-7 w-40 bg-charcoal-700 rounded mb-3 animate-pulse" />
                            <div className="h-4 w-full bg-charcoal-800 rounded mb-2 animate-pulse" />
                            <div className="h-4 w-4/5 bg-charcoal-800 rounded animate-pulse" />
                        </div>

                        {/* Medium Card 2 */}
                        <div className="glass bento-card col-span-12 md:col-span-6 p-8">
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 rounded-xl bg-charcoal-700 animate-pulse" />
                                <div className="h-6 w-20 rounded-full bg-charcoal-700 animate-pulse" />
                            </div>
                            <div className="h-7 w-40 bg-charcoal-700 rounded mb-3 animate-pulse" />
                            <div className="h-4 w-full bg-charcoal-800 rounded mb-2 animate-pulse" />
                            <div className="h-4 w-4/5 bg-charcoal-800 rounded animate-pulse" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
