"use client";

import { motion } from "framer-motion";
import { ArrowRight, Beaker } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-electric-400/5 rounded-full blur-[120px]" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            </div>

            <div className="max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block mb-6 px-4 py-1.5 rounded-full border border-electric-400/30 bg-electric-400/5 backdrop-blur-sm"
                >
                    <span className="text-electric-400 text-sm font-semibold tracking-wider uppercase">
                        Systematize & Scale
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight"
                >
                    Growth isn’t a goal. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-electric-400 to-electric-blue">
                        It’s infrastructure.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light"
                >
                    Welcome to your Agency. UPSCALE DV engineers human-centric systems and
                    AI-driven strategies that turn bottlenecks into breakthroughs.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/audit"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-charcoal-900 transition-all duration-200 bg-electric-400 rounded-lg hover:bg-electric-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] focus:ring-2 focus:ring-offset-2 focus:ring-electric-400 focus:outline-hidden"
                    >
                        Launch Your Upscale Audit
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="#labs"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-charcoal-800 border border-charcoal-700 rounded-lg hover:bg-charcoal-700 hover:border-electric-400/50"
                    >
                        <Beaker className="w-5 h-5 mr-2" />
                        Explore Our Labs
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
