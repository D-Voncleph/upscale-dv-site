export default function TermsPage() {
    return (
        <div className="min-h-screen section-py px-6">
            <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
                <h1 className="heading-display mb-8">Terms of Service</h1>
                <p className="text-zinc-400 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

                <div className="space-y-8 text-zinc-400 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Agreement to Terms</h2>
                        <p>By accessing and using upscaledv.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Services</h2>
                        <p>Upscale DV provides web development, mobile app development, and systems architecture services. Specific deliverables, timelines, and pricing are defined in individual project agreements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Intellectual Property</h2>
                        <p>Unless otherwise agreed in a project contract, all code, designs, and deliverables produced by Upscale DV become the property of the client upon full payment. The Upscale DV brand, logo, and website content remain our intellectual property.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Limitation of Liability</h2>
                        <p>Upscale DV provides this website and its content on an &quot;as is&quot; basis. We make no warranties regarding the accuracy or completeness of any information on this site.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
                        <p>For questions about these terms, please reach out via our <a href="/contact" className="text-emerald-400 hover:underline">contact page</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
