export default function AuditLoading() {
    return (
        <div className="min-h-screen pt-20">
            <section className="section-py px-6">
                <div className="max-w-2xl mx-auto">
                    {/* Header Skeleton */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="h-6 w-48 bg-charcoal-800 rounded animate-pulse" />
                        <div className="h-8 w-24 bg-charcoal-800 rounded-lg animate-pulse" />
                    </div>

                    {/* Chat Container Skeleton */}
                    <div className="border border-zinc-800 bg-zinc-950/50 rounded-2xl overflow-hidden">
                        {/* Chat Area */}
                        <div className="h-[500px] p-6 space-y-6">
                            {/* Welcome Message */}
                            <div className="flex gap-3">
                                <div className="w-8 h-8 rounded-full bg-charcoal-800 flex-shrink-0 animate-pulse" />
                                <div className="space-y-2 flex-1">
                                    <div className="h-4 w-3/4 bg-charcoal-800 rounded animate-pulse" />
                                    <div className="h-4 w-1/2 bg-charcoal-800 rounded animate-pulse" />
                                </div>
                            </div>

                            {/* Input Area Skeleton */}
                            <div className="flex gap-3 mt-8">
                                <div className="flex-1 h-12 bg-charcoal-800 rounded-xl animate-pulse" />
                                <div className="w-12 h-12 bg-charcoal-800 rounded-xl animate-pulse" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Prompts Skeleton */}
                    <div className="mt-6 grid gap-3">
                        <div className="h-12 bg-charcoal-800/50 rounded-xl animate-pulse" />
                        <div className="h-12 bg-charcoal-800/50 rounded-xl animate-pulse" />
                        <div className="h-12 bg-charcoal-800/50 rounded-xl animate-pulse" />
                    </div>
                </div>
            </section>
        </div>
    );
}
