"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield, Globe, Beaker, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />

            {/* Problem Section */}
            <ProblemSection />

            {/* Solution Section - The Upscale Methodology */}
            <SolutionSection />

            {/* Three Pillars */}
            <PillarsSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
}

function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8"
                >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium text-emerald-400">
                        Engineering Business Systems
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="heading-display mb-8 tracking-tight"
                >
                    Growth isn&apos;t a goal. <br />
                    <span className="text-gradient">It&apos;s infrastructure.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    We engineer human-centric systems and AI-driven strategies that turn
                    bottlenecks into breakthroughs. For enterprises and SMEs who refuse
                    to compromise.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/audit"
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
                    >
                        Start Your Audit
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:glass-hover transition-all"
                    >
                        Explore Services
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ChevronDown className="w-6 h-6 text-zinc-600 animate-bounce" />
            </motion.div>
        </section>
    );
}

function ProblemSection() {
    return (
        <section className="section-py px-6 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Your Business Isn&apos;t Broken. <br />
                        <span className="text-zinc-500">Your Processes Are.</span>
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed">
                        Most organizations aren&apos;t held back by market conditions or competition.
                        They&apos;re strangled by legacy workflows, manual bottlenecks, and systems
                        that scale linearly with effort.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "The Chaos Tax",
                            description: "Every manual process compounds complexity. Your team spends more time managing the work than doing the work.",
                            icon: Zap,
                        },
                        {
                            title: "The Visibility Gap",
                            description: "You can't optimize what you can't measure. Scattered data means scattered decisions.",
                            icon: Globe,
                        },
                        {
                            title: "The Scale Ceiling",
                            description: "Growth that requires proportional hiring isn't growth—it's just more work. There's a better way.",
                            icon: Shield,
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass bento-card"
                        >
                            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                                <item.icon className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SolutionSection() {
    return (
        <section className="section-py px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-emerald-400 font-medium tracking-wider uppercase text-sm">
                        The Upscale Methodology
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
                        Human-Centric. Low-Friction. Sustainable.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {[
                            {
                                title: "Human-First Design",
                                description: "We build systems around how people actually work, not how spreadsheets think they should.",
                            },
                            {
                                title: "Automation as Amplification",
                                description: "AI should multiply your team's output, not replace your team's judgment.",
                            },
                            {
                                title: "Sustainable Scale",
                                description: "Infrastructure that grows with you. No rewrites. No migrations. No chaos.",
                            },
                        ].map((item, index) => (
                            <div key={item.title} className="flex gap-4">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                    <p className="text-zinc-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass rounded-2xl p-8 border-emerald-500/20"
                    >
                        <div className="space-y-4">
                            {["Identify", "Analyze", "Architect", "Implement", "Optimize"].map(
                                (step, index) => (
                                    <div
                                        key={step}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                            <span className="text-emerald-400 font-bold">{index + 1}</span>
                                        </div>
                                        <span className="font-medium">{step}</span>
                                    </div>
                                )
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function PillarsSection() {
    const pillars = [
        {
            title: "Upscale Corporate",
            description: "Strategic automation and efficiency audits for SMEs and Global Enterprises. We don't just fix processes; we re-engineer them for scale.",
            href: "/services/business-architecture",
            icon: Beaker,
            size: "col-span-12 md:col-span-6 lg:col-span-4",
        },
        {
            title: "Upscale Professional",
            description: "Personalized career architecture and digital literacy strategies for professionals ready to level up.",
            href: "/services",
            icon: Globe,
            size: "col-span-12 md:col-span-6 lg:col-span-4",
        },
        {
            title: "Upscale Labs",
            description: "Our innovation hub. Proprietary tools and experiments that push what's possible.",
            href: "/labs",
            icon: Zap,
            size: "col-span-12 lg:col-span-4",
        },
    ];

    return (
        <section className="section-py px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    The Ecosystem
                </motion.h2>

                <div className="bento-grid">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`glass bento-card ${pillar.size}`}
                        >
                            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                                <pillar.icon className="w-7 h-7 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                            <p className="text-zinc-400 leading-relaxed mb-6">{pillar.description}</p>
                            <Link
                                href={pillar.href}
                                className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all"
                            >
                                Learn more <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="section-py px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Ready to systematize and scale?
                        </h2>
                        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                            Let's identify your bottlenecks and build the infrastructure
                            for sustainable growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/audit"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all"
                            >
                                Start Free Audit
                            </Link>
                            <Link
                                href="/manifesto"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:glass-hover transition-all"
                            >
                                Read Our Manifesto
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
