"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/case-studies";
import { use } from "react";

export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) notFound();

    return (
        <div className="min-h-screen">
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Back Link */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link
                            href="/case-studies"
                            className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                                study.status === 'Live'
                                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}>
                                {study.status}
                            </span>
                            <span className="text-zinc-500 text-sm">{study.client}</span>
                        </div>
                        <h1 className="heading-display mb-4">{study.title}</h1>
                        <p className="text-xl text-zinc-400 leading-relaxed">{study.description}</p>
                    </motion.div>

                    {/* Metrics */}
                    {study.metrics && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-3 gap-4 mb-12"
                        >
                            {study.metrics.map((metric) => (
                                <div key={metric.label} className="glass rounded-xl p-6 text-center">
                                    <p className="text-2xl md:text-3xl font-bold text-emerald-400 mb-1">{metric.value}</p>
                                    <p className="text-zinc-400 text-sm">{metric.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Challenge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8 mb-6"
                    >
                        <h2 className="text-xl font-bold mb-4 text-emerald-400">The Challenge</h2>
                        <p className="text-zinc-400 leading-relaxed">{study.challenge}</p>
                    </motion.div>

                    {/* Solution */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8 mb-6"
                    >
                        <h2 className="text-xl font-bold mb-4 text-emerald-400">The Solution</h2>
                        <p className="text-zinc-400 leading-relaxed">{study.solution}</p>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8 mb-12"
                    >
                        <h2 className="text-xl font-bold mb-4 text-emerald-400">Tech Stack</h2>
                        <div className="flex flex-wrap gap-3">
                            {study.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all"
                        >
                            Start a Similar Project <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
