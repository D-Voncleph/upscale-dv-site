'use client';

import { Bot, User, Sparkles, Send, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// n8n Webhook URL
const N8N_WEBHOOK_URL = 'https://upscaledv.app.n8n.cloud/webhook/upscale-dv-audit';

interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    createdAt: Date;
}

export default function UpscaleAudit() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const [sessionId] = useState(() => `audit-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: 'user',
            content: input,
            createdAt: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userMessage: input,
                    sessionId: sessionId,
                    history: messages.map(m => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            });

            if (!response.ok) {
                throw new Error('Connection issue. Please try again.');
            }

            const data = await response.json();

            // Extract AI response from n8n (LangChain agents return output in different formats)
            const aiResponseText = data.text || data.output || data.response || data.aiResponse || data.message || 'No response received.';

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: aiResponseText,
                createdAt: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Connection issue. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRestart = () => {
        if (confirm('Are you sure you want to restart the audit? This will clear all messages.')) {
            setMessages([]);
            setError(null);
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
                    aria-label="Restart Audit"
                >
                    <RotateCcw size={14} aria-hidden="true" />
                    <span>Restart</span>
                </button>
            </div>

            {/* Chat Area */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-sm">
                        {error}
                    </div>
                )}

                <AnimatePresence>
                    {messages.map((m) => (
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
                                        {m.content}
                                    </div>
                                    <div className={`text-[10px] text-zinc-600 px-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
                                        {formatTime(m.createdAt)}
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
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
                onSubmit={handleSendMessage}
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
                    aria-label={isLoading ? "Generating response" : "Send Message"}
                >
                    {isLoading ? (
                        <Sparkles className="animate-spin" size={18} aria-hidden="true" />
                    ) : (
                        <Send size={18} aria-hidden="true" />
                    )}
                </button>
            </form>
        </div>
    );
}
