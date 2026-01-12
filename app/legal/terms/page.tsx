export default function TermsPage() {
    return (
        <div className="text-gray-300">
            <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
            <p className="mb-4">Last updated: January 2026</p>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">2. Service Description</h2>
                <p>
                    We provide activation codes for various media players. This is a one-time or subscription-based digital service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">3. User Responsibilities</h2>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li>You must provide accurate information for activation (e.g., MAC address).</li>
                    <li>You acknowledge that we do not supply any media content (TV channels, movies, etc.).</li>
                    <li>You agree not to use our service for any illegal purposes.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-bold text-white mb-4">4. Refunds</h2>
                <p>
                    Due to the digital nature of the product (activation codes), refunds are generally not provided once the code has been issued/activated, unless the code is proven to be non-functional by our support team.
                </p>
            </section>
        </div>
    );
}
