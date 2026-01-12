'use client';

import { CheckCircle, CreditCard, Search, MonitorPlay } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HowItWorksPage() {
    const steps = [
        {
            icon: Search,
            title: '1. Choose Your Plan',
            description: 'Select the activation duration that fits your needs. We offer 1, 6, and 12-month plans with instant delivery.',
        },
        {
            icon: CreditCard,
            title: '2. Secure Payment',
            description: 'Complete your purchase using our secure payment gateways. We support major credit cards and digital wallets.',
        },
        {
            icon: CheckCircle,
            title: '3. Receive Code',
            description: 'Your activation code is sent to your email and dashboard immediately after payment confirmation.',
        },
        {
            icon: MonitorPlay,
            title: '4. Activate Player',
            description: 'Enter the code in your media player settings to unlock full access. Our support team is here if you need help.',
        },
    ];

    return (
        <div className="py-20 max-w-screen-xl mx-auto px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-white mb-4">How It Works</h1>
                <p className="text-xl text-gray-400">Get up and running in minutes with our simple 4-step process.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-20 relative">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-900/30 -z-10 hidden md:block"></div>
                {steps.map((step, index) => (
                    <div key={index} className="bg-slate-950 p-6 rounded-xl border border-white/10 relative">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto border-4 border-slate-950 relative z-10">
                            {index + 1}
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-4">
                                <step.icon className="h-8 w-8 text-blue-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center">
                <Link href="/pricing">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-bold px-8">
                        Get Started Now
                    </Button>
                </Link>
            </div>
        </div>
    );
}
