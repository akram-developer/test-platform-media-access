export default function PrivacyPage() {
    return (
        <div className="text-gray-300">
            <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="mb-4">Last updated: January 2026</p>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
                <p>
                    MediaAccess ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and multimedia activation services.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">2. Information Collection</h2>
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Personal Data:</strong> Name, email address, payment information (processed by third-party providers).</li>
                    <li><strong>Device Data:</strong> MAC address or device ID required for activation purposes solely.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">3. Use of Information</h2>
                <p>We use your data strictly to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>Process your activation orders.</li>
                    <li>Provide customer support.</li>
                    <li>Send service updates and renewal notifications.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">4. No Content Hosting</h2>
                <p className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                    <strong>IMPORTANT:</strong> We do not host, provide, or sell any media content, channels, or streams. We only provide activation services for media players. Users are responsible for their own content sources.
                </p>
            </section>
        </div>
    );
}
