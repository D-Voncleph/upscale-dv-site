"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, User, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Path = "individual" | "organization" | null;

type WizardData = {
    arena?: string;
    friction?: string;
    goal?: string;
    sector?: string;
    vanishingTest?: string;
    metric?: string;
};

export function Wizard() {
    const [step, setStep] = useState(0);
    const [path, setPath] = useState<Path>(null);
    const [data, setData] = useState<WizardData>({});
    const [isGenerating, setIsGenerating] = useState(false);

    const handleNext = () => {
        if (step === 3) {
            setIsGenerating(true);
            setTimeout(() => setIsGenerating(false), 2500); // Simulate AI generation
            setStep(4);
        } else {
            setStep((prev) => prev + 1);
        }
    };

    const updateData = (key: keyof WizardData, value: string) => {
        setData((prev) => ({ ...prev, [key]: value }));
    };

    // Render Steps
    const renderStep = () => {
        switch (step) {
            case 0: // The Fork
                return (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-center">Who are we upscaling today?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <button
                                onClick={() => {
                                    setPath("individual");
                                    setStep(1);
                                }}
                                className="group p-8 rounded-2xl glass-panel border-transparent hover:border-electric-400/50 transition-all text-left"
                                aria-label="Select Individual path for personal growth"
                            >
                                <div className="w-12 h-12 bg-electric-400/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <User className="w-6 h-6 text-electric-400" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Myself</h3>
                                <p className="text-gray-400 text-sm">Professional or Individual Growth</p>
                            </button>

                            <button
                                onClick={() => {
                                    setPath("organization");
                                    setStep(1);
                                }}
                                className="group p-8 rounded-2xl glass-panel border-transparent hover:border-electric-400/50 transition-all text-left"
                                aria-label="Select Organization path for business growth"
                            >
                                <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Building2 className="w-6 h-6 text-electric-blue" aria-hidden="true" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">My Organization</h3>
                                <p className="text-gray-400 text-sm">SME or Enterprise Efficiency</p>
                            </button>
                        </div>
                    </div>
                );

            case 1: // Discovery 1
                if (path === "individual") {
                    return (
                        <QuestionStep
                            question="What is your primary arena of growth?"
                            options={["Career Advancement", "Academic Excellence", "Financial Freedom"]}
                            onSelect={(val) => {
                                updateData("arena", val);
                                setStep(2);
                            }}
                        />
                    );
                } else {
                    return (
                        <InputStep
                            question="Which industry does your organization dominate?"
                            placeholder="e.g. SaaS, E-commerce, Logistics..."
                            value={data.sector || ""}
                            onChange={(val) => updateData("sector", val)}
                            onNext={handleNext}
                        />
                    );
                }

            case 2: // Discovery 2
                if (path === "individual") {
                    return (
                        <InputStep
                            question="What is the single biggest task that drains your energy but doesn't move your needle?"
                            placeholder="e.g. Answering repetitive emails, scheduling..."
                            value={data.friction || ""}
                            onChange={(val) => updateData("friction", val)}
                            onNext={handleNext}
                        />
                    );
                } else {
                    return (
                        <InputStep
                            question="The 'Vanishing' Test: If you stepped away for 7 days, what system would break first?"
                            placeholder="e.g. Client onboarding, Inventory management..."
                            value={data.vanishingTest || ""}
                            onChange={(val) => updateData("vanishingTest", val)}
                            onNext={handleNext}
                        />
                    );
                }

            case 3: // Discovery 3
                if (path === "individual") {
                    return (
                        <InputStep
                            question="Where do you want to be in 12 months?"
                            placeholder="e.g. Leading a team, Doubling income..."
                            value={data.goal || ""}
                            onChange={(val) => updateData("goal", val)}
                            onNext={handleNext}
                        />
                    );
                } else {
                    return (
                        <QuestionStep
                            question="What is our primary success metric?"
                            options={["Higher Profit Margins", "Faster Delivery Speed", "Better Customer Retention"]}
                            onSelect={(val) => {
                                updateData("metric", val);
                                handleNext();
                            }}
                        />
                    );
                }

            case 4: // Output
                if (isGenerating) {
                    return (
                        <div className="text-center py-20 space-y-4">
                            <div className="inline-block w-16 h-16 border-4 border-electric-400 border-t-transparent rounded-full animate-spin" />
                            <h3 className="text-xl font-medium animate-pulse">Designing your Growth Map...</h3>
                        </div>
                    )
                }
                return (
                    <div className="space-y-6 animate-fade-in-up">
                        <div className="glass-panel p-8 rounded-2xl border-electric-400/30">
                            <h2 className="text-2xl font-bold mb-6 text-electric-400">Your Upscale Strategy</h2>
                            <div className="space-y-4 text-justify text-gray-300 leading-relaxed font-light">
                                <p>
                                    Based on your profile as an <strong>{path === "individual" ? "Individual" : "Organization"}</strong> focusing on
                                    <strong className="text-white"> {data.arena || data.sector}</strong>, we have identified your primary bottleneck:
                                </p>
                                <div className="p-4 bg-charcoal-800 rounded-lg border border-charcoal-700 italic">
                                    "{data.friction || data.vanishingTest}"
                                </div>
                                <p>
                                    This friction point is preventing you from reaching your goal of <strong className="text-white">{data.goal || data.metric}</strong>.
                                </p>
                                <hr className="border-charcoal-700 my-4" />
                                <h3 className="text-xl font-bold text-white mb-2">Recommended Phase 1: Removal</h3>
                                <p>
                                    We need to decouple your time from this task immediately. Our AI agents can automate 80% of this workflow within the first week of implementation.
                                </p>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-electric-400 text-charcoal-900 font-bold rounded-xl hover:bg-white transition-colors flex items-center justify-center">
                            Book Your Implementation Call
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto min-h-[400px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                >
                    {renderStep()}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

// Sub-components
function QuestionStep({ question, options, onSelect }: { question: string, options: string[], onSelect: (val: string) => void }) {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">{question}</h2>
            <div className="space-y-3">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => onSelect(opt)}
                        className="w-full p-4 glass-panel rounded-xl text-left hover:bg-white/5 transition-colors flex items-center justify-between group"
                    >
                        <span className="text-lg">{opt}</span>
                        <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity text-electric-400" />
                    </button>
                ))}
            </div>
        </div>
    )
}

function InputStep({ question, placeholder, value, onChange, onNext }: { question: string, placeholder: string, value: string, onChange: (val: string) => void, onNext: () => void }) {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center">{question}</h2>
            <div className="space-y-6">
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full bg-charcoal-800 border border-charcoal-700 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-electric-400 transition-colors text-lg"
                    onKeyDown={(e) => e.key === "Enter" && value && onNext()}
                    autoFocus
                />
                <button
                    onClick={onNext}
                    disabled={!value}
                    className="w-full py-4 bg-electric-400 text-charcoal-900 font-bold rounded-xl hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    Continue
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}
