import UpscaleAudit from "@/components/UpscaleAudit";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function AuditPage() {
    return (
        <main className="min-h-screen bg-charcoal-900 text-foreground selection:bg-electric-400 selection:text-charcoal-900 flex flex-col items-center justify-center p-4">

            <div className="w-full max-w-2xl mb-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
                    <MoveLeft size={16} />
                    Back to Home
                </Link>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                    Upscale Console
                </h1>
            </div>

            <UpscaleAudit />
        </main>
    );
}
