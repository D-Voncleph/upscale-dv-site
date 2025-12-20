"use client";

import { motion } from "framer-motion";
import { Building2, FlaskConical, User } from "lucide-react";
import Link from "next/link";

const pillars = [
    {
        title: "Upscale Corporate",
        icon: Building2,
        description:
            "Strategic automation and efficiency audits for SMEs and Global Enterprises. We don't just fix processes; we re-engineer them for scale.",
        href: "#corporate",
        color: "from-blue-500 to-electric-600",
    },
    {
        title: "Upscale Professional",
        icon: User,
        description:
            "Personalized career architecture and digital literacy. We provide the strategies you need to upscale your professional and academic trajectory.",
        href: "#professional",
        color: "from-emerald-400 to-teal-600",
    },
    {
        title: "Upscale Labs",
        icon: FlaskConical,
        description:
            "Our internal innovation hub. Home to proprietary tools like the EEC Onboarding App and the Offensive Accountability Partner.",
        href: "#labs",
        color: "from-purple-500 to-pink-600",
        id: "labs",
    },
];

export function PillarsSection() {
    return (
        <section className="py-24 px-6 relative bg-charcoal-900 border-t border-charcoal-800">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        The Ecosystem
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            id={pillar.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-panel p-8 rounded-2xl relative group overflow-hidden"
                        >
                            <div
                                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} opacity-5 blur-[50px] group-hover:opacity-20 transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-gray-800/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <pillar.icon className="w-7 h-7 text-gray-200" />
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white">
                                    {pillar.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed mb-6">
                                    {pillar.description}
                                </p>

                                {pillar.id === "labs" && (
                                    <div className="text-xs font-mono text-electric-400 bg-electric-400/10 inline-block px-2 py-1 rounded">
                                        PROPRIETARY
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
