"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log to error tracking service (Sentry integration later)
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-400 mb-4">Error</h1>
                <h2 className="text-2xl font-semibold mb-4">Something went wrong</h2>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                    An unexpected error occurred. Please try again or contact us if the problem persists.
                </p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                    >
                        Try Again
                    </button>
                    <Link
                        href="/"
                        className="px-6 py-3 glass rounded-lg font-semibold hover:glass-hover transition-all"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
