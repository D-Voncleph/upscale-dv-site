'use client';

import { useChat } from '@ai-sdk/react';
import { Bot, User, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function UpscaleAudit() {
    const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
        api: '/api/chat',
        onError: (e: any) => {
            console.error("Chat Error:", e);
        }
    } as any) as any;

    // Custom submit handler to prevent reload
    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // STOP RELOAD
        if (!input.trim()) return;
        handleSubmit(e);
    };

    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto border border-zinc-800 bg-zinc-950/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center gap-2 bg-black/40">
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Live Strategic Audit</h2>
            </div>

            {/* Chat Area */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm mb-4">
                        Connection Error: {error.message}. Please check your connection and try again.
                    </div>
                )}

                {/* ALWAYS SHOW WELCOME MESSAGE */}
                {(messages.length === 0) && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                    >
                        <div className="flex gap-3 max-w-[85%] flex-row">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-emerald-500/10 border-emerald-500/20">
                                <Bot size={14} className="text-emerald-500" />
                            </div>
                            <div className="p-4 rounded-2xl text-sm leading-relaxed bg-zinc-800/40 text-zinc-300 rounded-tl-none border border-zinc-700/50">
                                Welcome to the UPSCALE DV Audit. To begin, are we upscaling an organization or your personal career today?
                            </div>
                        </div>
                    </motion.div>
                )}

                {(messages || []).map((m: any) => (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={m.id}
                        className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${m.role === 'user' ? 'bg-zinc-800 border-zinc-700' : 'bg-emerald-500/10 border-emerald-500/20'
                                }`}>
                                {m.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-emerald-500" />}
                            </div>
                            <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                ? 'bg-zinc-900 text-zinc-100 rounded-tr-none'
                                : 'bg-zinc-800/40 text-zinc-300 rounded-tl-none border border-zinc-700/50'
                                }`}>
                                {m.content}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Input Area */}
            <form onSubmit={onSubmit} className="p-4 bg-black/60 border-t border-zinc-800 flex gap-2">
                <input
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Answer the agent..."
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-zinc-200"
                />
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl transition-all disabled:opacity-50 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                    {isLoading ? <Sparkles className="animate-spin" size={18} /> : <Send size={18} />}
                </button>
            </form>
        </div>
    );
}
