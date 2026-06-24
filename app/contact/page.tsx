"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
  Building2,
  Mail,
  Linkedin,
  Sparkles,
  User,
  Target,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// n8n Webhook URL — now uses env var via server action, keeping client-side fallback for now
const N8N_WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_CONTACT_WEBHOOK_URL || "https://n8n.srv1270098.hstgr.cloud/webhook/upscale-dv-contact";

// Form validation schema
const contactFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().min(1, "Company / Organization is required"),
  officialEmail: z
    .string()
    .min(1, "Work Email is required")
    .email("Please enter a valid email address"),
  linkedinProfile: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  serviceNeeded: z.string().min(1, "Please select a service"),
  budgetRange: z.string().min(1, "Please select a budget range"),
  timeline: z.string().min(1, "Please select a timeline"),
  coreChallenge: z
    .string()
    .min(50, "Please describe your project in at least 50 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const [submitState, setSubmitState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitState("loading");

    const payload = {
      fullName: data.fullName,
      companyName: data.companyName,
      officialEmail: data.officialEmail,
      linkedinProfile: data.linkedinProfile || null,
      serviceNeeded: data.serviceNeeded,
      budgetRange: data.budgetRange,
      timeline: data.timeline,
      coreChallenge: data.coreChallenge,
      submissionTimestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });


      if (response.ok) {
        setSubmitState("success");
        reset();
      } else {
        const errorText = await response.text();
        setSubmitState("error");
      }
    } catch {
      setSubmitState("error");
    }
  };

  const resetForm = () => {
    setSubmitState("idle");
    reset();
  };

  return (
    <div className="min-h-screen bg-mesh bg-grid-pattern">
      {/* Hero Section */}
      <section className="section-py px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6"
          >
            <Target className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              Consultation Entry Point
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="heading-display mb-6"
          >
            Let&apos;s Build Your Next Digital Product
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto"
          >
            Tell us about your project. We&apos;ll show you how we can help.
          </motion.p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Subtle emerald glow effect */}
            <div className="absolute inset-0 bg-emerald-500/5 opacity-50" />

            {submitState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Message Received</h2>
                <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                  We&apos;ll review your project details and get back to you within 24 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 border border-white/10 rounded-xl hover:bg-white/5 transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6 relative"
              >
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <User className="w-4 h-4 text-emerald-400" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("fullName")}
                    placeholder="John Smith"
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Company Name Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="companyName"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    {...register("companyName")}
                    placeholder="Acme Inc."
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                  {errors.companyName && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                {/* Work Email Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="officialEmail"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <Mail className="w-4 h-4 text-emerald-400" />
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="officialEmail"
                    {...register("officialEmail")}
                    placeholder="john@company.com"
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                  {errors.officialEmail && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.officialEmail.message}
                    </p>
                  )}
                </div>

                {/* LinkedIn Profile Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="linkedinProfile"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <Linkedin className="w-4 h-4 text-emerald-400" />
                    LinkedIn Profile URL <span className="text-zinc-500">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    id="linkedinProfile"
                    {...register("linkedinProfile")}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  />
                  {errors.linkedinProfile && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.linkedinProfile.message}
                    </p>
                  )}
                </div>

                {/* Core Challenge Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="coreChallenge"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <Target className="w-4 h-4 text-emerald-400" />
                    Tell us about your project
                  </label>
                  <textarea
                    id="coreChallenge"
                    {...register("coreChallenge")}
                    rows={4}
                    placeholder="Describe what you want to build (minimum 50 characters)..."
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                  />
                  {errors.coreChallenge && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.coreChallenge.message}
                    </p>
                  )}
                </div>

                {/* Service Needed Dropdown */}
                <div className="space-y-2">
                  <label
                    htmlFor="serviceNeeded"
                    className="flex items-center gap-2 text-sm font-medium text-zinc-300"
                  >
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    Service Needed
                  </label>
                  <select
                    id="serviceNeeded"
                    {...register("serviceNeeded")}
                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile &amp; App Development</option>
                    <option value="systems-architecture">Systems Architecture</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                  {errors.serviceNeeded && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.serviceNeeded.message}
                    </p>
                  )}
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="budgetRange"
                      className="text-sm font-medium text-zinc-300"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budgetRange"
                      {...register("budgetRange")}
                      className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="<5k">&lt;$5K</option>
                      <option value="5k-15k">$5K - $15K</option>
                      <option value="15k-50k">$15K - $50K</option>
                      <option value="50k+">$50K+</option>
                      <option value="prefer-not-to-say">Prefer Not to Say</option>
                    </select>
                    {errors.budgetRange && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.budgetRange.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="timeline"
                      className="text-sm font-medium text-zinc-300"
                    >
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      {...register("timeline")}
                      className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    >
                      <option value="">Select...</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1 - 3 Months</option>
                      <option value="3-6-months">3 - 6 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    {errors.timeline && (
                      <p className="text-red-400 text-sm flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.timeline.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Error Message */}
                {submitState === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">
                      Connection issue. Please try again.
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="w-full py-4 bg-emerald-500 text-zinc-900 font-bold rounded-xl hover:bg-emerald-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitState === "loading" ? (
                    <>
                      <Sparkles className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Target className="w-5 h-5" />
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
                  title: "Full-Stack Delivery",
                  description:
                    "From frontend to backend to cloud deployment — we handle the entire stack.",
                },
                {
                  title: "Fast Turnaround",
                  description:
                    "Agile sprints with weekly demos. You see progress, not just promises.",
                },
                {
                  title: "Post-Launch Support",
                  description:
                    "We don't disappear after launch. Ongoing maintenance and feature development.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
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
