'use client';

import { useChat } from '@ai-sdk/react';
import { Bot, User, Sparkles, Send, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function UpscaleAudit() {
    const [input, setInput] = useState('');
    const { messages, sendMessage, isLoading, error, reload } = useChat({
        api: '/api/chat',
        onError: (e: Error) => {
            console.error("Chat Error:", e);
        }
    } as any) as any;

    const handleRestart = () => {
        if (confirm('Are you sure you want to restart the audit? This will clear all messages.')) {
            reload();
            setInput('');
        }
    };

    const formatTime = (date: Date) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).format(date);
    };

    return (
        <div className="flex flex-col w-full max-w-2xl mx-auto border border-zinc-800 bg-zinc-950/50 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
            {/* Header */}
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                    <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest">Live Strategic Audit</h2>
                </div>
                <button
                    onClick={handleRestart}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 rounded-lg transition-all"
                    title="Restart Audit"
                >
                    <RotateCcw size={14} />
                    <span>Restart</span>
                </button>
            </div>

            {/* Chat Area */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm">
                        Connection Error. Please ensure your GOOGLE_GENERATED_API_KEY is set in Vercel.
                    </div>
                )}

                <AnimatePresence>
                    {messages.map((m: any) => (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            key={m.id}
                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex gap-3 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0 ${m.role === 'user' ? 'bg-zinc-800 border-zinc-700' : 'bg-emerald-500/10 border-emerald-500/20'
                                    }`}>
                                    {m.role === 'user' ? <User size={14} /> : <Bot size={14} className="text-emerald-500" />}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                        ? 'bg-zinc-900 text-zinc-100 rounded-tr-none'
                                        : 'bg-zinc-800/40 text-zinc-300 rounded-tl-none border border-zinc-700/50'
                                        }`}>
                                        {/* Handle message parts */}
                                        {m.parts ? (
                                            m.parts.map((part: any, i: number) => {
                                                if (part.type === 'text') {
                                                    return <span key={i}>{part.text}</span>;
                                                }
                                                return null;
                                            })
                                        ) : (
                                            // Fallback for old message format
                                            <span>{m.content}</span>
                                        )}
                                    </div>
                                    {/* Timestamp */}
                                    <div className={`text-[10px] text-zinc-600 px-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                                        {m.createdAt ? formatTime(new Date(m.createdAt)) : ''}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing Indicator */}
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                    >
                        <div className="flex gap-3 max-w-[85%]">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center border bg-emerald-500/10 border-emerald-500/20 flex-shrink-0">
                                <Bot size={14} className="text-emerald-500" />
                            </div>
                            <div className="bg-zinc-800/40 border border-zinc-700/50 p-4 rounded-2xl rounded-tl-none">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input Area */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    if (input.trim() && !isLoading) {
                        sendMessage({ text: input });
                        setInput('');
                    }
                }}
                className="p-4 bg-black/60 border-t border-zinc-800 flex gap-2"
            >
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your response..."
                    disabled={isLoading}
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all text-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white p-3 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? <Sparkles className="animate-spin" size={18} /> : <Send size={18} />}
                </button>
            </form>
        </div>
    );
}
