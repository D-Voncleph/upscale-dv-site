import { Wizard } from "@/components/upscale-tool/wizard";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function UpscaleToolPage() {
    return (
        <main className="min-h-screen bg-charcoal-900 text-foreground flex flex-col px-6 py-12">
            <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col">
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>
                    <h1 className="text-3xl font-bold">Upscale Strategic Agent</h1>
                    <p className="text-gray-400">Answer one question at a time. Let's find your friction.</p>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <Wizard />
                </div>
            </div>
        </main>
    );
}
