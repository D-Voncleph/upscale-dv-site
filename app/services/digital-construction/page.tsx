"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Server, Zap, Shield, Layers } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Globe,
        title: "Web Applications",
        description: "Modern, fast, and accessible web applications built with Next.js, React, and TypeScript.",
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Cross-platform mobile applications that deliver native-like experiences.",
    },
    {
        icon: Server,
        title: "Backend Systems",
        description: "Scalable APIs and serverless architectures that handle millions of requests.",
    },
];

const features = [
    {
        icon: Zap,
        title: "Performance First",
        description: "Every pixel optimized. We build for speed because performance is a feature.",
    },
    {
        icon: Shield,
        title: "Security Built-in",
        description: "Security isn't an afterthought. Every line of code is written with security in mind.",
    },
    {
        icon: Layers,
        title: "Modern Stack",
        description: "Next.js, Vercel, PostgreSQL, Redis. Best-in-class tools for best-in-class results.",
    },
];

export default function DigitalConstructionPage() {
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
                        <Globe className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">Digital Construction</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mb-6"
                    >
                        Build for the Future
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed mb-8"
                    >
                        We don't just write code—we architect digital experiences. Using
                        modern frameworks like Next.js and deployment on Vercel, we build
                        systems that scale without compromise.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                        >
                            Start a Project
                        </Link>
                        <Link
                            href="/labs"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 glass rounded-lg font-semibold hover:glass-hover transition-all"
                        >
                            View Our Work
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        What We Build
                    </motion.h2>

                    <div className="bento-grid">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass bento-card col-span-12 md:col-span-6 lg:col-span-4"
                            >
                                <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
                                    <service.icon className="w-7 h-7 text-emerald-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Tech Stack</h2>
                        <p className="text-zinc-400">Best-in-class tools for best-in-class results.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass bento-card"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech List */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8"
                    >
                        <h3 className="text-lg font-semibold mb-6 text-center">Technologies We Use</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Next.js",
                                "React",
                                "TypeScript",
                                "Vercel",
                                "Tailwind CSS",
                                "PostgreSQL",
                                "Redis",
                                "Prisma",
                                "Docker",
                                "AWS",
                                "Figma",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-white/5 rounded-lg text-sm text-zinc-300"
                                >
                                    {tech}
                                </span>
                            ))}
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
                            Have a project in mind?
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            Let's discuss how we can bring your vision to life.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                        >
                            Schedule Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
