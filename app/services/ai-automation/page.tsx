"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Bot, Workflow, Sparkles, MessageSquare, Layers } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Bot,
        title: "Custom AI Agents",
        description: "Build purpose-built AI agents that understand your business context and handle complex workflows autonomously.",
    },
    {
        icon: Workflow,
        title: "Workflow Automation",
        description: "Identify repetitive tasks and automate them with intelligent systems that learn and adapt.",
    },
    {
        icon: MessageSquare,
        title: "Conversational Interfaces",
        description: "Deploy chatbots and virtual assistants that feel human and deliver real value.",
    },
    {
        icon: Sparkles,
        title: "LLM Integration",
        description: "Leverage the latest large language models (Gemini, GPT-4) with custom fine-tuning for your domain.",
    },
    {
        icon: Layers,
        title: "System Integration",
        description: "Connect AI capabilities to your existing tools, databases, and workflows seamlessly.",
    },
];

export default function AIAutomationPage() {
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
                        <Cpu className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm font-medium text-emerald-400">AI Automation</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mb-6"
                    >
                        Multiply Your Team&apos;s Output
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed mb-8"
                    >
                        AI shouldn't replace your team—it should amplify them. We build
                        intelligent systems that handle the repetitive, freeing your people
                        to focus on the creative and strategic.
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
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Approach</h2>
                        <p className="text-zinc-400">
                            A human-centric approach to AI implementation.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            {
                                step: "01",
                                title: "Discovery & Analysis",
                                description: "We analyze your current workflows to identify where AI can have the biggest impact.",
                            },
                            {
                                step: "02",
                                title: "Design & Prototyping",
                                description: "Build a proof-of-concept to validate the approach before full implementation.",
                            },
                            {
                                step: "03",
                                title: "Implementation & Training",
                                description: "Deploy the solution and train your team to work effectively with AI.",
                            },
                            {
                                step: "04",
                                title: "Optimization & Scaling",
                                description: "Continuously improve the system and expand AI capabilities across your organization.",
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
                            Ready to amplify your team's capabilities?
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            Let's identify the highest-impact opportunities for AI in your organization.
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
