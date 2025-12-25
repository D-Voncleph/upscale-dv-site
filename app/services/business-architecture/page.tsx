"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, TrendingUp, Users, Target, Layers } from "lucide-react";
import Link from "next/link";

const capabilities = [
    {
        icon: TrendingUp,
        title: "Process Optimization",
        description: "Map, analyze, and optimize your workflows to eliminate bottlenecks and accelerate output.",
    },
    {
        icon: Users,
        title: "Team Structuring",
        description: "Design team structures that scale effectively and maximize productivity.",
    },
    {
        icon: Target,
        title: "Growth Strategy",
        description: "Develop actionable roadmaps for sustainable growth without the chaos.",
    },
];

const approach = [
    {
        title: "Diagnose",
        description: "Deep analysis of your current state to identify the highest-impact opportunities.",
    },
    {
        title: "Design",
        description: "Create a tailored blueprint for your organization's ideal future state.",
    },
    {
        title: "Implement",
        description: "Guide the transformation with hands-on support and change management.",
    },
    {
        title: "Measure",
        description: "Track KPIs and iterate to ensure sustainable improvement.",
    },
];

export default function BusinessArchitecturePage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6"
                    >
                        <Building2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">Business Architecture</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mb-6"
                    >
                        Eliminate the Bottlenecks
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed mb-8"
                    >
                        Most businesses don't fail because of competition—they fail because
                        their own processes strangle their growth. We re-engineer your
                        organization for scale.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="/audit"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                        >
                            Get Free Assessment
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 glass rounded-lg font-semibold hover:glass-hover transition-all"
                        >
                            Schedule Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        What We Address
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass bento-card"
                            >
                                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                                    <cap.icon className="w-7 h-7 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{cap.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Who We Work With
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                                    Global Enterprises
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Complex organizations requiring sophisticated system
                                    integration and change management. We help you scale
                                    without losing agility.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-3 text-emerald-400">
                                    Nigerian SMEs
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    Growing businesses ready to professionalize. We build
                                    the infrastructure for sustainable growth without
                                    the bloat.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        Our Approach
                    </motion.h2>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-emerald-500/20 hidden md:block" />

                        {approach.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-6 mb-8 last:mb-0 relative"
                            >
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center hidden md:flex">
                                    <span className="text-emerald-400 font-bold">{index + 1}</span>
                                </div>
                                <div className="glass rounded-xl p-6 flex-1">
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-zinc-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-py px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-2xl font-bold mb-4">
                            Ready to restructure for scale?
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            Take our assessment to identify your biggest bottlenecks.
                        </p>
                        <Link
                            href="/audit"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                        >
                            Start Free Audit <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
