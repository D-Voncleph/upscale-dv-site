"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
    brand: {
        description: "Engineering the infrastructure of growth.",
        social: [
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: Github, href: "#", label: "GitHub" },
        ],
    },
    services: [
        { label: "AI Automation", href: "/services/ai-automation" },
        { label: "Digital Construction", href: "/services/digital-construction" },
        { label: "Business Architecture", href: "/services/business-architecture" },
    ],
    agency: [
        { label: "Labs", href: "/labs" },
        { label: "Manifesto", href: "/manifesto" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 bg-charcoal-900/50 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/logo.png"
                                    alt="UPSCALE DV Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                UPSCALE<span className="text-electric-400">DV</span>
                            </span>
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            {footerLinks.brand.description}
                        </p>
                        <div className="flex gap-4">
                            {footerLinks.brand.social.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-electric-400 hover:bg-white/10 transition-all"
                                >
                                    <item.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-electric-400 transition-colors flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Agency Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Agency</h3>
                        <ul className="space-y-3">
                            {footerLinks.agency.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-electric-400 transition-colors flex items-center gap-1 group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-zinc-400 hover:text-electric-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/5">
                            <p className="text-sm text-zinc-400 mb-3">Ready to scale?</p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center w-full px-4 py-2 bg-electric-400 text-charcoal-900 font-semibold rounded-lg hover:bg-electric-300 transition-colors"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">
                        &copy; {currentYear} UPSCALE DV. All rights reserved.
                    </p>
                    <p className="text-zinc-600 text-sm">
                        Built in Public. Shipped from the Future.
                    </p>
                </div>
            </div>
        </footer>
    );
}
