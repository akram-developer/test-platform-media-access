import { MousePointerClick, CreditCard, Tv } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

const STEPS = [
    {
        icon: MousePointerClick,
        title: "1. Select Your Plan",
        desc: "Choose the duration that fits your needs. From 1 month to a full year of access."
    },
    {
        icon: CreditCard,
        title: "2. Secure Payment",
        desc: "Pay securely using your preferred method. We support Cards, Crypto, and more."
    },
    {
        icon: Tv,
        title: "3. Start Watching",
        desc: "Receive your activation code instantly via email. Enter it and enjoy!"
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-gradient-to-b from-transparent to-slate-900/50">
            <div className="max-w-screen-xl mx-auto px-4">
                <SectionHeader
                    title="How It Works"
                    subtitle="Get up and running in less than 2 minutes. Our automated system handles everything."
                    className="mb-16"
                />

                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 z-0"></div>

                    {STEPS.map((step, idx) => (
                        <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="h-24 w-24 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:border-blue-500/50 group-hover:scale-105 transition-all duration-300">
                                <div className="h-16 w-16 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                                    <step.icon className="h-8 w-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed max-w-xs">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
