"use client";

import { motion } from "framer-motion";
import { ArrowRight, Server, Shield, GitBranch, Cloud, Activity, Lock } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "AWS, Vercel, and containerised deployments with Docker. Auto-scaling infrastructure that handles traffic spikes without breaking a sweat.",
    },
    {
        icon: GitBranch,
        title: "CI/CD Pipelines",
        description: "Automated build, test, and deploy pipelines with GitHub Actions. Push to main, deploy to production in minutes.",
    },
    {
        icon: Shield,
        title: "Security & Compliance",
        description: "Environment hardening, secret management, HTTPS everywhere, and regular vulnerability scanning.",
    },
    {
        icon: Activity,
        title: "Monitoring & Observability",
        description: "Real-time dashboards, error tracking with Sentry, uptime monitoring, and performance alerting.",
    },
    {
        icon: Lock,
        title: "DevOps Automation",
        description: "Infrastructure as code, automated backups, disaster recovery plans, and zero-downtime deployments.",
    },
];

export default function SystemsArchitecturePage() {
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
                        <Server className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">Systems Architecture</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mb-6"
                    >
                        The Engine Behind Your Products
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed mb-8"
                    >
                        Cloud infrastructure, CI/CD pipelines, and DevOps automation.
                        We build the invisible systems that keep your products fast, secure, and always online.
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
                            Get Started
                        </Link>
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 glass rounded-lg font-semibold hover:glass-hover transition-all"
                        >
                            See Our Work
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        What We Engineer
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Infrastructure Stack</h2>
                        <p className="text-zinc-400">
                            Battle-tested tools and platforms we rely on.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["AWS", "Vercel", "Docker", "GitHub Actions", "Terraform", "Sentry", "PostgreSQL", "Redis"].map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="glass rounded-xl p-4 text-center font-medium text-sm"
                            >
                                {tech}
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
                            Ready to build infrastructure that scales?
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            Let&apos;s architect a system that grows with your business.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                        >
                            Start a Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
