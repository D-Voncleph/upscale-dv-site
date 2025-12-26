"use client";

import { motion } from "framer-motion";
import { Send, User, Building2, Target, Zap } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        role: "",
        growthGoal: "",
        bottleneck: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-py px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-500/20 bg-electric-500/5 mb-6"
                    >
                        <Zap className="w-4 h-4 text-electric-400" />
                        <span className="text-sm font-medium text-electric-400">
                            Consultation Entry Point
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="heading-display mb-6"
                    >
                        Let&apos;s Build the Future of Your Infrastructure
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        This isn&apos;t just a form. It&apos;s the first step in transforming
                        your bottlenecks into breakthroughs. Tell us about your challenges,
                        and we&apos;ll architect a solution.
                    </motion.p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 px-6">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8 md:p-10"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 rounded-full bg-electric-500/20 flex items-center justify-center mx-auto mb-6">
                                    <Target className="w-10 h-10 text-electric-400" />
                                </div>
                                <h2 className="text-2xl font-bold mb-4">Request Received</h2>
                                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                                    We&apos;ll analyze your bottleneck and be in touch within 24
                                    hours with next steps.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="px-6 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
                                >
                                    Submit Another Request
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                                    >
                                        <User className="w-4 h-4 text-electric-400" />
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Smith"
                                        className="w-full bg-charcoal-800 border border-charcoal-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-400 transition-colors"
                                    />
                                </div>

                                {/* Company & Role Grid */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="company"
                                            className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                                        >
                                            <Building2 className="w-4 h-4 text-electric-400" />
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            placeholder="Acme Inc."
                                            className="w-full bg-charcoal-800 border border-charcoal-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-400 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label
                                            htmlFor="role"
                                            className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                                        >
                                            <User className="w-4 h-4 text-electric-400" />
                                            Role
                                        </label>
                                        <input
                                            type="text"
                                            id="role"
                                            name="role"
                                            value={formData.role}
                                            onChange={handleChange}
                                            placeholder="CEO / Manager / Founder"
                                            className="w-full bg-charcoal-800 border border-charcoal-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                {/* Growth Goal Field */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="growthGoal"
                                        className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                                    >
                                        <Target className="w-4 h-4 text-electric-400" />
                                        What Does Success Look Like?
                                    </label>
                                    <textarea
                                        id="growthGoal"
                                        name="growthGoal"
                                        value={formData.growthGoal}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        placeholder="e.g., Scale from 10 to 100 customers without adding headcount..."
                                        className="w-full bg-charcoal-800 border border-charcoal-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-400 transition-colors resize-none"
                                    />
                                </div>

                                {/* Bottleneck Field */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="bottleneck"
                                        className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                                    >
                                        <Zap className="w-4 h-4 text-electric-400" />
                                        Current Biggest Bottleneck
                                    </label>
                                    <textarea
                                        id="bottleneck"
                                        name="bottleneck"
                                        value={formData.bottleneck}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        placeholder="e.g., Manual onboarding takes 4 hours per client, and we're drowning..."
                                        className="w-full bg-charcoal-800 border border-charcoal-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-400 transition-colors resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 bg-electric-400 text-charcoal-900 font-bold rounded-xl hover:bg-electric-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-charcoal-900 border-t-transparent rounded-full animate-spin" />
                                            Analyzing...
                                        </>
                                    ) : (
                                        <>
                                            Submit Request
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-zinc-500 text-sm">
                                    We typically respond within 24 hours
                                </p>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Trust Signals */}
            <section className="py-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-2xl p-8 md:p-10">
                        <h2 className="text-xl font-bold mb-8 text-center">
                            Why Work With UPSCALE DV?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Human-Centric",
                                    description: "We design around how your team actually works, not how spreadsheets think they should.",
                                },
                                {
                                    title: "Low-Friction",
                                    description: "Implementation that doesn't disrupt your operations. We ship fast and clean.",
                                },
                                {
                                    title: "Sustainable",
                                    description: "Infrastructure that grows with you. No rewrites. No technical debt.",
                                },
                            ].map((item) => (
                                <div key={item.title} className="text-center">
                                    <div className="w-12 h-12 rounded-xl bg-electric-500/10 flex items-center justify-center mx-auto mb-4">
                                        <div className="w-2 h-2 rounded-full bg-electric-400" />
                                    </div>
                                    <h3 className="font-semibold mb-2">{item.title}</h3>
                                    <p className="text-zinc-400 text-sm">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
