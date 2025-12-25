"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function ManifestoPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="min-h-[80vh] flex items-center justify-center px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-emerald-400 font-medium tracking-wider uppercase text-sm"
                    >
                        The Soul of Upscale DV
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mt-4 mb-8"
                    >
                        We Build for Humans
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        Technology should serve people, not the other way around. Here's
                        what we believe.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-16"
                    >
                        <ArrowDown className="w-6 h-6 text-zinc-600 mx-auto animate-bounce" />
                    </motion.div>
                </div>
            </section>

            {/* Manifesto Sections */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto space-y-32">
                    {/* Section 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Human-Centric Design
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                            We believe that the best technology is invisible. It works in the
                            background, anticipating needs without demanding attention.
                        </p>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            Most "solutions" in the market force people to adapt to their
                            limitations. We do things differently. We study how people
                            actually work—the shortcuts they take, the workarounds they
                            invent—and we build systems that match those natural behaviors.
                        </p>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Low-Friction Systems
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                            Complexity is the enemy of execution. Every unnecessary step,
                            every redundant approval, every manual handoff—it all adds up.
                        </p>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            We obsess over friction. We ask: "How can we reduce this from
                            five steps to one?" Not because we're lazy, but because we know
                            that friction kills momentum. The easier it is to do the right
                            thing, the more likely it gets done.
                        </p>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Sustainable Scale
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                            Growth shouldn't require proportional suffering. The traditional
                            model—more growth means more stress, more hours, more chaos—is
                            fundamentally broken.
                        </p>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            We build infrastructure that scales elegantly. Systems that handle
                            ten customers or ten thousand without requiring complete rewrites.
                            Processes that amplify human capability rather than replace it.
                            This is what sustainable scale looks like.
                        </p>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Global Enterprise, Local Heart
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                            We serve both the Fortune 500 and the Lagos SME. The principles
                            that create efficiency are universal—even if the implementation
                            varies by context.
                        </p>
                        <p className="text-lg text-zinc-500 leading-relaxed">
                            Our roots are in Nigeria, but our reach is global. We understand
                            what it means to build in emerging markets, where resources are
                            precious and every investment must show returns. This grounding
                            informs everything we build.
                        </p>
                    </motion.div>

                    {/* Closing */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            This Is Upscale DV
                        </h2>
                        <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
                            Not just an agency. Not just a consultancy. A partner in building
                            systems that work for humans, scale without friction, and deliver
                            real results.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-3xl p-12 md:p-20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to build something meaningful?
                            </h2>
                            <p className="text-xl text-zinc-400 mb-10 max-w-xl mx-auto">
                                Let's create systems that serve people and scale sustainably.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="/audit"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition-all"
                                >
                                    Start With an Audit
                                </a>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-xl font-semibold hover:glass-hover transition-all"
                                >
                                    Let's Talk
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
