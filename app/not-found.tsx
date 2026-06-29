import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-8xl font-bold text-emerald-400 mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
