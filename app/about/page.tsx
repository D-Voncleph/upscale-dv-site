"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cloud, Smartphone, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
                        About Us
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mt-4 mb-6"
                    >
                        Systems Thinking. Shipped as Software.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed"
                    >
                        We believe systems architecture is the overarching discipline.
                        Web development and app development are the delivery vehicles.
                    </motion.p>
                </div>
            </section>

            {/* Founder */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8 md:p-12"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Meet <span className="text-emerald-400">Voncleph</span>
                        </h2>
                        <div className="space-y-4 text-zinc-400 leading-relaxed">
                            <p>
                                I&apos;m Layiwola Mustapha — but most people call me Voncleph. I&apos;m the
                                founder and lead developer at Upscale DV, based in Abuja, Nigeria.
                            </p>
                            <p>
                                My background is in DevOps and systems engineering, which means I don&apos;t
                                just build frontends — I think about the entire stack. From the database
                                schema to the CI/CD pipeline to the edge deployment, every layer matters.
                            </p>
                            <p>
                                I started Upscale DV because I kept seeing the same problem: businesses
                                with great ideas held back by poor tech execution. Template websites that
                                can&apos;t be customised. Apps that break under real traffic. Infrastructure
                                held together with duct tape.
                            </p>
                            <p>
                                I write about systems engineering, AI, and security in my weekly newsletter
                                — <strong className="text-white">Voncleph&apos;s Code Report</strong> — which
                                has grown to 800+ followers with posts reaching over 1,100 impressions.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* What We Do */}
            <section className="section-py px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        What We Do
                    </motion.h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Code, title: "Web Development", description: "Next.js, React, TypeScript — fast, accessible, SEO-first web applications." },
                            { icon: Smartphone, title: "Mobile Apps", description: "React Native cross-platform apps from one codebase." },
                            { icon: Cloud, title: "Cloud Architecture", description: "AWS, Vercel, Docker — infrastructure that scales automatically." },
                            { icon: Shield, title: "DevOps & Security", description: "CI/CD, monitoring, and security hardening built in from day one." },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass bento-card text-center"
                            >
                                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="w-6 h-6 text-emerald-400" />
                                </div>
                                <h3 className="font-semibold mb-2">{item.title}</h3>
                                <p className="text-zinc-400 text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold mb-12 text-center"
                    >
                        How We Think
                    </motion.h2>

                    <div className="space-y-6">
                        {[
                            { title: "Ship quality, not speed", description: "We won't cut corners to hit an arbitrary deadline. Every line of code gets reviewed. Every deployment gets tested." },
                            { title: "Own the entire stack", description: "Frontend, backend, infrastructure, deployment. We don't hand off problems — we solve them end to end." },
                            { title: "Build for the next version", description: "Every architecture decision considers what happens when your traffic 10x. No rewrites. No migrations." },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="flex gap-4 p-6 glass rounded-xl"
                            >
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1">{value.title}</h3>
                                    <p className="text-zinc-400">{value.description}</p>
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
                            Let&apos;s build something together
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            Whether you need a web app, mobile app, or cloud infrastructure — we&apos;re ready.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all"
                        >
                            Book a Call <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
