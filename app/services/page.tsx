"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, Building2, Layers, Zap, Target } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "AI Automation",
        description: "LLM integration, workflow optimization, and custom agent builds that multiply your team's output.",
        icon: Cpu,
        href: "/services/ai-automation",
        features: ["Custom AI Agents", "Workflow Automation", "Integration Services"],
    },
    {
        title: "Digital Construction",
        description: "High-end web and application development using Vercel, Next.js, and modern frameworks.",
        icon: Globe,
        href: "/services/digital-construction",
        features: ["Web Applications", "Mobile Apps", "System Architecture"],
    },
    {
        title: "Business Architecture",
        description: "Eliminating bottlenecks through structural re-engineering and process optimization.",
        icon: Building2,
        href: "/services/business-architecture",
        features: ["Process Optimization", "Team Structuring", "Growth Strategy"],
    },
];

const capabilities = [
    {
        title: "System Integration",
        description: "Connect your existing tools into a cohesive workflow ecosystem.",
        icon: Layers,
    },
    {
        title: "Performance Engineering",
        description: "Optimize every layer of your digital infrastructure for speed and scale.",
        icon: Zap,
    },
    {
        title: "Strategic Consulting",
        description: "Expert guidance on technology decisions and digital transformation.",
        icon: Target,
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-emerald-400 font-medium tracking-wider uppercase text-sm"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mt-4 mb-6"
                    >
                        Services Built for Scale
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400"
                    >
                        We don't just build solutions. We engineer systems that scale
                        with your ambition.
                    </motion.p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
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
                                <p className="text-zinc-400 leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2 text-sm text-zinc-300"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={service.href}
                                    className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:gap-3 transition-all"
                                >
                                    Explore {service.title} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="section-py px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Core Capabilities
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            The underlying technologies and methodologies that power every project.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass bento-card text-center"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                                    <cap.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{cap.title}</h3>
                                <p className="text-zinc-400 text-sm">{cap.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-12 md:p-16 text-center"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Not sure where to start?
                        </h2>
                        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                            Take our AI-powered audit to identify your biggest bottlenecks
                            and get a customized roadmap.
                        </p>
                        <Link
                            href="/audit"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all"
                        >
                            Start Free Audit
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
