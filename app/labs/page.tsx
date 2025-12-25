"use client";

import { motion } from "framer-motion";
import { ArrowRight, Beaker, Zap, Target, ExternalLink } from "lucide-react";
import Link from "next/link";

const products = [
    {
        title: "EEC Onboarding App",
        description: "B2B SaaS solution for Whop creators. Streamline onboarding, automate workflows, and scale your creator business.",
        icon: Target,
        status: "Live",
        statusColor: "bg-emerald-500/20 text-emerald-400",
        href: "#",
        size: "col-span-12 md:col-span-8",
    },
    {
        title: "Accountability Partner",
        description: "Our offensive motivational tool. AI-powered accountability coaching that keeps you on track.",
        icon: Zap,
        status: "In Development",
        statusColor: "bg-yellow-500/20 text-yellow-400",
        href: "#",
        size: "col-span-12 md:col-span-4",
    },
    {
        title: "Upscale Audit Tool",
        description: "The AI-powered diagnostic platform you're using right now. Identify bottlenecks and get actionable strategies.",
        icon: Beaker,
        status: "Live",
        statusColor: "bg-emerald-500/20 text-emerald-400",
        href: "/audit",
        size: "col-span-12 md:col-span-6",
    },
    {
        title: "Growth Infrastructure",
        description: "Internal systems and automation frameworks that power our consulting practice.",
        icon: Target,
        status: "Internal",
        statusColor: "bg-blue-500/20 text-blue-400",
        href: "#",
        size: "col-span-12 md:col-span-6",
    },
];

export default function LabsPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6"
                    >
                        <Beaker className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">Innovation Hub</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mb-6"
                    >
                        Built in Public
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        Upscale Labs is where we experiment, fail fast, and build the
                        tools we wish existed. Some stay internal. Some become products.
                        All are built with the same philosophy: human-centric, low-friction,
                        sustainable.
                    </motion.p>
                </div>
            </section>

            {/* Bento Grid */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="bento-grid">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`glass bento-card ${product.size} group relative overflow-hidden`}
                            >
                                {/* Gradient orb */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[50px] group-hover:bg-emerald-500/10 transition-colors" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                                            <product.icon className="w-6 h-6 text-emerald-400" />
                                        </div>
                                        <span
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${product.statusColor}`}
                                        >
                                            {product.status}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        {product.description}
                                    </p>

                                    {product.href !== "#" && (
                                        <Link
                                            href={product.href}
                                            className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm hover:gap-3 transition-all"
                                        >
                                            {product.status === "Live" ? "Launch" : "Learn more"}{" "}
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            Lab Philosophy
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">1%</span>
                                </div>
                                <h3 className="font-semibold mb-2">Ship Fast</h3>
                                <p className="text-zinc-400 text-sm">
                                    Iterate quickly. Launch imperfectly. Improve relentlessly.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                                    <Target className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="font-semibold mb-2">Solve Real Problems</h3>
                                <p className="text-zinc-400 text-sm">
                                    We build what we need. If others need it too, that's a product.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                                    <Zap className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="font-semibold mb-2">Open Source</h3>
                                <p className="text-zinc-400 text-sm">
                                    We share what we learn. Knowledge compounds when shared.
                                </p>
                            </div>
                        </div>
                    </motion.div>
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
                            Want to follow our journey?
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            We're building in public. Join us as we ship new tools and experiments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/manifesto"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                            >
                                Read Our Manifesto
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 glass rounded-lg font-semibold hover:glass-hover transition-all"
                            >
                                Partner With Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
