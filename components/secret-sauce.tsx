"use client";

import { motion } from "framer-motion";

export function SecretSauceSection() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-charcoal-900 border-t border-charcoal-800">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-8">
                        Sophisticated Tech. <br />
                        <span className="text-electric-400">Human Simplicity.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                        Most agencies build systems that are too complex to maintain.
                        At Upscale DV, we prioritize <span className="text-white font-medium">"Low-Friction Growth."</span> If a solution isn't easy to stick to, it isn't a solution.
                    </p>
                </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-400/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
        </section>
    );
}
