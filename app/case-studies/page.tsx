"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesPage() {
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
                        Our Work
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mt-4 mb-6"
                    >
                        Case Studies
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400"
                    >
                        Real projects. Real results. Here&apos;s what we&apos;ve built.
                    </motion.p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="group block glass bento-card h-full hover:border-emerald-500/30 transition-all"
                                >
                                    {/* Status Badge */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                                            study.status === 'Live'
                                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                        }`}>
                                            {study.status}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-sm text-zinc-500 mb-3">{study.client}</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                        {study.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {study.techStack.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-xs px-2 py-1 rounded-md bg-white/5 text-zinc-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Metrics */}
                                    {study.metrics && (
                                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                                            {study.metrics.map((metric) => (
                                                <div key={metric.label} className="text-center">
                                                    <p className="text-emerald-400 font-bold text-sm">{metric.value}</p>
                                                    <p className="text-zinc-500 text-xs">{metric.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </Link>
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
                            Want to be our next case study?
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            Let&apos;s build something worth showing off.
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
