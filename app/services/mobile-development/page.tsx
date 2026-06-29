"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Layers, Zap, Download, Code, Wifi } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Smartphone,
        title: "React Native Apps",
        description: "Cross-platform mobile applications from a single TypeScript codebase. iOS and Android, built simultaneously.",
    },
    {
        icon: Wifi,
        title: "Progressive Web Apps",
        description: "Installable web apps with offline support, push notifications, and native-like performance in the browser.",
    },
    {
        icon: Download,
        title: "App Store Deployment",
        description: "Full lifecycle management from development through Apple App Store and Google Play Store submission and approval.",
    },
    {
        icon: Code,
        title: "API & Backend Integration",
        description: "Seamless connection to REST and GraphQL APIs, real-time data sync, and secure authentication flows.",
    },
    {
        icon: Layers,
        title: "Offline-First Architecture",
        description: "Apps that work without internet. Local data storage, background sync, and conflict resolution built in.",
    },
];

export default function MobileDevelopmentPage() {
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
                        <Smartphone className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">Mobile &amp; App Development</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mb-6"
                    >
                        One Codebase. Every Platform.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed mb-8"
                    >
                        Cross-platform mobile apps built with React Native. From MVP to
                        app store deployment — we ship apps that users love and businesses rely on.
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
                        What We Build
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

            {/* Process */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Process</h2>
                        <p className="text-zinc-400">
                            From idea to app store in weeks, not months.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: "01",
                                title: "Discovery & Wireframing",
                                description: "We map out your app's features, user flows, and technical requirements before writing a single line of code.",
                            },
                            {
                                step: "02",
                                title: "Design & Prototyping",
                                description: "Interactive Figma prototypes you can click through and share with stakeholders for feedback.",
                            },
                            {
                                step: "03",
                                title: "Development & Testing",
                                description: "Agile sprints with weekly demos. Automated testing on real devices ensures quality at every stage.",
                            },
                            {
                                step: "04",
                                title: "Launch & Support",
                                description: "App store submission, launch strategy, and ongoing maintenance to keep your app running smoothly.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-6 p-6 glass rounded-xl"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                                    <span className="text-emerald-400 font-bold">{item.step}</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                                    <p className="text-zinc-400">{item.description}</p>
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
                            Ready to build your mobile app?
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            Let&apos;s turn your idea into an app your users will love.
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
