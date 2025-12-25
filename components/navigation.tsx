"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/labs", label: "Labs" },
    { href: "/manifesto", label: "Manifesto" },
    { href: "/audit", label: "Audit", isCta: true },
];

const servicesSubmenu = [
    { href: "/services/ai-automation", label: "AI Automation" },
    { href: "/services/digital-construction", label: "Digital Construction" },
    { href: "/services/business-architecture", label: "Business Architecture" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "py-3 bg-charcoal-900/80 backdrop-blur-xl border-b border-white/5"
                        : "py-5 bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-electric-400 to-electric-600 rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow">
                                <span className="text-charcoal-900 font-bold text-xl">U</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight">
                                UPSCALE<span className="text-electric-400">DV</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) =>
                                item.isCta ? (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="ml-2 px-5 py-2.5 bg-electric-400 text-charcoal-900 font-semibold rounded-lg hover:bg-electric-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all"
                                    >
                                        {item.label}
                                    </Link>
                                ) : item.href === "/services" ? (
                                    <div
                                        key={item.href}
                                        className="relative"
                                        onMouseEnter={() => setIsServicesOpen(true)}
                                        onMouseLeave={() => setIsServicesOpen(false)}
                                    >
                                        <button
                                            className={`flex items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                                                pathname.startsWith("/services")
                                                    ? "text-electric-400"
                                                    : "text-gray-300 hover:text-white"
                                            }`}
                                        >
                                            {item.label}
                                            <ChevronRight
                                                className={`w-4 h-4 transition-transform ${
                                                    isServicesOpen ? "rotate-90" : ""
                                                }`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-2 w-64 bg-charcoal-800/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                                                >
                                                    {servicesSubmenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-gray-300 hover:text-electric-400 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`px-4 py-2 rounded-lg transition-colors ${
                                            pathname === item.href
                                                ? "text-electric-400"
                                                : "text-gray-300 hover:text-white"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-gray-300 hover:text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25 }}
                        className="fixed inset-0 z-40 lg:hidden bg-charcoal-900 pt-24 px-6"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) =>
                                item.isCta ? (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="px-6 py-4 bg-electric-400 text-charcoal-900 font-bold rounded-xl text-center"
                                    >
                                        {item.label}
                                    </Link>
                                ) : item.href === "/services" ? (
                                    <div key={item.href} className="space-y-2">
                                        <button
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                            className="flex items-center justify-between w-full px-4 py-3 text-gray-300"
                                        >
                                            <span>{item.label}</span>
                                            <ChevronRight
                                                className={`w-5 h-5 transition-transform ${
                                                    isServicesOpen ? "rotate-90" : ""
                                                }`}
                                            />
                                        </button>
                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="pl-4 space-y-2 overflow-hidden"
                                                >
                                                    {servicesSubmenu.map((subItem) => (
                                                        <Link
                                                            key={subItem.href}
                                                            href={subItem.href}
                                                            className="block px-4 py-3 text-gray-400 hover:text-electric-400"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="px-4 py-3 text-gray-300 hover:text-electric-400 border-b border-white/5"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
