import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Upscale DV | Engineering Business Systems",
  description: "Upscale DV engineers human-centric systems and AI-driven strategies that turn bottlenecks into breakthroughs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-charcoal-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
