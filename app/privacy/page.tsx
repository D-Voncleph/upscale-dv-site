export default function PrivacyPage() {
    return (
        <div className="min-h-screen section-py px-6">
            <div className="max-w-3xl mx-auto prose prose-invert prose-zinc">
                <h1 className="heading-display mb-8">Privacy Policy</h1>
                <p className="text-zinc-400 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

                <div className="space-y-8 text-zinc-400 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
                        <p>When you use our contact form, we collect your name, email address, company name, and project details. We do not use cookies for tracking or advertising purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
                        <p>We use the information you provide solely to respond to your enquiry and discuss potential project collaboration. We do not sell, rent, or share your personal information with third parties.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Data Storage</h2>
                        <p>Contact form submissions are processed through our secure webhook system and stored in our project management tools. Your data is retained only for as long as necessary to fulfil the purpose for which it was collected.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
                        <p>You have the right to request access to, correction of, or deletion of your personal data at any time. Contact us at the email address on our contact page to exercise these rights.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Analytics</h2>
                        <p>We use Vercel Analytics to collect anonymised usage data (page views, performance metrics). No personally identifiable information is collected through analytics.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
                        <p>If you have any questions about this privacy policy, please reach out via our <a href="/contact" className="text-emerald-400 hover:underline">contact page</a>.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
