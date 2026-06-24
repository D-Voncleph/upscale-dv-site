import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL('https://upscaledv.com'),
    title: {
        default: 'UPSCALE DV | Web & App Development',
        template: '%s | UPSCALE DV',
    },
    description: 'UPSCALE DV designs and ships custom web applications, mobile apps, and cloud-native systems for businesses that refuse to stay small.',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://upscaledv.com',
        siteName: 'UPSCALE DV',
        title: 'UPSCALE DV | Web & App Development',
        description: 'Custom web apps, mobile apps, and cloud architecture.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'UPSCALE DV | Web & App Development',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} font-sans antialiased bg-zinc-950 text-foreground selection:bg-emerald-500/20 selection:text-emerald-400`}
            >
                <div className="relative min-h-screen">
                    {/* Background mesh gradient */}
                    <div className="fixed inset-0 -z-10 bg-mesh" />
                    <div className="fixed inset-0 -z-10 bg-grid-pattern opacity-20" />

                    <Navigation />

                    <main className="pt-16 min-h-[calc(100vh-4rem)]">{children}</main>

                    <Footer />
                </div>
            </body>
        </html>
    );
}
